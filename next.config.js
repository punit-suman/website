// eslint-disable-next-line no-comments/disallowComments
/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true
};

const env = {
	'MYSQL_HOST': '127.0.0.1',
	'MYSQL_PORT': '3306',
	'MYSQL_DATABASE': 'website',
	'MYSQL_USER': 'root',
	'MYSQL_PASSWORD': 'punits'
};

module.exports = { nextConfig, env };
