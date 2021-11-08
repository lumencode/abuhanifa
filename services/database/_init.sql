create table pathways (
	pathway_id serial not null primary key,
	name character varying(128) not null
);

create table courses (
	course_id serial not null primary key,
	name character varying(128) not null,
	is_active boolean default false,
	created_at timestamp with time zone default current_timestamp,
	updated_at timestamp with time zone default null,
	pathway_id int not null references pathways(pathway_id)
);

create table takeaways (
	takeaway_id serial not null primary key,
	content character varying(256) not null,
	course_id int not null references courses(course_id)
);

create table modules (
	module_id serial not null primary key,
	name character varying(128) not null,
	course_id int not null references courses(course_id)
);

create table lessons (
	lesson_id serial not null primary key,
	name character varying(128) not null,
	module_id int not null references modules(module_id)
);

create table contents (
	content_id serial not null primary key,
	lesson_id int not null references lessons(lesson_id)
);
