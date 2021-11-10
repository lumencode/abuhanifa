create extension pgcrypto;

create table pathways (
	pathway_id serial not null primary key,
	name character varying(128) not null
);

create table courses (
	course_id serial not null primary key,
	name character varying(128) not null,
	is_active boolean default false,
	cover_path character varying(128) not null,
	created_at timestamp with time zone default current_timestamp,
	updated_at timestamp with time zone default null,
	pathway_id int not null references pathways(pathway_id)
);

create table takeaways (
	takeaway_id serial not null primary key,
	content character varying(256) not null,
	course_id int not null references courses(course_id)
);

create table chapters (
	chapter_id serial not null primary key,
	name character varying(128) not null,
	course_id int not null references courses(course_id)
);

create table lessons (
	lesson_id serial not null primary key,
	name character varying(256) not null,
	chapter_id int not null references chapters(chapter_id)
);

create table contents (
	content_id serial not null primary key,
	lesson_id int not null references lessons(lesson_id)
);

create table users (
	user_id serial not null primary key,
	fullname character varying(48) not null,
	phone_number character varying(12) not null,
	password character varying(60) not null,
	created_at timestamp with time zone default current_timestamp
);

create unique index phonenumber_idx on users (phone_number);

create function before_user_create() 
	returns trigger 
	language plpgsql
as $$
begin
	new.password = crypt(new.password, gen_salt('bf'));
	return new;
end;
$$;

create trigger before_user_create_tg before insert on users
for each row execute procedure before_user_create();
