import os 
import random
import math
import.pygame
from os import listdir
from os.path import isfile, Join
pygame.inite()

pygame.display.set_caption("Platformer")
BG_COLOR =(255, 255, 255)
WIDTH, HEIGHT=1000, 800
FPS = 60
PLAYER_VEL=5


window = pygame.display.set_mode((WIDTH, HEIGHT))

def get_background(name):
    image = pygame.image.load(join())

def main(window):
    clock = pygame.time.clock()
    run = True
    while  run:
        clock.tick(FPS)
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False
                break
    pygame.quit()
    quit()