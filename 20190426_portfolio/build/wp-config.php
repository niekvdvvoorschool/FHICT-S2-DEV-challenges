<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'portfolio' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'y_2dm4Ud_T=AI]4A>c0L.2iMC1+ WVzuI,IR}kd[+=*zOQPUyg;,/_/=<Foq{Vv2' );
define( 'SECURE_AUTH_KEY',  'p*1qB8_|2Uk4ih+$X7&e= ,E>lAx3~@uI?}}jYGG2Th`O/4G:/fUPb]m}2p1x2mi' );
define( 'LOGGED_IN_KEY',    'GT|EBh@2S=>@(/Ledw<I;v;_j8-*TKmq;-vV|;sBAQw6Gmea.4Wi4vlXa{|(tk=o' );
define( 'NONCE_KEY',        '>T,1G-+(4,W[`y%Kg`TG5<Hay29C(2?4e(?@p]oImiUVBRMVZdoVmgSAl[]&fN[s' );
define( 'AUTH_SALT',        ')En#u9cJbDru*qTt0#,+oZie7?8.O-B|Vz)^=P}=B|4mq{e<t7<0{kXij{OkH6~P' );
define( 'SECURE_AUTH_SALT', '.UR?`mB@OfKu({rTTdh8g;h$XsqSRbWH<$0*A],rMW!5v<>]{Af{-u+m0jAukKX[' );
define( 'LOGGED_IN_SALT',   '3`OZhA[vPF();cj&)td9[h)GDIB*rn~~~jN?*h|27w$~ocY:SCxO|kAH(,+t2RaQ' );
define( 'NONCE_SALT',       '/pnse-o-lt~5+VO,F&]p/$8P;0{Z@b[*%h?3:@m@z&dN1Cf<`[JrQ-]m0,!td6u#' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
