package models

import (
	"backend/utils"
)

func GetById(courseId string) (Course, bool) {
	var course Course
	result := utils.DB.Where("course_id = ?", courseId).Find(&course)
	return course, result.RowsAffected > 0
}
