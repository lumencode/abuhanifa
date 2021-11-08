package models

import (
	"time"
	"backend/utils"
)

type Course struct {
	Id uint				`json:"id" gorm:"column:course_id;primaryKey"`
	Name string			`json:"name"`
	CreatedAt time.Time	`json:"createdAt"`
}

func Get() []Course {
	var courses []Course
	utils.DB.Find(&courses)
	return courses
}

func GetByPathwayId(pathwayId string) []Course {
	var courses []Course
	utils.DB.Where("pathway_id = ?", pathwayId).Find(&courses)
	return courses
}
