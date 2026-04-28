import type { Question } from "../types/Question";


export const questions: Question[] = [
    {
        id: 1,
        text: `Что выведет на экран следующий код "print(2 + 2 * 2)"?`,
        options: [
            {
                id: 1,
                text: "A) 6"
            },
            {
                id: 2,
                text: "B) 8"
            },
            {
                id: 3,
                text: "C) 4"
            },
            {
                id: 4,
                text: "D) Ошибка"
            }
        ],
        correct_option_id: 1
    },
    {
        id: 2,
        text: `Как называется тип данных, который может принимать только два значения: истина (true) или ложь (false)?`,
        options: [
            {
                id: 1,
                text: "A) Строка (String)"
            },
            {
                id: 2,
                text: "B) Целое число (Integer)"
            },
            {
                id: 3,
                text: "C) Булевый (Boolean)"
            },
            {
                id: 4,
                text: "D) Символ (Char)"
            }
        ],
        correct_option_id: 3
    },
    {
        id: 2,
        text: `Какой символ используется для получения остатка от деления в C-подобных языках программирования?`,
        options: [
            {
                id: 1,
                text: "A) & (амперсанд)"
            },
            {
                id: 2,
                text: "B) / (слэш)"
            },
            {
                id: 3,
                text: "C) % (процент)"
            },
            {
                id: 4,
                text: "D) # (решетка)"
            }
        ],
        correct_option_id: 3
    }
];
