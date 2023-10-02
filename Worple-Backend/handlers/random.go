package handlers

import (
	"main/memory"
	"math/rand"

	"github.com/gin-gonic/gin"
)

func RandomHandler(c *gin.Context) {

	randomWord := memory.Keys[rand.Intn(len(memory.Keys))]
	c.JSON(200, gin.H{
		"length": 5,
		"word":   randomWord,
	})
}
