package models

type Takeaway struct {
	Id uint				`json:"id" gorm:"column:takeaway_id;primaryKey"`
	Content string		`json:"content"`
	TakeawayRefer uint	`json:"-"`
}
