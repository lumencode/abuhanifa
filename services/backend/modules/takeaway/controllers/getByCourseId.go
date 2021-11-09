package controllers

import (
	model "backend/modules/takeaway/models"

	"github.com/gin-gonic/gin"
)

func GetByCourseId (ctx *gin.Context) {

	ctx.JSON(200, model.GetByCourseId(ctx.Param("courseId")))
}
