package models

import (
	lesson "backend/modules/lesson/models"
)

type Chapter struct {
	Id uint						`json:"id" gorm:"column:chapter_id;primaryKey"`
	Name string					`json:"name"`
	ChapterRefer uint			`json:"-"`
	Lessons []lesson.Lesson		`json:"lessons" gorm:"foreignKey:LessonRefer"`
}
