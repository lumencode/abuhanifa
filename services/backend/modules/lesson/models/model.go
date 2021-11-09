package models

type Lesson struct {
	Id uint				`json:"id" gorm:"column:lesson_id;primaryKey"`
	Name string			`json:"name"`
	LessonRefer uint	`json:"-"`
}
