package models

type Chapter struct {
	Id uint				`json:"id" gorm:"column:chapter_id;primaryKey"`
	Name string			`json:"name"`
	ChapterRefer uint	`json:"-"`
}
