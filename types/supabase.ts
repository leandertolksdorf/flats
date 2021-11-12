/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/flats": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.flats.id"];
          created_at?: parameters["rowFilter.flats.created_at"];
          city?: parameters["rowFilter.flats.city"];
          name?: parameters["rowFilter.flats.name"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["flats"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** flats */
          flats?: definitions["flats"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.flats.id"];
          created_at?: parameters["rowFilter.flats.created_at"];
          city?: parameters["rowFilter.flats.city"];
          name?: parameters["rowFilter.flats.name"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.flats.id"];
          created_at?: parameters["rowFilter.flats.created_at"];
          city?: parameters["rowFilter.flats.city"];
          name?: parameters["rowFilter.flats.name"];
        };
        body: {
          /** flats */
          flats?: definitions["flats"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/invitations": {
    get: {
      parameters: {
        query: {
          created_at?: parameters["rowFilter.invitations.created_at"];
          created_by?: parameters["rowFilter.invitations.created_by"];
          expires?: parameters["rowFilter.invitations.expires"];
          shortcode?: parameters["rowFilter.invitations.shortcode"];
          flat_id?: parameters["rowFilter.invitations.flat_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["invitations"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** invitations */
          invitations?: definitions["invitations"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          created_at?: parameters["rowFilter.invitations.created_at"];
          created_by?: parameters["rowFilter.invitations.created_by"];
          expires?: parameters["rowFilter.invitations.expires"];
          shortcode?: parameters["rowFilter.invitations.shortcode"];
          flat_id?: parameters["rowFilter.invitations.flat_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          created_at?: parameters["rowFilter.invitations.created_at"];
          created_by?: parameters["rowFilter.invitations.created_by"];
          expires?: parameters["rowFilter.invitations.expires"];
          shortcode?: parameters["rowFilter.invitations.shortcode"];
          flat_id?: parameters["rowFilter.invitations.flat_id"];
        };
        body: {
          /** invitations */
          invitations?: definitions["invitations"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/pglog": {
    get: {
      parameters: {
        query: {
          log_time?: parameters["rowFilter.pglog.log_time"];
          user_name?: parameters["rowFilter.pglog.user_name"];
          database_name?: parameters["rowFilter.pglog.database_name"];
          process_id?: parameters["rowFilter.pglog.process_id"];
          connection_from?: parameters["rowFilter.pglog.connection_from"];
          session_id?: parameters["rowFilter.pglog.session_id"];
          session_line_num?: parameters["rowFilter.pglog.session_line_num"];
          command_tag?: parameters["rowFilter.pglog.command_tag"];
          session_start_time?: parameters["rowFilter.pglog.session_start_time"];
          virtual_transaction_id?: parameters["rowFilter.pglog.virtual_transaction_id"];
          transaction_id?: parameters["rowFilter.pglog.transaction_id"];
          error_severity?: parameters["rowFilter.pglog.error_severity"];
          sql_state_code?: parameters["rowFilter.pglog.sql_state_code"];
          message?: parameters["rowFilter.pglog.message"];
          detail?: parameters["rowFilter.pglog.detail"];
          hint?: parameters["rowFilter.pglog.hint"];
          internal_query?: parameters["rowFilter.pglog.internal_query"];
          internal_query_pos?: parameters["rowFilter.pglog.internal_query_pos"];
          context?: parameters["rowFilter.pglog.context"];
          query?: parameters["rowFilter.pglog.query"];
          query_pos?: parameters["rowFilter.pglog.query_pos"];
          location?: parameters["rowFilter.pglog.location"];
          application_name?: parameters["rowFilter.pglog.application_name"];
          backend_type?: parameters["rowFilter.pglog.backend_type"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["pglog"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
  };
  "/profiles": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          created_at?: parameters["rowFilter.profiles.created_at"];
          first_name?: parameters["rowFilter.profiles.first_name"];
          avatar_seed?: parameters["rowFilter.profiles.avatar_seed"];
          flat_id?: parameters["rowFilter.profiles.flat_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profiles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          created_at?: parameters["rowFilter.profiles.created_at"];
          first_name?: parameters["rowFilter.profiles.first_name"];
          avatar_seed?: parameters["rowFilter.profiles.avatar_seed"];
          flat_id?: parameters["rowFilter.profiles.flat_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          created_at?: parameters["rowFilter.profiles.created_at"];
          first_name?: parameters["rowFilter.profiles.first_name"];
          avatar_seed?: parameters["rowFilter.profiles.avatar_seed"];
          flat_id?: parameters["rowFilter.profiles.flat_id"];
        };
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/rpc/handle_new_user": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: unknown };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/join_flat": {
    post: {
      parameters: {
        body: {
          args: {
            code: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/handle_new_flat": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: unknown };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/get_flat_id": {
    post: {
      parameters: {
        body: {
          args: {
            code: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/generate_shortcode": {
    post: {
      parameters: {
        body: {
          args: {
            size: number;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/is_member_of_same_flat": {
    post: {
      parameters: {
        body: {
          args: {
            user_id: string;
            user_id_2: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/file_fdw_validator": {
    post: {
      parameters: {
        body: {
          args: {
            "": string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/generate_uid": {
    post: {
      parameters: {
        body: {
          args: {
            size: number;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/file_fdw_handler": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: unknown };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
}

export interface definitions {
  flats: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    created_at?: string;
    city?: string;
    name: string;
  };
  invitations: {
    created_at: string;
    created_by?: string;
    expires: string;
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    shortcode: string;
    /**
     * Note:
     * This is a Foreign Key to `flats.id`.<fk table='flats' column='id'/>
     */
    flat_id: string;
  };
  pglog: {
    log_time?: string;
    user_name?: string;
    database_name?: string;
    process_id?: number;
    connection_from?: string;
    session_id?: string;
    session_line_num?: number;
    command_tag?: string;
    session_start_time?: string;
    virtual_transaction_id?: string;
    transaction_id?: number;
    error_severity?: string;
    sql_state_code?: string;
    message?: string;
    detail?: string;
    hint?: string;
    internal_query?: string;
    internal_query_pos?: number;
    context?: string;
    query?: string;
    query_pos?: number;
    location?: string;
    application_name?: string;
    backend_type?: string;
  };
  profiles: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    created_at?: string;
    first_name: string;
    avatar_seed: string;
    /**
     * Note:
     * This is a Foreign Key to `flats.id`.<fk table='flats' column='id'/>
     */
    flat_id?: string;
  };
}

export interface parameters {
  /** Preference */
  preferParams: "params=single-object";
  /** Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** Preference */
  preferCount: "count=none";
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** flats */
  "body.flats": definitions["flats"];
  "rowFilter.flats.id": string;
  "rowFilter.flats.created_at": string;
  "rowFilter.flats.city": string;
  "rowFilter.flats.name": string;
  /** invitations */
  "body.invitations": definitions["invitations"];
  "rowFilter.invitations.created_at": string;
  "rowFilter.invitations.created_by": string;
  "rowFilter.invitations.expires": string;
  "rowFilter.invitations.shortcode": string;
  "rowFilter.invitations.flat_id": string;
  /** pglog */
  "body.pglog": definitions["pglog"];
  "rowFilter.pglog.log_time": string;
  "rowFilter.pglog.user_name": string;
  "rowFilter.pglog.database_name": string;
  "rowFilter.pglog.process_id": string;
  "rowFilter.pglog.connection_from": string;
  "rowFilter.pglog.session_id": string;
  "rowFilter.pglog.session_line_num": string;
  "rowFilter.pglog.command_tag": string;
  "rowFilter.pglog.session_start_time": string;
  "rowFilter.pglog.virtual_transaction_id": string;
  "rowFilter.pglog.transaction_id": string;
  "rowFilter.pglog.error_severity": string;
  "rowFilter.pglog.sql_state_code": string;
  "rowFilter.pglog.message": string;
  "rowFilter.pglog.detail": string;
  "rowFilter.pglog.hint": string;
  "rowFilter.pglog.internal_query": string;
  "rowFilter.pglog.internal_query_pos": string;
  "rowFilter.pglog.context": string;
  "rowFilter.pglog.query": string;
  "rowFilter.pglog.query_pos": string;
  "rowFilter.pglog.location": string;
  "rowFilter.pglog.application_name": string;
  "rowFilter.pglog.backend_type": string;
  /** profiles */
  "body.profiles": definitions["profiles"];
  "rowFilter.profiles.id": string;
  "rowFilter.profiles.created_at": string;
  "rowFilter.profiles.first_name": string;
  "rowFilter.profiles.avatar_seed": string;
  "rowFilter.profiles.flat_id": string;
}

export interface operations {}

export interface external {}
