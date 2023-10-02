package main

import (
	"fmt"
	"main/handlers"
	"main/memory"

	"github.com/gin-gonic/gin"
)

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {

		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Credentials", "true")
		c.Header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Header("Access-Control-Allow-Methods", "POST,HEAD,PATCH, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func main() {

	// Declaring hashtags
	HASHTAGS := [2]string{"IamSpeed", "Caching"}

	// Loading data
	memory.LoadData()

	// Creating a router
	router := gin.Default()
	router.Use(CORSMiddleware())

	// registering api endpoints
	router.GET("api/", handlers.HealthHandler)
	router.GET("api/random", handlers.RandomHandler)
	router.GET("api/check/:word", handlers.CheckHandler)
	router.POST("api/new", handlers.NewHandler)

	// starting server at http://localhost:8080
	fmt.Println()
	fmt.Println()
	fmt.Println()
	fmt.Println("\nServer started at http://localhost:8080")
	for _, hashtag := range HASHTAGS {
		fmt.Printf("#%s ", hashtag)
	}
	fmt.Println()
	fmt.Println()
	fmt.Println()
	fmt.Println()
	fmt.Println()

	// config := cors.DefaultConfig()
	// config.AllowAllOrigins = true
	// router.Use(cors.New(config))
	router.Run()
}
