package controllers

import (
	model "backend/modules/course/models"

	"github.com/gin-gonic/gin"
)

func Get (ctx *gin.Context) {

	ctx.JSON(200, model.Get())
}

func GetByPathwayId (ctx *gin.Context) {

	ctx.JSON(200, model.GetByPathwayId(ctx.Param("pathwayId")))
}
