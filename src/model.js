import actionSetAImages from "./images-js/action_set_a_images"
import actionSetBImages from "./images-js/action_set_b_images"
import animalSetAImages from "./images-js/animal_set_a_images"
import animalSetBImages from "./images-js/animal_set_b_images"
import clothesImages from "./images-js/clothes_images"
import emotionsImages from "./images-js/emotions_images"
import homeThingsImages from "./images-js/home_things_images"
import transportImages from "./images-js/transport_images"

import actionSetAAudio from "./audio-js/action_set_a_audio"
import actionSetBAudio from "./audio-js/action_set_b_audio"
import animalSetAAudio from "./audio-js/animal_set_a_audio"
import animalSetBAudio from "./audio-js/animal_set_b_audio"
import clothesAudio from "./audio-js/clothes_audio"
import emotionsAudio from "./audio-js/emotions_audio"
import homeThingsAudio from "./audio-js/home_things_audio"
import transportAudio from "./audio-js/transport_audio"

const store = {
    cathegoryCards: [
        {
            id: "ACTION-SET-A",
            text: "Action (Set A)",
            img: actionSetAImages.dance,
        },
        {
            id: "ACTION-SET-B",
            text: "Action (Set B)",
            img: actionSetBImages.play,
        },
        {
            id: "ANIMAL-SET-A",
            text: "Animal (Set A)",
            img: animalSetAImages.cat,
        },
        {
            id: "ANIMAL-SET-B",
            text: "Animal (Set B)",
            img: animalSetBImages.bird,
        },
        {
            id: "CLOTHES",
            text: "Clothes",
            img: clothesImages.boot,
        },
        {
            id: "EMOTIONS",
            text: "Emotions",
            img: emotionsImages.happy,
        },
        {
            id: "HOME-THINGS",
            text: "Home things",
            img: homeThingsImages.bed,
        },
        {
            id: "TRANSPORT",
            text: "Transport",
            img: transportImages.bycicle,
        },
    ],
    wordCards: {
        "ACTION-SET-A": {
            cry: {
                text: "cry",
                translation: "плакать",
                img: actionSetAImages.cry,
                audio: actionSetAAudio.cry
            },
            dance: {
                text: "dance",
                translation: "танцевать",
                img: actionSetAImages.dance,
                audio: actionSetAAudio.dance
            },
            dive: {
                text: "dive",
                translation: "нырять",
                img: actionSetAImages.dive,
                audio: actionSetAAudio.dive
            },
            draw: {
                text: "draw",
                translation: "рисовать",
                img: actionSetAImages.draw,
                audio: actionSetAAudio.draw
            },
            fish: {
                text: "fish",
                translation: "ловить рыбу",
                img: actionSetAImages.fish,
                audio: actionSetAAudio.fish
            },
            fly: {
                text: "fly",
                translation: "летать",
                img: actionSetAImages.fly,
                audio: actionSetAAudio.fly
            },
            hug: {
                text: "hug",
                translation: "обнимать",
                img: actionSetAImages.hug,
                audio: actionSetAAudio.hug
            },
            jump: {
                text: "jump",
                translation: "прыгать",
                img: actionSetAImages.jump,
                audio: actionSetAAudio.jump
            },
        },
        "ACTION-SET-B": {
            open: {
                text: "open",
                translation: "открывать",
                img: actionSetBImages.open,
                audio: actionSetBAudio.open
            },
            play: {
                text: "play",
                translation: "играть",
                img: actionSetBImages.play,
                audio: actionSetBAudio.play
            },
            point: {
                text: "point",
                translation: "указывать",
                img: actionSetBImages.point,
                audio: actionSetBAudio.point
            },
            ride: {
                text: "ride",
                translation: "ездить",
                img: actionSetBImages.ride,
                audio: actionSetBAudio.ride
            },
            run: {
                text: "run",
                translation: "бегать",
                img: actionSetBImages.run,
                audio: actionSetBAudio.run
            },
            sing: {
                text: "sing",
                translation: "петь",
                img: actionSetBImages.sing,
                audio: actionSetBAudio.sing
            },
            skip: {
                text: "skip",
                translation: "пропускать",
                img: actionSetBImages.skip,
                audio: actionSetBAudio.skip
            },
            swim: {
                text: "swim",
                translation: "плавать",
                img: actionSetBImages.swim,
                audio: actionSetBAudio.swim
            },
        },
        "ANIMAL-SET-A": {
            cat: {
                text: "cat",
                translation: "кот",
                img: animalSetAImages.cat,
                audio: animalSetAAudio.cat
            },
            chick: {
                text: "chick",
                translation: "цыплёнок",
                img: animalSetAImages.chick,
                audio: animalSetAAudio.chick
            },
            chicken: {
                text: "chicken",
                translation: "курица",
                img: animalSetAImages.chicken,
                audio: animalSetAAudio.chicken
            },
            dog: {
                text: "dog",
                translation: "собака",
                img: animalSetAImages.dog,
                audio: animalSetAAudio.dog
            },
            horse: {
                text: "horse",
                translation: "лошадь",
                img: animalSetAImages.horse,
                audio: animalSetAAudio.horse
            },
            pig: {
                text: "pig",
                translation: "свинья",
                img: animalSetAImages.pig,
                audio: animalSetAAudio.pig
            },
            rabbit: {
                text: "rabbit",
                translation: "кролик",
                img: animalSetAImages.rabbit,
                audio: animalSetAAudio.rabbit
            },
            sheep: {
                text: "sheep",
                translation: "овца",
                img: animalSetAImages.sheep,
                audio: animalSetAAudio.sheep
            },
        },
        "ANIMAL-SET-B": {
            bird: {
                text: "bird",
                translation: "птица",
                img: animalSetBImages.bird,
                audio: animalSetBAudio.bird
            },
            fish: {
                text: "fish",
                translation: "рыба",
                img: animalSetBImages.fish,
                audio: animalSetBAudio.fish
            },
            frog: {
                text: "frog",
                translation: "жаба",
                img: animalSetBImages.frog,
                audio: animalSetBAudio.frog
            },
            giraffe: {
                text: "giraffe",
                translation: "жираф",
                img: animalSetBImages.giraffe,
                audio: animalSetBAudio.giraffe
            },
            lion: {
                text: "lion",
                translation: "лев",
                img: animalSetBImages.lion,
                audio: animalSetBAudio.lion
            },
            mouse: {
                text: "mouse",
                translation: "мышь",
                img: animalSetBImages.mouse,
                audio: animalSetBAudio.mouse
            },
            turtle: {
                text: "turtle",
                translation: "черепаха",
                img: animalSetBImages.turtle,
                audio: animalSetBAudio.turtle
            },
            dolphin: {
                text: "dolphin",
                translation: "дельфин",
                img: animalSetBImages.dolphin,
                audio: animalSetBAudio.dolphin
            },
        },
        "CLOTHES": {
            skirt: {
                text: "skirt",
                translation: "юбка",
                img: clothesImages.skirt,
                audio: clothesAudio.skirt
            },
            pants: {
                text: "pants",
                translation: "брюки",
                img: clothesImages.pants,
                audio: clothesAudio.pants
            },
            blouse: {
                text: "blouse",
                translation: "блузка",
                img: clothesImages.blouse,
                audio: clothesAudio.blouse
            },
            dress: {
                text: "dress",
                translation: "платье",
                img: clothesImages.dress,
                audio: clothesAudio.dress
            },
            boot: {
                text: "boot",
                translation: "ботинок",
                img: clothesImages.boot,
                audio: clothesAudio.boot
            },
            shirt: {
                text: "shirt",
                translation: "рубашка",
                img: clothesImages.shirt,
                audio: clothesAudio.shirt
            },
            coat: {
                text: "coat",
                translation: "пальто",
                img: clothesImages.coat,
                audio: clothesAudio.coat
            },
            shoe: {
                text: "shoe",
                translation: "туфли",
                img: clothesImages.shoe,
                audio: clothesAudio.shoe
            },
        },
        "EMOTIONS": {
            sad: {
                text: "sad",
                translation: "грустный",
                img: emotionsImages.sad,
                audio: emotionsAudio.sad
            },
            angry: {
                text: "angry",
                translation: "сердитый",
                img: emotionsImages.angry,
                audio: emotionsAudio.angry
            },
            happy: {
                text: "happy",
                translation: "счастливый",
                img: emotionsImages.happy,
                audio: emotionsAudio.happy
            },
            tired: {
                text: "tired",
                translation: "уставший",
                img: emotionsImages.tired,
                audio: emotionsAudio.tired
            },
            surprised: {
                text: "surprised",
                translation: "удивлённый",
                img: emotionsImages.surprised,
                audio: emotionsAudio.surprised
            },
            scared: {
                text: "scared",
                translation: "испуганный",
                img: emotionsImages.scared,
                audio: emotionsAudio.scared
            },
            smile: {
                text: "smile",
                translation: "улыбка",
                img: emotionsImages.smile,
                audio: emotionsAudio.smile
            },
            laugh: {
                text: "laugh",
                translation: "смех",
                img: emotionsImages.laugh,
                audio: emotionsAudio.laugh
            },
        },
        "TRANSPORT": {
            car: {
                text: "car",
                translation: "машина",
                img: transportImages.car,
                audio: transportAudio.car
            },
            bycicle: {
                text: "bycicle",
                translation: "велосипед",
                img: transportImages.bycicle,
                audio: transportAudio.bycicle
            },
            motorcycle: {
                text: "motorcycle",
                translation: "мотоцикл",
                img: transportImages.motorcycle,
                audio: transportAudio.motorcycle
            },
            bus: {
                text: "bus",
                translation: "автобус",
                img: transportImages.bus,
                audio: transportAudio.bus
            },
            boat: {
                text: "boat",
                translation: "лодка",
                img: transportImages.boat,
                audio: transportAudio.boat
            },
            ship: {
                text: "ship",
                translation: "корабль",
                img: transportImages.ship,
                audio: transportAudio.ship
            },
            airplane: {
                text: "airplane",
                translation: "самолет",
                img: transportImages.airplane,
                audio: transportAudio.airplane
            },
            train: {
                text: "train",
                translation: "поезд",
                img: transportImages.train,
                audio: transportAudio.train
            },
        },
        "HOME-THINGS": {
            table: {
                text: "table",
                translation: "стол",
                img: homeThingsImages.table,
                audio: homeThingsAudio.table
            },
            chair: {
                text: "chair",
                translation: "стул",
                img: homeThingsImages.chair,
                audio: homeThingsAudio.chair
            },
            bed: {
                text: "bed",
                translation: "кровать",
                img: homeThingsImages.bed,
                audio: homeThingsAudio.bed
            },
            window: {
                text: "window",
                translation: "окно",
                img: homeThingsImages.window,
                audio: homeThingsAudio.window
            },
            pen: {
                text: "pen",
                translation: "ручка",
                img: homeThingsImages.pen,
                audio: homeThingsAudio.pen
            },
            lamp: {
                text: "lamp",
                translation: "лампа",
                img: homeThingsImages.lamp,
                audio: homeThingsAudio.lamp
            },
            door: {
                text: "door",
                translation: "дверь",
                img: homeThingsImages.door,
                audio: homeThingsAudio.door
            },
            mirror: {
                text: "mirror",
                translation: "зеркало",
                img: homeThingsImages.mirror,
                audio: homeThingsAudio.mirror
            },
        }
    }
}

export default store