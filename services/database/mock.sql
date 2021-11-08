insert into pathways (name) values ('PathWay #1'), ('PathWay #2');

insert into courses (name, pathway_id) values
('Course #1', 1), ('Course #2', 1), ('Course #3', 2);

insert into chapters (name, course_id) values
('Chapter A', 1), ('Chapter B', 1), ('Chapter #1', 2), ('Chapter #2', 2), ('Chapter #3', 2);
