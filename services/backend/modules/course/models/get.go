package models

import (
	"backend/utils"
)

func Get() []Course {
	var courses []Course
	utils.DB.Find(&courses)
	return courses
}
