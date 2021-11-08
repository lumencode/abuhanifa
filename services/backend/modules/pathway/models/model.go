package models

type Pathway struct {
	Id uint		`json:"id" gorm:"column:pathway_id;primaryKey"`
	Name string	`json:"name"`
}
