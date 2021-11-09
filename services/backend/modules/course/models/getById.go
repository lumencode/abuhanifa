package models

import (
	"backend/utils"
)

func GetById(courseId string) (SingleCourse, bool) {
	var course SingleCourse
	result := utils.DB.Table("courses").Where("course_id = ?", courseId).Find(&course)

	utils.DB.Where("course_id = ?", course.Id).Find(&course.Takeaways)

	return course, result.RowsAffected > 0
}
