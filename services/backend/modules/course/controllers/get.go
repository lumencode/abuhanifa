package controllers

import (
	model "backend/modules/course/models"

	"github.com/gin-gonic/gin"
)

func Get (ctx *gin.Context) {

	ctx.JSON(200, model.Get())
}
