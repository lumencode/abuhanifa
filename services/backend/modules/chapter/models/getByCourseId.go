package models

import (
	"backend/utils"
)

func GetByCourseId(courseId string) []Chapter {

	var chapters []Chapter
	utils.DB.Where("course_id = ?", courseId).Find(&chapters)

	for i, _ := range chapters {
		utils.DB.Where("chapter_id = ?", chapters[i].Id).Find(&chapters[i].Lessons)
	}

	return chapters
}
