package models

import (
	"backend/utils"
)

func Get() []Course {
	var courses []Course
	utils.DB.Where("is_active = true").Find(&courses)
	return courses
}
