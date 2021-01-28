#!/bin/sh

# Install PHP & WGET
yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
yum install https://rpms.remirepo.net/enterprise/remi-release-7.rpm

yum install -y amazon-linux-extras
yum clean metadata
yum remove php*
yum install php80 php80-php{common,curl,mbstring,gd,gettext,bcmath,json,xml,fpm,intl,zip,imap}
yum install wget

alias php='php80'

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
php composer.phar update --ignore-platform-reqs

# BUILD STATIC SITE
php composer.phar build
