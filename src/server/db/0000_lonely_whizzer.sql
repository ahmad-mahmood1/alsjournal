-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `jio_links` (
	`link_id` bigint unsigned AUTO_INCREMENT NOT NULL,
	`link_url` varchar(255) NOT NULL DEFAULT '',
	`link_name` varchar(255) NOT NULL DEFAULT '',
	`link_image` varchar(255) NOT NULL DEFAULT '',
	`link_target` varchar(25) NOT NULL DEFAULT '',
	`link_description` varchar(255) NOT NULL DEFAULT '',
	`link_visible` varchar(20) NOT NULL DEFAULT 'Y',
	`link_owner` bigint unsigned NOT NULL DEFAULT 1,
	`link_rating` int NOT NULL DEFAULT 0,
	`link_updated` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
	`link_rel` varchar(255) NOT NULL DEFAULT '',
	`link_notes` mediumtext NOT NULL,
	`link_rss` varchar(255) NOT NULL DEFAULT '',
	CONSTRAINT `jio_links_link_id` PRIMARY KEY(`link_id`)
);
--> statement-breakpoint
CREATE TABLE `jio_postmeta` (
	`meta_id` bigint unsigned AUTO_INCREMENT NOT NULL,
	`post_id` bigint unsigned NOT NULL DEFAULT 0,
	`meta_key` varchar(255),
	`meta_value` longtext,
	CONSTRAINT `jio_postmeta_meta_id` PRIMARY KEY(`meta_id`)
);
--> statement-breakpoint
CREATE TABLE `jio_posts` (
	`ID` bigint unsigned AUTO_INCREMENT NOT NULL,
	`post_author` bigint unsigned NOT NULL DEFAULT 0,
	`post_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
	`post_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
	`post_content` longtext NOT NULL,
	`post_title` text NOT NULL,
	`post_excerpt` text NOT NULL,
	`post_status` varchar(20) NOT NULL DEFAULT 'publish',
	`comment_status` varchar(20) NOT NULL DEFAULT 'open',
	`ping_status` varchar(20) NOT NULL DEFAULT 'open',
	`post_password` varchar(20) NOT NULL DEFAULT '',
	`post_name` varchar(200) NOT NULL DEFAULT '',
	`to_ping` text NOT NULL,
	`pinged` text NOT NULL,
	`post_modified` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
	`post_modified_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
	`post_content_filtered` longtext NOT NULL,
	`post_parent` bigint unsigned NOT NULL DEFAULT 0,
	`guid` varchar(255) NOT NULL DEFAULT '',
	`menu_order` int NOT NULL DEFAULT 0,
	`post_type` varchar(20) NOT NULL DEFAULT 'post',
	`post_mime_type` varchar(100) NOT NULL DEFAULT '',
	`comment_count` bigint NOT NULL DEFAULT 0,
	CONSTRAINT `jio_posts_ID` PRIMARY KEY(`ID`)
);
--> statement-breakpoint
CREATE TABLE `jio_term_relationships` (
	`object_id` bigint unsigned NOT NULL DEFAULT 0,
	`term_taxonomy_id` bigint unsigned NOT NULL DEFAULT 0,
	`term_order` int NOT NULL DEFAULT 0,
	CONSTRAINT `jio_term_relationships_object_id_term_taxonomy_id` PRIMARY KEY(`object_id`,`term_taxonomy_id`)
);
--> statement-breakpoint
CREATE TABLE `jio_term_taxonomy` (
	`term_taxonomy_id` bigint unsigned AUTO_INCREMENT NOT NULL,
	`term_id` bigint unsigned NOT NULL DEFAULT 0,
	`taxonomy` varchar(32) NOT NULL DEFAULT '',
	`description` longtext NOT NULL,
	`parent` bigint unsigned NOT NULL DEFAULT 0,
	`count` bigint NOT NULL DEFAULT 0,
	CONSTRAINT `jio_term_taxonomy_term_taxonomy_id` PRIMARY KEY(`term_taxonomy_id`),
	CONSTRAINT `term_id_taxonomy` UNIQUE(`term_id`,`taxonomy`)
);
--> statement-breakpoint
CREATE TABLE `jio_terms` (
	`term_id` bigint unsigned AUTO_INCREMENT NOT NULL,
	`name` varchar(200) NOT NULL DEFAULT '',
	`slug` varchar(200) NOT NULL DEFAULT '',
	`term_group` bigint NOT NULL DEFAULT 0,
	CONSTRAINT `jio_terms_term_id` PRIMARY KEY(`term_id`),
	CONSTRAINT `slug` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `jio_usermeta` (
	`umeta_id` bigint unsigned AUTO_INCREMENT NOT NULL,
	`user_id` bigint unsigned NOT NULL DEFAULT 0,
	`meta_key` varchar(255),
	`meta_value` longtext,
	CONSTRAINT `jio_usermeta_umeta_id` PRIMARY KEY(`umeta_id`)
);
--> statement-breakpoint
CREATE TABLE `jio_users` (
	`ID` bigint unsigned AUTO_INCREMENT NOT NULL,
	`user_login` varchar(60) NOT NULL DEFAULT '',
	`user_pass` varchar(64) NOT NULL DEFAULT '',
	`user_nicename` varchar(50) NOT NULL DEFAULT '',
	`user_email` varchar(100) NOT NULL DEFAULT '',
	`user_url` varchar(100) NOT NULL DEFAULT '',
	`user_registered` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
	`user_activation_key` varchar(60) NOT NULL DEFAULT '',
	`user_status` int NOT NULL DEFAULT 0,
	`display_name` varchar(250) NOT NULL DEFAULT '',
	CONSTRAINT `jio_users_ID` PRIMARY KEY(`ID`)
);
--> statement-breakpoint
CREATE INDEX `link_visible` ON `jio_links` (`link_visible`);--> statement-breakpoint
CREATE INDEX `meta_key` ON `jio_postmeta` (`meta_key`);--> statement-breakpoint
CREATE INDEX `post_id` ON `jio_postmeta` (`post_id`);--> statement-breakpoint
CREATE INDEX `post_author` ON `jio_posts` (`post_author`);--> statement-breakpoint
CREATE INDEX `post_name` ON `jio_posts` (`post_name`);--> statement-breakpoint
CREATE INDEX `post_parent` ON `jio_posts` (`post_parent`);--> statement-breakpoint
CREATE INDEX `type_status_date` ON `jio_posts` (`post_type`,`post_status`,`post_date`,`ID`);--> statement-breakpoint
CREATE INDEX `term_taxonomy_id` ON `jio_term_relationships` (`term_taxonomy_id`);--> statement-breakpoint
CREATE INDEX `taxonomy` ON `jio_term_taxonomy` (`taxonomy`);--> statement-breakpoint
CREATE INDEX `name` ON `jio_terms` (`name`);--> statement-breakpoint
CREATE INDEX `meta_key` ON `jio_usermeta` (`meta_key`);--> statement-breakpoint
CREATE INDEX `user_id` ON `jio_usermeta` (`user_id`);--> statement-breakpoint
CREATE INDEX `user_login_key` ON `jio_users` (`user_login`);--> statement-breakpoint
CREATE INDEX `user_nicename` ON `jio_users` (`user_nicename`);
*/