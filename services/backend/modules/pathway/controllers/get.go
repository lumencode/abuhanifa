package controllers

import (
	model "backend/modules/pathway/models"

	"github.com/gin-gonic/gin"
)

func Get (ctx *gin.Context) {

	ctx.JSON(200, model.Get())
}
