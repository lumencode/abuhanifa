package models

import (
	"backend/utils"
)

func GetByCourseId(courseId string) []Chapter {
	var chapters []Chapter
	utils.DB.Where("course_id = ?", courseId).Find(&chapters)
	return chapters
}
