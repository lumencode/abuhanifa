package main

import (
	"backend/middlewares"
	pathway "backend/modules/pathway/controllers"
	course "backend/modules/course/controllers"
	takeaway "backend/modules/takeaway/controllers"
	chapter "backend/modules/chapter/controllers"

	"github.com/gin-gonic/gin"
)

func InitRoutes (r *gin.Engine) {

	r.Use(middlewares.Cors())

	// PATHWAYS
	pathways := r.Group("/pathways")
	pathways.GET("/", pathway.Get)

	// COURSES
	courses := r.Group("/courses")
	courses.GET("/", course.Get)
	courses.GET("/:courseId", course.GetById)
	courses.GET("/pathway/:pathwayId", course.GetByPathwayId)

	// TAKEAWAYS
	takeaways := r.Group("/takeaways")
	takeaways.GET("/:courseId", takeaway.GetByCourseId)

	// CHAPTERS
	chapters := r.Group("/chapters")
	chapters.GET("/:courseId", chapter.GetByCourseId)
}