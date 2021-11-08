package controllers

import (
	model "backend/modules/course/models"

	"github.com/gin-gonic/gin"
)

func GetById (ctx *gin.Context) {

	course, ok := model.GetById(ctx.Param("courseId"))

	if ok {
		ctx.JSON(200, course)
	} else {
		ctx.JSON(404, nil)
	}
}
