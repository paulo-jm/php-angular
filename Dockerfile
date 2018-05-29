FROM php:7.2-apache
  
RUN apt-get update \
    && apt-get install -y git zlib1g-dev \
    && docker-php-ext-install zip pdo pdo_mysql \
    && pecl install xdebug \
     && docker-php-ext-enable xdebug \
    && a2enmod rewrite \
    && sed -i 's!/var/www/html!/var/www/public!g' /etc/apache2/sites-available/000-default.conf \
    && mv /var/www/html /var/www/public \
    && curl -sS https://getcomposer.org/installer \
    | php -- --install-dir=/usr/local/bin --filename=composer
 
 
# The base image does not have php.ini. 
# Copy our own, with xdebug settings
ADD ./php.ini /usr/local/etc/php/
 
WORKDIR /var/www