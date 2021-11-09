package models

import (
	"backend/utils"
	chapter "backend/modules/chapter/models"
)

func GetById(courseId string) (SingleCourse, bool) {
	var course SingleCourse
	result := utils.DB.Table("courses").Where("course_id = ?", courseId).Find(&course)

	utils.DB.Where("course_id = ?", course.Id).Find(&course.Takeaways)

	course.Chapters = chapter.GetByCourseId(courseId)

	return course, result.RowsAffected > 0
}
