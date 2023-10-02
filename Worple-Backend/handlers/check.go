package handlers

import (
	"main/memory"

	"github.com/gin-gonic/gin"
)

func CheckHandler(c *gin.Context) {

	word := c.Param("word")
	_, isPresent := memory.Words[word]

	c.JSON(200, gin.H{
		"isPresent": isPresent,
	})
}
