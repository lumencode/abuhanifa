package models

import (
	"time"
)

type Course struct {
	Id uint				`json:"id" gorm:"column:course_id;primaryKey"`
	Name string			`json:"name"`
	CreatedAt time.Time	`json:"createdAt"`
}
