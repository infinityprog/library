DROP SEQUENCE  IF EXISTS passage_id_seq;

Create SEQUENCE passage_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
;

DROP TABLE IF EXISTS passage CASCADE ;

CREATE TABLE passage (
    passage_id integer NOT NULL default nextval('passage_id_seq'),
    day date NOT NULL,
    number integer NOT NULL
);

ALTER TABLE passage
    ADD CONSTRAINT passage_pkey PRIMARY KEY (passage_id);

