package models

import (
	"time"

	takeaway "backend/modules/takeaway/models"
	chapter "backend/modules/chapter/models"
)

type Course struct {
	Id uint							`json:"id" gorm:"column:course_id;primaryKey"`
	Name string						`json:"name"`
	CreatedAt time.Time				`json:"createdAt"`
}

type SingleCourse struct {
	*Course
	Takeaways []takeaway.Takeaway	`json:"takeaways" gorm:"foreignKey:TakeawayRefer"`
	Chapters []chapter.Chapter		`json:"chapters" gorm:"foreignKey:ChapterRefer"`
}
