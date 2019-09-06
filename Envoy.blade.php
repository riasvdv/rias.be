@setup
$server = "rias.be";
$userAndServer = 'forge@'. $server;
$sshKey = getenv('SSH_KEY');
$sshFlags = '';
if ($sshKey) {
    $sshFlags = '-oStrictHostKeyChecking=no -i '.getenv('SSH_KEY');
}
$repository = "riasvdv/rias.be";
$baseDir = "/home/forge/rias.be";
$releasesDir = "{$baseDir}/releases";
$currentDir = "{$baseDir}/current";
$newReleaseName = date('Ymd-His');
$newReleaseDir = "{$releasesDir}/{$newReleaseName}";
$user = get_current_user();

function logMessage($message) {
return "echo '\033[32m" .$message. "\033[0m';\n";
}
@endsetup

@servers(['local' => '127.0.0.1', 'remote' => "{$sshFlags} {$userAndServer}"])

@macro('deploy')
startDeployment
cloneRepository
runComposer
runYarn
generateAssets
updateSymlinks
optimizeInstallation
blessNewRelease
cleanOldReleases
finishDeploy
@endmacro

@macro('deploy-code')
deployOnlyCode
@endmacro

@task('startDeployment', ['on' => 'local'])
{{ logMessage("🏃  Starting deployment...") }}
git checkout master
git pull origin master
@endtask

@task('cloneRepository', ['on' => 'remote'])
{{ logMessage("🌀  Cloning repository...") }}
[ -d {{ $releasesDir }} ] || mkdir {{ $releasesDir }};
cd {{ $releasesDir }}

# Create the release dir
mkdir {{ $newReleaseDir }}

# Clone the repo
git clone --depth 1 git@github.com:{{ $repository }} {{ $newReleaseName }}

# Configure sparse checkout
cd {{ $newReleaseDir }}
git config core.sparsecheckout true
echo "*" > .git/info/sparse-checkout
echo "!storage" >> .git/info/sparse-checkout
echo "!public/build" >> .git/info/sparse-checkout
git read-tree -mu HEAD
@endtask

@task('runComposer', ['on' => 'remote'])
{{ logMessage("🚚  Running Composer...") }}
cd {{ $newReleaseDir }}
composer install --prefer-dist --no-scripts --no-dev -q -o
@endtask

@task('runYarn', ['on' => 'remote'])
{{ logMessage("📦  Running Yarn...") }}
cd {{ $newReleaseDir }}
yarn config set ignore-engines true
yarn
@endtask

@task('generateAssets', ['on' => 'remote'])
{{ logMessage("🌅  Generating assets...") }}
cd {{ $newReleaseDir }}
yarn run production --progress false
@endtask

@task('updateSymlinks', ['on' => 'remote'])
{{ logMessage("🔗  Updating symlinks to persistent data...") }}
# Remove the public/img directory and replace with persistent data
rm -rf {{ $newReleaseDir }}/public/img
cd {{ $newReleaseDir }}
ln -nfs {{ $baseDir }}/persistent/img public/img

# Import the environment config
cd {{ $newReleaseDir }}
ln -nfs {{ $baseDir }}/.env .env
@endtask

@task('optimizeInstallation', ['on' => 'remote'])
{{ logMessage("✨  Optimizing installation...") }}
cd {{ $newReleaseDir }}
php artisan clear-compiled
php artisan optimize
@endtask

@task('blessNewRelease', ['on' => 'remote'])
{{ logMessage("🙏  Blessing new release...") }}
ln -nfs {{ $newReleaseDir }} {{ $currentDir }}
cd {{ $newReleaseDir }}

php artisan clear:cache
php artisan clear:stache
php artisan clear:static

sudo service php7.3-fpm restart
@endtask

@task('cleanOldReleases', ['on' => 'remote'])
{{ logMessage("🚾  Cleaning up old releases...") }}
# Delete all but the 5 most recent.
cd {{ $releasesDir }}
ls -dt {{ $releasesDir }}/* | tail -n +6 | xargs -d "\n" sudo chown -R forge .
ls -dt {{ $releasesDir }}/* | tail -n +6 | xargs -d "\n" rm -rf
@endtask

@task('finishDeploy', ['on' => 'local'])
{{ logMessage("🚀  Application deployed!") }}
@endtask

@task('deployOnlyCode',['on' => 'remote'])
{{ logMessage("💻  Deploying code changes...") }}
cd {{ $currentDir }}
git pull origin master
php artisan clear:cache
php artisan clear:stache
php artisan clear:static
sudo service php7.3-fpm restart
@endtask
