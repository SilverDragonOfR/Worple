package handlers

import (
	"fmt"
	"log"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
)

type word struct {
	NewWord string `json:"newWord"`
}

func NewHandler(c *gin.Context) {

	var wordToStore word
	c.BindJSON(&wordToStore)
	var newWord = strings.ToLower(wordToStore.NewWord)
	var futureDataSetPath = "./dataset/future.txt" // path to future dataset

	f, err := os.OpenFile(futureDataSetPath, os.O_RDWR|os.O_APPEND, 0660)
	if err != nil {
		log.Fatal("1", err)
	}
	defer f.Close()
	_, err = f.WriteString(newWord + "\n")
	if err != nil {
		log.Fatal("2", err)
	}
	fmt.Println()
	fmt.Println()
	fmt.Println("SITE ADMIN ----------- ", newWord, "added at ./dataset/future.txt")
	fmt.Println()
	fmt.Println()
}
