--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2022-01-14 18:08:11

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 16395)
-- Name: test; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.test (
    date date,
    title character varying(30),
    quantity integer,
    distance integer
);


ALTER TABLE public.test OWNER TO postgres;

--
-- TOC entry 3302 (class 0 OID 16395)
-- Dependencies: 209
-- Data for Name: test; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.test (date, title, quantity, distance) VALUES ('2021-01-13', 'Первый', 6, 21);
INSERT INTO public.test (date, title, quantity, distance) VALUES ('2021-01-15', 'Второй', 17, 5);
INSERT INTO public.test (date, title, quantity, distance) VALUES ('2021-01-20', 'Третий', 10, 15);
INSERT INTO public.test (date, title, quantity, distance) VALUES ('2021-01-27', 'Четвёртый', 53, 25);
INSERT INTO public.test (date, title, quantity, distance) VALUES ('2021-02-02', 'Пятый', 71, 954);
INSERT INTO public.test (date, title, quantity, distance) VALUES ('2021-02-02', 'Шестой', 7, 62);
INSERT INTO public.test (date, title, quantity, distance) VALUES ('2021-02-05', 'Седьмой', 647, 1362);
INSERT INTO public.test (date, title, quantity, distance) VALUES ('2021-02-05', 'Восьмой', 33, 35);
INSERT INTO public.test (date, title, quantity, distance) VALUES ('2021-02-05', 'Девятый', 11, 8);
INSERT INTO public.test (date, title, quantity, distance) VALUES ('2021-02-11', 'Десятый', 42, 90);
INSERT INTO public.test (date, title, quantity, distance) VALUES ('2021-02-14', 'Одиннадцатый', 873, 911);
INSERT INTO public.test (date, title, quantity, distance) VALUES ('2021-02-15', 'Двенадцатый', 3, 9);
INSERT INTO public.test (date, title, quantity, distance) VALUES ('2021-02-17', 'Тринадцатый', 19, 21);
INSERT INTO public.test (date, title, quantity, distance) VALUES ('2021-02-20', 'Четырнадцатый', 1, 111);
INSERT INTO public.test (date, title, quantity, distance) VALUES ('2021-02-26', 'Пятнадцатый', 72, 777);
INSERT INTO public.test (date, title, quantity, distance) VALUES ('2021-02-28', 'Шестнадцатый', 43, 55);


-- Completed on 2022-01-14 18:08:12

--
-- PostgreSQL database dump complete
--

