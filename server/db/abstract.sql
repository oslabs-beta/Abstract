DROP TABLE IF EXISTS public.user_sessions;
CREATE TABLE public.user_sessions (
    "_id"  varchar NOT NULL,
    "session_id" varchar NOT NULL,
    "username" varchar NOT NULL,
    PRIMARY KEY ("_id")
);

INSERT INTO user_sessions ("_id", "session_id", "username") VALUES ('123456789', '987654321', 'test user');