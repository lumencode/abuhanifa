package models

import (
	"backend/utils"
)

func GetByPathwayId(pathwayId string) []Course {
	var courses []Course
	utils.DB.Where("pathway_id = ?", pathwayId).Find(&courses)
	return courses
}
