#!/bin/sh

# Install PHP & WGET
yum install -y amazon-linux-extras
amazon-linux-extras enable php7.4
yum clean metadata
yum install gd gd-devel
yum install php php-{common,curl,mbstring,gd,gettext,bcmath,json,xml,fpm,intl,zip,imap}
yum install wget

service httpd restart

# INSTALL COMPOSER
EXPECTED_CHECKSUM="$(wget -q -O - https://composer.github.io/installer.sig)"
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
ACTUAL_CHECKSUM="$(php -r "echo hash_file('sha384', 'composer-setup.php');")"

if [ "$EXPECTED_CHECKSUM" != "$ACTUAL_CHECKSUM" ]
then
    >&2 echo 'ERROR: Invalid installer checksum'
    rm composer-setup.php
    exit 1
fi

php composer-setup.php --quiet
rm composer-setup.php

# INSTALL COMPOSER DEPENDENCIES
php composer.phar install

# BUILD STATIC SITE
php composer.phar build
