package models

import (
	"backend/utils"
)

type Pathway struct {
	Id uint		`json:"id" gorm:"column:pathway_id;primaryKey"`
	Name string	`json:"name"`
}

func Get() []Pathway {

	var pathways []Pathway

	utils.DB.Find(&pathways)

	return pathways
}
