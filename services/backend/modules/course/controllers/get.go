package controllers

import (
	model "backend/modules/course/models"

	"github.com/gin-gonic/gin"
)

func Get (ctx *gin.Context) {

	ctx.JSON(200, model.Get())
}

func GetById (ctx *gin.Context) {

	course, ok := model.GetById(ctx.Param("courseId"))

	if ok {
		ctx.JSON(200, course)
	} else {
		ctx.JSON(404, nil)
	}
}

func GetByPathwayId (ctx *gin.Context) {

	ctx.JSON(200, model.GetByPathwayId(ctx.Param("pathwayId")))
}
