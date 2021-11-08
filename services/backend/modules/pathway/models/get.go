package models

import (
	"backend/utils"
)

func Get() []Pathway {
	var pathways []Pathway
	utils.DB.Find(&pathways)
	return pathways
}
