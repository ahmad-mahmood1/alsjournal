import {
  bigint,
  datetime,
  index,
  int,
  longtext,
  mediumtext,
  mysqlTable,
  primaryKey,
  text,
  unique,
  varchar,
} from "drizzle-orm/mysql-core";

export const jioLinks = mysqlTable(
  "jio_links",
  {
    linkId: bigint("link_id", { mode: "number", unsigned: true })
      .autoincrement()
      .notNull(),
    linkUrl: varchar("link_url", { length: 255 }).default("").notNull(),
    linkName: varchar("link_name", { length: 255 }).default("").notNull(),
    linkImage: varchar("link_image", { length: 255 }).default("").notNull(),
    linkTarget: varchar("link_target", { length: 25 }).default("").notNull(),
    linkDescription: varchar("link_description", { length: 255 })
      .default("")
      .notNull(),
    linkVisible: varchar("link_visible", { length: 20 }).default("Y").notNull(),
    linkOwner: bigint("link_owner", { mode: "number", unsigned: true })
      .default(1)
      .notNull(),
    linkRating: int("link_rating").default(0).notNull(),
    linkUpdated: datetime("link_updated", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    linkRel: varchar("link_rel", { length: 255 }).default("").notNull(),
    linkNotes: mediumtext("link_notes").notNull(),
    linkRss: varchar("link_rss", { length: 255 }).default("").notNull(),
  },
  (table) => {
    return {
      linkVisible: index("link_visible").on(table.linkVisible),
      jioLinksLinkId: primaryKey({
        columns: [table.linkId],
        name: "jio_links_link_id",
      }),
    };
  },
);

export const jioPostmeta = mysqlTable(
  "jio_postmeta",
  {
    metaId: bigint("meta_id", { mode: "number", unsigned: true })
      .autoincrement()
      .notNull(),
    postId: bigint("post_id", { mode: "number", unsigned: true }).notNull(),
    metaKey: varchar("meta_key", { length: 255 }),
    metaValue: longtext("meta_value"),
  },
  (table) => {
    return {
      metaKey: index("meta_key").on(table.metaKey),
      postId: index("post_id").on(table.postId),
      jioPostmetaMetaId: primaryKey({
        columns: [table.metaId],
        name: "jio_postmeta_meta_id",
      }),
    };
  },
);

export const jioPosts = mysqlTable(
  "jio_posts",
  {
    id: bigint("ID", { mode: "number", unsigned: true })
      .autoincrement()
      .notNull(),
    postAuthor: bigint("post_author", {
      mode: "number",
      unsigned: true,
    }).notNull(),
    postDate: datetime("post_date", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    postDateGmt: datetime("post_date_gmt", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    postContent: longtext("post_content").notNull(),
    postTitle: text("post_title").notNull(),
    postExcerpt: text("post_excerpt").notNull(),
    postStatus: varchar("post_status", { length: 20 })
      .default("publish")
      .notNull(),
    commentStatus: varchar("comment_status", { length: 20 })
      .default("open")
      .notNull(),
    pingStatus: varchar("ping_status", { length: 20 })
      .default("open")
      .notNull(),
    postPassword: varchar("post_password", { length: 20 })
      .default("")
      .notNull(),
    postName: varchar("post_name", { length: 200 }).default("").notNull(),
    toPing: text("to_ping").notNull(),
    pinged: text("pinged").notNull(),
    postModified: datetime("post_modified", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    postModifiedGmt: datetime("post_modified_gmt", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    postContentFiltered: longtext("post_content_filtered").notNull(),
    postParent: bigint("post_parent", {
      mode: "number",
      unsigned: true,
    }).notNull(),
    guid: varchar("guid", { length: 255 }).default("").notNull(),
    menuOrder: int("menu_order").default(0).notNull(),
    postType: varchar("post_type", { length: 20 }).default("post").notNull(),
    postMimeType: varchar("post_mime_type", { length: 100 })
      .default("")
      .notNull(),
    commentCount: bigint("comment_count", { mode: "number" }).notNull(),
  },
  (table) => {
    return {
      postAuthor: index("post_author").on(table.postAuthor),
      postName: index("post_name").on(table.postName),
      postParent: index("post_parent").on(table.postParent),
      typeStatusDate: index("type_status_date").on(
        table.postType,
        table.postStatus,
        table.postDate,
        table.id,
      ),
      jioPostsId: primaryKey({ columns: [table.id], name: "jio_posts_ID" }),
    };
  },
);

export const jioTermRelationships = mysqlTable(
  "jio_term_relationships",
  {
    objectId: bigint("object_id", { mode: "number", unsigned: true }).notNull(),
    termTaxonomyId: bigint("term_taxonomy_id", {
      mode: "number",
      unsigned: true,
    }).notNull(),
    termOrder: int("term_order").default(0).notNull(),
  },
  (table) => {
    return {
      termTaxonomyId: index("term_taxonomy_id").on(table.termTaxonomyId),
      jioTermRelationshipsObjectIdTermTaxonomyId: primaryKey({
        columns: [table.objectId, table.termTaxonomyId],
        name: "jio_term_relationships_object_id_term_taxonomy_id",
      }),
    };
  },
);

export const jioTermTaxonomy = mysqlTable(
  "jio_term_taxonomy",
  {
    termTaxonomyId: bigint("term_taxonomy_id", {
      mode: "number",
      unsigned: true,
    })
      .autoincrement()
      .notNull(),
    termId: bigint("term_id", { mode: "number", unsigned: true }).notNull(),
    taxonomy: varchar("taxonomy", { length: 32 }).default("").notNull(),
    description: longtext("description").notNull(),
    parent: bigint("parent", { mode: "number", unsigned: true }).notNull(),
    count: bigint("count", { mode: "number" }).notNull(),
  },
  (table) => {
    return {
      taxonomy: index("taxonomy").on(table.taxonomy),
      jioTermTaxonomyTermTaxonomyId: primaryKey({
        columns: [table.termTaxonomyId],
        name: "jio_term_taxonomy_term_taxonomy_id",
      }),
      termIdTaxonomy: unique("term_id_taxonomy").on(
        table.termId,
        table.taxonomy,
      ),
    };
  },
);

export const jioTerms = mysqlTable(
  "jio_terms",
  {
    termId: bigint("term_id", { mode: "number", unsigned: true })
      .autoincrement()
      .notNull(),
    name: varchar("name", { length: 200 }).default("").notNull(),
    slug: varchar("slug", { length: 200 }).default("").notNull(),
    termGroup: bigint("term_group", { mode: "number" }).notNull(),
  },
  (table) => {
    return {
      name: index("name").on(table.name),
      jioTermsTermId: primaryKey({
        columns: [table.termId],
        name: "jio_terms_term_id",
      }),
      slug: unique("slug").on(table.slug),
    };
  },
);

export const jioUsermeta = mysqlTable(
  "jio_usermeta",
  {
    umetaId: bigint("umeta_id", { mode: "number", unsigned: true })
      .autoincrement()
      .notNull(),
    userId: bigint("user_id", { mode: "number", unsigned: true }).notNull(),
    metaKey: varchar("meta_key", { length: 255 }),
    metaValue: longtext("meta_value"),
  },
  (table) => {
    return {
      metaKey: index("meta_key").on(table.metaKey),
      userId: index("user_id").on(table.userId),
      jioUsermetaUmetaId: primaryKey({
        columns: [table.umetaId],
        name: "jio_usermeta_umeta_id",
      }),
    };
  },
);

export const jioUsers = mysqlTable(
  "jio_users",
  {
    id: bigint("ID", { mode: "number", unsigned: true })
      .autoincrement()
      .notNull(),
    userLogin: varchar("user_login", { length: 60 }).default("").notNull(),
    userPass: varchar("user_pass", { length: 64 }).default("").notNull(),
    userNicename: varchar("user_nicename", { length: 50 })
      .default("")
      .notNull(),
    userEmail: varchar("user_email", { length: 100 }).default("").notNull(),
    userUrl: varchar("user_url", { length: 100 }).default("").notNull(),
    userRegistered: datetime("user_registered", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    userActivationKey: varchar("user_activation_key", { length: 60 })
      .default("")
      .notNull(),
    userStatus: int("user_status").default(0).notNull(),
    displayName: varchar("display_name", { length: 250 }).default("").notNull(),
  },
  (table) => {
    return {
      userLoginKey: index("user_login_key").on(table.userLogin),
      userNicename: index("user_nicename").on(table.userNicename),
      jioUsersId: primaryKey({ columns: [table.id], name: "jio_users_ID" }),
    };
  },
);
