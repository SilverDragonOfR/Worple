package memory

import (
	"bufio"
	"log"
	"os"
)

var currentDataSetPath = "./dataset/current.txt" // path to the current.txt file
var Words = make(map[string]bool)                // slice list to store the data
var Keys = []string{}

func LoadData() {
	f, err := os.Open(currentDataSetPath)
	if err != nil {
		log.Fatal(err)
	}
	defer f.Close()
	scanner := bufio.NewScanner(f)
	scanner.Split(bufio.ScanWords)
	for scanner.Scan() {
		Words[scanner.Text()] = true
		Keys = append(Keys, scanner.Text())
	}
	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}
}
