
var gy = [],
    ge = [],
    gs = []; //高一高二高三的数据
var data;
//高一第一个月语文月考成绩
data = {
    "高一08班": [{
        "classRank": 1,
        "schoolRank": 10,
        "score": 95
    }, {
        "classRank": 2,
        "schoolRank": 12,
        "score": 94
    }, {
        "classRank": 3,
        "schoolRank": 15,
        "score": 92.5
    }, {
        "classRank": 4,
        "schoolRank": 21,
        "score": 89.5
    }, {
        "classRank": 5,
        "schoolRank": 22,
        "score": 89
    }, {
        "classRank": 6,
        "schoolRank": 24,
        "score": 88
    }, {
        "classRank": 7,
        "schoolRank": 34,
        "score": 83
    }, {
        "classRank": 8,
        "schoolRank": 35,
        "score": 82.5
    }, {
        "classRank": 9,
        "schoolRank": 36,
        "score": 82
    }, {
        "classRank": 10,
        "schoolRank": 40,
        "score": 80
    }, {
        "classRank": 11,
        "schoolRank": 40,
        "score": 80
    }, {
        "classRank": 12,
        "schoolRank": 43,
        "score": 78.5
    }, {
        "classRank": 13,
        "schoolRank": 44,
        "score": 78
    }, {
        "classRank": 14,
        "schoolRank": 48,
        "score": 76
    }, {
        "classRank": 15,
        "schoolRank": 50,
        "score": 75
    }, {
        "classRank": 16,
        "schoolRank": 54,
        "score": 72
    }, {
        "classRank": 17,
        "schoolRank": 58,
        "score": 70
    }, {
        "classRank": 18,
        "schoolRank": 60,
        "score": 69
    }, {
        "classRank": 19,
        "schoolRank": 64,
        "score": 67
    }, {
        "classRank": 20,
        "schoolRank": 100,
        "score": 130
    }, {
        "classRank": 21,
        "schoolRank": 104,
        "score": 127.5
    }, {
        "classRank": 22,
        "schoolRank": 113,
        "score": 123
    }, {
        "classRank": 23,
        "schoolRank": 121,
        "score": 119
    }, {
        "classRank": 24,
        "schoolRank": 125,
        "score": 117
    }, {
        "classRank": 25,
        "schoolRank": 128,
        "score": 115.5
    }, {
        "classRank": 26,
        "schoolRank": 129,
        "score": 115
    }, {
        "classRank": 27,
        "schoolRank": 133,
        "score": 113
    }, {
        "classRank": 28,
        "schoolRank": 136,
        "score": 111.5
    }, {
        "classRank": 29,
        "schoolRank": 141,
        "score": 109
    }, {
        "classRank": 30,
        "schoolRank": 143,
        "score": 108
    }, {
        "classRank": 31,
        "schoolRank": 145,
        "score": 107
    }, {
        "classRank": 32,
        "schoolRank": 146,
        "score": 106.5
    }, {
        "classRank": 33,
        "schoolRank": 149,
        "score": 104.5
    }, {
        "classRank": 34,
        "schoolRank": 150,
        "score": 104
    }, {
        "classRank": 35,
        "schoolRank": 154,
        "score": 102
    }, {
        "classRank": 36,
        "schoolRank": 156,
        "score": 101
    }, {
        "classRank": 37,
        "schoolRank": 156,
        "score": 101
    }],
    "高一09班": [{
        "classRank": 1,
        "schoolRank": 8,
        "score": 96
    }, {
        "classRank": 2,
        "schoolRank": 9,
        "score": 95.5
    }, {
        "classRank": 3,
        "schoolRank": 11,
        "score": 94.5
    }, {
        "classRank": 4,
        "schoolRank": 13,
        "score": 93.5
    }, {
        "classRank": 5,
        "schoolRank": 13,
        "score": 93.5
    }, {
        "classRank": 6,
        "schoolRank": 13,
        "score": 93.5
    }, {
        "classRank": 7,
        "schoolRank": 19,
        "score": 90.5
    }, {
        "classRank": 8,
        "schoolRank": 20,
        "score": 90
    }, {
        "classRank": 9,
        "schoolRank": 25,
        "score": 87.5
    }, {
        "classRank": 10,
        "schoolRank": 25,
        "score": 87.5
    }, {
        "classRank": 11,
        "schoolRank": 33,
        "score": 83.5
    }, {
        "classRank": 12,
        "schoolRank": 35,
        "score": 82.5
    }, {
        "classRank": 13,
        "schoolRank": 36,
        "score": 82
    }, {
        "classRank": 14,
        "schoolRank": 42,
        "score": 79
    }, {
        "classRank": 15,
        "schoolRank": 44,
        "score": 78
    }, {
        "classRank": 16,
        "schoolRank": 45,
        "score": 77.5
    }, {
        "classRank": 17,
        "schoolRank": 45,
        "score": 77.5
    }, {
        "classRank": 18,
        "schoolRank": 47,
        "score": 76.5
    }, {
        "classRank": 19,
        "schoolRank": 49,
        "score": 75.5
    }, {
        "classRank": 20,
        "schoolRank": 52,
        "score": 74
    }, {
        "classRank": 21,
        "schoolRank": 58,
        "score": 70
    }, {
        "classRank": 22,
        "schoolRank": 59,
        "score": 69.5
    }, {
        "classRank": 23,
        "schoolRank": 63,
        "score": 67.5
    }, {
        "classRank": 24,
        "schoolRank": 75,
        "score": 60.5
    }, {
        "classRank": 25,
        "schoolRank": 78,
        "score": 59
    }, {
        "classRank": 26,
        "schoolRank": 79,
        "score": 58.5
    }, {
        "classRank": 27,
        "schoolRank": 102,
        "score": 128.5
    }, {
        "classRank": 28,
        "schoolRank": 115,
        "score": 122
    }, {
        "classRank": 29,
        "schoolRank": 123,
        "score": 118
    }, {
        "classRank": 30,
        "schoolRank": 127,
        "score": 116
    }, {
        "classRank": 31,
        "schoolRank": 133,
        "score": 113
    }, {
        "classRank": 32,
        "schoolRank": 134,
        "score": 112.5
    }, {
        "classRank": 33,
        "schoolRank": 139,
        "score": 110
    }, {
        "classRank": 34,
        "schoolRank": 139,
        "score": 110
    }, {
        "classRank": 35,
        "schoolRank": 142,
        "score": 108.5
    }, {
        "classRank": 36,
        "schoolRank": 144,
        "score": 107.5
    }, {
        "classRank": 37,
        "schoolRank": 145,
        "score": 107
    }, {
        "classRank": 38,
        "schoolRank": 145,
        "score": 107
    }, {
        "classRank": 39,
        "schoolRank": 148,
        "score": 105
    }, {
        "classRank": 40,
        "schoolRank": 152,
        "score": 103
    }, {
        "classRank": 41,
        "schoolRank": 153,
        "score": 102.5
    }],
    "高一06班": [{
        "classRank": 1,
        "schoolRank": 2,
        "score": 99
    }, {
        "classRank": 2,
        "schoolRank": 6,
        "score": 97
    }, {
        "classRank": 3,
        "schoolRank": 6,
        "score": 97
    }, {
        "classRank": 4,
        "schoolRank": 7,
        "score": 96.5
    }, {
        "classRank": 5,
        "schoolRank": 8,
        "score": 96
    }, {
        "classRank": 6,
        "schoolRank": 13,
        "score": 93.5
    }, {
        "classRank": 7,
        "schoolRank": 14,
        "score": 93
    }, {
        "classRank": 8,
        "schoolRank": 22,
        "score": 89
    }, {
        "classRank": 9,
        "schoolRank": 25,
        "score": 87.5
    }, {
        "classRank": 10,
        "schoolRank": 26,
        "score": 87
    }, {
        "classRank": 11,
        "schoolRank": 29,
        "score": 85.5
    }, {
        "classRank": 12,
        "schoolRank": 29,
        "score": 85.5
    }, {
        "classRank": 13,
        "schoolRank": 30,
        "score": 85
    }, {
        "classRank": 14,
        "schoolRank": 31,
        "score": 84.5
    }, {
        "classRank": 15,
        "schoolRank": 33,
        "score": 83.5
    }, {
        "classRank": 16,
        "schoolRank": 34,
        "score": 83
    }, {
        "classRank": 17,
        "schoolRank": 37,
        "score": 81.5
    }, {
        "classRank": 18,
        "schoolRank": 41,
        "score": 79.5
    }, {
        "classRank": 19,
        "schoolRank": 47,
        "score": 76.5
    }, {
        "classRank": 20,
        "schoolRank": 57,
        "score": 70.5
    }, {
        "classRank": 21,
        "schoolRank": 101,
        "score": 129
    }, {
        "classRank": 22,
        "schoolRank": 103,
        "score": 128
    }, {
        "classRank": 23,
        "schoolRank": 107,
        "score": 126
    }, {
        "classRank": 24,
        "schoolRank": 108,
        "score": 125.5
    }, {
        "classRank": 25,
        "schoolRank": 114,
        "score": 122.5
    }, {
        "classRank": 26,
        "schoolRank": 120,
        "score": 119.5
    }, {
        "classRank": 27,
        "schoolRank": 124,
        "score": 117.5
    }, {
        "classRank": 28,
        "schoolRank": 126,
        "score": 116.5
    }, {
        "classRank": 29,
        "schoolRank": 132,
        "score": 113.5
    }, {
        "classRank": 30,
        "schoolRank": 136,
        "score": 111.5
    }, {
        "classRank": 31,
        "schoolRank": 137,
        "score": 111
    }, {
        "classRank": 32,
        "schoolRank": 138,
        "score": 110.5
    }, {
        "classRank": 33,
        "schoolRank": 145,
        "score": 107
    }, {
        "classRank": 34,
        "schoolRank": 148,
        "score": 105
    }, {
        "classRank": 35,
        "schoolRank": 148,
        "score": 105
    }, {
        "classRank": 36,
        "schoolRank": 154,
        "score": 102
    }],
    "高一07班": [{
        "classRank": 1,
        "schoolRank": 5,
        "score": 97.5
    }, {
        "classRank": 2,
        "schoolRank": 6,
        "score": 97
    }, {
        "classRank": 3,
        "schoolRank": 8,
        "score": 96
    }, {
        "classRank": 4,
        "schoolRank": 11,
        "score": 94.5
    }, {
        "classRank": 5,
        "schoolRank": 16,
        "score": 92
    }, {
        "classRank": 6,
        "schoolRank": 19,
        "score": 90.5
    }, {
        "classRank": 7,
        "schoolRank": 23,
        "score": 88.5
    }, {
        "classRank": 8,
        "schoolRank": 24,
        "score": 88
    }, {
        "classRank": 9,
        "schoolRank": 29,
        "score": 85.5
    }, {
        "classRank": 10,
        "schoolRank": 29,
        "score": 85.5
    }, {
        "classRank": 11,
        "schoolRank": 30,
        "score": 85
    }, {
        "classRank": 12,
        "schoolRank": 30,
        "score": 85
    }, {
        "classRank": 13,
        "schoolRank": 31,
        "score": 84.5
    }, {
        "classRank": 14,
        "schoolRank": 33,
        "score": 83.5
    }, {
        "classRank": 15,
        "schoolRank": 36,
        "score": 82
    }, {
        "classRank": 16,
        "schoolRank": 38,
        "score": 81
    }, {
        "classRank": 17,
        "schoolRank": 40,
        "score": 80
    }, {
        "classRank": 18,
        "schoolRank": 48,
        "score": 76
    }, {
        "classRank": 19,
        "schoolRank": 55,
        "score": 71.5
    }, {
        "classRank": 20,
        "schoolRank": 57,
        "score": 70.5
    }, {
        "classRank": 21,
        "schoolRank": 58,
        "score": 70
    }, {
        "classRank": 22,
        "schoolRank": 60,
        "score": 69
    }, {
        "classRank": 23,
        "schoolRank": 61,
        "score": 68.5
    }, {
        "classRank": 24,
        "schoolRank": 70,
        "score": 63.5
    }, {
        "classRank": 25,
        "schoolRank": 73,
        "score": 61.5
    }, {
        "classRank": 26,
        "schoolRank": 78,
        "score": 59
    }, {
        "classRank": 27,
        "schoolRank": 80,
        "score": 57.5
    }, {
        "classRank": 28,
        "schoolRank": 82,
        "score": 56.5
    }, {
        "classRank": 29,
        "schoolRank": 86,
        "score": 54
    }, {
        "classRank": 30,
        "schoolRank": 105,
        "score": 127
    }, {
        "classRank": 31,
        "schoolRank": 109,
        "score": 125
    }, {
        "classRank": 32,
        "schoolRank": 109,
        "score": 125
    }, {
        "classRank": 33,
        "schoolRank": 113,
        "score": 123
    }, {
        "classRank": 34,
        "schoolRank": 121,
        "score": 119
    }, {
        "classRank": 35,
        "schoolRank": 123,
        "score": 118
    }, {
        "classRank": 36,
        "schoolRank": 125,
        "score": 117
    }, {
        "classRank": 37,
        "schoolRank": 127,
        "score": 116
    }, {
        "classRank": 38,
        "schoolRank": 129,
        "score": 115
    }, {
        "classRank": 39,
        "schoolRank": 132,
        "score": 113.5
    }, {
        "classRank": 40,
        "schoolRank": 132,
        "score": 113.5
    }, {
        "classRank": 41,
        "schoolRank": 136,
        "score": 111.5
    }, {
        "classRank": 42,
        "schoolRank": 137,
        "score": 111
    }, {
        "classRank": 43,
        "schoolRank": 138,
        "score": 110.5
    }, {
        "classRank": 44,
        "schoolRank": 148,
        "score": 105
    }, {
        "classRank": 45,
        "schoolRank": 152,
        "score": 103
    }],
    "高一11班": [{
        "classRank": 1,
        "schoolRank": 3,
        "score": 98.5
    }, {
        "classRank": 2,
        "schoolRank": 3,
        "score": 98.5
    }, {
        "classRank": 3,
        "schoolRank": 5,
        "score": 97.5
    }, {
        "classRank": 4,
        "schoolRank": 5,
        "score": 97.5
    }, {
        "classRank": 5,
        "schoolRank": 12,
        "score": 94
    }, {
        "classRank": 6,
        "schoolRank": 14,
        "score": 93
    }, {
        "classRank": 7,
        "schoolRank": 15,
        "score": 92.5
    }, {
        "classRank": 8,
        "schoolRank": 30,
        "score": 85
    }, {
        "classRank": 9,
        "schoolRank": 30,
        "score": 85
    }, {
        "classRank": 10,
        "schoolRank": 32,
        "score": 84
    }, {
        "classRank": 11,
        "schoolRank": 33,
        "score": 83.5
    }, {
        "classRank": 12,
        "schoolRank": 33,
        "score": 83.5
    }, {
        "classRank": 13,
        "schoolRank": 34,
        "score": 83
    }, {
        "classRank": 14,
        "schoolRank": 35,
        "score": 82.5
    }, {
        "classRank": 15,
        "schoolRank": 41,
        "score": 79.5
    }, {
        "classRank": 16,
        "schoolRank": 43,
        "score": 78.5
    }, {
        "classRank": 17,
        "schoolRank": 44,
        "score": 78
    }, {
        "classRank": 18,
        "schoolRank": 52,
        "score": 74
    }, {
        "classRank": 19,
        "schoolRank": 54,
        "score": 72
    }, {
        "classRank": 20,
        "schoolRank": 57,
        "score": 70.5
    }, {
        "classRank": 21,
        "schoolRank": 60,
        "score": 69
    }, {
        "classRank": 22,
        "schoolRank": 62,
        "score": 68
    }, {
        "classRank": 23,
        "schoolRank": 67,
        "score": 65.5
    }, {
        "classRank": 24,
        "schoolRank": 73,
        "score": 61.5
    }, {
        "classRank": 25,
        "schoolRank": 73,
        "score": 61.5
    }, {
        "classRank": 26,
        "schoolRank": 76,
        "score": 60
    }, {
        "classRank": 27,
        "schoolRank": 78,
        "score": 59
    }, {
        "classRank": 28,
        "schoolRank": 80,
        "score": 57.5
    }, {
        "classRank": 29,
        "schoolRank": 86,
        "score": 54
    }, {
        "classRank": 30,
        "schoolRank": 87,
        "score": 52.5
    }, {
        "classRank": 31,
        "schoolRank": 89,
        "score": 51.5
    }, {
        "classRank": 32,
        "schoolRank": 110,
        "score": 124.5
    }, {
        "classRank": 33,
        "schoolRank": 118,
        "score": 120.5
    }, {
        "classRank": 34,
        "schoolRank": 129,
        "score": 115
    }, {
        "classRank": 35,
        "schoolRank": 132,
        "score": 113.5
    }, {
        "classRank": 36,
        "schoolRank": 133,
        "score": 113
    }, {
        "classRank": 37,
        "schoolRank": 135,
        "score": 112
    }, {
        "classRank": 38,
        "schoolRank": 142,
        "score": 108.5
    }, {
        "classRank": 39,
        "schoolRank": 145,
        "score": 107
    }, {
        "classRank": 40,
        "schoolRank": 146,
        "score": 106.5
    }, {
        "classRank": 41,
        "schoolRank": 149,
        "score": 104.5
    }, {
        "classRank": 42,
        "schoolRank": 150,
        "score": 104
    }, {
        "classRank": 43,
        "schoolRank": 154,
        "score": 102
    }, {
        "classRank": 44,
        "schoolRank": 158,
        "score": 100
    }],
    "高一01班": [{
        "classRank": 1,
        "schoolRank": 1,
        "score": 99.5
    }, {
        "classRank": 2,
        "schoolRank": 7,
        "score": 96.5
    }, {
        "classRank": 3,
        "schoolRank": 14,
        "score": 93
    }, {
        "classRank": 4,
        "schoolRank": 15,
        "score": 92.5
    }, {
        "classRank": 5,
        "schoolRank": 17,
        "score": 91.5
    }, {
        "classRank": 6,
        "schoolRank": 19,
        "score": 90.5
    }, {
        "classRank": 7,
        "schoolRank": 21,
        "score": 89.5
    }, {
        "classRank": 8,
        "schoolRank": 21,
        "score": 89.5
    }, {
        "classRank": 9,
        "schoolRank": 23,
        "score": 88.5
    }, {
        "classRank": 10,
        "schoolRank": 28,
        "score": 86
    }, {
        "classRank": 11,
        "schoolRank": 31,
        "score": 84.5
    }, {
        "classRank": 12,
        "schoolRank": 33,
        "score": 83.5
    }, {
        "classRank": 13,
        "schoolRank": 36,
        "score": 82
    }, {
        "classRank": 14,
        "schoolRank": 42,
        "score": 79
    }, {
        "classRank": 15,
        "schoolRank": 45,
        "score": 77.5
    }, {
        "classRank": 16,
        "schoolRank": 57,
        "score": 70.5
    }, {
        "classRank": 17,
        "schoolRank": 57,
        "score": 70.5
    }, {
        "classRank": 18,
        "schoolRank": 91,
        "score": 140.5
    }, {
        "classRank": 19,
        "schoolRank": 95,
        "score": 135.5
    }, {
        "classRank": 20,
        "schoolRank": 97,
        "score": 133.5
    }, {
        "classRank": 21,
        "schoolRank": 101,
        "score": 129
    }, {
        "classRank": 22,
        "schoolRank": 106,
        "score": 126.5
    }, {
        "classRank": 23,
        "schoolRank": 107,
        "score": 126
    }, {
        "classRank": 24,
        "schoolRank": 108,
        "score": 125.5
    }, {
        "classRank": 25,
        "schoolRank": 112,
        "score": 123.5
    }, {
        "classRank": 26,
        "schoolRank": 117,
        "score": 121
    }, {
        "classRank": 27,
        "schoolRank": 117,
        "score": 121
    }, {
        "classRank": 28,
        "schoolRank": 117,
        "score": 121
    }, {
        "classRank": 29,
        "schoolRank": 119,
        "score": 120
    }, {
        "classRank": 30,
        "schoolRank": 122,
        "score": 118.5
    }, {
        "classRank": 31,
        "schoolRank": 131,
        "score": 114
    }, {
        "classRank": 32,
        "schoolRank": 142,
        "score": 108.5
    }, {
        "classRank": 33,
        "schoolRank": 143,
        "score": 108
    }, {
        "classRank": 34,
        "schoolRank": 144,
        "score": 107.5
    }, {
        "classRank": 35,
        "schoolRank": 145,
        "score": 107
    }, {
        "classRank": 36,
        "schoolRank": 145,
        "score": 107
    }, {
        "classRank": 37,
        "schoolRank": 148,
        "score": 105
    }, {
        "classRank": 38,
        "schoolRank": 148,
        "score": 105
    }, {
        "classRank": 39,
        "schoolRank": 148,
        "score": 105
    }, {
        "classRank": 40,
        "schoolRank": 149,
        "score": 104.5
    }, {
        "classRank": 41,
        "schoolRank": 158,
        "score": 100
    }],
    "高一12班": [{
        "classRank": 1,
        "schoolRank": 1,
        "score": 99.5
    }, {
        "classRank": 2,
        "schoolRank": 4,
        "score": 98
    }, {
        "classRank": 3,
        "schoolRank": 5,
        "score": 97.5
    }, {
        "classRank": 4,
        "schoolRank": 8,
        "score": 96
    }, {
        "classRank": 5,
        "schoolRank": 10,
        "score": 95
    }, {
        "classRank": 6,
        "schoolRank": 13,
        "score": 93.5
    }, {
        "classRank": 7,
        "schoolRank": 16,
        "score": 92
    }, {
        "classRank": 8,
        "schoolRank": 21,
        "score": 89.5
    }, {
        "classRank": 9,
        "schoolRank": 24,
        "score": 88
    }, {
        "classRank": 10,
        "schoolRank": 26,
        "score": 87
    }, {
        "classRank": 11,
        "schoolRank": 30,
        "score": 85
    }, {
        "classRank": 12,
        "schoolRank": 31,
        "score": 84.5
    }, {
        "classRank": 13,
        "schoolRank": 38,
        "score": 81
    }, {
        "classRank": 14,
        "schoolRank": 41,
        "score": 79.5
    }, {
        "classRank": 15,
        "schoolRank": 42,
        "score": 79
    }, {
        "classRank": 16,
        "schoolRank": 44,
        "score": 78
    }, {
        "classRank": 17,
        "schoolRank": 51,
        "score": 74.5
    }, {
        "classRank": 18,
        "schoolRank": 52,
        "score": 74
    }, {
        "classRank": 19,
        "schoolRank": 53,
        "score": 73.5
    }, {
        "classRank": 20,
        "schoolRank": 54,
        "score": 72
    }, {
        "classRank": 21,
        "schoolRank": 63,
        "score": 67.5
    }, {
        "classRank": 22,
        "schoolRank": 63,
        "score": 67.5
    }, {
        "classRank": 23,
        "schoolRank": 66,
        "score": 66
    }, {
        "classRank": 24,
        "schoolRank": 68,
        "score": 65
    }, {
        "classRank": 25,
        "schoolRank": 71,
        "score": 63
    }, {
        "classRank": 26,
        "schoolRank": 77,
        "score": 59.5
    }, {
        "classRank": 27,
        "schoolRank": 77,
        "score": 59.5
    }, {
        "classRank": 28,
        "schoolRank": 79,
        "score": 58.5
    }, {
        "classRank": 29,
        "schoolRank": 82,
        "score": 56.5
    }, {
        "classRank": 30,
        "schoolRank": 82,
        "score": 56.5
    }, {
        "classRank": 31,
        "schoolRank": 83,
        "score": 56
    }, {
        "classRank": 32,
        "schoolRank": 84,
        "score": 55.5
    }, {
        "classRank": 33,
        "schoolRank": 85,
        "score": 55
    }, {
        "classRank": 34,
        "schoolRank": 87,
        "score": 52.5
    }, {
        "classRank": 35,
        "schoolRank": 89,
        "score": 51.5
    }, {
        "classRank": 36,
        "schoolRank": 90,
        "score": 50.5
    }, {
        "classRank": 37,
        "schoolRank": 124,
        "score": 117.5
    }, {
        "classRank": 38,
        "schoolRank": 124,
        "score": 117.5
    }, {
        "classRank": 39,
        "schoolRank": 130,
        "score": 114.5
    }, {
        "classRank": 40,
        "schoolRank": 131,
        "score": 114
    }, {
        "classRank": 41,
        "schoolRank": 137,
        "score": 111
    }, {
        "classRank": 42,
        "schoolRank": 137,
        "score": 111
    }, {
        "classRank": 43,
        "schoolRank": 139,
        "score": 110
    }, {
        "classRank": 44,
        "schoolRank": 141,
        "score": 109
    }, {
        "classRank": 45,
        "schoolRank": 147,
        "score": 106
    }, {
        "classRank": 46,
        "schoolRank": 150,
        "score": 104
    }, {
        "classRank": 47,
        "schoolRank": 156,
        "score": 101
    }],
    "高一10班": [{
        "classRank": 1,
        "schoolRank": 2,
        "score": 99
    }, {
        "classRank": 2,
        "schoolRank": 4,
        "score": 98
    }, {
        "classRank": 3,
        "schoolRank": 9,
        "score": 95.5
    }, {
        "classRank": 4,
        "schoolRank": 15,
        "score": 92.5
    }, {
        "classRank": 5,
        "schoolRank": 16,
        "score": 92
    }, {
        "classRank": 6,
        "schoolRank": 20,
        "score": 90
    }, {
        "classRank": 7,
        "schoolRank": 29,
        "score": 85.5
    }, {
        "classRank": 8,
        "schoolRank": 35,
        "score": 82.5
    }, {
        "classRank": 9,
        "schoolRank": 36,
        "score": 82
    }, {
        "classRank": 10,
        "schoolRank": 36,
        "score": 82
    }, {
        "classRank": 11,
        "schoolRank": 39,
        "score": 80.5
    }, {
        "classRank": 12,
        "schoolRank": 40,
        "score": 80
    }, {
        "classRank": 13,
        "schoolRank": 44,
        "score": 78
    }, {
        "classRank": 14,
        "schoolRank": 50,
        "score": 75
    }, {
        "classRank": 15,
        "schoolRank": 52,
        "score": 74
    }, {
        "classRank": 16,
        "schoolRank": 66,
        "score": 66
    }, {
        "classRank": 17,
        "schoolRank": 74,
        "score": 61
    }, {
        "classRank": 18,
        "schoolRank": 75,
        "score": 60.5
    }, {
        "classRank": 19,
        "schoolRank": 114,
        "score": 122.5
    }, {
        "classRank": 20,
        "schoolRank": 115,
        "score": 122
    }, {
        "classRank": 21,
        "schoolRank": 125,
        "score": 117
    }, {
        "classRank": 22,
        "schoolRank": 125,
        "score": 117
    }, {
        "classRank": 23,
        "schoolRank": 128,
        "score": 115.5
    }, {
        "classRank": 24,
        "schoolRank": 138,
        "score": 110.5
    }, {
        "classRank": 25,
        "schoolRank": 141,
        "score": 109
    }, {
        "classRank": 26,
        "schoolRank": 142,
        "score": 108.5
    }, {
        "classRank": 27,
        "schoolRank": 143,
        "score": 108
    }, {
        "classRank": 28,
        "schoolRank": 145,
        "score": 107
    }, {
        "classRank": 29,
        "schoolRank": 148,
        "score": 105
    }, {
        "classRank": 30,
        "schoolRank": 151,
        "score": 103.5
    }, {
        "classRank": 31,
        "schoolRank": 154,
        "score": 102
    }, {
        "classRank": 32,
        "schoolRank": 156,
        "score": 101
    }, {
        "classRank": 33,
        "schoolRank": 158,
        "score": 100
    }, {
        "classRank": 34,
        "schoolRank": 158,
        "score": 100
    }, {
        "classRank": 35,
        "schoolRank": 158,
        "score": 100
    }],
    "高一04班": [{
        "classRank": 1,
        "schoolRank": 2,
        "score": 99
    }, {
        "classRank": 2,
        "schoolRank": 7,
        "score": 96.5
    }, {
        "classRank": 3,
        "schoolRank": 12,
        "score": 94
    }, {
        "classRank": 4,
        "schoolRank": 17,
        "score": 91.5
    }, {
        "classRank": 5,
        "schoolRank": 20,
        "score": 90
    }, {
        "classRank": 6,
        "schoolRank": 23,
        "score": 88.5
    }, {
        "classRank": 7,
        "schoolRank": 25,
        "score": 87.5
    }, {
        "classRank": 8,
        "schoolRank": 27,
        "score": 86.5
    }, {
        "classRank": 9,
        "schoolRank": 28,
        "score": 86
    }, {
        "classRank": 10,
        "schoolRank": 35,
        "score": 82.5
    }, {
        "classRank": 11,
        "schoolRank": 39,
        "score": 80.5
    }, {
        "classRank": 12,
        "schoolRank": 43,
        "score": 78.5
    }, {
        "classRank": 13,
        "schoolRank": 49,
        "score": 75.5
    }, {
        "classRank": 14,
        "schoolRank": 100,
        "score": 130
    }, {
        "classRank": 15,
        "schoolRank": 103,
        "score": 128
    }, {
        "classRank": 16,
        "schoolRank": 107,
        "score": 126
    }, {
        "classRank": 17,
        "schoolRank": 109,
        "score": 125
    }, {
        "classRank": 18,
        "schoolRank": 116,
        "score": 121.5
    }, {
        "classRank": 19,
        "schoolRank": 119,
        "score": 120
    }, {
        "classRank": 20,
        "schoolRank": 120,
        "score": 119.5
    }, {
        "classRank": 21,
        "schoolRank": 120,
        "score": 119.5
    }, {
        "classRank": 22,
        "schoolRank": 124,
        "score": 117.5
    }, {
        "classRank": 23,
        "schoolRank": 127,
        "score": 116
    }, {
        "classRank": 24,
        "schoolRank": 129,
        "score": 115
    }, {
        "classRank": 25,
        "schoolRank": 132,
        "score": 113.5
    }, {
        "classRank": 26,
        "schoolRank": 133,
        "score": 113
    }, {
        "classRank": 27,
        "schoolRank": 140,
        "score": 109.5
    }, {
        "classRank": 28,
        "schoolRank": 146,
        "score": 106.5
    }, {
        "classRank": 29,
        "schoolRank": 149,
        "score": 104.5
    }, {
        "classRank": 30,
        "schoolRank": 150,
        "score": 104
    }, {
        "classRank": 31,
        "schoolRank": 152,
        "score": 103
    }, {
        "classRank": 32,
        "schoolRank": 155,
        "score": 101.5
    }, {
        "classRank": 33,
        "schoolRank": 156,
        "score": 101
    }, {
        "classRank": 34,
        "schoolRank": 156,
        "score": 101
    }, {
        "classRank": 35,
        "schoolRank": 157,
        "score": 100.5
    }],
    "高一05班": [{
        "classRank": 1,
        "schoolRank": 8,
        "score": 96
    }, {
        "classRank": 2,
        "schoolRank": 10,
        "score": 95
    }, {
        "classRank": 3,
        "schoolRank": 19,
        "score": 90.5
    }, {
        "classRank": 4,
        "schoolRank": 19,
        "score": 90.5
    }, {
        "classRank": 5,
        "schoolRank": 24,
        "score": 88
    }, {
        "classRank": 6,
        "schoolRank": 25,
        "score": 87.5
    }, {
        "classRank": 7,
        "schoolRank": 28,
        "score": 86
    }, {
        "classRank": 8,
        "schoolRank": 31,
        "score": 84.5
    }, {
        "classRank": 9,
        "schoolRank": 32,
        "score": 84
    }, {
        "classRank": 10,
        "schoolRank": 32,
        "score": 84
    }, {
        "classRank": 11,
        "schoolRank": 34,
        "score": 83
    }, {
        "classRank": 12,
        "schoolRank": 39,
        "score": 80.5
    }, {
        "classRank": 13,
        "schoolRank": 43,
        "score": 78.5
    }, {
        "classRank": 14,
        "schoolRank": 53,
        "score": 73.5
    }, {
        "classRank": 15,
        "schoolRank": 54,
        "score": 72
    }, {
        "classRank": 16,
        "schoolRank": 62,
        "score": 68
    }, {
        "classRank": 17,
        "schoolRank": 63,
        "score": 67.5
    }, {
        "classRank": 18,
        "schoolRank": 65,
        "score": 66.5
    }, {
        "classRank": 19,
        "schoolRank": 96,
        "score": 134.5
    }, {
        "classRank": 20,
        "schoolRank": 104,
        "score": 127.5
    }, {
        "classRank": 21,
        "schoolRank": 107,
        "score": 126
    }, {
        "classRank": 22,
        "schoolRank": 108,
        "score": 125.5
    }, {
        "classRank": 23,
        "schoolRank": 111,
        "score": 124
    }, {
        "classRank": 24,
        "schoolRank": 115,
        "score": 122
    }, {
        "classRank": 25,
        "schoolRank": 117,
        "score": 121
    }, {
        "classRank": 26,
        "schoolRank": 121,
        "score": 119
    }, {
        "classRank": 27,
        "schoolRank": 121,
        "score": 119
    }, {
        "classRank": 28,
        "schoolRank": 121,
        "score": 119
    }, {
        "classRank": 29,
        "schoolRank": 130,
        "score": 114.5
    }, {
        "classRank": 30,
        "schoolRank": 133,
        "score": 113
    }, {
        "classRank": 31,
        "schoolRank": 140,
        "score": 109.5
    }, {
        "classRank": 32,
        "schoolRank": 142,
        "score": 108.5
    }, {
        "classRank": 33,
        "schoolRank": 144,
        "score": 107.5
    }, {
        "classRank": 34,
        "schoolRank": 151,
        "score": 103.5
    }, {
        "classRank": 35,
        "schoolRank": 152,
        "score": 103
    }, {
        "classRank": 36,
        "schoolRank": 155,
        "score": 101.5
    }, {
        "classRank": 37,
        "schoolRank": 157,
        "score": 100.5
    }, {
        "classRank": 38,
        "schoolRank": 158,
        "score": 100
    }],
    "高一02班": [{
        "classRank": 1,
        "schoolRank": 2,
        "score": 99
    }, {
        "classRank": 2,
        "schoolRank": 6,
        "score": 97
    }, {
        "classRank": 3,
        "schoolRank": 8,
        "score": 96
    }, {
        "classRank": 4,
        "schoolRank": 11,
        "score": 94.5
    }, {
        "classRank": 5,
        "schoolRank": 18,
        "score": 91
    }, {
        "classRank": 6,
        "schoolRank": 19,
        "score": 90.5
    }, {
        "classRank": 7,
        "schoolRank": 20,
        "score": 90
    }, {
        "classRank": 8,
        "schoolRank": 20,
        "score": 90
    }, {
        "classRank": 9,
        "schoolRank": 21,
        "score": 89.5
    }, {
        "classRank": 10,
        "schoolRank": 24,
        "score": 88
    }, {
        "classRank": 11,
        "schoolRank": 32,
        "score": 84
    }, {
        "classRank": 12,
        "schoolRank": 33,
        "score": 83.5
    }, {
        "classRank": 13,
        "schoolRank": 36,
        "score": 82
    }, {
        "classRank": 14,
        "schoolRank": 37,
        "score": 81.5
    }, {
        "classRank": 15,
        "schoolRank": 43,
        "score": 78.5
    }, {
        "classRank": 16,
        "schoolRank": 92,
        "score": 139
    }, {
        "classRank": 17,
        "schoolRank": 93,
        "score": 137.5
    }, {
        "classRank": 18,
        "schoolRank": 98,
        "score": 133
    }, {
        "classRank": 19,
        "schoolRank": 99,
        "score": 131.5
    }, {
        "classRank": 20,
        "schoolRank": 107,
        "score": 126
    }, {
        "classRank": 21,
        "schoolRank": 107,
        "score": 126
    }, {
        "classRank": 22,
        "schoolRank": 107,
        "score": 126
    }, {
        "classRank": 23,
        "schoolRank": 121,
        "score": 119
    }, {
        "classRank": 24,
        "schoolRank": 122,
        "score": 118.5
    }, {
        "classRank": 25,
        "schoolRank": 126,
        "score": 116.5
    }, {
        "classRank": 26,
        "schoolRank": 130,
        "score": 114.5
    }, {
        "classRank": 27,
        "schoolRank": 131,
        "score": 114
    }, {
        "classRank": 28,
        "schoolRank": 133,
        "score": 113
    }, {
        "classRank": 29,
        "schoolRank": 133,
        "score": 113
    }, {
        "classRank": 30,
        "schoolRank": 135,
        "score": 112
    }, {
        "classRank": 31,
        "schoolRank": 141,
        "score": 109
    }, {
        "classRank": 32,
        "schoolRank": 147,
        "score": 106
    }, {
        "classRank": 33,
        "schoolRank": 148,
        "score": 105
    }, {
        "classRank": 34,
        "schoolRank": 153,
        "score": 102.5
    }, {
        "classRank": 35,
        "schoolRank": 156,
        "score": 101
    }, {
        "classRank": 36,
        "schoolRank": 157,
        "score": 100.5
    }],
    "高一13班": [{
        "classRank": 1,
        "schoolRank": 5,
        "score": 97.5
    }, {
        "classRank": 2,
        "schoolRank": 5,
        "score": 97.5
    }, {
        "classRank": 3,
        "schoolRank": 8,
        "score": 96
    }, {
        "classRank": 4,
        "schoolRank": 10,
        "score": 95
    }, {
        "classRank": 5,
        "schoolRank": 12,
        "score": 94
    }, {
        "classRank": 6,
        "schoolRank": 12,
        "score": 94
    }, {
        "classRank": 7,
        "schoolRank": 18,
        "score": 91
    }, {
        "classRank": 8,
        "schoolRank": 22,
        "score": 89
    }, {
        "classRank": 9,
        "schoolRank": 22,
        "score": 89
    }, {
        "classRank": 10,
        "schoolRank": 27,
        "score": 86.5
    }, {
        "classRank": 11,
        "schoolRank": 32,
        "score": 84
    }, {
        "classRank": 12,
        "schoolRank": 35,
        "score": 82.5
    }, {
        "classRank": 13,
        "schoolRank": 36,
        "score": 82
    }, {
        "classRank": 14,
        "schoolRank": 39,
        "score": 80.5
    }, {
        "classRank": 15,
        "schoolRank": 41,
        "score": 79.5
    }, {
        "classRank": 16,
        "schoolRank": 42,
        "score": 79
    }, {
        "classRank": 17,
        "schoolRank": 49,
        "score": 75.5
    }, {
        "classRank": 18,
        "schoolRank": 53,
        "score": 73.5
    }, {
        "classRank": 19,
        "schoolRank": 54,
        "score": 72
    }, {
        "classRank": 20,
        "schoolRank": 56,
        "score": 71
    }, {
        "classRank": 21,
        "schoolRank": 57,
        "score": 70.5
    }, {
        "classRank": 22,
        "schoolRank": 58,
        "score": 70
    }, {
        "classRank": 23,
        "schoolRank": 59,
        "score": 69.5
    }, {
        "classRank": 24,
        "schoolRank": 61,
        "score": 68.5
    }, {
        "classRank": 25,
        "schoolRank": 62,
        "score": 68
    }, {
        "classRank": 26,
        "schoolRank": 69,
        "score": 64.5
    }, {
        "classRank": 27,
        "schoolRank": 72,
        "score": 62
    }, {
        "classRank": 28,
        "schoolRank": 73,
        "score": 61.5
    }, {
        "classRank": 29,
        "schoolRank": 79,
        "score": 58.5
    }, {
        "classRank": 30,
        "schoolRank": 81,
        "score": 57
    }, {
        "classRank": 31,
        "schoolRank": 81,
        "score": 57
    }, {
        "classRank": 32,
        "schoolRank": 84,
        "score": 55.5
    }, {
        "classRank": 33,
        "schoolRank": 88,
        "score": 52
    }, {
        "classRank": 34,
        "schoolRank": 136,
        "score": 111.5
    }, {
        "classRank": 35,
        "schoolRank": 136,
        "score": 111.5
    }, {
        "classRank": 36,
        "schoolRank": 140,
        "score": 109.5
    }, {
        "classRank": 37,
        "schoolRank": 140,
        "score": 109.5
    }, {
        "classRank": 38,
        "schoolRank": 141,
        "score": 109
    }, {
        "classRank": 39,
        "schoolRank": 142,
        "score": 108.5
    }, {
        "classRank": 40,
        "schoolRank": 144,
        "score": 107.5
    }, {
        "classRank": 41,
        "schoolRank": 147,
        "score": 106
    }, {
        "classRank": 42,
        "schoolRank": 157,
        "score": 100.5
    }],
    "高一03班": [{
        "classRank": 1,
        "schoolRank": 5,
        "score": 97.5
    }, {
        "classRank": 2,
        "schoolRank": 6,
        "score": 97
    }, {
        "classRank": 3,
        "schoolRank": 9,
        "score": 95.5
    }, {
        "classRank": 4,
        "schoolRank": 9,
        "score": 95.5
    }, {
        "classRank": 5,
        "schoolRank": 11,
        "score": 94.5
    }, {
        "classRank": 6,
        "schoolRank": 12,
        "score": 94
    }, {
        "classRank": 7,
        "schoolRank": 14,
        "score": 93
    }, {
        "classRank": 8,
        "schoolRank": 22,
        "score": 89
    }, {
        "classRank": 9,
        "schoolRank": 22,
        "score": 89
    }, {
        "classRank": 10,
        "schoolRank": 27,
        "score": 86.5
    }, {
        "classRank": 11,
        "schoolRank": 31,
        "score": 84.5
    }, {
        "classRank": 12,
        "schoolRank": 33,
        "score": 83.5
    }, {
        "classRank": 13,
        "schoolRank": 33,
        "score": 83.5
    }, {
        "classRank": 14,
        "schoolRank": 39,
        "score": 80.5
    }, {
        "classRank": 15,
        "schoolRank": 42,
        "score": 79
    }, {
        "classRank": 16,
        "schoolRank": 43,
        "score": 78.5
    }, {
        "classRank": 17,
        "schoolRank": 46,
        "score": 77
    }, {
        "classRank": 18,
        "schoolRank": 48,
        "score": 76
    }, {
        "classRank": 19,
        "schoolRank": 94,
        "score": 136
    }, {
        "classRank": 20,
        "schoolRank": 102,
        "score": 128.5
    }, {
        "classRank": 21,
        "schoolRank": 110,
        "score": 124.5
    }, {
        "classRank": 22,
        "schoolRank": 118,
        "score": 120.5
    }, {
        "classRank": 23,
        "schoolRank": 119,
        "score": 120
    }, {
        "classRank": 24,
        "schoolRank": 123,
        "score": 118
    }, {
        "classRank": 25,
        "schoolRank": 123,
        "score": 118
    }, {
        "classRank": 26,
        "schoolRank": 124,
        "score": 117.5
    }, {
        "classRank": 27,
        "schoolRank": 127,
        "score": 116
    }, {
        "classRank": 28,
        "schoolRank": 129,
        "score": 115
    }, {
        "classRank": 29,
        "schoolRank": 131,
        "score": 114
    }, {
        "classRank": 30,
        "schoolRank": 132,
        "score": 113.5
    }, {
        "classRank": 31,
        "schoolRank": 133,
        "score": 113
    }, {
        "classRank": 32,
        "schoolRank": 136,
        "score": 111.5
    }, {
        "classRank": 33,
        "schoolRank": 138,
        "score": 110.5
    }, {
        "classRank": 34,
        "schoolRank": 144,
        "score": 107.5
    }, {
        "classRank": 35,
        "schoolRank": 146,
        "score": 106.5
    }, {
        "classRank": 36,
        "schoolRank": 154,
        "score": 102
    }, {
        "classRank": 37,
        "schoolRank": 155,
        "score": 101.5
    }]
}

var gy1 = []
getyk(data, gy1);
//数轴，应当是y是年级排名，x是班级排名，length是每个班级
//console.log(gy1);
setMapS1(gy1, '语文', 'm1-1');
var gy2 = [];
data = {
    "高一08班": [{
            "classRank": 1,
            "schoolRank": 3,
            "score": 98.5
        },
        {
            "classRank": 2,
            "schoolRank": 5,
            "score": 97.5
        },
        {
            "classRank": 3,
            "schoolRank": 9,
            "score": 95.5
        },
        {
            "classRank": 4,
            "schoolRank": 10,
            "score": 95
        },
        {
            "classRank": 5,
            "schoolRank": 15,
            "score": 92.5
        },
        {
            "classRank": 6,
            "schoolRank": 18,
            "score": 91
        },
        {
            "classRank": 7,
            "schoolRank": 20,
            "score": 90
        },
        {
            "classRank": 8,
            "schoolRank": 23,
            "score": 88.5
        },
        {
            "classRank": 9,
            "schoolRank": 24,
            "score": 88
        },
        {
            "classRank": 10,
            "schoolRank": 25,
            "score": 87.5
        },
        {
            "classRank": 11,
            "schoolRank": 32,
            "score": 84
        },
        {
            "classRank": 12,
            "schoolRank": 35,
            "score": 82.5
        },
        {
            "classRank": 13,
            "schoolRank": 35,
            "score": 82.5
        },
        {
            "classRank": 14,
            "schoolRank": 38,
            "score": 81
        },
        {
            "classRank": 15,
            "schoolRank": 44,
            "score": 78
        },
        {
            "classRank": 16,
            "schoolRank": 45,
            "score": 77.5
        },
        {
            "classRank": 17,
            "schoolRank": 49,
            "score": 75.5
        },
        {
            "classRank": 18,
            "schoolRank": 50,
            "score": 75
        },
        {
            "classRank": 19,
            "schoolRank": 51,
            "score": 74.5
        },
        {
            "classRank": 20,
            "schoolRank": 57,
            "score": 71.5
        },
        {
            "classRank": 21,
            "schoolRank": 57,
            "score": 71.5
        },
        {
            "classRank": 22,
            "schoolRank": 113,
            "score": 125
        },
        {
            "classRank": 23,
            "schoolRank": 114,
            "score": 124.5
        },
        {
            "classRank": 24,
            "schoolRank": 121,
            "score": 121
        },
        {
            "classRank": 25,
            "schoolRank": 122,
            "score": 120.5
        },
        {
            "classRank": 26,
            "schoolRank": 130,
            "score": 116.5
        },
        {
            "classRank": 27,
            "schoolRank": 132,
            "score": 115.5
        },
        {
            "classRank": 28,
            "schoolRank": 132,
            "score": 115.5
        },
        {
            "classRank": 29,
            "schoolRank": 144,
            "score": 109.5
        },
        {
            "classRank": 30,
            "schoolRank": 146,
            "score": 108
        },
        {
            "classRank": 31,
            "schoolRank": 148,
            "score": 107
        },
        {
            "classRank": 32,
            "schoolRank": 152,
            "score": 105
        },
        {
            "classRank": 33,
            "schoolRank": 154,
            "score": 104
        },
        {
            "classRank": 34,
            "schoolRank": 156,
            "score": 103
        },
        {
            "classRank": 35,
            "schoolRank": 159,
            "score": 101.5
        },
        {
            "classRank": 36,
            "schoolRank": 160,
            "score": 101
        },
        {
            "classRank": 37,
            "schoolRank": 161,
            "score": 100.5
        }
    ],
    "高一09班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 99.5
        },
        {
            "classRank": 2,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 3,
            "schoolRank": 10,
            "score": 95
        },
        {
            "classRank": 4,
            "schoolRank": 12,
            "score": 94
        },
        {
            "classRank": 5,
            "schoolRank": 13,
            "score": 93.5
        },
        {
            "classRank": 6,
            "schoolRank": 17,
            "score": 91.5
        },
        {
            "classRank": 7,
            "schoolRank": 22,
            "score": 89
        },
        {
            "classRank": 8,
            "schoolRank": 23,
            "score": 88.5
        },
        {
            "classRank": 9,
            "schoolRank": 24,
            "score": 88
        },
        {
            "classRank": 10,
            "schoolRank": 24,
            "score": 88
        },
        {
            "classRank": 11,
            "schoolRank": 28,
            "score": 86
        },
        {
            "classRank": 12,
            "schoolRank": 40,
            "score": 80
        },
        {
            "classRank": 13,
            "schoolRank": 41,
            "score": 79.5
        },
        {
            "classRank": 14,
            "schoolRank": 41,
            "score": 79.5
        },
        {
            "classRank": 15,
            "schoolRank": 46,
            "score": 77
        },
        {
            "classRank": 16,
            "schoolRank": 48,
            "score": 76
        },
        {
            "classRank": 17,
            "schoolRank": 48,
            "score": 76
        },
        {
            "classRank": 18,
            "schoolRank": 49,
            "score": 75.5
        },
        {
            "classRank": 19,
            "schoolRank": 50,
            "score": 75
        },
        {
            "classRank": 20,
            "schoolRank": 52,
            "score": 74
        },
        {
            "classRank": 21,
            "schoolRank": 59,
            "score": 70.5
        },
        {
            "classRank": 22,
            "schoolRank": 66,
            "score": 66.5
        },
        {
            "classRank": 23,
            "schoolRank": 69,
            "score": 65
        },
        {
            "classRank": 24,
            "schoolRank": 72,
            "score": 63.5
        },
        {
            "classRank": 25,
            "schoolRank": 72,
            "score": 63.5
        },
        {
            "classRank": 26,
            "schoolRank": 75,
            "score": 60
        },
        {
            "classRank": 27,
            "schoolRank": 125,
            "score": 119
        },
        {
            "classRank": 28,
            "schoolRank": 126,
            "score": 118.5
        },
        {
            "classRank": 29,
            "schoolRank": 129,
            "score": 117
        },
        {
            "classRank": 30,
            "schoolRank": 137,
            "score": 113
        },
        {
            "classRank": 31,
            "schoolRank": 138,
            "score": 112.5
        },
        {
            "classRank": 32,
            "schoolRank": 138,
            "score": 112.5
        },
        {
            "classRank": 33,
            "schoolRank": 140,
            "score": 111.5
        },
        {
            "classRank": 34,
            "schoolRank": 142,
            "score": 110.5
        },
        {
            "classRank": 35,
            "schoolRank": 143,
            "score": 110
        },
        {
            "classRank": 36,
            "schoolRank": 144,
            "score": 109.5
        },
        {
            "classRank": 37,
            "schoolRank": 145,
            "score": 108.5
        },
        {
            "classRank": 38,
            "schoolRank": 149,
            "score": 106.5
        },
        {
            "classRank": 39,
            "schoolRank": 149,
            "score": 106.5
        },
        {
            "classRank": 40,
            "schoolRank": 152,
            "score": 105
        },
        {
            "classRank": 41,
            "schoolRank": 157,
            "score": 102.5
        }
    ],
    "高一06班": [{
            "classRank": 1,
            "schoolRank": 3,
            "score": 98.5
        },
        {
            "classRank": 2,
            "schoolRank": 5,
            "score": 97.5
        },
        {
            "classRank": 3,
            "schoolRank": 7,
            "score": 96.5
        },
        {
            "classRank": 4,
            "schoolRank": 19,
            "score": 90.5
        },
        {
            "classRank": 5,
            "schoolRank": 23,
            "score": 88.5
        },
        {
            "classRank": 6,
            "schoolRank": 24,
            "score": 88
        },
        {
            "classRank": 7,
            "schoolRank": 25,
            "score": 87.5
        },
        {
            "classRank": 8,
            "schoolRank": 27,
            "score": 86.5
        },
        {
            "classRank": 9,
            "schoolRank": 31,
            "score": 84.5
        },
        {
            "classRank": 10,
            "schoolRank": 37,
            "score": 81.5
        },
        {
            "classRank": 11,
            "schoolRank": 39,
            "score": 80.5
        },
        {
            "classRank": 12,
            "schoolRank": 41,
            "score": 79.5
        },
        {
            "classRank": 13,
            "schoolRank": 42,
            "score": 79
        },
        {
            "classRank": 14,
            "schoolRank": 42,
            "score": 79
        },
        {
            "classRank": 15,
            "schoolRank": 48,
            "score": 76
        },
        {
            "classRank": 16,
            "schoolRank": 52,
            "score": 74
        },
        {
            "classRank": 17,
            "schoolRank": 58,
            "score": 71
        },
        {
            "classRank": 18,
            "schoolRank": 102,
            "score": 131
        },
        {
            "classRank": 19,
            "schoolRank": 103,
            "score": 130.5
        },
        {
            "classRank": 20,
            "schoolRank": 112,
            "score": 125.5
        },
        {
            "classRank": 21,
            "schoolRank": 115,
            "score": 124
        },
        {
            "classRank": 22,
            "schoolRank": 120,
            "score": 121.5
        },
        {
            "classRank": 23,
            "schoolRank": 122,
            "score": 120.5
        },
        {
            "classRank": 24,
            "schoolRank": 124,
            "score": 119.5
        },
        {
            "classRank": 25,
            "schoolRank": 134,
            "score": 114.5
        },
        {
            "classRank": 26,
            "schoolRank": 134,
            "score": 114.5
        },
        {
            "classRank": 27,
            "schoolRank": 143,
            "score": 110
        },
        {
            "classRank": 28,
            "schoolRank": 147,
            "score": 107.5
        },
        {
            "classRank": 29,
            "schoolRank": 150,
            "score": 106
        },
        {
            "classRank": 30,
            "schoolRank": 158,
            "score": 102
        },
        {
            "classRank": 31,
            "schoolRank": 161,
            "score": 100.5
        },
        {
            "classRank": 32,
            "schoolRank": 161,
            "score": 100.5
        },
        {
            "classRank": 33,
            "schoolRank": 161,
            "score": 100.5
        },
        {
            "classRank": 34,
            "schoolRank": 162,
            "score": 100
        },
        {
            "classRank": 35,
            "schoolRank": 162,
            "score": 100
        },
        {
            "classRank": 36,
            "schoolRank": 162,
            "score": 100
        }
    ],
    "高一07班": [{
            "classRank": 1,
            "schoolRank": 7,
            "score": 96.5
        },
        {
            "classRank": 2,
            "schoolRank": 12,
            "score": 94
        },
        {
            "classRank": 3,
            "schoolRank": 14,
            "score": 93
        },
        {
            "classRank": 4,
            "schoolRank": 18,
            "score": 91
        },
        {
            "classRank": 5,
            "schoolRank": 21,
            "score": 89.5
        },
        {
            "classRank": 6,
            "schoolRank": 27,
            "score": 86.5
        },
        {
            "classRank": 7,
            "schoolRank": 30,
            "score": 85
        },
        {
            "classRank": 8,
            "schoolRank": 35,
            "score": 82.5
        },
        {
            "classRank": 9,
            "schoolRank": 35,
            "score": 82.5
        },
        {
            "classRank": 10,
            "schoolRank": 37,
            "score": 81.5
        },
        {
            "classRank": 11,
            "schoolRank": 38,
            "score": 81
        },
        {
            "classRank": 12,
            "schoolRank": 47,
            "score": 76.5
        },
        {
            "classRank": 13,
            "schoolRank": 48,
            "score": 76
        },
        {
            "classRank": 14,
            "schoolRank": 51,
            "score": 74.5
        },
        {
            "classRank": 15,
            "schoolRank": 58,
            "score": 71
        },
        {
            "classRank": 16,
            "schoolRank": 58,
            "score": 71
        },
        {
            "classRank": 17,
            "schoolRank": 62,
            "score": 68.5
        },
        {
            "classRank": 18,
            "schoolRank": 63,
            "score": 68
        },
        {
            "classRank": 19,
            "schoolRank": 66,
            "score": 66.5
        },
        {
            "classRank": 20,
            "schoolRank": 69,
            "score": 65
        },
        {
            "classRank": 21,
            "schoolRank": 70,
            "score": 64.5
        },
        {
            "classRank": 22,
            "schoolRank": 70,
            "score": 64.5
        },
        {
            "classRank": 23,
            "schoolRank": 80,
            "score": 57.5
        },
        {
            "classRank": 24,
            "schoolRank": 80,
            "score": 57.5
        },
        {
            "classRank": 25,
            "schoolRank": 81,
            "score": 57
        },
        {
            "classRank": 26,
            "schoolRank": 100,
            "score": 132.5
        },
        {
            "classRank": 27,
            "schoolRank": 115,
            "score": 124
        },
        {
            "classRank": 28,
            "schoolRank": 116,
            "score": 123.5
        },
        {
            "classRank": 29,
            "schoolRank": 118,
            "score": 122.5
        },
        {
            "classRank": 30,
            "schoolRank": 118,
            "score": 122.5
        },
        {
            "classRank": 31,
            "schoolRank": 120,
            "score": 121.5
        },
        {
            "classRank": 32,
            "schoolRank": 123,
            "score": 120
        },
        {
            "classRank": 33,
            "schoolRank": 139,
            "score": 112
        },
        {
            "classRank": 34,
            "schoolRank": 142,
            "score": 110.5
        },
        {
            "classRank": 35,
            "schoolRank": 145,
            "score": 108.5
        },
        {
            "classRank": 36,
            "schoolRank": 145,
            "score": 108.5
        },
        {
            "classRank": 37,
            "schoolRank": 147,
            "score": 107.5
        },
        {
            "classRank": 38,
            "schoolRank": 148,
            "score": 107
        },
        {
            "classRank": 39,
            "schoolRank": 150,
            "score": 106
        },
        {
            "classRank": 40,
            "schoolRank": 150,
            "score": 106
        },
        {
            "classRank": 41,
            "schoolRank": 157,
            "score": 102.5
        },
        {
            "classRank": 42,
            "schoolRank": 158,
            "score": 102
        },
        {
            "classRank": 43,
            "schoolRank": 158,
            "score": 102
        },
        {
            "classRank": 44,
            "schoolRank": 162,
            "score": 100
        },
        {
            "classRank": 45,
            "schoolRank": 162,
            "score": 100
        }
    ],
    "高一11班": [{
            "classRank": 1,
            "schoolRank": 3,
            "score": 98.5
        },
        {
            "classRank": 2,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 3,
            "schoolRank": 9,
            "score": 95.5
        },
        {
            "classRank": 4,
            "schoolRank": 9,
            "score": 95.5
        },
        {
            "classRank": 5,
            "schoolRank": 9,
            "score": 95.5
        },
        {
            "classRank": 6,
            "schoolRank": 12,
            "score": 94
        },
        {
            "classRank": 7,
            "schoolRank": 12,
            "score": 94
        },
        {
            "classRank": 8,
            "schoolRank": 18,
            "score": 91
        },
        {
            "classRank": 9,
            "schoolRank": 19,
            "score": 90.5
        },
        {
            "classRank": 10,
            "schoolRank": 20,
            "score": 90
        },
        {
            "classRank": 11,
            "schoolRank": 23,
            "score": 88.5
        },
        {
            "classRank": 12,
            "schoolRank": 25,
            "score": 87.5
        },
        {
            "classRank": 13,
            "schoolRank": 26,
            "score": 87
        },
        {
            "classRank": 14,
            "schoolRank": 30,
            "score": 85
        },
        {
            "classRank": 15,
            "schoolRank": 41,
            "score": 79.5
        },
        {
            "classRank": 16,
            "schoolRank": 45,
            "score": 77.5
        },
        {
            "classRank": 17,
            "schoolRank": 46,
            "score": 77
        },
        {
            "classRank": 18,
            "schoolRank": 58,
            "score": 71
        },
        {
            "classRank": 19,
            "schoolRank": 60,
            "score": 69.5
        },
        {
            "classRank": 20,
            "schoolRank": 60,
            "score": 69.5
        },
        {
            "classRank": 21,
            "schoolRank": 64,
            "score": 67.5
        },
        {
            "classRank": 22,
            "schoolRank": 67,
            "score": 66
        },
        {
            "classRank": 23,
            "schoolRank": 68,
            "score": 65.5
        },
        {
            "classRank": 24,
            "schoolRank": 68,
            "score": 65.5
        },
        {
            "classRank": 25,
            "schoolRank": 70,
            "score": 64.5
        },
        {
            "classRank": 26,
            "schoolRank": 71,
            "score": 64
        },
        {
            "classRank": 27,
            "schoolRank": 72,
            "score": 63.5
        },
        {
            "classRank": 28,
            "schoolRank": 73,
            "score": 62
        },
        {
            "classRank": 29,
            "schoolRank": 79,
            "score": 58
        },
        {
            "classRank": 30,
            "schoolRank": 84,
            "score": 55
        },
        {
            "classRank": 31,
            "schoolRank": 86,
            "score": 53.5
        },
        {
            "classRank": 32,
            "schoolRank": 87,
            "score": 52
        },
        {
            "classRank": 33,
            "schoolRank": 90,
            "score": 49
        },
        {
            "classRank": 34,
            "schoolRank": 130,
            "score": 116.5
        },
        {
            "classRank": 35,
            "schoolRank": 131,
            "score": 116
        },
        {
            "classRank": 36,
            "schoolRank": 133,
            "score": 115
        },
        {
            "classRank": 37,
            "schoolRank": 135,
            "score": 114
        },
        {
            "classRank": 38,
            "schoolRank": 138,
            "score": 112.5
        },
        {
            "classRank": 39,
            "schoolRank": 141,
            "score": 111
        },
        {
            "classRank": 40,
            "schoolRank": 142,
            "score": 110.5
        },
        {
            "classRank": 41,
            "schoolRank": 144,
            "score": 109.5
        },
        {
            "classRank": 42,
            "schoolRank": 149,
            "score": 106.5
        },
        {
            "classRank": 43,
            "schoolRank": 151,
            "score": 105.5
        },
        {
            "classRank": 44,
            "schoolRank": 161,
            "score": 100.5
        }
    ],
    "高一01班": [{
            "classRank": 1,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 2,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 3,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 4,
            "schoolRank": 10,
            "score": 95
        },
        {
            "classRank": 5,
            "schoolRank": 12,
            "score": 94
        },
        {
            "classRank": 6,
            "schoolRank": 22,
            "score": 89
        },
        {
            "classRank": 7,
            "schoolRank": 23,
            "score": 88.5
        },
        {
            "classRank": 8,
            "schoolRank": 24,
            "score": 88
        },
        {
            "classRank": 9,
            "schoolRank": 25,
            "score": 87.5
        },
        {
            "classRank": 10,
            "schoolRank": 26,
            "score": 87
        },
        {
            "classRank": 11,
            "schoolRank": 27,
            "score": 86.5
        },
        {
            "classRank": 12,
            "schoolRank": 28,
            "score": 86
        },
        {
            "classRank": 13,
            "schoolRank": 31,
            "score": 84.5
        },
        {
            "classRank": 14,
            "schoolRank": 39,
            "score": 80.5
        },
        {
            "classRank": 15,
            "schoolRank": 45,
            "score": 77.5
        },
        {
            "classRank": 16,
            "schoolRank": 46,
            "score": 77
        },
        {
            "classRank": 17,
            "schoolRank": 46,
            "score": 77
        },
        {
            "classRank": 18,
            "schoolRank": 48,
            "score": 76
        },
        {
            "classRank": 19,
            "schoolRank": 59,
            "score": 70.5
        },
        {
            "classRank": 20,
            "schoolRank": 95,
            "score": 142.5
        },
        {
            "classRank": 21,
            "schoolRank": 96,
            "score": 137.5
        },
        {
            "classRank": 22,
            "schoolRank": 97,
            "score": 135.5
        },
        {
            "classRank": 23,
            "schoolRank": 99,
            "score": 133
        },
        {
            "classRank": 24,
            "schoolRank": 103,
            "score": 130.5
        },
        {
            "classRank": 25,
            "schoolRank": 109,
            "score": 127
        },
        {
            "classRank": 26,
            "schoolRank": 117,
            "score": 123
        },
        {
            "classRank": 27,
            "schoolRank": 119,
            "score": 122
        },
        {
            "classRank": 28,
            "schoolRank": 121,
            "score": 121
        },
        {
            "classRank": 29,
            "schoolRank": 123,
            "score": 120
        },
        {
            "classRank": 30,
            "schoolRank": 123,
            "score": 120
        },
        {
            "classRank": 31,
            "schoolRank": 131,
            "score": 116
        },
        {
            "classRank": 32,
            "schoolRank": 132,
            "score": 115.5
        },
        {
            "classRank": 33,
            "schoolRank": 133,
            "score": 115
        },
        {
            "classRank": 34,
            "schoolRank": 134,
            "score": 114.5
        },
        {
            "classRank": 35,
            "schoolRank": 138,
            "score": 112.5
        },
        {
            "classRank": 36,
            "schoolRank": 139,
            "score": 112
        },
        {
            "classRank": 37,
            "schoolRank": 139,
            "score": 112
        },
        {
            "classRank": 38,
            "schoolRank": 144,
            "score": 109.5
        },
        {
            "classRank": 39,
            "schoolRank": 151,
            "score": 105.5
        },
        {
            "classRank": 40,
            "schoolRank": 151,
            "score": 105.5
        },
        {
            "classRank": 41,
            "schoolRank": 156,
            "score": 103
        }
    ],
    "高一12班": [{
            "classRank": 1,
            "schoolRank": 3,
            "score": 98.5
        },
        {
            "classRank": 2,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 3,
            "schoolRank": 11,
            "score": 94.5
        },
        {
            "classRank": 4,
            "schoolRank": 13,
            "score": 93.5
        },
        {
            "classRank": 5,
            "schoolRank": 13,
            "score": 93.5
        },
        {
            "classRank": 6,
            "schoolRank": 18,
            "score": 91
        },
        {
            "classRank": 7,
            "schoolRank": 18,
            "score": 91
        },
        {
            "classRank": 8,
            "schoolRank": 19,
            "score": 90.5
        },
        {
            "classRank": 9,
            "schoolRank": 20,
            "score": 90
        },
        {
            "classRank": 10,
            "schoolRank": 22,
            "score": 89
        },
        {
            "classRank": 11,
            "schoolRank": 37,
            "score": 81.5
        },
        {
            "classRank": 12,
            "schoolRank": 38,
            "score": 81
        },
        {
            "classRank": 13,
            "schoolRank": 40,
            "score": 80
        },
        {
            "classRank": 14,
            "schoolRank": 41,
            "score": 79.5
        },
        {
            "classRank": 15,
            "schoolRank": 42,
            "score": 79
        },
        {
            "classRank": 16,
            "schoolRank": 46,
            "score": 77
        },
        {
            "classRank": 17,
            "schoolRank": 54,
            "score": 73
        },
        {
            "classRank": 18,
            "schoolRank": 59,
            "score": 70.5
        },
        {
            "classRank": 19,
            "schoolRank": 61,
            "score": 69
        },
        {
            "classRank": 20,
            "schoolRank": 64,
            "score": 67.5
        },
        {
            "classRank": 21,
            "schoolRank": 70,
            "score": 64.5
        },
        {
            "classRank": 22,
            "schoolRank": 71,
            "score": 64
        },
        {
            "classRank": 23,
            "schoolRank": 74,
            "score": 60.5
        },
        {
            "classRank": 24,
            "schoolRank": 76,
            "score": 59.5
        },
        {
            "classRank": 25,
            "schoolRank": 77,
            "score": 59
        },
        {
            "classRank": 26,
            "schoolRank": 77,
            "score": 59
        },
        {
            "classRank": 27,
            "schoolRank": 77,
            "score": 59
        },
        {
            "classRank": 28,
            "schoolRank": 84,
            "score": 55
        },
        {
            "classRank": 29,
            "schoolRank": 85,
            "score": 54.5
        },
        {
            "classRank": 30,
            "schoolRank": 87,
            "score": 52
        },
        {
            "classRank": 31,
            "schoolRank": 89,
            "score": 49.5
        },
        {
            "classRank": 32,
            "schoolRank": 91,
            "score": 48.5
        },
        {
            "classRank": 33,
            "schoolRank": 92,
            "score": 48
        },
        {
            "classRank": 34,
            "schoolRank": 93,
            "score": 44.5
        },
        {
            "classRank": 35,
            "schoolRank": 94,
            "score": 43.5
        },
        {
            "classRank": 36,
            "schoolRank": 122,
            "score": 120.5
        },
        {
            "classRank": 37,
            "schoolRank": 124,
            "score": 119.5
        },
        {
            "classRank": 38,
            "schoolRank": 133,
            "score": 115
        },
        {
            "classRank": 39,
            "schoolRank": 133,
            "score": 115
        },
        {
            "classRank": 40,
            "schoolRank": 133,
            "score": 115
        },
        {
            "classRank": 41,
            "schoolRank": 136,
            "score": 113.5
        },
        {
            "classRank": 42,
            "schoolRank": 141,
            "score": 111
        },
        {
            "classRank": 43,
            "schoolRank": 145,
            "score": 108.5
        },
        {
            "classRank": 44,
            "schoolRank": 145,
            "score": 108.5
        },
        {
            "classRank": 45,
            "schoolRank": 147,
            "score": 107.5
        },
        {
            "classRank": 46,
            "schoolRank": 148,
            "score": 107
        },
        {
            "classRank": 47,
            "schoolRank": 149,
            "score": 106.5
        }
    ],
    "高一10班": [{
            "classRank": 1,
            "schoolRank": 2,
            "score": 99
        },
        {
            "classRank": 2,
            "schoolRank": 3,
            "score": 98.5
        },
        {
            "classRank": 3,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 4,
            "schoolRank": 13,
            "score": 93.5
        },
        {
            "classRank": 5,
            "schoolRank": 14,
            "score": 93
        },
        {
            "classRank": 6,
            "schoolRank": 15,
            "score": 92.5
        },
        {
            "classRank": 7,
            "schoolRank": 17,
            "score": 91.5
        },
        {
            "classRank": 8,
            "schoolRank": 20,
            "score": 90
        },
        {
            "classRank": 9,
            "schoolRank": 22,
            "score": 89
        },
        {
            "classRank": 10,
            "schoolRank": 24,
            "score": 88
        },
        {
            "classRank": 11,
            "schoolRank": 25,
            "score": 87.5
        },
        {
            "classRank": 12,
            "schoolRank": 26,
            "score": 87
        },
        {
            "classRank": 13,
            "schoolRank": 28,
            "score": 86
        },
        {
            "classRank": 14,
            "schoolRank": 30,
            "score": 85
        },
        {
            "classRank": 15,
            "schoolRank": 31,
            "score": 84.5
        },
        {
            "classRank": 16,
            "schoolRank": 37,
            "score": 81.5
        },
        {
            "classRank": 17,
            "schoolRank": 47,
            "score": 76.5
        },
        {
            "classRank": 18,
            "schoolRank": 48,
            "score": 76
        },
        {
            "classRank": 19,
            "schoolRank": 52,
            "score": 74
        },
        {
            "classRank": 20,
            "schoolRank": 54,
            "score": 73
        },
        {
            "classRank": 21,
            "schoolRank": 60,
            "score": 69.5
        },
        {
            "classRank": 22,
            "schoolRank": 65,
            "score": 67
        },
        {
            "classRank": 23,
            "schoolRank": 69,
            "score": 65
        },
        {
            "classRank": 24,
            "schoolRank": 110,
            "score": 126.5
        },
        {
            "classRank": 25,
            "schoolRank": 111,
            "score": 126
        },
        {
            "classRank": 26,
            "schoolRank": 120,
            "score": 121.5
        },
        {
            "classRank": 27,
            "schoolRank": 129,
            "score": 117
        },
        {
            "classRank": 28,
            "schoolRank": 134,
            "score": 114.5
        },
        {
            "classRank": 29,
            "schoolRank": 141,
            "score": 111
        },
        {
            "classRank": 30,
            "schoolRank": 142,
            "score": 110.5
        },
        {
            "classRank": 31,
            "schoolRank": 147,
            "score": 107.5
        },
        {
            "classRank": 32,
            "schoolRank": 147,
            "score": 107.5
        },
        {
            "classRank": 33,
            "schoolRank": 149,
            "score": 106.5
        },
        {
            "classRank": 34,
            "schoolRank": 157,
            "score": 102.5
        },
        {
            "classRank": 35,
            "schoolRank": 158,
            "score": 102
        }
    ],
    "高一04班": [{
            "classRank": 1,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 2,
            "schoolRank": 8,
            "score": 96
        },
        {
            "classRank": 3,
            "schoolRank": 13,
            "score": 93.5
        },
        {
            "classRank": 4,
            "schoolRank": 14,
            "score": 93
        },
        {
            "classRank": 5,
            "schoolRank": 15,
            "score": 92.5
        },
        {
            "classRank": 6,
            "schoolRank": 24,
            "score": 88
        },
        {
            "classRank": 7,
            "schoolRank": 26,
            "score": 87
        },
        {
            "classRank": 8,
            "schoolRank": 28,
            "score": 86
        },
        {
            "classRank": 9,
            "schoolRank": 30,
            "score": 85
        },
        {
            "classRank": 10,
            "schoolRank": 31,
            "score": 84.5
        },
        {
            "classRank": 11,
            "schoolRank": 32,
            "score": 84
        },
        {
            "classRank": 12,
            "schoolRank": 40,
            "score": 80
        },
        {
            "classRank": 13,
            "schoolRank": 46,
            "score": 77
        },
        {
            "classRank": 14,
            "schoolRank": 47,
            "score": 76.5
        },
        {
            "classRank": 15,
            "schoolRank": 57,
            "score": 71.5
        },
        {
            "classRank": 16,
            "schoolRank": 102,
            "score": 131
        },
        {
            "classRank": 17,
            "schoolRank": 106,
            "score": 128.5
        },
        {
            "classRank": 18,
            "schoolRank": 107,
            "score": 128
        },
        {
            "classRank": 19,
            "schoolRank": 112,
            "score": 125.5
        },
        {
            "classRank": 20,
            "schoolRank": 114,
            "score": 124.5
        },
        {
            "classRank": 21,
            "schoolRank": 122,
            "score": 120.5
        },
        {
            "classRank": 22,
            "schoolRank": 123,
            "score": 120
        },
        {
            "classRank": 23,
            "schoolRank": 125,
            "score": 119
        },
        {
            "classRank": 24,
            "schoolRank": 130,
            "score": 116.5
        },
        {
            "classRank": 25,
            "schoolRank": 130,
            "score": 116.5
        },
        {
            "classRank": 26,
            "schoolRank": 138,
            "score": 112.5
        },
        {
            "classRank": 27,
            "schoolRank": 141,
            "score": 111
        },
        {
            "classRank": 28,
            "schoolRank": 143,
            "score": 110
        },
        {
            "classRank": 29,
            "schoolRank": 144,
            "score": 109.5
        },
        {
            "classRank": 30,
            "schoolRank": 144,
            "score": 109.5
        },
        {
            "classRank": 31,
            "schoolRank": 146,
            "score": 108
        },
        {
            "classRank": 32,
            "schoolRank": 147,
            "score": 107.5
        },
        {
            "classRank": 33,
            "schoolRank": 155,
            "score": 103.5
        },
        {
            "classRank": 34,
            "schoolRank": 156,
            "score": 103
        },
        {
            "classRank": 35,
            "schoolRank": 159,
            "score": 101.5
        }
    ],
    "高一05班": [{
            "classRank": 1,
            "schoolRank": 2,
            "score": 99
        },
        {
            "classRank": 2,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 3,
            "schoolRank": 5,
            "score": 97.5
        },
        {
            "classRank": 4,
            "schoolRank": 9,
            "score": 95.5
        },
        {
            "classRank": 5,
            "schoolRank": 10,
            "score": 95
        },
        {
            "classRank": 6,
            "schoolRank": 10,
            "score": 95
        },
        {
            "classRank": 7,
            "schoolRank": 11,
            "score": 94.5
        },
        {
            "classRank": 8,
            "schoolRank": 18,
            "score": 91
        },
        {
            "classRank": 9,
            "schoolRank": 24,
            "score": 88
        },
        {
            "classRank": 10,
            "schoolRank": 26,
            "score": 87
        },
        {
            "classRank": 11,
            "schoolRank": 35,
            "score": 82.5
        },
        {
            "classRank": 12,
            "schoolRank": 41,
            "score": 79.5
        },
        {
            "classRank": 13,
            "schoolRank": 42,
            "score": 79
        },
        {
            "classRank": 14,
            "schoolRank": 43,
            "score": 78.5
        },
        {
            "classRank": 15,
            "schoolRank": 44,
            "score": 78
        },
        {
            "classRank": 16,
            "schoolRank": 53,
            "score": 73.5
        },
        {
            "classRank": 17,
            "schoolRank": 55,
            "score": 72.5
        },
        {
            "classRank": 18,
            "schoolRank": 56,
            "score": 72
        },
        {
            "classRank": 19,
            "schoolRank": 57,
            "score": 71.5
        },
        {
            "classRank": 20,
            "schoolRank": 59,
            "score": 70.5
        },
        {
            "classRank": 21,
            "schoolRank": 62,
            "score": 68.5
        },
        {
            "classRank": 22,
            "schoolRank": 102,
            "score": 131
        },
        {
            "classRank": 23,
            "schoolRank": 103,
            "score": 130.5
        },
        {
            "classRank": 24,
            "schoolRank": 111,
            "score": 126
        },
        {
            "classRank": 25,
            "schoolRank": 112,
            "score": 125.5
        },
        {
            "classRank": 26,
            "schoolRank": 118,
            "score": 122.5
        },
        {
            "classRank": 27,
            "schoolRank": 126,
            "score": 118.5
        },
        {
            "classRank": 28,
            "schoolRank": 128,
            "score": 117.5
        },
        {
            "classRank": 29,
            "schoolRank": 130,
            "score": 116.5
        },
        {
            "classRank": 30,
            "schoolRank": 131,
            "score": 116
        },
        {
            "classRank": 31,
            "schoolRank": 136,
            "score": 113.5
        },
        {
            "classRank": 32,
            "schoolRank": 138,
            "score": 112.5
        },
        {
            "classRank": 33,
            "schoolRank": 141,
            "score": 111
        },
        {
            "classRank": 34,
            "schoolRank": 142,
            "score": 110.5
        },
        {
            "classRank": 35,
            "schoolRank": 144,
            "score": 109.5
        },
        {
            "classRank": 36,
            "schoolRank": 148,
            "score": 107
        },
        {
            "classRank": 37,
            "schoolRank": 151,
            "score": 105.5
        },
        {
            "classRank": 38,
            "schoolRank": 160,
            "score": 101
        }
    ],
    "高一02班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 99.5
        },
        {
            "classRank": 2,
            "schoolRank": 2,
            "score": 99
        },
        {
            "classRank": 3,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 4,
            "schoolRank": 5,
            "score": 97.5
        },
        {
            "classRank": 5,
            "schoolRank": 8,
            "score": 96
        },
        {
            "classRank": 6,
            "schoolRank": 13,
            "score": 93.5
        },
        {
            "classRank": 7,
            "schoolRank": 21,
            "score": 89.5
        },
        {
            "classRank": 8,
            "schoolRank": 24,
            "score": 88
        },
        {
            "classRank": 9,
            "schoolRank": 26,
            "score": 87
        },
        {
            "classRank": 10,
            "schoolRank": 26,
            "score": 87
        },
        {
            "classRank": 11,
            "schoolRank": 32,
            "score": 84
        },
        {
            "classRank": 12,
            "schoolRank": 34,
            "score": 83
        },
        {
            "classRank": 13,
            "schoolRank": 38,
            "score": 81
        },
        {
            "classRank": 14,
            "schoolRank": 39,
            "score": 80.5
        },
        {
            "classRank": 15,
            "schoolRank": 52,
            "score": 74
        },
        {
            "classRank": 16,
            "schoolRank": 98,
            "score": 134
        },
        {
            "classRank": 17,
            "schoolRank": 101,
            "score": 132
        },
        {
            "classRank": 18,
            "schoolRank": 104,
            "score": 130
        },
        {
            "classRank": 19,
            "schoolRank": 104,
            "score": 130
        },
        {
            "classRank": 20,
            "schoolRank": 113,
            "score": 125
        },
        {
            "classRank": 21,
            "schoolRank": 114,
            "score": 124.5
        },
        {
            "classRank": 22,
            "schoolRank": 115,
            "score": 124
        },
        {
            "classRank": 23,
            "schoolRank": 124,
            "score": 119.5
        },
        {
            "classRank": 24,
            "schoolRank": 124,
            "score": 119.5
        },
        {
            "classRank": 25,
            "schoolRank": 126,
            "score": 118.5
        },
        {
            "classRank": 26,
            "schoolRank": 127,
            "score": 118
        },
        {
            "classRank": 27,
            "schoolRank": 130,
            "score": 116.5
        },
        {
            "classRank": 28,
            "schoolRank": 133,
            "score": 115
        },
        {
            "classRank": 29,
            "schoolRank": 134,
            "score": 114.5
        },
        {
            "classRank": 30,
            "schoolRank": 147,
            "score": 107.5
        },
        {
            "classRank": 31,
            "schoolRank": 147,
            "score": 107.5
        },
        {
            "classRank": 32,
            "schoolRank": 153,
            "score": 104.5
        },
        {
            "classRank": 33,
            "schoolRank": 153,
            "score": 104.5
        },
        {
            "classRank": 34,
            "schoolRank": 154,
            "score": 104
        },
        {
            "classRank": 35,
            "schoolRank": 160,
            "score": 101
        },
        {
            "classRank": 36,
            "schoolRank": 162,
            "score": 100
        }
    ],
    "高一13班": [{
            "classRank": 1,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 2,
            "schoolRank": 13,
            "score": 93.5
        },
        {
            "classRank": 3,
            "schoolRank": 15,
            "score": 92.5
        },
        {
            "classRank": 4,
            "schoolRank": 16,
            "score": 92
        },
        {
            "classRank": 5,
            "schoolRank": 19,
            "score": 90.5
        },
        {
            "classRank": 6,
            "schoolRank": 21,
            "score": 89.5
        },
        {
            "classRank": 7,
            "schoolRank": 28,
            "score": 86
        },
        {
            "classRank": 8,
            "schoolRank": 29,
            "score": 85.5
        },
        {
            "classRank": 9,
            "schoolRank": 31,
            "score": 84.5
        },
        {
            "classRank": 10,
            "schoolRank": 33,
            "score": 83.5
        },
        {
            "classRank": 11,
            "schoolRank": 34,
            "score": 83
        },
        {
            "classRank": 12,
            "schoolRank": 37,
            "score": 81.5
        },
        {
            "classRank": 13,
            "schoolRank": 40,
            "score": 80
        },
        {
            "classRank": 14,
            "schoolRank": 40,
            "score": 80
        },
        {
            "classRank": 15,
            "schoolRank": 52,
            "score": 74
        },
        {
            "classRank": 16,
            "schoolRank": 52,
            "score": 74
        },
        {
            "classRank": 17,
            "schoolRank": 53,
            "score": 73.5
        },
        {
            "classRank": 18,
            "schoolRank": 55,
            "score": 72.5
        },
        {
            "classRank": 19,
            "schoolRank": 56,
            "score": 72
        },
        {
            "classRank": 20,
            "schoolRank": 57,
            "score": 71.5
        },
        {
            "classRank": 21,
            "schoolRank": 58,
            "score": 71
        },
        {
            "classRank": 22,
            "schoolRank": 63,
            "score": 68
        },
        {
            "classRank": 23,
            "schoolRank": 67,
            "score": 66
        },
        {
            "classRank": 24,
            "schoolRank": 67,
            "score": 66
        },
        {
            "classRank": 25,
            "schoolRank": 72,
            "score": 63.5
        },
        {
            "classRank": 26,
            "schoolRank": 78,
            "score": 58.5
        },
        {
            "classRank": 27,
            "schoolRank": 82,
            "score": 56.5
        },
        {
            "classRank": 28,
            "schoolRank": 83,
            "score": 55.5
        },
        {
            "classRank": 29,
            "schoolRank": 85,
            "score": 54.5
        },
        {
            "classRank": 30,
            "schoolRank": 88,
            "score": 51.5
        },
        {
            "classRank": 31,
            "schoolRank": 128,
            "score": 117.5
        },
        {
            "classRank": 32,
            "schoolRank": 130,
            "score": 116.5
        },
        {
            "classRank": 33,
            "schoolRank": 131,
            "score": 116
        },
        {
            "classRank": 34,
            "schoolRank": 133,
            "score": 115
        },
        {
            "classRank": 35,
            "schoolRank": 137,
            "score": 113
        },
        {
            "classRank": 36,
            "schoolRank": 138,
            "score": 112.5
        },
        {
            "classRank": 37,
            "schoolRank": 141,
            "score": 111
        },
        {
            "classRank": 38,
            "schoolRank": 151,
            "score": 105.5
        },
        {
            "classRank": 39,
            "schoolRank": 153,
            "score": 104.5
        },
        {
            "classRank": 40,
            "schoolRank": 158,
            "score": 102
        },
        {
            "classRank": 41,
            "schoolRank": 158,
            "score": 102
        },
        {
            "classRank": 42,
            "schoolRank": 160,
            "score": 101
        }
    ],
    "高一03班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 99.5
        },
        {
            "classRank": 2,
            "schoolRank": 2,
            "score": 99
        },
        {
            "classRank": 3,
            "schoolRank": 8,
            "score": 96
        },
        {
            "classRank": 4,
            "schoolRank": 9,
            "score": 95.5
        },
        {
            "classRank": 5,
            "schoolRank": 10,
            "score": 95
        },
        {
            "classRank": 6,
            "schoolRank": 13,
            "score": 93.5
        },
        {
            "classRank": 7,
            "schoolRank": 15,
            "score": 92.5
        },
        {
            "classRank": 8,
            "schoolRank": 23,
            "score": 88.5
        },
        {
            "classRank": 9,
            "schoolRank": 29,
            "score": 85.5
        },
        {
            "classRank": 10,
            "schoolRank": 34,
            "score": 83
        },
        {
            "classRank": 11,
            "schoolRank": 36,
            "score": 82
        },
        {
            "classRank": 12,
            "schoolRank": 37,
            "score": 81.5
        },
        {
            "classRank": 13,
            "schoolRank": 40,
            "score": 80
        },
        {
            "classRank": 14,
            "schoolRank": 40,
            "score": 80
        },
        {
            "classRank": 15,
            "schoolRank": 56,
            "score": 72
        },
        {
            "classRank": 16,
            "schoolRank": 99,
            "score": 133
        },
        {
            "classRank": 17,
            "schoolRank": 104,
            "score": 130
        },
        {
            "classRank": 18,
            "schoolRank": 105,
            "score": 129.5
        },
        {
            "classRank": 19,
            "schoolRank": 108,
            "score": 127.5
        },
        {
            "classRank": 20,
            "schoolRank": 109,
            "score": 127
        },
        {
            "classRank": 21,
            "schoolRank": 122,
            "score": 120.5
        },
        {
            "classRank": 22,
            "schoolRank": 123,
            "score": 120
        },
        {
            "classRank": 23,
            "schoolRank": 127,
            "score": 118
        },
        {
            "classRank": 24,
            "schoolRank": 133,
            "score": 115
        },
        {
            "classRank": 25,
            "schoolRank": 138,
            "score": 112.5
        },
        {
            "classRank": 26,
            "schoolRank": 139,
            "score": 112
        },
        {
            "classRank": 27,
            "schoolRank": 142,
            "score": 110.5
        },
        {
            "classRank": 28,
            "schoolRank": 144,
            "score": 109.5
        },
        {
            "classRank": 29,
            "schoolRank": 147,
            "score": 107.5
        },
        {
            "classRank": 30,
            "schoolRank": 149,
            "score": 106.5
        },
        {
            "classRank": 31,
            "schoolRank": 149,
            "score": 106.5
        },
        {
            "classRank": 32,
            "schoolRank": 152,
            "score": 105
        },
        {
            "classRank": 33,
            "schoolRank": 153,
            "score": 104.5
        },
        {
            "classRank": 34,
            "schoolRank": 154,
            "score": 104
        },
        {
            "classRank": 35,
            "schoolRank": 154,
            "score": 104
        },
        {
            "classRank": 36,
            "schoolRank": 159,
            "score": 101.5
        },
        {
            "classRank": 37,
            "schoolRank": 161,
            "score": 100.5
        }
    ]
}
getyk(data, gy2);
setMapS1(gy2, '数学', 'm1-2');
data = {
    "高一08班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 99.5
        },
        {
            "classRank": 2,
            "schoolRank": 3,
            "score": 98.5
        },
        {
            "classRank": 3,
            "schoolRank": 5,
            "score": 97.5
        },
        {
            "classRank": 4,
            "schoolRank": 5,
            "score": 97.5
        },
        {
            "classRank": 5,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 6,
            "schoolRank": 12,
            "score": 94
        },
        {
            "classRank": 7,
            "schoolRank": 21,
            "score": 89.5
        },
        {
            "classRank": 8,
            "schoolRank": 22,
            "score": 89
        },
        {
            "classRank": 9,
            "schoolRank": 25,
            "score": 87.5
        },
        {
            "classRank": 10,
            "schoolRank": 25,
            "score": 87.5
        },
        {
            "classRank": 11,
            "schoolRank": 29,
            "score": 85.5
        },
        {
            "classRank": 12,
            "schoolRank": 29,
            "score": 85.5
        },
        {
            "classRank": 13,
            "schoolRank": 33,
            "score": 83.5
        },
        {
            "classRank": 14,
            "schoolRank": 33,
            "score": 83.5
        },
        {
            "classRank": 15,
            "schoolRank": 39,
            "score": 80.5
        },
        {
            "classRank": 16,
            "schoolRank": 46,
            "score": 77
        },
        {
            "classRank": 17,
            "schoolRank": 46,
            "score": 77
        },
        {
            "classRank": 18,
            "schoolRank": 47,
            "score": 76.5
        },
        {
            "classRank": 19,
            "schoolRank": 49,
            "score": 75.5
        },
        {
            "classRank": 20,
            "schoolRank": 54,
            "score": 73
        },
        {
            "classRank": 21,
            "schoolRank": 58,
            "score": 71
        },
        {
            "classRank": 22,
            "schoolRank": 59,
            "score": 70.5
        },
        {
            "classRank": 23,
            "schoolRank": 60,
            "score": 69.5
        },
        {
            "classRank": 24,
            "schoolRank": 102,
            "score": 126
        },
        {
            "classRank": 25,
            "schoolRank": 111,
            "score": 121.5
        },
        {
            "classRank": 26,
            "schoolRank": 113,
            "score": 120
        },
        {
            "classRank": 27,
            "schoolRank": 114,
            "score": 119
        },
        {
            "classRank": 28,
            "schoolRank": 123,
            "score": 114.5
        },
        {
            "classRank": 29,
            "schoolRank": 125,
            "score": 113.5
        },
        {
            "classRank": 30,
            "schoolRank": 128,
            "score": 112
        },
        {
            "classRank": 31,
            "schoolRank": 129,
            "score": 111.5
        },
        {
            "classRank": 32,
            "schoolRank": 136,
            "score": 108
        },
        {
            "classRank": 33,
            "schoolRank": 138,
            "score": 107
        },
        {
            "classRank": 34,
            "schoolRank": 144,
            "score": 104
        },
        {
            "classRank": 35,
            "schoolRank": 147,
            "score": 102.5
        },
        {
            "classRank": 36,
            "schoolRank": 148,
            "score": 102
        },
        {
            "classRank": 37,
            "schoolRank": 148,
            "score": 102
        }
    ],
    "高一09班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 99.5
        },
        {
            "classRank": 2,
            "schoolRank": 2,
            "score": 99
        },
        {
            "classRank": 3,
            "schoolRank": 3,
            "score": 98.5
        },
        {
            "classRank": 4,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 5,
            "schoolRank": 5,
            "score": 97.5
        },
        {
            "classRank": 6,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 7,
            "schoolRank": 7,
            "score": 96.5
        },
        {
            "classRank": 8,
            "schoolRank": 11,
            "score": 94.5
        },
        {
            "classRank": 9,
            "schoolRank": 15,
            "score": 92.5
        },
        {
            "classRank": 10,
            "schoolRank": 15,
            "score": 92.5
        },
        {
            "classRank": 11,
            "schoolRank": 18,
            "score": 91
        },
        {
            "classRank": 12,
            "schoolRank": 21,
            "score": 89.5
        },
        {
            "classRank": 13,
            "schoolRank": 21,
            "score": 89.5
        },
        {
            "classRank": 14,
            "schoolRank": 23,
            "score": 88.5
        },
        {
            "classRank": 15,
            "schoolRank": 27,
            "score": 86.5
        },
        {
            "classRank": 16,
            "schoolRank": 29,
            "score": 85.5
        },
        {
            "classRank": 17,
            "schoolRank": 38,
            "score": 81
        },
        {
            "classRank": 18,
            "schoolRank": 38,
            "score": 81
        },
        {
            "classRank": 19,
            "schoolRank": 41,
            "score": 79.5
        },
        {
            "classRank": 20,
            "schoolRank": 44,
            "score": 78
        },
        {
            "classRank": 21,
            "schoolRank": 44,
            "score": 78
        },
        {
            "classRank": 22,
            "schoolRank": 50,
            "score": 75
        },
        {
            "classRank": 23,
            "schoolRank": 53,
            "score": 73.5
        },
        {
            "classRank": 24,
            "schoolRank": 55,
            "score": 72.5
        },
        {
            "classRank": 25,
            "schoolRank": 61,
            "score": 69
        },
        {
            "classRank": 26,
            "schoolRank": 62,
            "score": 68.5
        },
        {
            "classRank": 27,
            "schoolRank": 65,
            "score": 67
        },
        {
            "classRank": 28,
            "schoolRank": 74,
            "score": 61.5
        },
        {
            "classRank": 29,
            "schoolRank": 82,
            "score": 54.5
        },
        {
            "classRank": 30,
            "schoolRank": 84,
            "score": 52
        },
        {
            "classRank": 31,
            "schoolRank": 106,
            "score": 124
        },
        {
            "classRank": 32,
            "schoolRank": 107,
            "score": 123.5
        },
        {
            "classRank": 33,
            "schoolRank": 112,
            "score": 121
        },
        {
            "classRank": 34,
            "schoolRank": 112,
            "score": 121
        },
        {
            "classRank": 35,
            "schoolRank": 118,
            "score": 117
        },
        {
            "classRank": 36,
            "schoolRank": 120,
            "score": 116
        },
        {
            "classRank": 37,
            "schoolRank": 124,
            "score": 114
        },
        {
            "classRank": 38,
            "schoolRank": 125,
            "score": 113.5
        },
        {
            "classRank": 39,
            "schoolRank": 131,
            "score": 110.5
        },
        {
            "classRank": 40,
            "schoolRank": 134,
            "score": 109
        },
        {
            "classRank": 41,
            "schoolRank": 145,
            "score": 103.5
        }
    ],
    "高一06班": [{
            "classRank": 1,
            "schoolRank": 3,
            "score": 98.5
        },
        {
            "classRank": 2,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 3,
            "schoolRank": 8,
            "score": 96
        },
        {
            "classRank": 4,
            "schoolRank": 10,
            "score": 95
        },
        {
            "classRank": 5,
            "schoolRank": 10,
            "score": 95
        },
        {
            "classRank": 6,
            "schoolRank": 13,
            "score": 93.5
        },
        {
            "classRank": 7,
            "schoolRank": 19,
            "score": 90.5
        },
        {
            "classRank": 8,
            "schoolRank": 19,
            "score": 90.5
        },
        {
            "classRank": 9,
            "schoolRank": 20,
            "score": 90
        },
        {
            "classRank": 10,
            "schoolRank": 30,
            "score": 85
        },
        {
            "classRank": 11,
            "schoolRank": 32,
            "score": 84
        },
        {
            "classRank": 12,
            "schoolRank": 32,
            "score": 84
        },
        {
            "classRank": 13,
            "schoolRank": 33,
            "score": 83.5
        },
        {
            "classRank": 14,
            "schoolRank": 35,
            "score": 82.5
        },
        {
            "classRank": 15,
            "schoolRank": 37,
            "score": 81.5
        },
        {
            "classRank": 16,
            "schoolRank": 40,
            "score": 80
        },
        {
            "classRank": 17,
            "schoolRank": 44,
            "score": 78
        },
        {
            "classRank": 18,
            "schoolRank": 45,
            "score": 77.5
        },
        {
            "classRank": 19,
            "schoolRank": 48,
            "score": 76
        },
        {
            "classRank": 20,
            "schoolRank": 53,
            "score": 73.5
        },
        {
            "classRank": 21,
            "schoolRank": 104,
            "score": 125
        },
        {
            "classRank": 22,
            "schoolRank": 104,
            "score": 125
        },
        {
            "classRank": 23,
            "schoolRank": 105,
            "score": 124.5
        },
        {
            "classRank": 24,
            "schoolRank": 108,
            "score": 123
        },
        {
            "classRank": 25,
            "schoolRank": 109,
            "score": 122.5
        },
        {
            "classRank": 26,
            "schoolRank": 112,
            "score": 121
        },
        {
            "classRank": 27,
            "schoolRank": 113,
            "score": 120
        },
        {
            "classRank": 28,
            "schoolRank": 115,
            "score": 118.5
        },
        {
            "classRank": 29,
            "schoolRank": 122,
            "score": 115
        },
        {
            "classRank": 30,
            "schoolRank": 133,
            "score": 109.5
        },
        {
            "classRank": 31,
            "schoolRank": 135,
            "score": 108.5
        },
        {
            "classRank": 32,
            "schoolRank": 136,
            "score": 108
        },
        {
            "classRank": 33,
            "schoolRank": 137,
            "score": 107.5
        },
        {
            "classRank": 34,
            "schoolRank": 137,
            "score": 107.5
        },
        {
            "classRank": 35,
            "schoolRank": 138,
            "score": 107
        },
        {
            "classRank": 36,
            "schoolRank": 142,
            "score": 105
        }
    ],
    "高一07班": [{
            "classRank": 1,
            "schoolRank": 2,
            "score": 99
        },
        {
            "classRank": 2,
            "schoolRank": 3,
            "score": 98.5
        },
        {
            "classRank": 3,
            "schoolRank": 8,
            "score": 96
        },
        {
            "classRank": 4,
            "schoolRank": 9,
            "score": 95.5
        },
        {
            "classRank": 5,
            "schoolRank": 10,
            "score": 95
        },
        {
            "classRank": 6,
            "schoolRank": 10,
            "score": 95
        },
        {
            "classRank": 7,
            "schoolRank": 13,
            "score": 93.5
        },
        {
            "classRank": 8,
            "schoolRank": 16,
            "score": 92
        },
        {
            "classRank": 9,
            "schoolRank": 19,
            "score": 90.5
        },
        {
            "classRank": 10,
            "schoolRank": 21,
            "score": 89.5
        },
        {
            "classRank": 11,
            "schoolRank": 23,
            "score": 88.5
        },
        {
            "classRank": 12,
            "schoolRank": 24,
            "score": 88
        },
        {
            "classRank": 13,
            "schoolRank": 27,
            "score": 86.5
        },
        {
            "classRank": 14,
            "schoolRank": 29,
            "score": 85.5
        },
        {
            "classRank": 15,
            "schoolRank": 35,
            "score": 82.5
        },
        {
            "classRank": 16,
            "schoolRank": 37,
            "score": 81.5
        },
        {
            "classRank": 17,
            "schoolRank": 41,
            "score": 79.5
        },
        {
            "classRank": 18,
            "schoolRank": 49,
            "score": 75.5
        },
        {
            "classRank": 19,
            "schoolRank": 50,
            "score": 75
        },
        {
            "classRank": 20,
            "schoolRank": 51,
            "score": 74.5
        },
        {
            "classRank": 21,
            "schoolRank": 57,
            "score": 71.5
        },
        {
            "classRank": 22,
            "schoolRank": 60,
            "score": 69.5
        },
        {
            "classRank": 23,
            "schoolRank": 66,
            "score": 66.5
        },
        {
            "classRank": 24,
            "schoolRank": 68,
            "score": 65.5
        },
        {
            "classRank": 25,
            "schoolRank": 68,
            "score": 65.5
        },
        {
            "classRank": 26,
            "schoolRank": 70,
            "score": 64
        },
        {
            "classRank": 27,
            "schoolRank": 70,
            "score": 64
        },
        {
            "classRank": 28,
            "schoolRank": 70,
            "score": 64
        },
        {
            "classRank": 29,
            "schoolRank": 79,
            "score": 56
        },
        {
            "classRank": 30,
            "schoolRank": 101,
            "score": 126.5
        },
        {
            "classRank": 31,
            "schoolRank": 105,
            "score": 124.5
        },
        {
            "classRank": 32,
            "schoolRank": 106,
            "score": 124
        },
        {
            "classRank": 33,
            "schoolRank": 108,
            "score": 123
        },
        {
            "classRank": 34,
            "schoolRank": 116,
            "score": 118
        },
        {
            "classRank": 35,
            "schoolRank": 117,
            "score": 117.5
        },
        {
            "classRank": 36,
            "schoolRank": 125,
            "score": 113.5
        },
        {
            "classRank": 37,
            "schoolRank": 126,
            "score": 113
        },
        {
            "classRank": 38,
            "schoolRank": 130,
            "score": 111
        },
        {
            "classRank": 39,
            "schoolRank": 132,
            "score": 110
        },
        {
            "classRank": 40,
            "schoolRank": 143,
            "score": 104.5
        },
        {
            "classRank": 41,
            "schoolRank": 144,
            "score": 104
        },
        {
            "classRank": 42,
            "schoolRank": 145,
            "score": 103.5
        },
        {
            "classRank": 43,
            "schoolRank": 147,
            "score": 102.5
        },
        {
            "classRank": 44,
            "schoolRank": 149,
            "score": 101.5
        },
        {
            "classRank": 45,
            "schoolRank": 150,
            "score": 101
        }
    ],
    "高一11班": [{
            "classRank": 1,
            "schoolRank": 3,
            "score": 98.5
        },
        {
            "classRank": 2,
            "schoolRank": 7,
            "score": 96.5
        },
        {
            "classRank": 3,
            "schoolRank": 9,
            "score": 95.5
        },
        {
            "classRank": 4,
            "schoolRank": 10,
            "score": 95
        },
        {
            "classRank": 5,
            "schoolRank": 13,
            "score": 93.5
        },
        {
            "classRank": 6,
            "schoolRank": 15,
            "score": 92.5
        },
        {
            "classRank": 7,
            "schoolRank": 22,
            "score": 89
        },
        {
            "classRank": 8,
            "schoolRank": 25,
            "score": 87.5
        },
        {
            "classRank": 9,
            "schoolRank": 27,
            "score": 86.5
        },
        {
            "classRank": 10,
            "schoolRank": 28,
            "score": 86
        },
        {
            "classRank": 11,
            "schoolRank": 28,
            "score": 86
        },
        {
            "classRank": 12,
            "schoolRank": 31,
            "score": 84.5
        },
        {
            "classRank": 13,
            "schoolRank": 34,
            "score": 83
        },
        {
            "classRank": 14,
            "schoolRank": 36,
            "score": 82
        },
        {
            "classRank": 15,
            "schoolRank": 38,
            "score": 81
        },
        {
            "classRank": 16,
            "schoolRank": 54,
            "score": 73
        },
        {
            "classRank": 17,
            "schoolRank": 58,
            "score": 71
        },
        {
            "classRank": 18,
            "schoolRank": 61,
            "score": 69
        },
        {
            "classRank": 19,
            "schoolRank": 63,
            "score": 68
        },
        {
            "classRank": 20,
            "schoolRank": 64,
            "score": 67.5
        },
        {
            "classRank": 21,
            "schoolRank": 64,
            "score": 67.5
        },
        {
            "classRank": 22,
            "schoolRank": 67,
            "score": 66
        },
        {
            "classRank": 23,
            "schoolRank": 68,
            "score": 65.5
        },
        {
            "classRank": 24,
            "schoolRank": 69,
            "score": 65
        },
        {
            "classRank": 25,
            "schoolRank": 69,
            "score": 65
        },
        {
            "classRank": 26,
            "schoolRank": 70,
            "score": 64
        },
        {
            "classRank": 27,
            "schoolRank": 73,
            "score": 62
        },
        {
            "classRank": 28,
            "schoolRank": 73,
            "score": 62
        },
        {
            "classRank": 29,
            "schoolRank": 78,
            "score": 58
        },
        {
            "classRank": 30,
            "schoolRank": 79,
            "score": 56
        },
        {
            "classRank": 31,
            "schoolRank": 81,
            "score": 55
        },
        {
            "classRank": 32,
            "schoolRank": 81,
            "score": 55
        },
        {
            "classRank": 33,
            "schoolRank": 107,
            "score": 123.5
        },
        {
            "classRank": 34,
            "schoolRank": 108,
            "score": 123
        },
        {
            "classRank": 35,
            "schoolRank": 118,
            "score": 117
        },
        {
            "classRank": 36,
            "schoolRank": 126,
            "score": 113
        },
        {
            "classRank": 37,
            "schoolRank": 126,
            "score": 113
        },
        {
            "classRank": 38,
            "schoolRank": 131,
            "score": 110.5
        },
        {
            "classRank": 39,
            "schoolRank": 133,
            "score": 109.5
        },
        {
            "classRank": 40,
            "schoolRank": 135,
            "score": 108.5
        },
        {
            "classRank": 41,
            "schoolRank": 137,
            "score": 107.5
        },
        {
            "classRank": 42,
            "schoolRank": 141,
            "score": 105.5
        },
        {
            "classRank": 43,
            "schoolRank": 147,
            "score": 102.5
        },
        {
            "classRank": 44,
            "schoolRank": 151,
            "score": 100.5
        }
    ],
    "高一01班": [{
            "classRank": 1,
            "schoolRank": 3,
            "score": 98.5
        },
        {
            "classRank": 2,
            "schoolRank": 5,
            "score": 97.5
        },
        {
            "classRank": 3,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 4,
            "schoolRank": 8,
            "score": 96
        },
        {
            "classRank": 5,
            "schoolRank": 12,
            "score": 94
        },
        {
            "classRank": 6,
            "schoolRank": 13,
            "score": 93.5
        },
        {
            "classRank": 7,
            "schoolRank": 16,
            "score": 92
        },
        {
            "classRank": 8,
            "schoolRank": 19,
            "score": 90.5
        },
        {
            "classRank": 9,
            "schoolRank": 23,
            "score": 88.5
        },
        {
            "classRank": 10,
            "schoolRank": 23,
            "score": 88.5
        },
        {
            "classRank": 11,
            "schoolRank": 26,
            "score": 87
        },
        {
            "classRank": 12,
            "schoolRank": 28,
            "score": 86
        },
        {
            "classRank": 13,
            "schoolRank": 33,
            "score": 83.5
        },
        {
            "classRank": 14,
            "schoolRank": 34,
            "score": 83
        },
        {
            "classRank": 15,
            "schoolRank": 34,
            "score": 83
        },
        {
            "classRank": 16,
            "schoolRank": 42,
            "score": 79
        },
        {
            "classRank": 17,
            "schoolRank": 45,
            "score": 77.5
        },
        {
            "classRank": 18,
            "schoolRank": 50,
            "score": 75
        },
        {
            "classRank": 19,
            "schoolRank": 56,
            "score": 72
        },
        {
            "classRank": 20,
            "schoolRank": 57,
            "score": 71.5
        },
        {
            "classRank": 21,
            "schoolRank": 98,
            "score": 128
        },
        {
            "classRank": 22,
            "schoolRank": 102,
            "score": 126
        },
        {
            "classRank": 23,
            "schoolRank": 102,
            "score": 126
        },
        {
            "classRank": 24,
            "schoolRank": 102,
            "score": 126
        },
        {
            "classRank": 25,
            "schoolRank": 104,
            "score": 125
        },
        {
            "classRank": 26,
            "schoolRank": 104,
            "score": 125
        },
        {
            "classRank": 27,
            "schoolRank": 104,
            "score": 125
        },
        {
            "classRank": 28,
            "schoolRank": 107,
            "score": 123.5
        },
        {
            "classRank": 29,
            "schoolRank": 107,
            "score": 123.5
        },
        {
            "classRank": 30,
            "schoolRank": 108,
            "score": 123
        },
        {
            "classRank": 31,
            "schoolRank": 113,
            "score": 120
        },
        {
            "classRank": 32,
            "schoolRank": 115,
            "score": 118.5
        },
        {
            "classRank": 33,
            "schoolRank": 122,
            "score": 115
        },
        {
            "classRank": 34,
            "schoolRank": 125,
            "score": 113.5
        },
        {
            "classRank": 35,
            "schoolRank": 126,
            "score": 113
        },
        {
            "classRank": 36,
            "schoolRank": 128,
            "score": 112
        },
        {
            "classRank": 37,
            "schoolRank": 135,
            "score": 108.5
        },
        {
            "classRank": 38,
            "schoolRank": 136,
            "score": 108
        },
        {
            "classRank": 39,
            "schoolRank": 137,
            "score": 107.5
        },
        {
            "classRank": 40,
            "schoolRank": 146,
            "score": 103
        },
        {
            "classRank": 41,
            "schoolRank": 150,
            "score": 101
        }
    ],
    "高一12班": [{
            "classRank": 1,
            "schoolRank": 5,
            "score": 97.5
        },
        {
            "classRank": 2,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 3,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 4,
            "schoolRank": 7,
            "score": 96.5
        },
        {
            "classRank": 5,
            "schoolRank": 16,
            "score": 92
        },
        {
            "classRank": 6,
            "schoolRank": 20,
            "score": 90
        },
        {
            "classRank": 7,
            "schoolRank": 20,
            "score": 90
        },
        {
            "classRank": 8,
            "schoolRank": 20,
            "score": 90
        },
        {
            "classRank": 9,
            "schoolRank": 23,
            "score": 88.5
        },
        {
            "classRank": 10,
            "schoolRank": 25,
            "score": 87.5
        },
        {
            "classRank": 11,
            "schoolRank": 26,
            "score": 87
        },
        {
            "classRank": 12,
            "schoolRank": 32,
            "score": 84
        },
        {
            "classRank": 13,
            "schoolRank": 32,
            "score": 84
        },
        {
            "classRank": 14,
            "schoolRank": 33,
            "score": 83.5
        },
        {
            "classRank": 15,
            "schoolRank": 35,
            "score": 82.5
        },
        {
            "classRank": 16,
            "schoolRank": 45,
            "score": 77.5
        },
        {
            "classRank": 17,
            "schoolRank": 48,
            "score": 76
        },
        {
            "classRank": 18,
            "schoolRank": 50,
            "score": 75
        },
        {
            "classRank": 19,
            "schoolRank": 51,
            "score": 74.5
        },
        {
            "classRank": 20,
            "schoolRank": 56,
            "score": 72
        },
        {
            "classRank": 21,
            "schoolRank": 57,
            "score": 71.5
        },
        {
            "classRank": 22,
            "schoolRank": 59,
            "score": 70.5
        },
        {
            "classRank": 23,
            "schoolRank": 67,
            "score": 66
        },
        {
            "classRank": 24,
            "schoolRank": 69,
            "score": 65
        },
        {
            "classRank": 25,
            "schoolRank": 70,
            "score": 64
        },
        {
            "classRank": 26,
            "schoolRank": 72,
            "score": 62.5
        },
        {
            "classRank": 27,
            "schoolRank": 76,
            "score": 60.5
        },
        {
            "classRank": 28,
            "schoolRank": 77,
            "score": 58.5
        },
        {
            "classRank": 29,
            "schoolRank": 78,
            "score": 58
        },
        {
            "classRank": 30,
            "schoolRank": 80,
            "score": 55.5
        },
        {
            "classRank": 31,
            "schoolRank": 85,
            "score": 51.5
        },
        {
            "classRank": 32,
            "schoolRank": 86,
            "score": 50.5
        },
        {
            "classRank": 33,
            "schoolRank": 87,
            "score": 49.5
        },
        {
            "classRank": 34,
            "schoolRank": 88,
            "score": 46.5
        },
        {
            "classRank": 35,
            "schoolRank": 89,
            "score": 42.5
        },
        {
            "classRank": 36,
            "schoolRank": 106,
            "score": 124
        },
        {
            "classRank": 37,
            "schoolRank": 108,
            "score": 123
        },
        {
            "classRank": 38,
            "schoolRank": 116,
            "score": 118
        },
        {
            "classRank": 39,
            "schoolRank": 121,
            "score": 115.5
        },
        {
            "classRank": 40,
            "schoolRank": 125,
            "score": 113.5
        },
        {
            "classRank": 41,
            "schoolRank": 130,
            "score": 111
        },
        {
            "classRank": 42,
            "schoolRank": 133,
            "score": 109.5
        },
        {
            "classRank": 43,
            "schoolRank": 136,
            "score": 108
        },
        {
            "classRank": 44,
            "schoolRank": 140,
            "score": 106
        },
        {
            "classRank": 45,
            "schoolRank": 148,
            "score": 102
        },
        {
            "classRank": 46,
            "schoolRank": 150,
            "score": 101
        },
        {
            "classRank": 47,
            "schoolRank": 152,
            "score": 100
        }
    ],
    "高一10班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 99.5
        },
        {
            "classRank": 2,
            "schoolRank": 1,
            "score": 99.5
        },
        {
            "classRank": 3,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 4,
            "schoolRank": 11,
            "score": 94.5
        },
        {
            "classRank": 5,
            "schoolRank": 14,
            "score": 93
        },
        {
            "classRank": 6,
            "schoolRank": 15,
            "score": 92.5
        },
        {
            "classRank": 7,
            "schoolRank": 17,
            "score": 91.5
        },
        {
            "classRank": 8,
            "schoolRank": 23,
            "score": 88.5
        },
        {
            "classRank": 9,
            "schoolRank": 24,
            "score": 88
        },
        {
            "classRank": 10,
            "schoolRank": 29,
            "score": 85.5
        },
        {
            "classRank": 11,
            "schoolRank": 29,
            "score": 85.5
        },
        {
            "classRank": 12,
            "schoolRank": 32,
            "score": 84
        },
        {
            "classRank": 13,
            "schoolRank": 36,
            "score": 82
        },
        {
            "classRank": 14,
            "schoolRank": 38,
            "score": 81
        },
        {
            "classRank": 15,
            "schoolRank": 43,
            "score": 78.5
        },
        {
            "classRank": 16,
            "schoolRank": 46,
            "score": 77
        },
        {
            "classRank": 17,
            "schoolRank": 51,
            "score": 74.5
        },
        {
            "classRank": 18,
            "schoolRank": 56,
            "score": 72
        },
        {
            "classRank": 19,
            "schoolRank": 57,
            "score": 71.5
        },
        {
            "classRank": 20,
            "schoolRank": 59,
            "score": 70.5
        },
        {
            "classRank": 21,
            "schoolRank": 67,
            "score": 66
        },
        {
            "classRank": 22,
            "schoolRank": 106,
            "score": 124
        },
        {
            "classRank": 23,
            "schoolRank": 109,
            "score": 122.5
        },
        {
            "classRank": 24,
            "schoolRank": 115,
            "score": 118.5
        },
        {
            "classRank": 25,
            "schoolRank": 116,
            "score": 118
        },
        {
            "classRank": 26,
            "schoolRank": 117,
            "score": 117.5
        },
        {
            "classRank": 27,
            "schoolRank": 132,
            "score": 110
        },
        {
            "classRank": 28,
            "schoolRank": 136,
            "score": 108
        },
        {
            "classRank": 29,
            "schoolRank": 136,
            "score": 108
        },
        {
            "classRank": 30,
            "schoolRank": 138,
            "score": 107
        },
        {
            "classRank": 31,
            "schoolRank": 139,
            "score": 106.5
        },
        {
            "classRank": 32,
            "schoolRank": 141,
            "score": 105.5
        },
        {
            "classRank": 33,
            "schoolRank": 142,
            "score": 105
        },
        {
            "classRank": 34,
            "schoolRank": 145,
            "score": 103.5
        },
        {
            "classRank": 35,
            "schoolRank": 152,
            "score": 100
        }
    ],
    "高一04班": [{
            "classRank": 1,
            "schoolRank": 2,
            "score": 99
        },
        {
            "classRank": 2,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 3,
            "schoolRank": 7,
            "score": 96.5
        },
        {
            "classRank": 4,
            "schoolRank": 9,
            "score": 95.5
        },
        {
            "classRank": 5,
            "schoolRank": 9,
            "score": 95.5
        },
        {
            "classRank": 6,
            "schoolRank": 17,
            "score": 91.5
        },
        {
            "classRank": 7,
            "schoolRank": 19,
            "score": 90.5
        },
        {
            "classRank": 8,
            "schoolRank": 19,
            "score": 90.5
        },
        {
            "classRank": 9,
            "schoolRank": 21,
            "score": 89.5
        },
        {
            "classRank": 10,
            "schoolRank": 23,
            "score": 88.5
        },
        {
            "classRank": 11,
            "schoolRank": 34,
            "score": 83
        },
        {
            "classRank": 12,
            "schoolRank": 38,
            "score": 81
        },
        {
            "classRank": 13,
            "schoolRank": 39,
            "score": 80.5
        },
        {
            "classRank": 14,
            "schoolRank": 42,
            "score": 79
        },
        {
            "classRank": 15,
            "schoolRank": 50,
            "score": 75
        },
        {
            "classRank": 16,
            "schoolRank": 52,
            "score": 74
        },
        {
            "classRank": 17,
            "schoolRank": 97,
            "score": 129
        },
        {
            "classRank": 18,
            "schoolRank": 100,
            "score": 127
        },
        {
            "classRank": 19,
            "schoolRank": 103,
            "score": 125.5
        },
        {
            "classRank": 20,
            "schoolRank": 109,
            "score": 122.5
        },
        {
            "classRank": 21,
            "schoolRank": 111,
            "score": 121.5
        },
        {
            "classRank": 22,
            "schoolRank": 113,
            "score": 120
        },
        {
            "classRank": 23,
            "schoolRank": 115,
            "score": 118.5
        },
        {
            "classRank": 24,
            "schoolRank": 118,
            "score": 117
        },
        {
            "classRank": 25,
            "schoolRank": 124,
            "score": 114
        },
        {
            "classRank": 26,
            "schoolRank": 127,
            "score": 112.5
        },
        {
            "classRank": 27,
            "schoolRank": 129,
            "score": 111.5
        },
        {
            "classRank": 28,
            "schoolRank": 130,
            "score": 111
        },
        {
            "classRank": 29,
            "schoolRank": 132,
            "score": 110
        },
        {
            "classRank": 30,
            "schoolRank": 133,
            "score": 109.5
        },
        {
            "classRank": 31,
            "schoolRank": 135,
            "score": 108.5
        },
        {
            "classRank": 32,
            "schoolRank": 140,
            "score": 106
        },
        {
            "classRank": 33,
            "schoolRank": 141,
            "score": 105.5
        },
        {
            "classRank": 34,
            "schoolRank": 147,
            "score": 102.5
        },
        {
            "classRank": 35,
            "schoolRank": 148,
            "score": 102
        }
    ],
    "高一05班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 99.5
        },
        {
            "classRank": 2,
            "schoolRank": 7,
            "score": 96.5
        },
        {
            "classRank": 3,
            "schoolRank": 7,
            "score": 96.5
        },
        {
            "classRank": 4,
            "schoolRank": 10,
            "score": 95
        },
        {
            "classRank": 5,
            "schoolRank": 15,
            "score": 92.5
        },
        {
            "classRank": 6,
            "schoolRank": 16,
            "score": 92
        },
        {
            "classRank": 7,
            "schoolRank": 18,
            "score": 91
        },
        {
            "classRank": 8,
            "schoolRank": 19,
            "score": 90.5
        },
        {
            "classRank": 9,
            "schoolRank": 24,
            "score": 88
        },
        {
            "classRank": 10,
            "schoolRank": 24,
            "score": 88
        },
        {
            "classRank": 11,
            "schoolRank": 27,
            "score": 86.5
        },
        {
            "classRank": 12,
            "schoolRank": 34,
            "score": 83
        },
        {
            "classRank": 13,
            "schoolRank": 38,
            "score": 81
        },
        {
            "classRank": 14,
            "schoolRank": 43,
            "score": 78.5
        },
        {
            "classRank": 15,
            "schoolRank": 47,
            "score": 76.5
        },
        {
            "classRank": 16,
            "schoolRank": 49,
            "score": 75.5
        },
        {
            "classRank": 17,
            "schoolRank": 49,
            "score": 75.5
        },
        {
            "classRank": 18,
            "schoolRank": 51,
            "score": 74.5
        },
        {
            "classRank": 19,
            "schoolRank": 55,
            "score": 72.5
        },
        {
            "classRank": 20,
            "schoolRank": 93,
            "score": 132
        },
        {
            "classRank": 21,
            "schoolRank": 99,
            "score": 127.5
        },
        {
            "classRank": 22,
            "schoolRank": 99,
            "score": 127.5
        },
        {
            "classRank": 23,
            "schoolRank": 106,
            "score": 124
        },
        {
            "classRank": 24,
            "schoolRank": 109,
            "score": 122.5
        },
        {
            "classRank": 25,
            "schoolRank": 110,
            "score": 122
        },
        {
            "classRank": 26,
            "schoolRank": 115,
            "score": 118.5
        },
        {
            "classRank": 27,
            "schoolRank": 119,
            "score": 116.5
        },
        {
            "classRank": 28,
            "schoolRank": 127,
            "score": 112.5
        },
        {
            "classRank": 29,
            "schoolRank": 129,
            "score": 111.5
        },
        {
            "classRank": 30,
            "schoolRank": 130,
            "score": 111
        },
        {
            "classRank": 31,
            "schoolRank": 133,
            "score": 109.5
        },
        {
            "classRank": 32,
            "schoolRank": 134,
            "score": 109
        },
        {
            "classRank": 33,
            "schoolRank": 134,
            "score": 109
        },
        {
            "classRank": 34,
            "schoolRank": 136,
            "score": 108
        },
        {
            "classRank": 35,
            "schoolRank": 137,
            "score": 107.5
        },
        {
            "classRank": 36,
            "schoolRank": 150,
            "score": 101
        },
        {
            "classRank": 37,
            "schoolRank": 150,
            "score": 101
        },
        {
            "classRank": 38,
            "schoolRank": 151,
            "score": 100.5
        }
    ],
    "高一02班": [{
            "classRank": 1,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 2,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 3,
            "schoolRank": 5,
            "score": 97.5
        },
        {
            "classRank": 4,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 5,
            "schoolRank": 10,
            "score": 95
        },
        {
            "classRank": 6,
            "schoolRank": 11,
            "score": 94.5
        },
        {
            "classRank": 7,
            "schoolRank": 16,
            "score": 92
        },
        {
            "classRank": 8,
            "schoolRank": 16,
            "score": 92
        },
        {
            "classRank": 9,
            "schoolRank": 26,
            "score": 87
        },
        {
            "classRank": 10,
            "schoolRank": 29,
            "score": 85.5
        },
        {
            "classRank": 11,
            "schoolRank": 32,
            "score": 84
        },
        {
            "classRank": 12,
            "schoolRank": 36,
            "score": 82
        },
        {
            "classRank": 13,
            "schoolRank": 37,
            "score": 81.5
        },
        {
            "classRank": 14,
            "schoolRank": 38,
            "score": 81
        },
        {
            "classRank": 15,
            "schoolRank": 43,
            "score": 78.5
        },
        {
            "classRank": 16,
            "schoolRank": 90,
            "score": 136.5
        },
        {
            "classRank": 17,
            "schoolRank": 91,
            "score": 135
        },
        {
            "classRank": 18,
            "schoolRank": 92,
            "score": 133
        },
        {
            "classRank": 19,
            "schoolRank": 93,
            "score": 132
        },
        {
            "classRank": 20,
            "schoolRank": 95,
            "score": 130.5
        },
        {
            "classRank": 21,
            "schoolRank": 96,
            "score": 129.5
        },
        {
            "classRank": 22,
            "schoolRank": 96,
            "score": 129.5
        },
        {
            "classRank": 23,
            "schoolRank": 99,
            "score": 127.5
        },
        {
            "classRank": 24,
            "schoolRank": 108,
            "score": 123
        },
        {
            "classRank": 25,
            "schoolRank": 108,
            "score": 123
        },
        {
            "classRank": 26,
            "schoolRank": 112,
            "score": 121
        },
        {
            "classRank": 27,
            "schoolRank": 113,
            "score": 120
        },
        {
            "classRank": 28,
            "schoolRank": 119,
            "score": 116.5
        },
        {
            "classRank": 29,
            "schoolRank": 123,
            "score": 114.5
        },
        {
            "classRank": 30,
            "schoolRank": 128,
            "score": 112
        },
        {
            "classRank": 31,
            "schoolRank": 129,
            "score": 111.5
        },
        {
            "classRank": 32,
            "schoolRank": 133,
            "score": 109.5
        },
        {
            "classRank": 33,
            "schoolRank": 136,
            "score": 108
        },
        {
            "classRank": 34,
            "schoolRank": 138,
            "score": 107
        },
        {
            "classRank": 35,
            "schoolRank": 144,
            "score": 104
        },
        {
            "classRank": 36,
            "schoolRank": 147,
            "score": 102.5
        }
    ],
    "高一13班": [{
            "classRank": 1,
            "schoolRank": 5,
            "score": 97.5
        },
        {
            "classRank": 2,
            "schoolRank": 7,
            "score": 96.5
        },
        {
            "classRank": 3,
            "schoolRank": 10,
            "score": 95
        },
        {
            "classRank": 4,
            "schoolRank": 10,
            "score": 95
        },
        {
            "classRank": 5,
            "schoolRank": 12,
            "score": 94
        },
        {
            "classRank": 6,
            "schoolRank": 15,
            "score": 92.5
        },
        {
            "classRank": 7,
            "schoolRank": 17,
            "score": 91.5
        },
        {
            "classRank": 8,
            "schoolRank": 22,
            "score": 89
        },
        {
            "classRank": 9,
            "schoolRank": 23,
            "score": 88.5
        },
        {
            "classRank": 10,
            "schoolRank": 26,
            "score": 87
        },
        {
            "classRank": 11,
            "schoolRank": 34,
            "score": 83
        },
        {
            "classRank": 12,
            "schoolRank": 35,
            "score": 82.5
        },
        {
            "classRank": 13,
            "schoolRank": 38,
            "score": 81
        },
        {
            "classRank": 14,
            "schoolRank": 40,
            "score": 80
        },
        {
            "classRank": 15,
            "schoolRank": 41,
            "score": 79.5
        },
        {
            "classRank": 16,
            "schoolRank": 46,
            "score": 77
        },
        {
            "classRank": 17,
            "schoolRank": 47,
            "score": 76.5
        },
        {
            "classRank": 18,
            "schoolRank": 54,
            "score": 73
        },
        {
            "classRank": 19,
            "schoolRank": 59,
            "score": 70.5
        },
        {
            "classRank": 20,
            "schoolRank": 59,
            "score": 70.5
        },
        {
            "classRank": 21,
            "schoolRank": 60,
            "score": 69.5
        },
        {
            "classRank": 22,
            "schoolRank": 63,
            "score": 68
        },
        {
            "classRank": 23,
            "schoolRank": 64,
            "score": 67.5
        },
        {
            "classRank": 24,
            "schoolRank": 65,
            "score": 67
        },
        {
            "classRank": 25,
            "schoolRank": 71,
            "score": 63
        },
        {
            "classRank": 26,
            "schoolRank": 75,
            "score": 61
        },
        {
            "classRank": 27,
            "schoolRank": 78,
            "score": 58
        },
        {
            "classRank": 28,
            "schoolRank": 79,
            "score": 56
        },
        {
            "classRank": 29,
            "schoolRank": 79,
            "score": 56
        },
        {
            "classRank": 30,
            "schoolRank": 83,
            "score": 53
        },
        {
            "classRank": 31,
            "schoolRank": 87,
            "score": 49.5
        },
        {
            "classRank": 32,
            "schoolRank": 116,
            "score": 118
        },
        {
            "classRank": 33,
            "schoolRank": 120,
            "score": 116
        },
        {
            "classRank": 34,
            "schoolRank": 124,
            "score": 114
        },
        {
            "classRank": 35,
            "schoolRank": 126,
            "score": 113
        },
        {
            "classRank": 36,
            "schoolRank": 130,
            "score": 111
        },
        {
            "classRank": 37,
            "schoolRank": 131,
            "score": 110.5
        },
        {
            "classRank": 38,
            "schoolRank": 137,
            "score": 107.5
        },
        {
            "classRank": 39,
            "schoolRank": 143,
            "score": 104.5
        },
        {
            "classRank": 40,
            "schoolRank": 145,
            "score": 103.5
        },
        {
            "classRank": 41,
            "schoolRank": 146,
            "score": 103
        },
        {
            "classRank": 42,
            "schoolRank": 149,
            "score": 101.5
        }
    ],
    "高一03班": [{
            "classRank": 1,
            "schoolRank": 5,
            "score": 97.5
        },
        {
            "classRank": 2,
            "schoolRank": 7,
            "score": 96.5
        },
        {
            "classRank": 3,
            "schoolRank": 8,
            "score": 96
        },
        {
            "classRank": 4,
            "schoolRank": 17,
            "score": 91.5
        },
        {
            "classRank": 5,
            "schoolRank": 18,
            "score": 91
        },
        {
            "classRank": 6,
            "schoolRank": 22,
            "score": 89
        },
        {
            "classRank": 7,
            "schoolRank": 22,
            "score": 89
        },
        {
            "classRank": 8,
            "schoolRank": 26,
            "score": 87
        },
        {
            "classRank": 9,
            "schoolRank": 27,
            "score": 86.5
        },
        {
            "classRank": 10,
            "schoolRank": 33,
            "score": 83.5
        },
        {
            "classRank": 11,
            "schoolRank": 34,
            "score": 83
        },
        {
            "classRank": 12,
            "schoolRank": 37,
            "score": 81.5
        },
        {
            "classRank": 13,
            "schoolRank": 37,
            "score": 81.5
        },
        {
            "classRank": 14,
            "schoolRank": 42,
            "score": 79
        },
        {
            "classRank": 15,
            "schoolRank": 47,
            "score": 76.5
        },
        {
            "classRank": 16,
            "schoolRank": 54,
            "score": 73
        },
        {
            "classRank": 17,
            "schoolRank": 94,
            "score": 131
        },
        {
            "classRank": 18,
            "schoolRank": 101,
            "score": 126.5
        },
        {
            "classRank": 19,
            "schoolRank": 103,
            "score": 125.5
        },
        {
            "classRank": 20,
            "schoolRank": 106,
            "score": 124
        },
        {
            "classRank": 21,
            "schoolRank": 106,
            "score": 124
        },
        {
            "classRank": 22,
            "schoolRank": 109,
            "score": 122.5
        },
        {
            "classRank": 23,
            "schoolRank": 111,
            "score": 121.5
        },
        {
            "classRank": 24,
            "schoolRank": 112,
            "score": 121
        },
        {
            "classRank": 25,
            "schoolRank": 121,
            "score": 115.5
        },
        {
            "classRank": 26,
            "schoolRank": 121,
            "score": 115.5
        },
        {
            "classRank": 27,
            "schoolRank": 122,
            "score": 115
        },
        {
            "classRank": 28,
            "schoolRank": 123,
            "score": 114.5
        },
        {
            "classRank": 29,
            "schoolRank": 124,
            "score": 114
        },
        {
            "classRank": 30,
            "schoolRank": 124,
            "score": 114
        },
        {
            "classRank": 31,
            "schoolRank": 135,
            "score": 108.5
        },
        {
            "classRank": 32,
            "schoolRank": 138,
            "score": 107
        },
        {
            "classRank": 33,
            "schoolRank": 139,
            "score": 106.5
        },
        {
            "classRank": 34,
            "schoolRank": 147,
            "score": 102.5
        },
        {
            "classRank": 35,
            "schoolRank": 148,
            "score": 102
        },
        {
            "classRank": 36,
            "schoolRank": 151,
            "score": 100.5
        },
        {
            "classRank": 37,
            "schoolRank": 151,
            "score": 100.5
        }
    ]
}
var gy3 = [];
getyk(data, gy3);
setMapS1(gy3, '英语', 'm1-3');
data = {
    "高一08班": [{
            "classRank": 1,
            "schoolRank": 8,
            "score": 84.5
        },
        {
            "classRank": 2,
            "schoolRank": 13,
            "score": 82
        },
        {
            "classRank": 3,
            "schoolRank": 15,
            "score": 81
        },
        {
            "classRank": 4,
            "schoolRank": 17,
            "score": 80
        },
        {
            "classRank": 5,
            "schoolRank": 28,
            "score": 74.5
        },
        {
            "classRank": 6,
            "schoolRank": 31,
            "score": 73
        },
        {
            "classRank": 7,
            "schoolRank": 34,
            "score": 71.5
        },
        {
            "classRank": 8,
            "schoolRank": 34,
            "score": 71.5
        },
        {
            "classRank": 9,
            "schoolRank": 36,
            "score": 70.5
        },
        {
            "classRank": 10,
            "schoolRank": 37,
            "score": 70
        },
        {
            "classRank": 11,
            "schoolRank": 37,
            "score": 70
        },
        {
            "classRank": 12,
            "schoolRank": 37,
            "score": 70
        },
        {
            "classRank": 13,
            "schoolRank": 38,
            "score": 69.5
        },
        {
            "classRank": 14,
            "schoolRank": 38,
            "score": 69.5
        },
        {
            "classRank": 15,
            "schoolRank": 46,
            "score": 65.5
        },
        {
            "classRank": 16,
            "schoolRank": 47,
            "score": 65
        },
        {
            "classRank": 17,
            "schoolRank": 48,
            "score": 64.5
        },
        {
            "classRank": 18,
            "schoolRank": 48,
            "score": 64.5
        },
        {
            "classRank": 19,
            "schoolRank": 49,
            "score": 64
        },
        {
            "classRank": 20,
            "schoolRank": 52,
            "score": 62.5
        },
        {
            "classRank": 21,
            "schoolRank": 55,
            "score": 61
        },
        {
            "classRank": 22,
            "schoolRank": 60,
            "score": 58.5
        },
        {
            "classRank": 23,
            "schoolRank": 61,
            "score": 58
        },
        {
            "classRank": 24,
            "schoolRank": 62,
            "score": 57.5
        },
        {
            "classRank": 25,
            "schoolRank": 63,
            "score": 57
        },
        {
            "classRank": 26,
            "schoolRank": 65,
            "score": 56
        },
        {
            "classRank": 27,
            "schoolRank": 67,
            "score": 55
        },
        {
            "classRank": 28,
            "schoolRank": 70,
            "score": 53.5
        },
        {
            "classRank": 29,
            "schoolRank": 71,
            "score": 53
        },
        {
            "classRank": 30,
            "schoolRank": 77,
            "score": 50
        },
        {
            "classRank": 31,
            "schoolRank": 77,
            "score": 50
        },
        {
            "classRank": 32,
            "schoolRank": 78,
            "score": 49.5
        },
        {
            "classRank": 33,
            "schoolRank": 79,
            "score": 49
        },
        {
            "classRank": 34,
            "schoolRank": 79,
            "score": 49
        },
        {
            "classRank": 35,
            "schoolRank": 83,
            "score": 47
        },
        {
            "classRank": 36,
            "schoolRank": 90,
            "score": 43.5
        },
        {
            "classRank": 37,
            "schoolRank": 91,
            "score": 43
        }
    ],
    "高一09班": [{
            "classRank": 1,
            "schoolRank": 11,
            "score": 83
        },
        {
            "classRank": 2,
            "schoolRank": 15,
            "score": 81
        },
        {
            "classRank": 3,
            "schoolRank": 16,
            "score": 80.5
        },
        {
            "classRank": 4,
            "schoolRank": 23,
            "score": 77
        },
        {
            "classRank": 5,
            "schoolRank": 24,
            "score": 76.5
        },
        {
            "classRank": 6,
            "schoolRank": 24,
            "score": 76.5
        },
        {
            "classRank": 7,
            "schoolRank": 29,
            "score": 74
        },
        {
            "classRank": 8,
            "schoolRank": 30,
            "score": 73.5
        },
        {
            "classRank": 9,
            "schoolRank": 32,
            "score": 72.5
        },
        {
            "classRank": 10,
            "schoolRank": 34,
            "score": 71.5
        },
        {
            "classRank": 11,
            "schoolRank": 35,
            "score": 71
        },
        {
            "classRank": 12,
            "schoolRank": 36,
            "score": 70.5
        },
        {
            "classRank": 13,
            "schoolRank": 36,
            "score": 70.5
        },
        {
            "classRank": 14,
            "schoolRank": 42,
            "score": 67.5
        },
        {
            "classRank": 15,
            "schoolRank": 43,
            "score": 67
        },
        {
            "classRank": 16,
            "schoolRank": 45,
            "score": 66
        },
        {
            "classRank": 17,
            "schoolRank": 48,
            "score": 64.5
        },
        {
            "classRank": 18,
            "schoolRank": 51,
            "score": 63
        },
        {
            "classRank": 19,
            "schoolRank": 52,
            "score": 62.5
        },
        {
            "classRank": 20,
            "schoolRank": 52,
            "score": 62.5
        },
        {
            "classRank": 21,
            "schoolRank": 53,
            "score": 62
        },
        {
            "classRank": 22,
            "schoolRank": 58,
            "score": 59.5
        },
        {
            "classRank": 23,
            "schoolRank": 58,
            "score": 59.5
        },
        {
            "classRank": 24,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 25,
            "schoolRank": 60,
            "score": 58.5
        },
        {
            "classRank": 26,
            "schoolRank": 60,
            "score": 58.5
        },
        {
            "classRank": 27,
            "schoolRank": 60,
            "score": 58.5
        },
        {
            "classRank": 28,
            "schoolRank": 70,
            "score": 53.5
        },
        {
            "classRank": 29,
            "schoolRank": 71,
            "score": 53
        },
        {
            "classRank": 30,
            "schoolRank": 72,
            "score": 52.5
        },
        {
            "classRank": 31,
            "schoolRank": 72,
            "score": 52.5
        },
        {
            "classRank": 32,
            "schoolRank": 73,
            "score": 52
        },
        {
            "classRank": 33,
            "schoolRank": 73,
            "score": 52
        },
        {
            "classRank": 34,
            "schoolRank": 79,
            "score": 49
        },
        {
            "classRank": 35,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 36,
            "schoolRank": 93,
            "score": 42
        },
        {
            "classRank": 37,
            "schoolRank": 93,
            "score": 42
        },
        {
            "classRank": 38,
            "schoolRank": 96,
            "score": 40
        },
        {
            "classRank": 39,
            "schoolRank": 97,
            "score": 39.5
        },
        {
            "classRank": 40,
            "schoolRank": 101,
            "score": 37
        },
        {
            "classRank": 41,
            "schoolRank": 104,
            "score": 35
        }
    ],
    "高一06班": [{
            "classRank": 1,
            "schoolRank": 6,
            "score": 86.5
        },
        {
            "classRank": 2,
            "schoolRank": 8,
            "score": 84.5
        },
        {
            "classRank": 3,
            "schoolRank": 9,
            "score": 84
        },
        {
            "classRank": 4,
            "schoolRank": 10,
            "score": 83.5
        },
        {
            "classRank": 5,
            "schoolRank": 14,
            "score": 81.5
        },
        {
            "classRank": 6,
            "schoolRank": 14,
            "score": 81.5
        },
        {
            "classRank": 7,
            "schoolRank": 14,
            "score": 81.5
        },
        {
            "classRank": 8,
            "schoolRank": 20,
            "score": 78.5
        },
        {
            "classRank": 9,
            "schoolRank": 20,
            "score": 78.5
        },
        {
            "classRank": 10,
            "schoolRank": 20,
            "score": 78.5
        },
        {
            "classRank": 11,
            "schoolRank": 24,
            "score": 76.5
        },
        {
            "classRank": 12,
            "schoolRank": 26,
            "score": 75.5
        },
        {
            "classRank": 13,
            "schoolRank": 35,
            "score": 71
        },
        {
            "classRank": 14,
            "schoolRank": 37,
            "score": 70
        },
        {
            "classRank": 15,
            "schoolRank": 38,
            "score": 69.5
        },
        {
            "classRank": 16,
            "schoolRank": 39,
            "score": 69
        },
        {
            "classRank": 17,
            "schoolRank": 39,
            "score": 69
        },
        {
            "classRank": 18,
            "schoolRank": 45,
            "score": 66
        },
        {
            "classRank": 19,
            "schoolRank": 45,
            "score": 66
        },
        {
            "classRank": 20,
            "schoolRank": 48,
            "score": 64.5
        },
        {
            "classRank": 21,
            "schoolRank": 50,
            "score": 63.5
        },
        {
            "classRank": 22,
            "schoolRank": 50,
            "score": 63.5
        },
        {
            "classRank": 23,
            "schoolRank": 53,
            "score": 62
        },
        {
            "classRank": 24,
            "schoolRank": 54,
            "score": 61.5
        },
        {
            "classRank": 25,
            "schoolRank": 56,
            "score": 60.5
        },
        {
            "classRank": 26,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 27,
            "schoolRank": 61,
            "score": 58
        },
        {
            "classRank": 28,
            "schoolRank": 62,
            "score": 57.5
        },
        {
            "classRank": 29,
            "schoolRank": 64,
            "score": 56.5
        },
        {
            "classRank": 30,
            "schoolRank": 65,
            "score": 56
        },
        {
            "classRank": 31,
            "schoolRank": 65,
            "score": 56
        },
        {
            "classRank": 32,
            "schoolRank": 71,
            "score": 53
        },
        {
            "classRank": 33,
            "schoolRank": 74,
            "score": 51.5
        },
        {
            "classRank": 34,
            "schoolRank": 76,
            "score": 50.5
        },
        {
            "classRank": 35,
            "schoolRank": 77,
            "score": 50
        },
        {
            "classRank": 36,
            "schoolRank": 79,
            "score": 49
        }
    ],
    "高一07班": [{
            "classRank": 1,
            "schoolRank": 13,
            "score": 82
        },
        {
            "classRank": 2,
            "schoolRank": 14,
            "score": 81.5
        },
        {
            "classRank": 3,
            "schoolRank": 18,
            "score": 79.5
        },
        {
            "classRank": 4,
            "schoolRank": 18,
            "score": 79.5
        },
        {
            "classRank": 5,
            "schoolRank": 19,
            "score": 79
        },
        {
            "classRank": 6,
            "schoolRank": 24,
            "score": 76.5
        },
        {
            "classRank": 7,
            "schoolRank": 25,
            "score": 76
        },
        {
            "classRank": 8,
            "schoolRank": 28,
            "score": 74.5
        },
        {
            "classRank": 9,
            "schoolRank": 32,
            "score": 72.5
        },
        {
            "classRank": 10,
            "schoolRank": 32,
            "score": 72.5
        },
        {
            "classRank": 11,
            "schoolRank": 36,
            "score": 70.5
        },
        {
            "classRank": 12,
            "schoolRank": 36,
            "score": 70.5
        },
        {
            "classRank": 13,
            "schoolRank": 37,
            "score": 70
        },
        {
            "classRank": 14,
            "schoolRank": 38,
            "score": 69.5
        },
        {
            "classRank": 15,
            "schoolRank": 38,
            "score": 69.5
        },
        {
            "classRank": 16,
            "schoolRank": 42,
            "score": 67.5
        },
        {
            "classRank": 17,
            "schoolRank": 45,
            "score": 66
        },
        {
            "classRank": 18,
            "schoolRank": 46,
            "score": 65.5
        },
        {
            "classRank": 19,
            "schoolRank": 46,
            "score": 65.5
        },
        {
            "classRank": 20,
            "schoolRank": 47,
            "score": 65
        },
        {
            "classRank": 21,
            "schoolRank": 50,
            "score": 63.5
        },
        {
            "classRank": 22,
            "schoolRank": 51,
            "score": 63
        },
        {
            "classRank": 23,
            "schoolRank": 52,
            "score": 62.5
        },
        {
            "classRank": 24,
            "schoolRank": 52,
            "score": 62.5
        },
        {
            "classRank": 25,
            "schoolRank": 58,
            "score": 59.5
        },
        {
            "classRank": 26,
            "schoolRank": 62,
            "score": 57.5
        },
        {
            "classRank": 27,
            "schoolRank": 64,
            "score": 56.5
        },
        {
            "classRank": 28,
            "schoolRank": 66,
            "score": 55.5
        },
        {
            "classRank": 29,
            "schoolRank": 70,
            "score": 53.5
        },
        {
            "classRank": 30,
            "schoolRank": 73,
            "score": 52
        },
        {
            "classRank": 31,
            "schoolRank": 77,
            "score": 50
        },
        {
            "classRank": 32,
            "schoolRank": 78,
            "score": 49.5
        },
        {
            "classRank": 33,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 34,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 35,
            "schoolRank": 82,
            "score": 47.5
        },
        {
            "classRank": 36,
            "schoolRank": 83,
            "score": 47
        },
        {
            "classRank": 37,
            "schoolRank": 85,
            "score": 46
        },
        {
            "classRank": 38,
            "schoolRank": 85,
            "score": 46
        },
        {
            "classRank": 39,
            "schoolRank": 88,
            "score": 44.5
        },
        {
            "classRank": 40,
            "schoolRank": 89,
            "score": 44
        },
        {
            "classRank": 41,
            "schoolRank": 96,
            "score": 40
        },
        {
            "classRank": 42,
            "schoolRank": 96,
            "score": 40
        },
        {
            "classRank": 43,
            "schoolRank": 103,
            "score": 35.5
        },
        {
            "classRank": 44,
            "schoolRank": 104,
            "score": 35
        },
        {
            "classRank": 45,
            "schoolRank": 104,
            "score": 35
        }
    ],
    "高一11班": [{
            "classRank": 1,
            "schoolRank": 15,
            "score": 81
        },
        {
            "classRank": 2,
            "schoolRank": 18,
            "score": 79.5
        },
        {
            "classRank": 3,
            "schoolRank": 19,
            "score": 79
        },
        {
            "classRank": 4,
            "schoolRank": 19,
            "score": 79
        },
        {
            "classRank": 5,
            "schoolRank": 28,
            "score": 74.5
        },
        {
            "classRank": 6,
            "schoolRank": 33,
            "score": 72
        },
        {
            "classRank": 7,
            "schoolRank": 35,
            "score": 71
        },
        {
            "classRank": 8,
            "schoolRank": 38,
            "score": 69.5
        },
        {
            "classRank": 9,
            "schoolRank": 38,
            "score": 69.5
        },
        {
            "classRank": 10,
            "schoolRank": 39,
            "score": 69
        },
        {
            "classRank": 11,
            "schoolRank": 40,
            "score": 68.5
        },
        {
            "classRank": 12,
            "schoolRank": 41,
            "score": 68
        },
        {
            "classRank": 13,
            "schoolRank": 42,
            "score": 67.5
        },
        {
            "classRank": 14,
            "schoolRank": 43,
            "score": 67
        },
        {
            "classRank": 15,
            "schoolRank": 43,
            "score": 67
        },
        {
            "classRank": 16,
            "schoolRank": 46,
            "score": 65.5
        },
        {
            "classRank": 17,
            "schoolRank": 49,
            "score": 64
        },
        {
            "classRank": 18,
            "schoolRank": 49,
            "score": 64
        },
        {
            "classRank": 19,
            "schoolRank": 52,
            "score": 62.5
        },
        {
            "classRank": 20,
            "schoolRank": 55,
            "score": 61
        },
        {
            "classRank": 21,
            "schoolRank": 56,
            "score": 60.5
        },
        {
            "classRank": 22,
            "schoolRank": 56,
            "score": 60.5
        },
        {
            "classRank": 23,
            "schoolRank": 58,
            "score": 59.5
        },
        {
            "classRank": 24,
            "schoolRank": 67,
            "score": 55
        },
        {
            "classRank": 25,
            "schoolRank": 68,
            "score": 54.5
        },
        {
            "classRank": 26,
            "schoolRank": 69,
            "score": 54
        },
        {
            "classRank": 27,
            "schoolRank": 72,
            "score": 52.5
        },
        {
            "classRank": 28,
            "schoolRank": 72,
            "score": 52.5
        },
        {
            "classRank": 29,
            "schoolRank": 76,
            "score": 50.5
        },
        {
            "classRank": 30,
            "schoolRank": 76,
            "score": 50.5
        },
        {
            "classRank": 31,
            "schoolRank": 77,
            "score": 50
        },
        {
            "classRank": 32,
            "schoolRank": 78,
            "score": 49.5
        },
        {
            "classRank": 33,
            "schoolRank": 84,
            "score": 46.5
        },
        {
            "classRank": 34,
            "schoolRank": 84,
            "score": 46.5
        },
        {
            "classRank": 35,
            "schoolRank": 86,
            "score": 45.5
        },
        {
            "classRank": 36,
            "schoolRank": 87,
            "score": 45
        },
        {
            "classRank": 37,
            "schoolRank": 87,
            "score": 45
        },
        {
            "classRank": 38,
            "schoolRank": 90,
            "score": 43.5
        },
        {
            "classRank": 39,
            "schoolRank": 90,
            "score": 43.5
        },
        {
            "classRank": 40,
            "schoolRank": 94,
            "score": 41
        },
        {
            "classRank": 41,
            "schoolRank": 99,
            "score": 38
        },
        {
            "classRank": 42,
            "schoolRank": 100,
            "score": 37.5
        },
        {
            "classRank": 43,
            "schoolRank": 103,
            "score": 35.5
        },
        {
            "classRank": 44,
            "schoolRank": 107,
            "score": 31.5
        }
    ],
    "高一01班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 91
        },
        {
            "classRank": 2,
            "schoolRank": 2,
            "score": 90
        },
        {
            "classRank": 3,
            "schoolRank": 4,
            "score": 89
        },
        {
            "classRank": 4,
            "schoolRank": 5,
            "score": 87
        },
        {
            "classRank": 5,
            "schoolRank": 6,
            "score": 86.5
        },
        {
            "classRank": 6,
            "schoolRank": 8,
            "score": 84.5
        },
        {
            "classRank": 7,
            "schoolRank": 17,
            "score": 80
        },
        {
            "classRank": 8,
            "schoolRank": 17,
            "score": 80
        },
        {
            "classRank": 9,
            "schoolRank": 18,
            "score": 79.5
        },
        {
            "classRank": 10,
            "schoolRank": 19,
            "score": 79
        },
        {
            "classRank": 11,
            "schoolRank": 22,
            "score": 77.5
        },
        {
            "classRank": 12,
            "schoolRank": 23,
            "score": 77
        },
        {
            "classRank": 13,
            "schoolRank": 23,
            "score": 77
        },
        {
            "classRank": 14,
            "schoolRank": 26,
            "score": 75.5
        },
        {
            "classRank": 15,
            "schoolRank": 27,
            "score": 75
        },
        {
            "classRank": 16,
            "schoolRank": 31,
            "score": 73
        },
        {
            "classRank": 17,
            "schoolRank": 34,
            "score": 71.5
        },
        {
            "classRank": 18,
            "schoolRank": 35,
            "score": 71
        },
        {
            "classRank": 19,
            "schoolRank": 36,
            "score": 70.5
        },
        {
            "classRank": 20,
            "schoolRank": 41,
            "score": 68
        },
        {
            "classRank": 21,
            "schoolRank": 44,
            "score": 66.5
        },
        {
            "classRank": 22,
            "schoolRank": 45,
            "score": 66
        },
        {
            "classRank": 23,
            "schoolRank": 46,
            "score": 65.5
        },
        {
            "classRank": 24,
            "schoolRank": 49,
            "score": 64
        },
        {
            "classRank": 25,
            "schoolRank": 49,
            "score": 64
        },
        {
            "classRank": 26,
            "schoolRank": 53,
            "score": 62
        },
        {
            "classRank": 27,
            "schoolRank": 53,
            "score": 62
        },
        {
            "classRank": 28,
            "schoolRank": 53,
            "score": 62
        },
        {
            "classRank": 29,
            "schoolRank": 58,
            "score": 59.5
        },
        {
            "classRank": 30,
            "schoolRank": 58,
            "score": 59.5
        },
        {
            "classRank": 31,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 32,
            "schoolRank": 62,
            "score": 57.5
        },
        {
            "classRank": 33,
            "schoolRank": 62,
            "score": 57.5
        },
        {
            "classRank": 34,
            "schoolRank": 63,
            "score": 57
        },
        {
            "classRank": 35,
            "schoolRank": 64,
            "score": 56.5
        },
        {
            "classRank": 36,
            "schoolRank": 65,
            "score": 56
        },
        {
            "classRank": 37,
            "schoolRank": 65,
            "score": 56
        },
        {
            "classRank": 38,
            "schoolRank": 66,
            "score": 55.5
        },
        {
            "classRank": 39,
            "schoolRank": 69,
            "score": 54
        },
        {
            "classRank": 40,
            "schoolRank": 83,
            "score": 47
        },
        {
            "classRank": 41,
            "schoolRank": 86,
            "score": 45.5
        }
    ],
    "高一12班": [{
            "classRank": 1,
            "schoolRank": 17,
            "score": 80
        },
        {
            "classRank": 2,
            "schoolRank": 22,
            "score": 77.5
        },
        {
            "classRank": 3,
            "schoolRank": 23,
            "score": 77
        },
        {
            "classRank": 4,
            "schoolRank": 25,
            "score": 76
        },
        {
            "classRank": 5,
            "schoolRank": 27,
            "score": 75
        },
        {
            "classRank": 6,
            "schoolRank": 29,
            "score": 74
        },
        {
            "classRank": 7,
            "schoolRank": 34,
            "score": 71.5
        },
        {
            "classRank": 8,
            "schoolRank": 37,
            "score": 70
        },
        {
            "classRank": 9,
            "schoolRank": 40,
            "score": 68.5
        },
        {
            "classRank": 10,
            "schoolRank": 41,
            "score": 68
        },
        {
            "classRank": 11,
            "schoolRank": 42,
            "score": 67.5
        },
        {
            "classRank": 12,
            "schoolRank": 46,
            "score": 65.5
        },
        {
            "classRank": 13,
            "schoolRank": 48,
            "score": 64.5
        },
        {
            "classRank": 14,
            "schoolRank": 50,
            "score": 63.5
        },
        {
            "classRank": 15,
            "schoolRank": 53,
            "score": 62
        },
        {
            "classRank": 16,
            "schoolRank": 54,
            "score": 61.5
        },
        {
            "classRank": 17,
            "schoolRank": 56,
            "score": 60.5
        },
        {
            "classRank": 18,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 19,
            "schoolRank": 60,
            "score": 58.5
        },
        {
            "classRank": 20,
            "schoolRank": 62,
            "score": 57.5
        },
        {
            "classRank": 21,
            "schoolRank": 64,
            "score": 56.5
        },
        {
            "classRank": 22,
            "schoolRank": 65,
            "score": 56
        },
        {
            "classRank": 23,
            "schoolRank": 70,
            "score": 53.5
        },
        {
            "classRank": 24,
            "schoolRank": 71,
            "score": 53
        },
        {
            "classRank": 25,
            "schoolRank": 73,
            "score": 52
        },
        {
            "classRank": 26,
            "schoolRank": 73,
            "score": 52
        },
        {
            "classRank": 27,
            "schoolRank": 75,
            "score": 51
        },
        {
            "classRank": 28,
            "schoolRank": 76,
            "score": 50.5
        },
        {
            "classRank": 29,
            "schoolRank": 76,
            "score": 50.5
        },
        {
            "classRank": 30,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 31,
            "schoolRank": 82,
            "score": 47.5
        },
        {
            "classRank": 32,
            "schoolRank": 83,
            "score": 47
        },
        {
            "classRank": 33,
            "schoolRank": 84,
            "score": 46.5
        },
        {
            "classRank": 34,
            "schoolRank": 85,
            "score": 46
        },
        {
            "classRank": 35,
            "schoolRank": 86,
            "score": 45.5
        },
        {
            "classRank": 36,
            "schoolRank": 88,
            "score": 44.5
        },
        {
            "classRank": 37,
            "schoolRank": 92,
            "score": 42.5
        },
        {
            "classRank": 38,
            "schoolRank": 93,
            "score": 42
        },
        {
            "classRank": 39,
            "schoolRank": 96,
            "score": 40
        },
        {
            "classRank": 40,
            "schoolRank": 96,
            "score": 40
        },
        {
            "classRank": 41,
            "schoolRank": 98,
            "score": 39
        },
        {
            "classRank": 42,
            "schoolRank": 99,
            "score": 38
        },
        {
            "classRank": 43,
            "schoolRank": 102,
            "score": 36.5
        },
        {
            "classRank": 44,
            "schoolRank": 104,
            "score": 35
        },
        {
            "classRank": 45,
            "schoolRank": 105,
            "score": 33
        },
        {
            "classRank": 46,
            "schoolRank": 106,
            "score": 32.5
        },
        {
            "classRank": 47,
            "schoolRank": 107,
            "score": 31.5
        }
    ],
    "高一10班": [{
            "classRank": 1,
            "schoolRank": 7,
            "score": 86
        },
        {
            "classRank": 2,
            "schoolRank": 13,
            "score": 82
        },
        {
            "classRank": 3,
            "schoolRank": 18,
            "score": 79.5
        },
        {
            "classRank": 4,
            "schoolRank": 19,
            "score": 79
        },
        {
            "classRank": 5,
            "schoolRank": 25,
            "score": 76
        },
        {
            "classRank": 6,
            "schoolRank": 31,
            "score": 73
        },
        {
            "classRank": 7,
            "schoolRank": 31,
            "score": 73
        },
        {
            "classRank": 8,
            "schoolRank": 33,
            "score": 72
        },
        {
            "classRank": 9,
            "schoolRank": 35,
            "score": 71
        },
        {
            "classRank": 10,
            "schoolRank": 35,
            "score": 71
        },
        {
            "classRank": 11,
            "schoolRank": 39,
            "score": 69
        },
        {
            "classRank": 12,
            "schoolRank": 39,
            "score": 69
        },
        {
            "classRank": 13,
            "schoolRank": 40,
            "score": 68.5
        },
        {
            "classRank": 14,
            "schoolRank": 44,
            "score": 66.5
        },
        {
            "classRank": 15,
            "schoolRank": 46,
            "score": 65.5
        },
        {
            "classRank": 16,
            "schoolRank": 47,
            "score": 65
        },
        {
            "classRank": 17,
            "schoolRank": 49,
            "score": 64
        },
        {
            "classRank": 18,
            "schoolRank": 50,
            "score": 63.5
        },
        {
            "classRank": 19,
            "schoolRank": 54,
            "score": 61.5
        },
        {
            "classRank": 20,
            "schoolRank": 56,
            "score": 60.5
        },
        {
            "classRank": 21,
            "schoolRank": 64,
            "score": 56.5
        },
        {
            "classRank": 22,
            "schoolRank": 65,
            "score": 56
        },
        {
            "classRank": 23,
            "schoolRank": 65,
            "score": 56
        },
        {
            "classRank": 24,
            "schoolRank": 66,
            "score": 55.5
        },
        {
            "classRank": 25,
            "schoolRank": 67,
            "score": 55
        },
        {
            "classRank": 26,
            "schoolRank": 68,
            "score": 54.5
        },
        {
            "classRank": 27,
            "schoolRank": 69,
            "score": 54
        },
        {
            "classRank": 28,
            "schoolRank": 70,
            "score": 53.5
        },
        {
            "classRank": 29,
            "schoolRank": 74,
            "score": 51.5
        },
        {
            "classRank": 30,
            "schoolRank": 74,
            "score": 51.5
        },
        {
            "classRank": 31,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 32,
            "schoolRank": 82,
            "score": 47.5
        },
        {
            "classRank": 33,
            "schoolRank": 86,
            "score": 45.5
        },
        {
            "classRank": 34,
            "schoolRank": 88,
            "score": 44.5
        },
        {
            "classRank": 35,
            "schoolRank": 90,
            "score": 43.5
        }
    ],
    "高一04班": [{
            "classRank": 1,
            "schoolRank": 5,
            "score": 87
        },
        {
            "classRank": 2,
            "schoolRank": 6,
            "score": 86.5
        },
        {
            "classRank": 3,
            "schoolRank": 12,
            "score": 82.5
        },
        {
            "classRank": 4,
            "schoolRank": 14,
            "score": 81.5
        },
        {
            "classRank": 5,
            "schoolRank": 14,
            "score": 81.5
        },
        {
            "classRank": 6,
            "schoolRank": 16,
            "score": 80.5
        },
        {
            "classRank": 7,
            "schoolRank": 18,
            "score": 79.5
        },
        {
            "classRank": 8,
            "schoolRank": 20,
            "score": 78.5
        },
        {
            "classRank": 9,
            "schoolRank": 23,
            "score": 77
        },
        {
            "classRank": 10,
            "schoolRank": 25,
            "score": 76
        },
        {
            "classRank": 11,
            "schoolRank": 26,
            "score": 75.5
        },
        {
            "classRank": 12,
            "schoolRank": 29,
            "score": 74
        },
        {
            "classRank": 13,
            "schoolRank": 30,
            "score": 73.5
        },
        {
            "classRank": 14,
            "schoolRank": 30,
            "score": 73.5
        },
        {
            "classRank": 15,
            "schoolRank": 30,
            "score": 73.5
        },
        {
            "classRank": 16,
            "schoolRank": 30,
            "score": 73.5
        },
        {
            "classRank": 17,
            "schoolRank": 34,
            "score": 71.5
        },
        {
            "classRank": 18,
            "schoolRank": 34,
            "score": 71.5
        },
        {
            "classRank": 19,
            "schoolRank": 38,
            "score": 69.5
        },
        {
            "classRank": 20,
            "schoolRank": 39,
            "score": 69
        },
        {
            "classRank": 21,
            "schoolRank": 46,
            "score": 65.5
        },
        {
            "classRank": 22,
            "schoolRank": 48,
            "score": 64.5
        },
        {
            "classRank": 23,
            "schoolRank": 50,
            "score": 63.5
        },
        {
            "classRank": 24,
            "schoolRank": 51,
            "score": 63
        },
        {
            "classRank": 25,
            "schoolRank": 51,
            "score": 63
        },
        {
            "classRank": 26,
            "schoolRank": 53,
            "score": 62
        },
        {
            "classRank": 27,
            "schoolRank": 54,
            "score": 61.5
        },
        {
            "classRank": 28,
            "schoolRank": 56,
            "score": 60.5
        },
        {
            "classRank": 29,
            "schoolRank": 57,
            "score": 60
        },
        {
            "classRank": 30,
            "schoolRank": 58,
            "score": 59.5
        },
        {
            "classRank": 31,
            "schoolRank": 68,
            "score": 54.5
        },
        {
            "classRank": 32,
            "schoolRank": 70,
            "score": 53.5
        },
        {
            "classRank": 33,
            "schoolRank": 74,
            "score": 51.5
        },
        {
            "classRank": 34,
            "schoolRank": 77,
            "score": 50
        },
        {
            "classRank": 35,
            "schoolRank": 80,
            "score": 48.5
        }
    ],
    "高一05班": [{
            "classRank": 1,
            "schoolRank": 2,
            "score": 90
        },
        {
            "classRank": 2,
            "schoolRank": 8,
            "score": 84.5
        },
        {
            "classRank": 3,
            "schoolRank": 8,
            "score": 84.5
        },
        {
            "classRank": 4,
            "schoolRank": 9,
            "score": 84
        },
        {
            "classRank": 5,
            "schoolRank": 12,
            "score": 82.5
        },
        {
            "classRank": 6,
            "schoolRank": 13,
            "score": 82
        },
        {
            "classRank": 7,
            "schoolRank": 16,
            "score": 80.5
        },
        {
            "classRank": 8,
            "schoolRank": 17,
            "score": 80
        },
        {
            "classRank": 9,
            "schoolRank": 18,
            "score": 79.5
        },
        {
            "classRank": 10,
            "schoolRank": 20,
            "score": 78.5
        },
        {
            "classRank": 11,
            "schoolRank": 23,
            "score": 77
        },
        {
            "classRank": 12,
            "schoolRank": 26,
            "score": 75.5
        },
        {
            "classRank": 13,
            "schoolRank": 33,
            "score": 72
        },
        {
            "classRank": 14,
            "schoolRank": 34,
            "score": 71.5
        },
        {
            "classRank": 15,
            "schoolRank": 35,
            "score": 71
        },
        {
            "classRank": 16,
            "schoolRank": 36,
            "score": 70.5
        },
        {
            "classRank": 17,
            "schoolRank": 37,
            "score": 70
        },
        {
            "classRank": 18,
            "schoolRank": 42,
            "score": 67.5
        },
        {
            "classRank": 19,
            "schoolRank": 45,
            "score": 66
        },
        {
            "classRank": 20,
            "schoolRank": 50,
            "score": 63.5
        },
        {
            "classRank": 21,
            "schoolRank": 50,
            "score": 63.5
        },
        {
            "classRank": 22,
            "schoolRank": 51,
            "score": 63
        },
        {
            "classRank": 23,
            "schoolRank": 53,
            "score": 62
        },
        {
            "classRank": 24,
            "schoolRank": 53,
            "score": 62
        },
        {
            "classRank": 25,
            "schoolRank": 55,
            "score": 61
        },
        {
            "classRank": 26,
            "schoolRank": 56,
            "score": 60.5
        },
        {
            "classRank": 27,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 28,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 29,
            "schoolRank": 63,
            "score": 57
        },
        {
            "classRank": 30,
            "schoolRank": 64,
            "score": 56.5
        },
        {
            "classRank": 31,
            "schoolRank": 65,
            "score": 56
        },
        {
            "classRank": 32,
            "schoolRank": 70,
            "score": 53.5
        },
        {
            "classRank": 33,
            "schoolRank": 70,
            "score": 53.5
        },
        {
            "classRank": 34,
            "schoolRank": 72,
            "score": 52.5
        },
        {
            "classRank": 35,
            "schoolRank": 73,
            "score": 52
        },
        {
            "classRank": 36,
            "schoolRank": 74,
            "score": 51.5
        },
        {
            "classRank": 37,
            "schoolRank": 77,
            "score": 50
        },
        {
            "classRank": 38,
            "schoolRank": 80,
            "score": 48.5
        }
    ],
    "高一02班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 91
        },
        {
            "classRank": 2,
            "schoolRank": 5,
            "score": 87
        },
        {
            "classRank": 3,
            "schoolRank": 9,
            "score": 84
        },
        {
            "classRank": 4,
            "schoolRank": 11,
            "score": 83
        },
        {
            "classRank": 5,
            "schoolRank": 11,
            "score": 83
        },
        {
            "classRank": 6,
            "schoolRank": 11,
            "score": 83
        },
        {
            "classRank": 7,
            "schoolRank": 14,
            "score": 81.5
        },
        {
            "classRank": 8,
            "schoolRank": 17,
            "score": 80
        },
        {
            "classRank": 9,
            "schoolRank": 19,
            "score": 79
        },
        {
            "classRank": 10,
            "schoolRank": 19,
            "score": 79
        },
        {
            "classRank": 11,
            "schoolRank": 20,
            "score": 78.5
        },
        {
            "classRank": 12,
            "schoolRank": 23,
            "score": 77
        },
        {
            "classRank": 13,
            "schoolRank": 25,
            "score": 76
        },
        {
            "classRank": 14,
            "schoolRank": 28,
            "score": 74.5
        },
        {
            "classRank": 15,
            "schoolRank": 30,
            "score": 73.5
        },
        {
            "classRank": 16,
            "schoolRank": 30,
            "score": 73.5
        },
        {
            "classRank": 17,
            "schoolRank": 32,
            "score": 72.5
        },
        {
            "classRank": 18,
            "schoolRank": 35,
            "score": 71
        },
        {
            "classRank": 19,
            "schoolRank": 36,
            "score": 70.5
        },
        {
            "classRank": 20,
            "schoolRank": 36,
            "score": 70.5
        },
        {
            "classRank": 21,
            "schoolRank": 41,
            "score": 68
        },
        {
            "classRank": 22,
            "schoolRank": 46,
            "score": 65.5
        },
        {
            "classRank": 23,
            "schoolRank": 46,
            "score": 65.5
        },
        {
            "classRank": 24,
            "schoolRank": 48,
            "score": 64.5
        },
        {
            "classRank": 25,
            "schoolRank": 50,
            "score": 63.5
        },
        {
            "classRank": 26,
            "schoolRank": 50,
            "score": 63.5
        },
        {
            "classRank": 27,
            "schoolRank": 53,
            "score": 62
        },
        {
            "classRank": 28,
            "schoolRank": 53,
            "score": 62
        },
        {
            "classRank": 29,
            "schoolRank": 54,
            "score": 61.5
        },
        {
            "classRank": 30,
            "schoolRank": 58,
            "score": 59.5
        },
        {
            "classRank": 31,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 32,
            "schoolRank": 63,
            "score": 57
        },
        {
            "classRank": 33,
            "schoolRank": 65,
            "score": 56
        },
        {
            "classRank": 34,
            "schoolRank": 69,
            "score": 54
        },
        {
            "classRank": 35,
            "schoolRank": 74,
            "score": 51.5
        },
        {
            "classRank": 36,
            "schoolRank": 81,
            "score": 48
        }
    ],
    "高一13班": [{
            "classRank": 1,
            "schoolRank": 23,
            "score": 77
        },
        {
            "classRank": 2,
            "schoolRank": 27,
            "score": 75
        },
        {
            "classRank": 3,
            "schoolRank": 28,
            "score": 74.5
        },
        {
            "classRank": 4,
            "schoolRank": 30,
            "score": 73.5
        },
        {
            "classRank": 5,
            "schoolRank": 31,
            "score": 73
        },
        {
            "classRank": 6,
            "schoolRank": 32,
            "score": 72.5
        },
        {
            "classRank": 7,
            "schoolRank": 34,
            "score": 71.5
        },
        {
            "classRank": 8,
            "schoolRank": 35,
            "score": 71
        },
        {
            "classRank": 9,
            "schoolRank": 40,
            "score": 68.5
        },
        {
            "classRank": 10,
            "schoolRank": 41,
            "score": 68
        },
        {
            "classRank": 11,
            "schoolRank": 44,
            "score": 66.5
        },
        {
            "classRank": 12,
            "schoolRank": 44,
            "score": 66.5
        },
        {
            "classRank": 13,
            "schoolRank": 44,
            "score": 66.5
        },
        {
            "classRank": 14,
            "schoolRank": 48,
            "score": 64.5
        },
        {
            "classRank": 15,
            "schoolRank": 54,
            "score": 61.5
        },
        {
            "classRank": 16,
            "schoolRank": 55,
            "score": 61
        },
        {
            "classRank": 17,
            "schoolRank": 55,
            "score": 61
        },
        {
            "classRank": 18,
            "schoolRank": 55,
            "score": 61
        },
        {
            "classRank": 19,
            "schoolRank": 60,
            "score": 58.5
        },
        {
            "classRank": 20,
            "schoolRank": 61,
            "score": 58
        },
        {
            "classRank": 21,
            "schoolRank": 70,
            "score": 53.5
        },
        {
            "classRank": 22,
            "schoolRank": 72,
            "score": 52.5
        },
        {
            "classRank": 23,
            "schoolRank": 72,
            "score": 52.5
        },
        {
            "classRank": 24,
            "schoolRank": 75,
            "score": 51
        },
        {
            "classRank": 25,
            "schoolRank": 75,
            "score": 51
        },
        {
            "classRank": 26,
            "schoolRank": 78,
            "score": 49.5
        },
        {
            "classRank": 27,
            "schoolRank": 79,
            "score": 49
        },
        {
            "classRank": 28,
            "schoolRank": 79,
            "score": 49
        },
        {
            "classRank": 29,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 30,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 31,
            "schoolRank": 81,
            "score": 48
        },
        {
            "classRank": 32,
            "schoolRank": 83,
            "score": 47
        },
        {
            "classRank": 33,
            "schoolRank": 86,
            "score": 45.5
        },
        {
            "classRank": 34,
            "schoolRank": 91,
            "score": 43
        },
        {
            "classRank": 35,
            "schoolRank": 94,
            "score": 41
        },
        {
            "classRank": 36,
            "schoolRank": 95,
            "score": 40.5
        },
        {
            "classRank": 37,
            "schoolRank": 96,
            "score": 40
        },
        {
            "classRank": 38,
            "schoolRank": 97,
            "score": 39.5
        },
        {
            "classRank": 39,
            "schoolRank": 98,
            "score": 39
        },
        {
            "classRank": 40,
            "schoolRank": 102,
            "score": 36.5
        },
        {
            "classRank": 41,
            "schoolRank": 103,
            "score": 35.5
        },
        {
            "classRank": 42,
            "schoolRank": 105,
            "score": 33
        }
    ],
    "高一03班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 91
        },
        {
            "classRank": 2,
            "schoolRank": 3,
            "score": 89.5
        },
        {
            "classRank": 3,
            "schoolRank": 8,
            "score": 84.5
        },
        {
            "classRank": 4,
            "schoolRank": 10,
            "score": 83.5
        },
        {
            "classRank": 5,
            "schoolRank": 13,
            "score": 82
        },
        {
            "classRank": 6,
            "schoolRank": 13,
            "score": 82
        },
        {
            "classRank": 7,
            "schoolRank": 19,
            "score": 79
        },
        {
            "classRank": 8,
            "schoolRank": 19,
            "score": 79
        },
        {
            "classRank": 9,
            "schoolRank": 21,
            "score": 78
        },
        {
            "classRank": 10,
            "schoolRank": 22,
            "score": 77.5
        },
        {
            "classRank": 11,
            "schoolRank": 23,
            "score": 77
        },
        {
            "classRank": 12,
            "schoolRank": 27,
            "score": 75
        },
        {
            "classRank": 13,
            "schoolRank": 29,
            "score": 74
        },
        {
            "classRank": 14,
            "schoolRank": 32,
            "score": 72.5
        },
        {
            "classRank": 15,
            "schoolRank": 32,
            "score": 72.5
        },
        {
            "classRank": 16,
            "schoolRank": 35,
            "score": 71
        },
        {
            "classRank": 17,
            "schoolRank": 35,
            "score": 71
        },
        {
            "classRank": 18,
            "schoolRank": 38,
            "score": 69.5
        },
        {
            "classRank": 19,
            "schoolRank": 42,
            "score": 67.5
        },
        {
            "classRank": 20,
            "schoolRank": 43,
            "score": 67
        },
        {
            "classRank": 21,
            "schoolRank": 43,
            "score": 67
        },
        {
            "classRank": 22,
            "schoolRank": 44,
            "score": 66.5
        },
        {
            "classRank": 23,
            "schoolRank": 46,
            "score": 65.5
        },
        {
            "classRank": 24,
            "schoolRank": 49,
            "score": 64
        },
        {
            "classRank": 25,
            "schoolRank": 51,
            "score": 63
        },
        {
            "classRank": 26,
            "schoolRank": 56,
            "score": 60.5
        },
        {
            "classRank": 27,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 28,
            "schoolRank": 60,
            "score": 58.5
        },
        {
            "classRank": 29,
            "schoolRank": 61,
            "score": 58
        },
        {
            "classRank": 30,
            "schoolRank": 62,
            "score": 57.5
        },
        {
            "classRank": 31,
            "schoolRank": 65,
            "score": 56
        },
        {
            "classRank": 32,
            "schoolRank": 67,
            "score": 55
        },
        {
            "classRank": 33,
            "schoolRank": 70,
            "score": 53.5
        },
        {
            "classRank": 34,
            "schoolRank": 72,
            "score": 52.5
        },
        {
            "classRank": 35,
            "schoolRank": 75,
            "score": 51
        },
        {
            "classRank": 36,
            "schoolRank": 76,
            "score": 50.5
        },
        {
            "classRank": 37,
            "schoolRank": 84,
            "score": 46.5
        }
    ]
}
var gy4 = [];
getyk(data, gy4);
setMapS1(gy4, '物理', 'm1-4');
data = {
    "高一08班": [{
            "classRank": 1,
            "schoolRank": 5,
            "score": 86.5
        },
        {
            "classRank": 2,
            "schoolRank": 7,
            "score": 85.5
        },
        {
            "classRank": 3,
            "schoolRank": 13,
            "score": 82.5
        },
        {
            "classRank": 4,
            "schoolRank": 20,
            "score": 79
        },
        {
            "classRank": 5,
            "schoolRank": 23,
            "score": 77.5
        },
        {
            "classRank": 6,
            "schoolRank": 28,
            "score": 75
        },
        {
            "classRank": 7,
            "schoolRank": 29,
            "score": 74.5
        },
        {
            "classRank": 8,
            "schoolRank": 29,
            "score": 74.5
        },
        {
            "classRank": 9,
            "schoolRank": 32,
            "score": 73
        },
        {
            "classRank": 10,
            "schoolRank": 34,
            "score": 72
        },
        {
            "classRank": 11,
            "schoolRank": 37,
            "score": 70.5
        },
        {
            "classRank": 12,
            "schoolRank": 37,
            "score": 70.5
        },
        {
            "classRank": 13,
            "schoolRank": 39,
            "score": 69.5
        },
        {
            "classRank": 14,
            "schoolRank": 40,
            "score": 69
        },
        {
            "classRank": 15,
            "schoolRank": 44,
            "score": 67
        },
        {
            "classRank": 16,
            "schoolRank": 48,
            "score": 65
        },
        {
            "classRank": 17,
            "schoolRank": 48,
            "score": 65
        },
        {
            "classRank": 18,
            "schoolRank": 49,
            "score": 64.5
        },
        {
            "classRank": 19,
            "schoolRank": 49,
            "score": 64.5
        },
        {
            "classRank": 20,
            "schoolRank": 50,
            "score": 64
        },
        {
            "classRank": 21,
            "schoolRank": 55,
            "score": 61.5
        },
        {
            "classRank": 22,
            "schoolRank": 56,
            "score": 61
        },
        {
            "classRank": 23,
            "schoolRank": 57,
            "score": 60.5
        },
        {
            "classRank": 24,
            "schoolRank": 58,
            "score": 60
        },
        {
            "classRank": 25,
            "schoolRank": 66,
            "score": 56
        },
        {
            "classRank": 26,
            "schoolRank": 67,
            "score": 55.5
        },
        {
            "classRank": 27,
            "schoolRank": 70,
            "score": 54
        },
        {
            "classRank": 28,
            "schoolRank": 73,
            "score": 52.5
        },
        {
            "classRank": 29,
            "schoolRank": 75,
            "score": 51.5
        },
        {
            "classRank": 30,
            "schoolRank": 76,
            "score": 51
        },
        {
            "classRank": 31,
            "schoolRank": 76,
            "score": 51
        },
        {
            "classRank": 32,
            "schoolRank": 77,
            "score": 50.5
        },
        {
            "classRank": 33,
            "schoolRank": 81,
            "score": 48.5
        },
        {
            "classRank": 34,
            "schoolRank": 82,
            "score": 48
        },
        {
            "classRank": 35,
            "schoolRank": 85,
            "score": 46.5
        },
        {
            "classRank": 36,
            "schoolRank": 85,
            "score": 46.5
        },
        {
            "classRank": 37,
            "schoolRank": 90,
            "score": 44
        }
    ],
    "高一09班": [{
            "classRank": 1,
            "schoolRank": 14,
            "score": 82
        },
        {
            "classRank": 2,
            "schoolRank": 15,
            "score": 81.5
        },
        {
            "classRank": 3,
            "schoolRank": 20,
            "score": 79
        },
        {
            "classRank": 4,
            "schoolRank": 24,
            "score": 77
        },
        {
            "classRank": 5,
            "schoolRank": 25,
            "score": 76.5
        },
        {
            "classRank": 6,
            "schoolRank": 27,
            "score": 75.5
        },
        {
            "classRank": 7,
            "schoolRank": 32,
            "score": 73
        },
        {
            "classRank": 8,
            "schoolRank": 33,
            "score": 72.5
        },
        {
            "classRank": 9,
            "schoolRank": 33,
            "score": 72.5
        },
        {
            "classRank": 10,
            "schoolRank": 33,
            "score": 72.5
        },
        {
            "classRank": 11,
            "schoolRank": 34,
            "score": 72
        },
        {
            "classRank": 12,
            "schoolRank": 35,
            "score": 71.5
        },
        {
            "classRank": 13,
            "schoolRank": 35,
            "score": 71.5
        },
        {
            "classRank": 14,
            "schoolRank": 36,
            "score": 71
        },
        {
            "classRank": 15,
            "schoolRank": 36,
            "score": 71
        },
        {
            "classRank": 16,
            "schoolRank": 48,
            "score": 65
        },
        {
            "classRank": 17,
            "schoolRank": 49,
            "score": 64.5
        },
        {
            "classRank": 18,
            "schoolRank": 51,
            "score": 63.5
        },
        {
            "classRank": 19,
            "schoolRank": 51,
            "score": 63.5
        },
        {
            "classRank": 20,
            "schoolRank": 55,
            "score": 61.5
        },
        {
            "classRank": 21,
            "schoolRank": 56,
            "score": 61
        },
        {
            "classRank": 22,
            "schoolRank": 56,
            "score": 61
        },
        {
            "classRank": 23,
            "schoolRank": 57,
            "score": 60.5
        },
        {
            "classRank": 24,
            "schoolRank": 58,
            "score": 60
        },
        {
            "classRank": 25,
            "schoolRank": 61,
            "score": 58.5
        },
        {
            "classRank": 26,
            "schoolRank": 64,
            "score": 57
        },
        {
            "classRank": 27,
            "schoolRank": 64,
            "score": 57
        },
        {
            "classRank": 28,
            "schoolRank": 66,
            "score": 56
        },
        {
            "classRank": 29,
            "schoolRank": 66,
            "score": 56
        },
        {
            "classRank": 30,
            "schoolRank": 69,
            "score": 54.5
        },
        {
            "classRank": 31,
            "schoolRank": 69,
            "score": 54.5
        },
        {
            "classRank": 32,
            "schoolRank": 71,
            "score": 53.5
        },
        {
            "classRank": 33,
            "schoolRank": 76,
            "score": 51
        },
        {
            "classRank": 34,
            "schoolRank": 77,
            "score": 50.5
        },
        {
            "classRank": 35,
            "schoolRank": 82,
            "score": 48
        },
        {
            "classRank": 36,
            "schoolRank": 86,
            "score": 46
        },
        {
            "classRank": 37,
            "schoolRank": 93,
            "score": 42.5
        },
        {
            "classRank": 38,
            "schoolRank": 93,
            "score": 42.5
        },
        {
            "classRank": 39,
            "schoolRank": 93,
            "score": 42.5
        },
        {
            "classRank": 40,
            "schoolRank": 93,
            "score": 42.5
        },
        {
            "classRank": 41,
            "schoolRank": 95,
            "score": 41.5
        }
    ],
    "高一06班": [{
            "classRank": 1,
            "schoolRank": 10,
            "score": 84
        },
        {
            "classRank": 2,
            "schoolRank": 12,
            "score": 83
        },
        {
            "classRank": 3,
            "schoolRank": 13,
            "score": 82.5
        },
        {
            "classRank": 4,
            "schoolRank": 14,
            "score": 82
        },
        {
            "classRank": 5,
            "schoolRank": 15,
            "score": 81.5
        },
        {
            "classRank": 6,
            "schoolRank": 23,
            "score": 77.5
        },
        {
            "classRank": 7,
            "schoolRank": 25,
            "score": 76.5
        },
        {
            "classRank": 8,
            "schoolRank": 25,
            "score": 76.5
        },
        {
            "classRank": 9,
            "schoolRank": 27,
            "score": 75.5
        },
        {
            "classRank": 10,
            "schoolRank": 28,
            "score": 75
        },
        {
            "classRank": 11,
            "schoolRank": 28,
            "score": 75
        },
        {
            "classRank": 12,
            "schoolRank": 34,
            "score": 72
        },
        {
            "classRank": 13,
            "schoolRank": 35,
            "score": 71.5
        },
        {
            "classRank": 14,
            "schoolRank": 35,
            "score": 71.5
        },
        {
            "classRank": 15,
            "schoolRank": 37,
            "score": 70.5
        },
        {
            "classRank": 16,
            "schoolRank": 40,
            "score": 69
        },
        {
            "classRank": 17,
            "schoolRank": 40,
            "score": 69
        },
        {
            "classRank": 18,
            "schoolRank": 40,
            "score": 69
        },
        {
            "classRank": 19,
            "schoolRank": 42,
            "score": 68
        },
        {
            "classRank": 20,
            "schoolRank": 43,
            "score": 67.5
        },
        {
            "classRank": 21,
            "schoolRank": 46,
            "score": 66
        },
        {
            "classRank": 22,
            "schoolRank": 55,
            "score": 61.5
        },
        {
            "classRank": 23,
            "schoolRank": 56,
            "score": 61
        },
        {
            "classRank": 24,
            "schoolRank": 58,
            "score": 60
        },
        {
            "classRank": 25,
            "schoolRank": 61,
            "score": 58.5
        },
        {
            "classRank": 26,
            "schoolRank": 61,
            "score": 58.5
        },
        {
            "classRank": 27,
            "schoolRank": 61,
            "score": 58.5
        },
        {
            "classRank": 28,
            "schoolRank": 65,
            "score": 56.5
        },
        {
            "classRank": 29,
            "schoolRank": 69,
            "score": 54.5
        },
        {
            "classRank": 30,
            "schoolRank": 69,
            "score": 54.5
        },
        {
            "classRank": 31,
            "schoolRank": 73,
            "score": 52.5
        },
        {
            "classRank": 32,
            "schoolRank": 77,
            "score": 50.5
        },
        {
            "classRank": 33,
            "schoolRank": 77,
            "score": 50.5
        },
        {
            "classRank": 34,
            "schoolRank": 78,
            "score": 50
        },
        {
            "classRank": 35,
            "schoolRank": 80,
            "score": 49
        },
        {
            "classRank": 36,
            "schoolRank": 86,
            "score": 46
        }
    ],
    "高一07班": [{
            "classRank": 1,
            "schoolRank": 11,
            "score": 83.5
        },
        {
            "classRank": 2,
            "schoolRank": 15,
            "score": 81.5
        },
        {
            "classRank": 3,
            "schoolRank": 17,
            "score": 80.5
        },
        {
            "classRank": 4,
            "schoolRank": 18,
            "score": 80
        },
        {
            "classRank": 5,
            "schoolRank": 23,
            "score": 77.5
        },
        {
            "classRank": 6,
            "schoolRank": 24,
            "score": 77
        },
        {
            "classRank": 7,
            "schoolRank": 26,
            "score": 76
        },
        {
            "classRank": 8,
            "schoolRank": 27,
            "score": 75.5
        },
        {
            "classRank": 9,
            "schoolRank": 29,
            "score": 74.5
        },
        {
            "classRank": 10,
            "schoolRank": 29,
            "score": 74.5
        },
        {
            "classRank": 11,
            "schoolRank": 36,
            "score": 71
        },
        {
            "classRank": 12,
            "schoolRank": 37,
            "score": 70.5
        },
        {
            "classRank": 13,
            "schoolRank": 37,
            "score": 70.5
        },
        {
            "classRank": 14,
            "schoolRank": 39,
            "score": 69.5
        },
        {
            "classRank": 15,
            "schoolRank": 45,
            "score": 66.5
        },
        {
            "classRank": 16,
            "schoolRank": 50,
            "score": 64
        },
        {
            "classRank": 17,
            "schoolRank": 50,
            "score": 64
        },
        {
            "classRank": 18,
            "schoolRank": 52,
            "score": 63
        },
        {
            "classRank": 19,
            "schoolRank": 52,
            "score": 63
        },
        {
            "classRank": 20,
            "schoolRank": 53,
            "score": 62.5
        },
        {
            "classRank": 21,
            "schoolRank": 54,
            "score": 62
        },
        {
            "classRank": 22,
            "schoolRank": 56,
            "score": 61
        },
        {
            "classRank": 23,
            "schoolRank": 56,
            "score": 61
        },
        {
            "classRank": 24,
            "schoolRank": 59,
            "score": 59.5
        },
        {
            "classRank": 25,
            "schoolRank": 60,
            "score": 59
        },
        {
            "classRank": 26,
            "schoolRank": 63,
            "score": 57.5
        },
        {
            "classRank": 27,
            "schoolRank": 64,
            "score": 57
        },
        {
            "classRank": 28,
            "schoolRank": 70,
            "score": 54
        },
        {
            "classRank": 29,
            "schoolRank": 70,
            "score": 54
        },
        {
            "classRank": 30,
            "schoolRank": 70,
            "score": 54
        },
        {
            "classRank": 31,
            "schoolRank": 71,
            "score": 53.5
        },
        {
            "classRank": 32,
            "schoolRank": 72,
            "score": 53
        },
        {
            "classRank": 33,
            "schoolRank": 73,
            "score": 52.5
        },
        {
            "classRank": 34,
            "schoolRank": 77,
            "score": 50.5
        },
        {
            "classRank": 35,
            "schoolRank": 80,
            "score": 49
        },
        {
            "classRank": 36,
            "schoolRank": 80,
            "score": 49
        },
        {
            "classRank": 37,
            "schoolRank": 81,
            "score": 48.5
        },
        {
            "classRank": 38,
            "schoolRank": 84,
            "score": 47
        },
        {
            "classRank": 39,
            "schoolRank": 85,
            "score": 46.5
        },
        {
            "classRank": 40,
            "schoolRank": 91,
            "score": 43.5
        },
        {
            "classRank": 41,
            "schoolRank": 93,
            "score": 42.5
        },
        {
            "classRank": 42,
            "schoolRank": 98,
            "score": 40
        },
        {
            "classRank": 43,
            "schoolRank": 102,
            "score": 37
        },
        {
            "classRank": 44,
            "schoolRank": 102,
            "score": 37
        },
        {
            "classRank": 45,
            "schoolRank": 103,
            "score": 36.5
        }
    ],
    "高一11班": [{
            "classRank": 1,
            "schoolRank": 17,
            "score": 80.5
        },
        {
            "classRank": 2,
            "schoolRank": 20,
            "score": 79
        },
        {
            "classRank": 3,
            "schoolRank": 23,
            "score": 77.5
        },
        {
            "classRank": 4,
            "schoolRank": 25,
            "score": 76.5
        },
        {
            "classRank": 5,
            "schoolRank": 27,
            "score": 75.5
        },
        {
            "classRank": 6,
            "schoolRank": 29,
            "score": 74.5
        },
        {
            "classRank": 7,
            "schoolRank": 30,
            "score": 74
        },
        {
            "classRank": 8,
            "schoolRank": 32,
            "score": 73
        },
        {
            "classRank": 9,
            "schoolRank": 33,
            "score": 72.5
        },
        {
            "classRank": 10,
            "schoolRank": 35,
            "score": 71.5
        },
        {
            "classRank": 11,
            "schoolRank": 40,
            "score": 69
        },
        {
            "classRank": 12,
            "schoolRank": 42,
            "score": 68
        },
        {
            "classRank": 13,
            "schoolRank": 43,
            "score": 67.5
        },
        {
            "classRank": 14,
            "schoolRank": 44,
            "score": 67
        },
        {
            "classRank": 15,
            "schoolRank": 49,
            "score": 64.5
        },
        {
            "classRank": 16,
            "schoolRank": 49,
            "score": 64.5
        },
        {
            "classRank": 17,
            "schoolRank": 55,
            "score": 61.5
        },
        {
            "classRank": 18,
            "schoolRank": 55,
            "score": 61.5
        },
        {
            "classRank": 19,
            "schoolRank": 57,
            "score": 60.5
        },
        {
            "classRank": 20,
            "schoolRank": 58,
            "score": 60
        },
        {
            "classRank": 21,
            "schoolRank": 59,
            "score": 59.5
        },
        {
            "classRank": 22,
            "schoolRank": 62,
            "score": 58
        },
        {
            "classRank": 23,
            "schoolRank": 63,
            "score": 57.5
        },
        {
            "classRank": 24,
            "schoolRank": 67,
            "score": 55.5
        },
        {
            "classRank": 25,
            "schoolRank": 68,
            "score": 55
        },
        {
            "classRank": 26,
            "schoolRank": 68,
            "score": 55
        },
        {
            "classRank": 27,
            "schoolRank": 73,
            "score": 52.5
        },
        {
            "classRank": 28,
            "schoolRank": 77,
            "score": 50.5
        },
        {
            "classRank": 29,
            "schoolRank": 78,
            "score": 50
        },
        {
            "classRank": 30,
            "schoolRank": 79,
            "score": 49.5
        },
        {
            "classRank": 31,
            "schoolRank": 79,
            "score": 49.5
        },
        {
            "classRank": 32,
            "schoolRank": 84,
            "score": 47
        },
        {
            "classRank": 33,
            "schoolRank": 84,
            "score": 47
        },
        {
            "classRank": 34,
            "schoolRank": 86,
            "score": 46
        },
        {
            "classRank": 35,
            "schoolRank": 86,
            "score": 46
        },
        {
            "classRank": 36,
            "schoolRank": 87,
            "score": 45.5
        },
        {
            "classRank": 37,
            "schoolRank": 88,
            "score": 45
        },
        {
            "classRank": 38,
            "schoolRank": 89,
            "score": 44.5
        },
        {
            "classRank": 39,
            "schoolRank": 92,
            "score": 43
        },
        {
            "classRank": 40,
            "schoolRank": 97,
            "score": 40.5
        },
        {
            "classRank": 41,
            "schoolRank": 99,
            "score": 38.5
        },
        {
            "classRank": 42,
            "schoolRank": 100,
            "score": 38
        },
        {
            "classRank": 43,
            "schoolRank": 104,
            "score": 35.5
        },
        {
            "classRank": 44,
            "schoolRank": 106,
            "score": 32.5
        }
    ],
    "高一01班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 94
        },
        {
            "classRank": 2,
            "schoolRank": 3,
            "score": 89.5
        },
        {
            "classRank": 3,
            "schoolRank": 8,
            "score": 85
        },
        {
            "classRank": 4,
            "schoolRank": 9,
            "score": 84.5
        },
        {
            "classRank": 5,
            "schoolRank": 9,
            "score": 84.5
        },
        {
            "classRank": 6,
            "schoolRank": 11,
            "score": 83.5
        },
        {
            "classRank": 7,
            "schoolRank": 13,
            "score": 82.5
        },
        {
            "classRank": 8,
            "schoolRank": 13,
            "score": 82.5
        },
        {
            "classRank": 9,
            "schoolRank": 15,
            "score": 81.5
        },
        {
            "classRank": 10,
            "schoolRank": 15,
            "score": 81.5
        },
        {
            "classRank": 11,
            "schoolRank": 21,
            "score": 78.5
        },
        {
            "classRank": 12,
            "schoolRank": 22,
            "score": 78
        },
        {
            "classRank": 13,
            "schoolRank": 23,
            "score": 77.5
        },
        {
            "classRank": 14,
            "schoolRank": 28,
            "score": 75
        },
        {
            "classRank": 15,
            "schoolRank": 34,
            "score": 72
        },
        {
            "classRank": 16,
            "schoolRank": 35,
            "score": 71.5
        },
        {
            "classRank": 17,
            "schoolRank": 36,
            "score": 71
        },
        {
            "classRank": 18,
            "schoolRank": 37,
            "score": 70.5
        },
        {
            "classRank": 19,
            "schoolRank": 38,
            "score": 70
        },
        {
            "classRank": 20,
            "schoolRank": 41,
            "score": 68.5
        },
        {
            "classRank": 21,
            "schoolRank": 41,
            "score": 68.5
        },
        {
            "classRank": 22,
            "schoolRank": 43,
            "score": 67.5
        },
        {
            "classRank": 23,
            "schoolRank": 44,
            "score": 67
        },
        {
            "classRank": 24,
            "schoolRank": 45,
            "score": 66.5
        },
        {
            "classRank": 25,
            "schoolRank": 45,
            "score": 66.5
        },
        {
            "classRank": 26,
            "schoolRank": 47,
            "score": 65.5
        },
        {
            "classRank": 27,
            "schoolRank": 52,
            "score": 63
        },
        {
            "classRank": 28,
            "schoolRank": 53,
            "score": 62.5
        },
        {
            "classRank": 29,
            "schoolRank": 55,
            "score": 61.5
        },
        {
            "classRank": 30,
            "schoolRank": 58,
            "score": 60
        },
        {
            "classRank": 31,
            "schoolRank": 58,
            "score": 60
        },
        {
            "classRank": 32,
            "schoolRank": 59,
            "score": 59.5
        },
        {
            "classRank": 33,
            "schoolRank": 62,
            "score": 58
        },
        {
            "classRank": 34,
            "schoolRank": 65,
            "score": 56.5
        },
        {
            "classRank": 35,
            "schoolRank": 67,
            "score": 55.5
        },
        {
            "classRank": 36,
            "schoolRank": 71,
            "score": 53.5
        },
        {
            "classRank": 37,
            "schoolRank": 71,
            "score": 53.5
        },
        {
            "classRank": 38,
            "schoolRank": 71,
            "score": 53.5
        },
        {
            "classRank": 39,
            "schoolRank": 72,
            "score": 53
        },
        {
            "classRank": 40,
            "schoolRank": 73,
            "score": 52.5
        },
        {
            "classRank": 41,
            "schoolRank": 73,
            "score": 52.5
        }
    ],
    "高一12班": [{
            "classRank": 1,
            "schoolRank": 16,
            "score": 81
        },
        {
            "classRank": 2,
            "schoolRank": 18,
            "score": 80
        },
        {
            "classRank": 3,
            "schoolRank": 20,
            "score": 79
        },
        {
            "classRank": 4,
            "schoolRank": 28,
            "score": 75
        },
        {
            "classRank": 5,
            "schoolRank": 28,
            "score": 75
        },
        {
            "classRank": 6,
            "schoolRank": 29,
            "score": 74.5
        },
        {
            "classRank": 7,
            "schoolRank": 34,
            "score": 72
        },
        {
            "classRank": 8,
            "schoolRank": 36,
            "score": 71
        },
        {
            "classRank": 9,
            "schoolRank": 37,
            "score": 70.5
        },
        {
            "classRank": 10,
            "schoolRank": 37,
            "score": 70.5
        },
        {
            "classRank": 11,
            "schoolRank": 39,
            "score": 69.5
        },
        {
            "classRank": 12,
            "schoolRank": 40,
            "score": 69
        },
        {
            "classRank": 13,
            "schoolRank": 46,
            "score": 66
        },
        {
            "classRank": 14,
            "schoolRank": 49,
            "score": 64.5
        },
        {
            "classRank": 15,
            "schoolRank": 55,
            "score": 61.5
        },
        {
            "classRank": 16,
            "schoolRank": 56,
            "score": 61
        },
        {
            "classRank": 17,
            "schoolRank": 59,
            "score": 59.5
        },
        {
            "classRank": 18,
            "schoolRank": 61,
            "score": 58.5
        },
        {
            "classRank": 19,
            "schoolRank": 62,
            "score": 58
        },
        {
            "classRank": 20,
            "schoolRank": 64,
            "score": 57
        },
        {
            "classRank": 21,
            "schoolRank": 65,
            "score": 56.5
        },
        {
            "classRank": 22,
            "schoolRank": 65,
            "score": 56.5
        },
        {
            "classRank": 23,
            "schoolRank": 66,
            "score": 56
        },
        {
            "classRank": 24,
            "schoolRank": 70,
            "score": 54
        },
        {
            "classRank": 25,
            "schoolRank": 73,
            "score": 52.5
        },
        {
            "classRank": 26,
            "schoolRank": 73,
            "score": 52.5
        },
        {
            "classRank": 27,
            "schoolRank": 75,
            "score": 51.5
        },
        {
            "classRank": 28,
            "schoolRank": 75,
            "score": 51.5
        },
        {
            "classRank": 29,
            "schoolRank": 79,
            "score": 49.5
        },
        {
            "classRank": 30,
            "schoolRank": 80,
            "score": 49
        },
        {
            "classRank": 31,
            "schoolRank": 83,
            "score": 47.5
        },
        {
            "classRank": 32,
            "schoolRank": 84,
            "score": 47
        },
        {
            "classRank": 33,
            "schoolRank": 87,
            "score": 45.5
        },
        {
            "classRank": 34,
            "schoolRank": 89,
            "score": 44.5
        },
        {
            "classRank": 35,
            "schoolRank": 91,
            "score": 43.5
        },
        {
            "classRank": 36,
            "schoolRank": 92,
            "score": 43
        },
        {
            "classRank": 37,
            "schoolRank": 95,
            "score": 41.5
        },
        {
            "classRank": 38,
            "schoolRank": 95,
            "score": 41.5
        },
        {
            "classRank": 39,
            "schoolRank": 98,
            "score": 40
        },
        {
            "classRank": 40,
            "schoolRank": 101,
            "score": 37.5
        },
        {
            "classRank": 41,
            "schoolRank": 102,
            "score": 37
        },
        {
            "classRank": 42,
            "schoolRank": 103,
            "score": 36.5
        },
        {
            "classRank": 43,
            "schoolRank": 103,
            "score": 36.5
        },
        {
            "classRank": 44,
            "schoolRank": 104,
            "score": 35.5
        },
        {
            "classRank": 45,
            "schoolRank": 105,
            "score": 33
        },
        {
            "classRank": 46,
            "schoolRank": 106,
            "score": 32.5
        },
        {
            "classRank": 47,
            "schoolRank": 107,
            "score": 28.5
        }
    ],
    "高一10班": [{
            "classRank": 1,
            "schoolRank": 20,
            "score": 79
        },
        {
            "classRank": 2,
            "schoolRank": 21,
            "score": 78.5
        },
        {
            "classRank": 3,
            "schoolRank": 25,
            "score": 76.5
        },
        {
            "classRank": 4,
            "schoolRank": 27,
            "score": 75.5
        },
        {
            "classRank": 5,
            "schoolRank": 27,
            "score": 75.5
        },
        {
            "classRank": 6,
            "schoolRank": 32,
            "score": 73
        },
        {
            "classRank": 7,
            "schoolRank": 32,
            "score": 73
        },
        {
            "classRank": 8,
            "schoolRank": 33,
            "score": 72.5
        },
        {
            "classRank": 9,
            "schoolRank": 34,
            "score": 72
        },
        {
            "classRank": 10,
            "schoolRank": 37,
            "score": 70.5
        },
        {
            "classRank": 11,
            "schoolRank": 39,
            "score": 69.5
        },
        {
            "classRank": 12,
            "schoolRank": 41,
            "score": 68.5
        },
        {
            "classRank": 13,
            "schoolRank": 41,
            "score": 68.5
        },
        {
            "classRank": 14,
            "schoolRank": 43,
            "score": 67.5
        },
        {
            "classRank": 15,
            "schoolRank": 44,
            "score": 67
        },
        {
            "classRank": 16,
            "schoolRank": 46,
            "score": 66
        },
        {
            "classRank": 17,
            "schoolRank": 50,
            "score": 64
        },
        {
            "classRank": 18,
            "schoolRank": 50,
            "score": 64
        },
        {
            "classRank": 19,
            "schoolRank": 50,
            "score": 64
        },
        {
            "classRank": 20,
            "schoolRank": 58,
            "score": 60
        },
        {
            "classRank": 21,
            "schoolRank": 60,
            "score": 59
        },
        {
            "classRank": 22,
            "schoolRank": 64,
            "score": 57
        },
        {
            "classRank": 23,
            "schoolRank": 64,
            "score": 57
        },
        {
            "classRank": 24,
            "schoolRank": 65,
            "score": 56.5
        },
        {
            "classRank": 25,
            "schoolRank": 67,
            "score": 55.5
        },
        {
            "classRank": 26,
            "schoolRank": 68,
            "score": 55
        },
        {
            "classRank": 27,
            "schoolRank": 72,
            "score": 53
        },
        {
            "classRank": 28,
            "schoolRank": 76,
            "score": 51
        },
        {
            "classRank": 29,
            "schoolRank": 76,
            "score": 51
        },
        {
            "classRank": 30,
            "schoolRank": 78,
            "score": 50
        },
        {
            "classRank": 31,
            "schoolRank": 83,
            "score": 47.5
        },
        {
            "classRank": 32,
            "schoolRank": 85,
            "score": 46.5
        },
        {
            "classRank": 33,
            "schoolRank": 87,
            "score": 45.5
        },
        {
            "classRank": 34,
            "schoolRank": 87,
            "score": 45.5
        },
        {
            "classRank": 35,
            "schoolRank": 92,
            "score": 43
        }
    ],
    "高一04班": [{
            "classRank": 1,
            "schoolRank": 4,
            "score": 87
        },
        {
            "classRank": 2,
            "schoolRank": 6,
            "score": 86
        },
        {
            "classRank": 3,
            "schoolRank": 7,
            "score": 85.5
        },
        {
            "classRank": 4,
            "schoolRank": 9,
            "score": 84.5
        },
        {
            "classRank": 5,
            "schoolRank": 14,
            "score": 82
        },
        {
            "classRank": 6,
            "schoolRank": 18,
            "score": 80
        },
        {
            "classRank": 7,
            "schoolRank": 18,
            "score": 80
        },
        {
            "classRank": 8,
            "schoolRank": 20,
            "score": 79
        },
        {
            "classRank": 9,
            "schoolRank": 23,
            "score": 77.5
        },
        {
            "classRank": 10,
            "schoolRank": 26,
            "score": 76
        },
        {
            "classRank": 11,
            "schoolRank": 27,
            "score": 75.5
        },
        {
            "classRank": 12,
            "schoolRank": 27,
            "score": 75.5
        },
        {
            "classRank": 13,
            "schoolRank": 30,
            "score": 74
        },
        {
            "classRank": 14,
            "schoolRank": 30,
            "score": 74
        },
        {
            "classRank": 15,
            "schoolRank": 33,
            "score": 72.5
        },
        {
            "classRank": 16,
            "schoolRank": 35,
            "score": 71.5
        },
        {
            "classRank": 17,
            "schoolRank": 36,
            "score": 71
        },
        {
            "classRank": 18,
            "schoolRank": 41,
            "score": 68.5
        },
        {
            "classRank": 19,
            "schoolRank": 42,
            "score": 68
        },
        {
            "classRank": 20,
            "schoolRank": 43,
            "score": 67.5
        },
        {
            "classRank": 21,
            "schoolRank": 48,
            "score": 65
        },
        {
            "classRank": 22,
            "schoolRank": 51,
            "score": 63.5
        },
        {
            "classRank": 23,
            "schoolRank": 52,
            "score": 63
        },
        {
            "classRank": 24,
            "schoolRank": 55,
            "score": 61.5
        },
        {
            "classRank": 25,
            "schoolRank": 58,
            "score": 60
        },
        {
            "classRank": 26,
            "schoolRank": 59,
            "score": 59.5
        },
        {
            "classRank": 27,
            "schoolRank": 60,
            "score": 59
        },
        {
            "classRank": 28,
            "schoolRank": 60,
            "score": 59
        },
        {
            "classRank": 29,
            "schoolRank": 61,
            "score": 58.5
        },
        {
            "classRank": 30,
            "schoolRank": 62,
            "score": 58
        },
        {
            "classRank": 31,
            "schoolRank": 62,
            "score": 58
        },
        {
            "classRank": 32,
            "schoolRank": 63,
            "score": 57.5
        },
        {
            "classRank": 33,
            "schoolRank": 78,
            "score": 50
        },
        {
            "classRank": 34,
            "schoolRank": 79,
            "score": 49.5
        },
        {
            "classRank": 35,
            "schoolRank": 80,
            "score": 49
        }
    ],
    "高一05班": [{
            "classRank": 1,
            "schoolRank": 2,
            "score": 91
        },
        {
            "classRank": 2,
            "schoolRank": 9,
            "score": 84.5
        },
        {
            "classRank": 3,
            "schoolRank": 15,
            "score": 81.5
        },
        {
            "classRank": 4,
            "schoolRank": 16,
            "score": 81
        },
        {
            "classRank": 5,
            "schoolRank": 16,
            "score": 81
        },
        {
            "classRank": 6,
            "schoolRank": 17,
            "score": 80.5
        },
        {
            "classRank": 7,
            "schoolRank": 17,
            "score": 80.5
        },
        {
            "classRank": 8,
            "schoolRank": 19,
            "score": 79.5
        },
        {
            "classRank": 9,
            "schoolRank": 19,
            "score": 79.5
        },
        {
            "classRank": 10,
            "schoolRank": 21,
            "score": 78.5
        },
        {
            "classRank": 11,
            "schoolRank": 25,
            "score": 76.5
        },
        {
            "classRank": 12,
            "schoolRank": 26,
            "score": 76
        },
        {
            "classRank": 13,
            "schoolRank": 28,
            "score": 75
        },
        {
            "classRank": 14,
            "schoolRank": 33,
            "score": 72.5
        },
        {
            "classRank": 15,
            "schoolRank": 35,
            "score": 71.5
        },
        {
            "classRank": 16,
            "schoolRank": 38,
            "score": 70
        },
        {
            "classRank": 17,
            "schoolRank": 40,
            "score": 69
        },
        {
            "classRank": 18,
            "schoolRank": 41,
            "score": 68.5
        },
        {
            "classRank": 19,
            "schoolRank": 43,
            "score": 67.5
        },
        {
            "classRank": 20,
            "schoolRank": 46,
            "score": 66
        },
        {
            "classRank": 21,
            "schoolRank": 48,
            "score": 65
        },
        {
            "classRank": 22,
            "schoolRank": 49,
            "score": 64.5
        },
        {
            "classRank": 23,
            "schoolRank": 52,
            "score": 63
        },
        {
            "classRank": 24,
            "schoolRank": 55,
            "score": 61.5
        },
        {
            "classRank": 25,
            "schoolRank": 56,
            "score": 61
        },
        {
            "classRank": 26,
            "schoolRank": 56,
            "score": 61
        },
        {
            "classRank": 27,
            "schoolRank": 64,
            "score": 57
        },
        {
            "classRank": 28,
            "schoolRank": 64,
            "score": 57
        },
        {
            "classRank": 29,
            "schoolRank": 66,
            "score": 56
        },
        {
            "classRank": 30,
            "schoolRank": 71,
            "score": 53.5
        },
        {
            "classRank": 31,
            "schoolRank": 74,
            "score": 52
        },
        {
            "classRank": 32,
            "schoolRank": 74,
            "score": 52
        },
        {
            "classRank": 33,
            "schoolRank": 76,
            "score": 51
        },
        {
            "classRank": 34,
            "schoolRank": 77,
            "score": 50.5
        },
        {
            "classRank": 35,
            "schoolRank": 77,
            "score": 50.5
        },
        {
            "classRank": 36,
            "schoolRank": 78,
            "score": 50
        },
        {
            "classRank": 37,
            "schoolRank": 80,
            "score": 49
        },
        {
            "classRank": 38,
            "schoolRank": 82,
            "score": 48
        }
    ],
    "高一02班": [{
            "classRank": 1,
            "schoolRank": 8,
            "score": 85
        },
        {
            "classRank": 2,
            "schoolRank": 9,
            "score": 84.5
        },
        {
            "classRank": 3,
            "schoolRank": 10,
            "score": 84
        },
        {
            "classRank": 4,
            "schoolRank": 11,
            "score": 83.5
        },
        {
            "classRank": 5,
            "schoolRank": 12,
            "score": 83
        },
        {
            "classRank": 6,
            "schoolRank": 13,
            "score": 82.5
        },
        {
            "classRank": 7,
            "schoolRank": 16,
            "score": 81
        },
        {
            "classRank": 8,
            "schoolRank": 17,
            "score": 80.5
        },
        {
            "classRank": 9,
            "schoolRank": 17,
            "score": 80.5
        },
        {
            "classRank": 10,
            "schoolRank": 18,
            "score": 80
        },
        {
            "classRank": 11,
            "schoolRank": 23,
            "score": 77.5
        },
        {
            "classRank": 12,
            "schoolRank": 24,
            "score": 77
        },
        {
            "classRank": 13,
            "schoolRank": 25,
            "score": 76.5
        },
        {
            "classRank": 14,
            "schoolRank": 27,
            "score": 75.5
        },
        {
            "classRank": 15,
            "schoolRank": 29,
            "score": 74.5
        },
        {
            "classRank": 16,
            "schoolRank": 34,
            "score": 72
        },
        {
            "classRank": 17,
            "schoolRank": 34,
            "score": 72
        },
        {
            "classRank": 18,
            "schoolRank": 36,
            "score": 71
        },
        {
            "classRank": 19,
            "schoolRank": 40,
            "score": 69
        },
        {
            "classRank": 20,
            "schoolRank": 41,
            "score": 68.5
        },
        {
            "classRank": 21,
            "schoolRank": 43,
            "score": 67.5
        },
        {
            "classRank": 22,
            "schoolRank": 44,
            "score": 67
        },
        {
            "classRank": 23,
            "schoolRank": 46,
            "score": 66
        },
        {
            "classRank": 24,
            "schoolRank": 46,
            "score": 66
        },
        {
            "classRank": 25,
            "schoolRank": 48,
            "score": 65
        },
        {
            "classRank": 26,
            "schoolRank": 49,
            "score": 64.5
        },
        {
            "classRank": 27,
            "schoolRank": 53,
            "score": 62.5
        },
        {
            "classRank": 28,
            "schoolRank": 54,
            "score": 62
        },
        {
            "classRank": 29,
            "schoolRank": 54,
            "score": 62
        },
        {
            "classRank": 30,
            "schoolRank": 56,
            "score": 61
        },
        {
            "classRank": 31,
            "schoolRank": 63,
            "score": 57.5
        },
        {
            "classRank": 32,
            "schoolRank": 64,
            "score": 57
        },
        {
            "classRank": 33,
            "schoolRank": 65,
            "score": 56.5
        },
        {
            "classRank": 34,
            "schoolRank": 66,
            "score": 56
        },
        {
            "classRank": 35,
            "schoolRank": 75,
            "score": 51.5
        },
        {
            "classRank": 36,
            "schoolRank": 83,
            "score": 47.5
        }
    ],
    "高一13班": [{
            "classRank": 1,
            "schoolRank": 17,
            "score": 80.5
        },
        {
            "classRank": 2,
            "schoolRank": 22,
            "score": 78
        },
        {
            "classRank": 3,
            "schoolRank": 28,
            "score": 75
        },
        {
            "classRank": 4,
            "schoolRank": 28,
            "score": 75
        },
        {
            "classRank": 5,
            "schoolRank": 34,
            "score": 72
        },
        {
            "classRank": 6,
            "schoolRank": 35,
            "score": 71.5
        },
        {
            "classRank": 7,
            "schoolRank": 36,
            "score": 71
        },
        {
            "classRank": 8,
            "schoolRank": 37,
            "score": 70.5
        },
        {
            "classRank": 9,
            "schoolRank": 39,
            "score": 69.5
        },
        {
            "classRank": 10,
            "schoolRank": 42,
            "score": 68
        },
        {
            "classRank": 11,
            "schoolRank": 42,
            "score": 68
        },
        {
            "classRank": 12,
            "schoolRank": 45,
            "score": 66.5
        },
        {
            "classRank": 13,
            "schoolRank": 45,
            "score": 66.5
        },
        {
            "classRank": 14,
            "schoolRank": 47,
            "score": 65.5
        },
        {
            "classRank": 15,
            "schoolRank": 49,
            "score": 64.5
        },
        {
            "classRank": 16,
            "schoolRank": 50,
            "score": 64
        },
        {
            "classRank": 17,
            "schoolRank": 56,
            "score": 61
        },
        {
            "classRank": 18,
            "schoolRank": 60,
            "score": 59
        },
        {
            "classRank": 19,
            "schoolRank": 61,
            "score": 58.5
        },
        {
            "classRank": 20,
            "schoolRank": 64,
            "score": 57
        },
        {
            "classRank": 21,
            "schoolRank": 65,
            "score": 56.5
        },
        {
            "classRank": 22,
            "schoolRank": 67,
            "score": 55.5
        },
        {
            "classRank": 23,
            "schoolRank": 67,
            "score": 55.5
        },
        {
            "classRank": 24,
            "schoolRank": 67,
            "score": 55.5
        },
        {
            "classRank": 25,
            "schoolRank": 71,
            "score": 53.5
        },
        {
            "classRank": 26,
            "schoolRank": 72,
            "score": 53
        },
        {
            "classRank": 27,
            "schoolRank": 76,
            "score": 51
        },
        {
            "classRank": 28,
            "schoolRank": 77,
            "score": 50.5
        },
        {
            "classRank": 29,
            "schoolRank": 79,
            "score": 49.5
        },
        {
            "classRank": 30,
            "schoolRank": 79,
            "score": 49.5
        },
        {
            "classRank": 31,
            "schoolRank": 80,
            "score": 49
        },
        {
            "classRank": 32,
            "schoolRank": 85,
            "score": 46.5
        },
        {
            "classRank": 33,
            "schoolRank": 86,
            "score": 46
        },
        {
            "classRank": 34,
            "schoolRank": 86,
            "score": 46
        },
        {
            "classRank": 35,
            "schoolRank": 87,
            "score": 45.5
        },
        {
            "classRank": 36,
            "schoolRank": 92,
            "score": 43
        },
        {
            "classRank": 37,
            "schoolRank": 92,
            "score": 43
        },
        {
            "classRank": 38,
            "schoolRank": 94,
            "score": 42
        },
        {
            "classRank": 39,
            "schoolRank": 95,
            "score": 41.5
        },
        {
            "classRank": 40,
            "schoolRank": 96,
            "score": 41
        },
        {
            "classRank": 41,
            "schoolRank": 100,
            "score": 38
        },
        {
            "classRank": 42,
            "schoolRank": 102,
            "score": 37
        }
    ],
    "高一03班": [{
            "classRank": 1,
            "schoolRank": 3,
            "score": 89.5
        },
        {
            "classRank": 2,
            "schoolRank": 6,
            "score": 86
        },
        {
            "classRank": 3,
            "schoolRank": 8,
            "score": 85
        },
        {
            "classRank": 4,
            "schoolRank": 9,
            "score": 84.5
        },
        {
            "classRank": 5,
            "schoolRank": 13,
            "score": 82.5
        },
        {
            "classRank": 6,
            "schoolRank": 14,
            "score": 82
        },
        {
            "classRank": 7,
            "schoolRank": 20,
            "score": 79
        },
        {
            "classRank": 8,
            "schoolRank": 22,
            "score": 78
        },
        {
            "classRank": 9,
            "schoolRank": 22,
            "score": 78
        },
        {
            "classRank": 10,
            "schoolRank": 27,
            "score": 75.5
        },
        {
            "classRank": 11,
            "schoolRank": 28,
            "score": 75
        },
        {
            "classRank": 12,
            "schoolRank": 30,
            "score": 74
        },
        {
            "classRank": 13,
            "schoolRank": 30,
            "score": 74
        },
        {
            "classRank": 14,
            "schoolRank": 30,
            "score": 74
        },
        {
            "classRank": 15,
            "schoolRank": 31,
            "score": 73.5
        },
        {
            "classRank": 16,
            "schoolRank": 32,
            "score": 73
        },
        {
            "classRank": 17,
            "schoolRank": 32,
            "score": 73
        },
        {
            "classRank": 18,
            "schoolRank": 37,
            "score": 70.5
        },
        {
            "classRank": 19,
            "schoolRank": 39,
            "score": 69.5
        },
        {
            "classRank": 20,
            "schoolRank": 41,
            "score": 68.5
        },
        {
            "classRank": 21,
            "schoolRank": 43,
            "score": 67.5
        },
        {
            "classRank": 22,
            "schoolRank": 45,
            "score": 66.5
        },
        {
            "classRank": 23,
            "schoolRank": 47,
            "score": 65.5
        },
        {
            "classRank": 24,
            "schoolRank": 48,
            "score": 65
        },
        {
            "classRank": 25,
            "schoolRank": 51,
            "score": 63.5
        },
        {
            "classRank": 26,
            "schoolRank": 61,
            "score": 58.5
        },
        {
            "classRank": 27,
            "schoolRank": 62,
            "score": 58
        },
        {
            "classRank": 28,
            "schoolRank": 62,
            "score": 58
        },
        {
            "classRank": 29,
            "schoolRank": 62,
            "score": 58
        },
        {
            "classRank": 30,
            "schoolRank": 63,
            "score": 57.5
        },
        {
            "classRank": 31,
            "schoolRank": 65,
            "score": 56.5
        },
        {
            "classRank": 32,
            "schoolRank": 66,
            "score": 56
        },
        {
            "classRank": 33,
            "schoolRank": 66,
            "score": 56
        },
        {
            "classRank": 34,
            "schoolRank": 68,
            "score": 55
        },
        {
            "classRank": 35,
            "schoolRank": 68,
            "score": 55
        },
        {
            "classRank": 36,
            "schoolRank": 69,
            "score": 54.5
        },
        {
            "classRank": 37,
            "schoolRank": 82,
            "score": 48
        }
    ]
}
var gy5 = [];
getyk(data, gy5);
setMapS1(gy5, '化学', 'm1-5');
data = {
    "高一08班": [{
            "classRank": 1,
            "schoolRank": 10,
            "score": 83.5
        },
        {
            "classRank": 2,
            "schoolRank": 13,
            "score": 82
        },
        {
            "classRank": 3,
            "schoolRank": 14,
            "score": 81.5
        },
        {
            "classRank": 4,
            "schoolRank": 17,
            "score": 80
        },
        {
            "classRank": 5,
            "schoolRank": 24,
            "score": 76.5
        },
        {
            "classRank": 6,
            "schoolRank": 25,
            "score": 76
        },
        {
            "classRank": 7,
            "schoolRank": 27,
            "score": 75
        },
        {
            "classRank": 8,
            "schoolRank": 29,
            "score": 74
        },
        {
            "classRank": 9,
            "schoolRank": 29,
            "score": 74
        },
        {
            "classRank": 10,
            "schoolRank": 31,
            "score": 73
        },
        {
            "classRank": 11,
            "schoolRank": 33,
            "score": 72
        },
        {
            "classRank": 12,
            "schoolRank": 34,
            "score": 71.5
        },
        {
            "classRank": 13,
            "schoolRank": 37,
            "score": 70
        },
        {
            "classRank": 14,
            "schoolRank": 43,
            "score": 67
        },
        {
            "classRank": 15,
            "schoolRank": 43,
            "score": 67
        },
        {
            "classRank": 16,
            "schoolRank": 43,
            "score": 67
        },
        {
            "classRank": 17,
            "schoolRank": 45,
            "score": 66
        },
        {
            "classRank": 18,
            "schoolRank": 45,
            "score": 66
        },
        {
            "classRank": 19,
            "schoolRank": 46,
            "score": 65.5
        },
        {
            "classRank": 20,
            "schoolRank": 48,
            "score": 64.5
        },
        {
            "classRank": 21,
            "schoolRank": 51,
            "score": 63
        },
        {
            "classRank": 22,
            "schoolRank": 54,
            "score": 61.5
        },
        {
            "classRank": 23,
            "schoolRank": 56,
            "score": 60.5
        },
        {
            "classRank": 24,
            "schoolRank": 57,
            "score": 60
        },
        {
            "classRank": 25,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 26,
            "schoolRank": 60,
            "score": 58.5
        },
        {
            "classRank": 27,
            "schoolRank": 61,
            "score": 58
        },
        {
            "classRank": 28,
            "schoolRank": 63,
            "score": 57
        },
        {
            "classRank": 29,
            "schoolRank": 70,
            "score": 53.5
        },
        {
            "classRank": 30,
            "schoolRank": 71,
            "score": 53
        },
        {
            "classRank": 31,
            "schoolRank": 73,
            "score": 52
        },
        {
            "classRank": 32,
            "schoolRank": 79,
            "score": 49
        },
        {
            "classRank": 33,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 34,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 35,
            "schoolRank": 85,
            "score": 45.5
        },
        {
            "classRank": 36,
            "schoolRank": 85,
            "score": 45.5
        },
        {
            "classRank": 37,
            "schoolRank": 88,
            "score": 44
        }
    ],
    "高一09班": [{
            "classRank": 1,
            "schoolRank": 19,
            "score": 79
        },
        {
            "classRank": 2,
            "schoolRank": 19,
            "score": 79
        },
        {
            "classRank": 3,
            "schoolRank": 19,
            "score": 79
        },
        {
            "classRank": 4,
            "schoolRank": 19,
            "score": 79
        },
        {
            "classRank": 5,
            "schoolRank": 20,
            "score": 78.5
        },
        {
            "classRank": 6,
            "schoolRank": 24,
            "score": 76.5
        },
        {
            "classRank": 7,
            "schoolRank": 25,
            "score": 76
        },
        {
            "classRank": 8,
            "schoolRank": 32,
            "score": 72.5
        },
        {
            "classRank": 9,
            "schoolRank": 33,
            "score": 72
        },
        {
            "classRank": 10,
            "schoolRank": 33,
            "score": 72
        },
        {
            "classRank": 11,
            "schoolRank": 34,
            "score": 71.5
        },
        {
            "classRank": 12,
            "schoolRank": 35,
            "score": 71
        },
        {
            "classRank": 13,
            "schoolRank": 38,
            "score": 69.5
        },
        {
            "classRank": 14,
            "schoolRank": 39,
            "score": 69
        },
        {
            "classRank": 15,
            "schoolRank": 41,
            "score": 68
        },
        {
            "classRank": 16,
            "schoolRank": 47,
            "score": 65
        },
        {
            "classRank": 17,
            "schoolRank": 47,
            "score": 65
        },
        {
            "classRank": 18,
            "schoolRank": 48,
            "score": 64.5
        },
        {
            "classRank": 19,
            "schoolRank": 54,
            "score": 61.5
        },
        {
            "classRank": 20,
            "schoolRank": 56,
            "score": 60.5
        },
        {
            "classRank": 21,
            "schoolRank": 56,
            "score": 60.5
        },
        {
            "classRank": 22,
            "schoolRank": 57,
            "score": 60
        },
        {
            "classRank": 23,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 24,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 25,
            "schoolRank": 64,
            "score": 56.5
        },
        {
            "classRank": 26,
            "schoolRank": 65,
            "score": 56
        },
        {
            "classRank": 27,
            "schoolRank": 65,
            "score": 56
        },
        {
            "classRank": 28,
            "schoolRank": 67,
            "score": 55
        },
        {
            "classRank": 29,
            "schoolRank": 68,
            "score": 54.5
        },
        {
            "classRank": 30,
            "schoolRank": 69,
            "score": 54
        },
        {
            "classRank": 31,
            "schoolRank": 76,
            "score": 50.5
        },
        {
            "classRank": 32,
            "schoolRank": 76,
            "score": 50.5
        },
        {
            "classRank": 33,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 34,
            "schoolRank": 81,
            "score": 48
        },
        {
            "classRank": 35,
            "schoolRank": 82,
            "score": 47.5
        },
        {
            "classRank": 36,
            "schoolRank": 83,
            "score": 47
        },
        {
            "classRank": 37,
            "schoolRank": 84,
            "score": 46
        },
        {
            "classRank": 38,
            "schoolRank": 86,
            "score": 45
        },
        {
            "classRank": 39,
            "schoolRank": 94,
            "score": 41
        },
        {
            "classRank": 40,
            "schoolRank": 97,
            "score": 39
        },
        {
            "classRank": 41,
            "schoolRank": 99,
            "score": 38
        }
    ],
    "高一06班": [{
            "classRank": 1,
            "schoolRank": 8,
            "score": 84.5
        },
        {
            "classRank": 2,
            "schoolRank": 10,
            "score": 83.5
        },
        {
            "classRank": 3,
            "schoolRank": 11,
            "score": 83
        },
        {
            "classRank": 4,
            "schoolRank": 13,
            "score": 82
        },
        {
            "classRank": 5,
            "schoolRank": 14,
            "score": 81.5
        },
        {
            "classRank": 6,
            "schoolRank": 15,
            "score": 81
        },
        {
            "classRank": 7,
            "schoolRank": 17,
            "score": 80
        },
        {
            "classRank": 8,
            "schoolRank": 20,
            "score": 78.5
        },
        {
            "classRank": 9,
            "schoolRank": 25,
            "score": 76
        },
        {
            "classRank": 10,
            "schoolRank": 26,
            "score": 75.5
        },
        {
            "classRank": 11,
            "schoolRank": 27,
            "score": 75
        },
        {
            "classRank": 12,
            "schoolRank": 28,
            "score": 74.5
        },
        {
            "classRank": 13,
            "schoolRank": 29,
            "score": 74
        },
        {
            "classRank": 14,
            "schoolRank": 32,
            "score": 72.5
        },
        {
            "classRank": 15,
            "schoolRank": 35,
            "score": 71
        },
        {
            "classRank": 16,
            "schoolRank": 38,
            "score": 69.5
        },
        {
            "classRank": 17,
            "schoolRank": 41,
            "score": 68
        },
        {
            "classRank": 18,
            "schoolRank": 46,
            "score": 65.5
        },
        {
            "classRank": 19,
            "schoolRank": 48,
            "score": 64.5
        },
        {
            "classRank": 20,
            "schoolRank": 49,
            "score": 64
        },
        {
            "classRank": 21,
            "schoolRank": 52,
            "score": 62.5
        },
        {
            "classRank": 22,
            "schoolRank": 53,
            "score": 62
        },
        {
            "classRank": 23,
            "schoolRank": 54,
            "score": 61.5
        },
        {
            "classRank": 24,
            "schoolRank": 58,
            "score": 59.5
        },
        {
            "classRank": 25,
            "schoolRank": 58,
            "score": 59.5
        },
        {
            "classRank": 26,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 27,
            "schoolRank": 62,
            "score": 57.5
        },
        {
            "classRank": 28,
            "schoolRank": 65,
            "score": 56
        },
        {
            "classRank": 29,
            "schoolRank": 69,
            "score": 54
        },
        {
            "classRank": 30,
            "schoolRank": 69,
            "score": 54
        },
        {
            "classRank": 31,
            "schoolRank": 70,
            "score": 53.5
        },
        {
            "classRank": 32,
            "schoolRank": 71,
            "score": 53
        },
        {
            "classRank": 33,
            "schoolRank": 72,
            "score": 52.5
        },
        {
            "classRank": 34,
            "schoolRank": 72,
            "score": 52.5
        },
        {
            "classRank": 35,
            "schoolRank": 77,
            "score": 50
        },
        {
            "classRank": 36,
            "schoolRank": 78,
            "score": 49.5
        }
    ],
    "高一07班": [{
            "classRank": 1,
            "schoolRank": 7,
            "score": 85
        },
        {
            "classRank": 2,
            "schoolRank": 13,
            "score": 82
        },
        {
            "classRank": 3,
            "schoolRank": 17,
            "score": 80
        },
        {
            "classRank": 4,
            "schoolRank": 17,
            "score": 80
        },
        {
            "classRank": 5,
            "schoolRank": 19,
            "score": 79
        },
        {
            "classRank": 6,
            "schoolRank": 19,
            "score": 79
        },
        {
            "classRank": 7,
            "schoolRank": 22,
            "score": 77.5
        },
        {
            "classRank": 8,
            "schoolRank": 24,
            "score": 76.5
        },
        {
            "classRank": 9,
            "schoolRank": 26,
            "score": 75.5
        },
        {
            "classRank": 10,
            "schoolRank": 26,
            "score": 75.5
        },
        {
            "classRank": 11,
            "schoolRank": 28,
            "score": 74.5
        },
        {
            "classRank": 12,
            "schoolRank": 31,
            "score": 73
        },
        {
            "classRank": 13,
            "schoolRank": 31,
            "score": 73
        },
        {
            "classRank": 14,
            "schoolRank": 34,
            "score": 71.5
        },
        {
            "classRank": 15,
            "schoolRank": 34,
            "score": 71.5
        },
        {
            "classRank": 16,
            "schoolRank": 37,
            "score": 70
        },
        {
            "classRank": 17,
            "schoolRank": 37,
            "score": 70
        },
        {
            "classRank": 18,
            "schoolRank": 39,
            "score": 69
        },
        {
            "classRank": 19,
            "schoolRank": 43,
            "score": 67
        },
        {
            "classRank": 20,
            "schoolRank": 43,
            "score": 67
        },
        {
            "classRank": 21,
            "schoolRank": 48,
            "score": 64.5
        },
        {
            "classRank": 22,
            "schoolRank": 52,
            "score": 62.5
        },
        {
            "classRank": 23,
            "schoolRank": 53,
            "score": 62
        },
        {
            "classRank": 24,
            "schoolRank": 54,
            "score": 61.5
        },
        {
            "classRank": 25,
            "schoolRank": 56,
            "score": 60.5
        },
        {
            "classRank": 26,
            "schoolRank": 56,
            "score": 60.5
        },
        {
            "classRank": 27,
            "schoolRank": 64,
            "score": 56.5
        },
        {
            "classRank": 28,
            "schoolRank": 64,
            "score": 56.5
        },
        {
            "classRank": 29,
            "schoolRank": 66,
            "score": 55.5
        },
        {
            "classRank": 30,
            "schoolRank": 69,
            "score": 54
        },
        {
            "classRank": 31,
            "schoolRank": 70,
            "score": 53.5
        },
        {
            "classRank": 32,
            "schoolRank": 71,
            "score": 53
        },
        {
            "classRank": 33,
            "schoolRank": 73,
            "score": 52
        },
        {
            "classRank": 34,
            "schoolRank": 76,
            "score": 50.5
        },
        {
            "classRank": 35,
            "schoolRank": 78,
            "score": 49.5
        },
        {
            "classRank": 36,
            "schoolRank": 79,
            "score": 49
        },
        {
            "classRank": 37,
            "schoolRank": 79,
            "score": 49
        },
        {
            "classRank": 38,
            "schoolRank": 79,
            "score": 49
        },
        {
            "classRank": 39,
            "schoolRank": 82,
            "score": 47.5
        },
        {
            "classRank": 40,
            "schoolRank": 83,
            "score": 47
        },
        {
            "classRank": 41,
            "schoolRank": 90,
            "score": 43
        },
        {
            "classRank": 42,
            "schoolRank": 98,
            "score": 38.5
        },
        {
            "classRank": 43,
            "schoolRank": 99,
            "score": 38
        },
        {
            "classRank": 44,
            "schoolRank": 99,
            "score": 38
        },
        {
            "classRank": 45,
            "schoolRank": 100,
            "score": 37.5
        }
    ],
    "高一11班": [{
            "classRank": 1,
            "schoolRank": 18,
            "score": 79.5
        },
        {
            "classRank": 2,
            "schoolRank": 18,
            "score": 79.5
        },
        {
            "classRank": 3,
            "schoolRank": 19,
            "score": 79
        },
        {
            "classRank": 4,
            "schoolRank": 24,
            "score": 76.5
        },
        {
            "classRank": 5,
            "schoolRank": 24,
            "score": 76.5
        },
        {
            "classRank": 6,
            "schoolRank": 27,
            "score": 75
        },
        {
            "classRank": 7,
            "schoolRank": 33,
            "score": 72
        },
        {
            "classRank": 8,
            "schoolRank": 35,
            "score": 71
        },
        {
            "classRank": 9,
            "schoolRank": 36,
            "score": 70.5
        },
        {
            "classRank": 10,
            "schoolRank": 37,
            "score": 70
        },
        {
            "classRank": 11,
            "schoolRank": 40,
            "score": 68.5
        },
        {
            "classRank": 12,
            "schoolRank": 41,
            "score": 68
        },
        {
            "classRank": 13,
            "schoolRank": 43,
            "score": 67
        },
        {
            "classRank": 14,
            "schoolRank": 44,
            "score": 66.5
        },
        {
            "classRank": 15,
            "schoolRank": 47,
            "score": 65
        },
        {
            "classRank": 16,
            "schoolRank": 47,
            "score": 65
        },
        {
            "classRank": 17,
            "schoolRank": 52,
            "score": 62.5
        },
        {
            "classRank": 18,
            "schoolRank": 53,
            "score": 62
        },
        {
            "classRank": 19,
            "schoolRank": 54,
            "score": 61.5
        },
        {
            "classRank": 20,
            "schoolRank": 56,
            "score": 60.5
        },
        {
            "classRank": 21,
            "schoolRank": 56,
            "score": 60.5
        },
        {
            "classRank": 22,
            "schoolRank": 61,
            "score": 58
        },
        {
            "classRank": 23,
            "schoolRank": 65,
            "score": 56
        },
        {
            "classRank": 24,
            "schoolRank": 69,
            "score": 54
        },
        {
            "classRank": 25,
            "schoolRank": 70,
            "score": 53.5
        },
        {
            "classRank": 26,
            "schoolRank": 70,
            "score": 53.5
        },
        {
            "classRank": 27,
            "schoolRank": 72,
            "score": 52.5
        },
        {
            "classRank": 28,
            "schoolRank": 73,
            "score": 52
        },
        {
            "classRank": 29,
            "schoolRank": 75,
            "score": 51
        },
        {
            "classRank": 30,
            "schoolRank": 76,
            "score": 50.5
        },
        {
            "classRank": 31,
            "schoolRank": 77,
            "score": 50
        },
        {
            "classRank": 32,
            "schoolRank": 81,
            "score": 48
        },
        {
            "classRank": 33,
            "schoolRank": 83,
            "score": 47
        },
        {
            "classRank": 34,
            "schoolRank": 83,
            "score": 47
        },
        {
            "classRank": 35,
            "schoolRank": 84,
            "score": 46
        },
        {
            "classRank": 36,
            "schoolRank": 86,
            "score": 45
        },
        {
            "classRank": 37,
            "schoolRank": 94,
            "score": 41
        },
        {
            "classRank": 38,
            "schoolRank": 95,
            "score": 40.5
        },
        {
            "classRank": 39,
            "schoolRank": 95,
            "score": 40.5
        },
        {
            "classRank": 40,
            "schoolRank": 96,
            "score": 39.5
        },
        {
            "classRank": 41,
            "schoolRank": 97,
            "score": 39
        },
        {
            "classRank": 42,
            "schoolRank": 102,
            "score": 36.5
        },
        {
            "classRank": 43,
            "schoolRank": 104,
            "score": 35
        },
        {
            "classRank": 44,
            "schoolRank": 105,
            "score": 33.5
        }
    ],
    "高一01班": [{
            "classRank": 1,
            "schoolRank": 2,
            "score": 88
        },
        {
            "classRank": 2,
            "schoolRank": 4,
            "score": 86.5
        },
        {
            "classRank": 3,
            "schoolRank": 9,
            "score": 84
        },
        {
            "classRank": 4,
            "schoolRank": 10,
            "score": 83.5
        },
        {
            "classRank": 5,
            "schoolRank": 11,
            "score": 83
        },
        {
            "classRank": 6,
            "schoolRank": 11,
            "score": 83
        },
        {
            "classRank": 7,
            "schoolRank": 15,
            "score": 81
        },
        {
            "classRank": 8,
            "schoolRank": 16,
            "score": 80.5
        },
        {
            "classRank": 9,
            "schoolRank": 17,
            "score": 80
        },
        {
            "classRank": 10,
            "schoolRank": 19,
            "score": 79
        },
        {
            "classRank": 11,
            "schoolRank": 24,
            "score": 76.5
        },
        {
            "classRank": 12,
            "schoolRank": 24,
            "score": 76.5
        },
        {
            "classRank": 13,
            "schoolRank": 25,
            "score": 76
        },
        {
            "classRank": 14,
            "schoolRank": 27,
            "score": 75
        },
        {
            "classRank": 15,
            "schoolRank": 27,
            "score": 75
        },
        {
            "classRank": 16,
            "schoolRank": 28,
            "score": 74.5
        },
        {
            "classRank": 17,
            "schoolRank": 32,
            "score": 72.5
        },
        {
            "classRank": 18,
            "schoolRank": 33,
            "score": 72
        },
        {
            "classRank": 19,
            "schoolRank": 35,
            "score": 71
        },
        {
            "classRank": 20,
            "schoolRank": 38,
            "score": 69.5
        },
        {
            "classRank": 21,
            "schoolRank": 41,
            "score": 68
        },
        {
            "classRank": 22,
            "schoolRank": 41,
            "score": 68
        },
        {
            "classRank": 23,
            "schoolRank": 45,
            "score": 66
        },
        {
            "classRank": 24,
            "schoolRank": 46,
            "score": 65.5
        },
        {
            "classRank": 25,
            "schoolRank": 48,
            "score": 64.5
        },
        {
            "classRank": 26,
            "schoolRank": 49,
            "score": 64
        },
        {
            "classRank": 27,
            "schoolRank": 50,
            "score": 63.5
        },
        {
            "classRank": 28,
            "schoolRank": 53,
            "score": 62
        },
        {
            "classRank": 29,
            "schoolRank": 55,
            "score": 61
        },
        {
            "classRank": 30,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 31,
            "schoolRank": 61,
            "score": 58
        },
        {
            "classRank": 32,
            "schoolRank": 64,
            "score": 56.5
        },
        {
            "classRank": 33,
            "schoolRank": 65,
            "score": 56
        },
        {
            "classRank": 34,
            "schoolRank": 68,
            "score": 54.5
        },
        {
            "classRank": 35,
            "schoolRank": 70,
            "score": 53.5
        },
        {
            "classRank": 36,
            "schoolRank": 70,
            "score": 53.5
        },
        {
            "classRank": 37,
            "schoolRank": 73,
            "score": 52
        },
        {
            "classRank": 38,
            "schoolRank": 74,
            "score": 51.5
        },
        {
            "classRank": 39,
            "schoolRank": 76,
            "score": 50.5
        },
        {
            "classRank": 40,
            "schoolRank": 84,
            "score": 46
        },
        {
            "classRank": 41,
            "schoolRank": 85,
            "score": 45.5
        }
    ],
    "高一12班": [{
            "classRank": 1,
            "schoolRank": 12,
            "score": 82.5
        },
        {
            "classRank": 2,
            "schoolRank": 16,
            "score": 80.5
        },
        {
            "classRank": 3,
            "schoolRank": 17,
            "score": 80
        },
        {
            "classRank": 4,
            "schoolRank": 21,
            "score": 78
        },
        {
            "classRank": 5,
            "schoolRank": 29,
            "score": 74
        },
        {
            "classRank": 6,
            "schoolRank": 30,
            "score": 73.5
        },
        {
            "classRank": 7,
            "schoolRank": 33,
            "score": 72
        },
        {
            "classRank": 8,
            "schoolRank": 34,
            "score": 71.5
        },
        {
            "classRank": 9,
            "schoolRank": 38,
            "score": 69.5
        },
        {
            "classRank": 10,
            "schoolRank": 40,
            "score": 68.5
        },
        {
            "classRank": 11,
            "schoolRank": 42,
            "score": 67.5
        },
        {
            "classRank": 12,
            "schoolRank": 44,
            "score": 66.5
        },
        {
            "classRank": 13,
            "schoolRank": 45,
            "score": 66
        },
        {
            "classRank": 14,
            "schoolRank": 47,
            "score": 65
        },
        {
            "classRank": 15,
            "schoolRank": 48,
            "score": 64.5
        },
        {
            "classRank": 16,
            "schoolRank": 50,
            "score": 63.5
        },
        {
            "classRank": 17,
            "schoolRank": 55,
            "score": 61
        },
        {
            "classRank": 18,
            "schoolRank": 56,
            "score": 60.5
        },
        {
            "classRank": 19,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 20,
            "schoolRank": 60,
            "score": 58.5
        },
        {
            "classRank": 21,
            "schoolRank": 61,
            "score": 58
        },
        {
            "classRank": 22,
            "schoolRank": 62,
            "score": 57.5
        },
        {
            "classRank": 23,
            "schoolRank": 66,
            "score": 55.5
        },
        {
            "classRank": 24,
            "schoolRank": 67,
            "score": 55
        },
        {
            "classRank": 25,
            "schoolRank": 69,
            "score": 54
        },
        {
            "classRank": 26,
            "schoolRank": 71,
            "score": 53
        },
        {
            "classRank": 27,
            "schoolRank": 73,
            "score": 52
        },
        {
            "classRank": 28,
            "schoolRank": 75,
            "score": 51
        },
        {
            "classRank": 29,
            "schoolRank": 76,
            "score": 50.5
        },
        {
            "classRank": 30,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 31,
            "schoolRank": 82,
            "score": 47.5
        },
        {
            "classRank": 32,
            "schoolRank": 84,
            "score": 46
        },
        {
            "classRank": 33,
            "schoolRank": 86,
            "score": 45
        },
        {
            "classRank": 34,
            "schoolRank": 88,
            "score": 44
        },
        {
            "classRank": 35,
            "schoolRank": 89,
            "score": 43.5
        },
        {
            "classRank": 36,
            "schoolRank": 92,
            "score": 42
        },
        {
            "classRank": 37,
            "schoolRank": 93,
            "score": 41.5
        },
        {
            "classRank": 38,
            "schoolRank": 94,
            "score": 41
        },
        {
            "classRank": 39,
            "schoolRank": 96,
            "score": 39.5
        },
        {
            "classRank": 40,
            "schoolRank": 97,
            "score": 39
        },
        {
            "classRank": 41,
            "schoolRank": 97,
            "score": 39
        },
        {
            "classRank": 42,
            "schoolRank": 98,
            "score": 38.5
        },
        {
            "classRank": 43,
            "schoolRank": 100,
            "score": 37.5
        },
        {
            "classRank": 44,
            "schoolRank": 101,
            "score": 37
        },
        {
            "classRank": 45,
            "schoolRank": 103,
            "score": 35.5
        },
        {
            "classRank": 46,
            "schoolRank": 106,
            "score": 33
        },
        {
            "classRank": 47,
            "schoolRank": 108,
            "score": 29.5
        }
    ],
    "高一10班": [{
            "classRank": 1,
            "schoolRank": 16,
            "score": 80.5
        },
        {
            "classRank": 2,
            "schoolRank": 18,
            "score": 79.5
        },
        {
            "classRank": 3,
            "schoolRank": 22,
            "score": 77.5
        },
        {
            "classRank": 4,
            "schoolRank": 26,
            "score": 75.5
        },
        {
            "classRank": 5,
            "schoolRank": 27,
            "score": 75
        },
        {
            "classRank": 6,
            "schoolRank": 27,
            "score": 75
        },
        {
            "classRank": 7,
            "schoolRank": 27,
            "score": 75
        },
        {
            "classRank": 8,
            "schoolRank": 32,
            "score": 72.5
        },
        {
            "classRank": 9,
            "schoolRank": 34,
            "score": 71.5
        },
        {
            "classRank": 10,
            "schoolRank": 42,
            "score": 67.5
        },
        {
            "classRank": 11,
            "schoolRank": 43,
            "score": 67
        },
        {
            "classRank": 12,
            "schoolRank": 44,
            "score": 66.5
        },
        {
            "classRank": 13,
            "schoolRank": 45,
            "score": 66
        },
        {
            "classRank": 14,
            "schoolRank": 45,
            "score": 66
        },
        {
            "classRank": 15,
            "schoolRank": 45,
            "score": 66
        },
        {
            "classRank": 16,
            "schoolRank": 47,
            "score": 65
        },
        {
            "classRank": 17,
            "schoolRank": 53,
            "score": 62
        },
        {
            "classRank": 18,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 19,
            "schoolRank": 60,
            "score": 58.5
        },
        {
            "classRank": 20,
            "schoolRank": 62,
            "score": 57.5
        },
        {
            "classRank": 21,
            "schoolRank": 63,
            "score": 57
        },
        {
            "classRank": 22,
            "schoolRank": 63,
            "score": 57
        },
        {
            "classRank": 23,
            "schoolRank": 64,
            "score": 56.5
        },
        {
            "classRank": 24,
            "schoolRank": 64,
            "score": 56.5
        },
        {
            "classRank": 25,
            "schoolRank": 65,
            "score": 56
        },
        {
            "classRank": 26,
            "schoolRank": 67,
            "score": 55
        },
        {
            "classRank": 27,
            "schoolRank": 68,
            "score": 54.5
        },
        {
            "classRank": 28,
            "schoolRank": 75,
            "score": 51
        },
        {
            "classRank": 29,
            "schoolRank": 78,
            "score": 49.5
        },
        {
            "classRank": 30,
            "schoolRank": 78,
            "score": 49.5
        },
        {
            "classRank": 31,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 32,
            "schoolRank": 81,
            "score": 48
        },
        {
            "classRank": 33,
            "schoolRank": 83,
            "score": 47
        },
        {
            "classRank": 34,
            "schoolRank": 83,
            "score": 47
        },
        {
            "classRank": 35,
            "schoolRank": 84,
            "score": 46
        }
    ],
    "高一04班": [{
            "classRank": 1,
            "schoolRank": 9,
            "score": 84
        },
        {
            "classRank": 2,
            "schoolRank": 12,
            "score": 82.5
        },
        {
            "classRank": 3,
            "schoolRank": 13,
            "score": 82
        },
        {
            "classRank": 4,
            "schoolRank": 16,
            "score": 80.5
        },
        {
            "classRank": 5,
            "schoolRank": 16,
            "score": 80.5
        },
        {
            "classRank": 6,
            "schoolRank": 18,
            "score": 79.5
        },
        {
            "classRank": 7,
            "schoolRank": 18,
            "score": 79.5
        },
        {
            "classRank": 8,
            "schoolRank": 20,
            "score": 78.5
        },
        {
            "classRank": 9,
            "schoolRank": 21,
            "score": 78
        },
        {
            "classRank": 10,
            "schoolRank": 28,
            "score": 74.5
        },
        {
            "classRank": 11,
            "schoolRank": 28,
            "score": 74.5
        },
        {
            "classRank": 12,
            "schoolRank": 31,
            "score": 73
        },
        {
            "classRank": 13,
            "schoolRank": 31,
            "score": 73
        },
        {
            "classRank": 14,
            "schoolRank": 33,
            "score": 72
        },
        {
            "classRank": 15,
            "schoolRank": 33,
            "score": 72
        },
        {
            "classRank": 16,
            "schoolRank": 36,
            "score": 70.5
        },
        {
            "classRank": 17,
            "schoolRank": 38,
            "score": 69.5
        },
        {
            "classRank": 18,
            "schoolRank": 38,
            "score": 69.5
        },
        {
            "classRank": 19,
            "schoolRank": 40,
            "score": 68.5
        },
        {
            "classRank": 20,
            "schoolRank": 40,
            "score": 68.5
        },
        {
            "classRank": 21,
            "schoolRank": 46,
            "score": 65.5
        },
        {
            "classRank": 22,
            "schoolRank": 47,
            "score": 65
        },
        {
            "classRank": 23,
            "schoolRank": 47,
            "score": 65
        },
        {
            "classRank": 24,
            "schoolRank": 48,
            "score": 64.5
        },
        {
            "classRank": 25,
            "schoolRank": 51,
            "score": 63
        },
        {
            "classRank": 26,
            "schoolRank": 54,
            "score": 61.5
        },
        {
            "classRank": 27,
            "schoolRank": 57,
            "score": 60
        },
        {
            "classRank": 28,
            "schoolRank": 60,
            "score": 58.5
        },
        {
            "classRank": 29,
            "schoolRank": 63,
            "score": 57
        },
        {
            "classRank": 30,
            "schoolRank": 63,
            "score": 57
        },
        {
            "classRank": 31,
            "schoolRank": 66,
            "score": 55.5
        },
        {
            "classRank": 32,
            "schoolRank": 68,
            "score": 54.5
        },
        {
            "classRank": 33,
            "schoolRank": 71,
            "score": 53
        },
        {
            "classRank": 34,
            "schoolRank": 71,
            "score": 53
        },
        {
            "classRank": 35,
            "schoolRank": 79,
            "score": 49
        }
    ],
    "高一05班": [{
            "classRank": 1,
            "schoolRank": 3,
            "score": 87.5
        },
        {
            "classRank": 2,
            "schoolRank": 4,
            "score": 86.5
        },
        {
            "classRank": 3,
            "schoolRank": 5,
            "score": 86
        },
        {
            "classRank": 4,
            "schoolRank": 11,
            "score": 83
        },
        {
            "classRank": 5,
            "schoolRank": 12,
            "score": 82.5
        },
        {
            "classRank": 6,
            "schoolRank": 15,
            "score": 81
        },
        {
            "classRank": 7,
            "schoolRank": 20,
            "score": 78.5
        },
        {
            "classRank": 8,
            "schoolRank": 20,
            "score": 78.5
        },
        {
            "classRank": 9,
            "schoolRank": 24,
            "score": 76.5
        },
        {
            "classRank": 10,
            "schoolRank": 25,
            "score": 76
        },
        {
            "classRank": 11,
            "schoolRank": 25,
            "score": 76
        },
        {
            "classRank": 12,
            "schoolRank": 30,
            "score": 73.5
        },
        {
            "classRank": 13,
            "schoolRank": 32,
            "score": 72.5
        },
        {
            "classRank": 14,
            "schoolRank": 37,
            "score": 70
        },
        {
            "classRank": 15,
            "schoolRank": 38,
            "score": 69.5
        },
        {
            "classRank": 16,
            "schoolRank": 39,
            "score": 69
        },
        {
            "classRank": 17,
            "schoolRank": 42,
            "score": 67.5
        },
        {
            "classRank": 18,
            "schoolRank": 47,
            "score": 65
        },
        {
            "classRank": 19,
            "schoolRank": 49,
            "score": 64
        },
        {
            "classRank": 20,
            "schoolRank": 50,
            "score": 63.5
        },
        {
            "classRank": 21,
            "schoolRank": 51,
            "score": 63
        },
        {
            "classRank": 22,
            "schoolRank": 52,
            "score": 62.5
        },
        {
            "classRank": 23,
            "schoolRank": 56,
            "score": 60.5
        },
        {
            "classRank": 24,
            "schoolRank": 56,
            "score": 60.5
        },
        {
            "classRank": 25,
            "schoolRank": 57,
            "score": 60
        },
        {
            "classRank": 26,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 27,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 28,
            "schoolRank": 61,
            "score": 58
        },
        {
            "classRank": 29,
            "schoolRank": 62,
            "score": 57.5
        },
        {
            "classRank": 30,
            "schoolRank": 63,
            "score": 57
        },
        {
            "classRank": 31,
            "schoolRank": 64,
            "score": 56.5
        },
        {
            "classRank": 32,
            "schoolRank": 73,
            "score": 52
        },
        {
            "classRank": 33,
            "schoolRank": 73,
            "score": 52
        },
        {
            "classRank": 34,
            "schoolRank": 74,
            "score": 51.5
        },
        {
            "classRank": 35,
            "schoolRank": 77,
            "score": 50
        },
        {
            "classRank": 36,
            "schoolRank": 77,
            "score": 50
        },
        {
            "classRank": 37,
            "schoolRank": 77,
            "score": 50
        },
        {
            "classRank": 38,
            "schoolRank": 87,
            "score": 44.5
        }
    ],
    "高一02班": [{
            "classRank": 1,
            "schoolRank": 3,
            "score": 87.5
        },
        {
            "classRank": 2,
            "schoolRank": 5,
            "score": 86
        },
        {
            "classRank": 3,
            "schoolRank": 6,
            "score": 85.5
        },
        {
            "classRank": 4,
            "schoolRank": 8,
            "score": 84.5
        },
        {
            "classRank": 5,
            "schoolRank": 11,
            "score": 83
        },
        {
            "classRank": 6,
            "schoolRank": 14,
            "score": 81.5
        },
        {
            "classRank": 7,
            "schoolRank": 16,
            "score": 80.5
        },
        {
            "classRank": 8,
            "schoolRank": 20,
            "score": 78.5
        },
        {
            "classRank": 9,
            "schoolRank": 21,
            "score": 78
        },
        {
            "classRank": 10,
            "schoolRank": 23,
            "score": 77
        },
        {
            "classRank": 11,
            "schoolRank": 24,
            "score": 76.5
        },
        {
            "classRank": 12,
            "schoolRank": 25,
            "score": 76
        },
        {
            "classRank": 13,
            "schoolRank": 28,
            "score": 74.5
        },
        {
            "classRank": 14,
            "schoolRank": 29,
            "score": 74
        },
        {
            "classRank": 15,
            "schoolRank": 30,
            "score": 73.5
        },
        {
            "classRank": 16,
            "schoolRank": 30,
            "score": 73.5
        },
        {
            "classRank": 17,
            "schoolRank": 36,
            "score": 70.5
        },
        {
            "classRank": 18,
            "schoolRank": 37,
            "score": 70
        },
        {
            "classRank": 19,
            "schoolRank": 39,
            "score": 69
        },
        {
            "classRank": 20,
            "schoolRank": 39,
            "score": 69
        },
        {
            "classRank": 21,
            "schoolRank": 40,
            "score": 68.5
        },
        {
            "classRank": 22,
            "schoolRank": 42,
            "score": 67.5
        },
        {
            "classRank": 23,
            "schoolRank": 43,
            "score": 67
        },
        {
            "classRank": 24,
            "schoolRank": 45,
            "score": 66
        },
        {
            "classRank": 25,
            "schoolRank": 51,
            "score": 63
        },
        {
            "classRank": 26,
            "schoolRank": 52,
            "score": 62.5
        },
        {
            "classRank": 27,
            "schoolRank": 54,
            "score": 61.5
        },
        {
            "classRank": 28,
            "schoolRank": 54,
            "score": 61.5
        },
        {
            "classRank": 29,
            "schoolRank": 57,
            "score": 60
        },
        {
            "classRank": 30,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 31,
            "schoolRank": 62,
            "score": 57.5
        },
        {
            "classRank": 32,
            "schoolRank": 65,
            "score": 56
        },
        {
            "classRank": 33,
            "schoolRank": 70,
            "score": 53.5
        },
        {
            "classRank": 34,
            "schoolRank": 72,
            "score": 52.5
        },
        {
            "classRank": 35,
            "schoolRank": 73,
            "score": 52
        },
        {
            "classRank": 36,
            "schoolRank": 84,
            "score": 46
        }
    ],
    "高一13班": [{
            "classRank": 1,
            "schoolRank": 20,
            "score": 78.5
        },
        {
            "classRank": 2,
            "schoolRank": 22,
            "score": 77.5
        },
        {
            "classRank": 3,
            "schoolRank": 26,
            "score": 75.5
        },
        {
            "classRank": 4,
            "schoolRank": 27,
            "score": 75
        },
        {
            "classRank": 5,
            "schoolRank": 30,
            "score": 73.5
        },
        {
            "classRank": 6,
            "schoolRank": 31,
            "score": 73
        },
        {
            "classRank": 7,
            "schoolRank": 34,
            "score": 71.5
        },
        {
            "classRank": 8,
            "schoolRank": 35,
            "score": 71
        },
        {
            "classRank": 9,
            "schoolRank": 36,
            "score": 70.5
        },
        {
            "classRank": 10,
            "schoolRank": 38,
            "score": 69.5
        },
        {
            "classRank": 11,
            "schoolRank": 44,
            "score": 66.5
        },
        {
            "classRank": 12,
            "schoolRank": 45,
            "score": 66
        },
        {
            "classRank": 13,
            "schoolRank": 48,
            "score": 64.5
        },
        {
            "classRank": 14,
            "schoolRank": 53,
            "score": 62
        },
        {
            "classRank": 15,
            "schoolRank": 54,
            "score": 61.5
        },
        {
            "classRank": 16,
            "schoolRank": 54,
            "score": 61.5
        },
        {
            "classRank": 17,
            "schoolRank": 56,
            "score": 60.5
        },
        {
            "classRank": 18,
            "schoolRank": 58,
            "score": 59.5
        },
        {
            "classRank": 19,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 20,
            "schoolRank": 59,
            "score": 59
        },
        {
            "classRank": 21,
            "schoolRank": 63,
            "score": 57
        },
        {
            "classRank": 22,
            "schoolRank": 67,
            "score": 55
        },
        {
            "classRank": 23,
            "schoolRank": 72,
            "score": 52.5
        },
        {
            "classRank": 24,
            "schoolRank": 72,
            "score": 52.5
        },
        {
            "classRank": 25,
            "schoolRank": 74,
            "score": 51.5
        },
        {
            "classRank": 26,
            "schoolRank": 76,
            "score": 50.5
        },
        {
            "classRank": 27,
            "schoolRank": 79,
            "score": 49
        },
        {
            "classRank": 28,
            "schoolRank": 79,
            "score": 49
        },
        {
            "classRank": 29,
            "schoolRank": 82,
            "score": 47.5
        },
        {
            "classRank": 30,
            "schoolRank": 82,
            "score": 47.5
        },
        {
            "classRank": 31,
            "schoolRank": 84,
            "score": 46
        },
        {
            "classRank": 32,
            "schoolRank": 84,
            "score": 46
        },
        {
            "classRank": 33,
            "schoolRank": 91,
            "score": 42.5
        },
        {
            "classRank": 34,
            "schoolRank": 92,
            "score": 42
        },
        {
            "classRank": 35,
            "schoolRank": 92,
            "score": 42
        },
        {
            "classRank": 36,
            "schoolRank": 95,
            "score": 40.5
        },
        {
            "classRank": 37,
            "schoolRank": 97,
            "score": 39
        },
        {
            "classRank": 38,
            "schoolRank": 98,
            "score": 38.5
        },
        {
            "classRank": 39,
            "schoolRank": 101,
            "score": 37
        },
        {
            "classRank": 40,
            "schoolRank": 101,
            "score": 37
        },
        {
            "classRank": 41,
            "schoolRank": 105,
            "score": 33.5
        },
        {
            "classRank": 42,
            "schoolRank": 107,
            "score": 32.5
        }
    ],
    "高一03班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 90
        },
        {
            "classRank": 2,
            "schoolRank": 5,
            "score": 86
        },
        {
            "classRank": 3,
            "schoolRank": 8,
            "score": 84.5
        },
        {
            "classRank": 4,
            "schoolRank": 9,
            "score": 84
        },
        {
            "classRank": 5,
            "schoolRank": 11,
            "score": 83
        },
        {
            "classRank": 6,
            "schoolRank": 11,
            "score": 83
        },
        {
            "classRank": 7,
            "schoolRank": 13,
            "score": 82
        },
        {
            "classRank": 8,
            "schoolRank": 17,
            "score": 80
        },
        {
            "classRank": 9,
            "schoolRank": 18,
            "score": 79.5
        },
        {
            "classRank": 10,
            "schoolRank": 19,
            "score": 79
        },
        {
            "classRank": 11,
            "schoolRank": 20,
            "score": 78.5
        },
        {
            "classRank": 12,
            "schoolRank": 23,
            "score": 77
        },
        {
            "classRank": 13,
            "schoolRank": 24,
            "score": 76.5
        },
        {
            "classRank": 14,
            "schoolRank": 26,
            "score": 75.5
        },
        {
            "classRank": 15,
            "schoolRank": 30,
            "score": 73.5
        },
        {
            "classRank": 16,
            "schoolRank": 31,
            "score": 73
        },
        {
            "classRank": 17,
            "schoolRank": 33,
            "score": 72
        },
        {
            "classRank": 18,
            "schoolRank": 35,
            "score": 71
        },
        {
            "classRank": 19,
            "schoolRank": 37,
            "score": 70
        },
        {
            "classRank": 20,
            "schoolRank": 37,
            "score": 70
        },
        {
            "classRank": 21,
            "schoolRank": 40,
            "score": 68.5
        },
        {
            "classRank": 22,
            "schoolRank": 43,
            "score": 67
        },
        {
            "classRank": 23,
            "schoolRank": 47,
            "score": 65
        },
        {
            "classRank": 24,
            "schoolRank": 48,
            "score": 64.5
        },
        {
            "classRank": 25,
            "schoolRank": 54,
            "score": 61.5
        },
        {
            "classRank": 26,
            "schoolRank": 58,
            "score": 59.5
        },
        {
            "classRank": 27,
            "schoolRank": 60,
            "score": 58.5
        },
        {
            "classRank": 28,
            "schoolRank": 62,
            "score": 57.5
        },
        {
            "classRank": 29,
            "schoolRank": 64,
            "score": 56.5
        },
        {
            "classRank": 30,
            "schoolRank": 65,
            "score": 56
        },
        {
            "classRank": 31,
            "schoolRank": 66,
            "score": 55.5
        },
        {
            "classRank": 32,
            "schoolRank": 69,
            "score": 54
        },
        {
            "classRank": 33,
            "schoolRank": 71,
            "score": 53
        },
        {
            "classRank": 34,
            "schoolRank": 72,
            "score": 52.5
        },
        {
            "classRank": 35,
            "schoolRank": 75,
            "score": 51
        },
        {
            "classRank": 36,
            "schoolRank": 77,
            "score": 50
        },
        {
            "classRank": 37,
            "schoolRank": 83,
            "score": 47
        }
    ]
}
var gy6 = [];
getyk(data, gy6);
setMapS1(gy6, '生物', 'm1-6');
data = {
    "高一08班": [{
            "classRank": 1,
            "schoolRank": 17,
            "score": 81.5
        },
        {
            "classRank": 2,
            "schoolRank": 19,
            "score": 80.5
        },
        {
            "classRank": 3,
            "schoolRank": 20,
            "score": 80
        },
        {
            "classRank": 4,
            "schoolRank": 25,
            "score": 77.5
        },
        {
            "classRank": 5,
            "schoolRank": 27,
            "score": 76.5
        },
        {
            "classRank": 6,
            "schoolRank": 27,
            "score": 76.5
        },
        {
            "classRank": 7,
            "schoolRank": 30,
            "score": 75
        },
        {
            "classRank": 8,
            "schoolRank": 32,
            "score": 74
        },
        {
            "classRank": 9,
            "schoolRank": 33,
            "score": 73.5
        },
        {
            "classRank": 10,
            "schoolRank": 35,
            "score": 72.5
        },
        {
            "classRank": 11,
            "schoolRank": 36,
            "score": 72
        },
        {
            "classRank": 12,
            "schoolRank": 40,
            "score": 70
        },
        {
            "classRank": 13,
            "schoolRank": 41,
            "score": 69.5
        },
        {
            "classRank": 14,
            "schoolRank": 42,
            "score": 69
        },
        {
            "classRank": 15,
            "schoolRank": 45,
            "score": 67.5
        },
        {
            "classRank": 16,
            "schoolRank": 47,
            "score": 66.5
        },
        {
            "classRank": 17,
            "schoolRank": 48,
            "score": 66
        },
        {
            "classRank": 18,
            "schoolRank": 51,
            "score": 64.5
        },
        {
            "classRank": 19,
            "schoolRank": 56,
            "score": 62
        },
        {
            "classRank": 20,
            "schoolRank": 56,
            "score": 62
        },
        {
            "classRank": 21,
            "schoolRank": 56,
            "score": 62
        },
        {
            "classRank": 22,
            "schoolRank": 57,
            "score": 61.5
        },
        {
            "classRank": 23,
            "schoolRank": 60,
            "score": 60
        },
        {
            "classRank": 24,
            "schoolRank": 62,
            "score": 59
        },
        {
            "classRank": 25,
            "schoolRank": 63,
            "score": 58.5
        },
        {
            "classRank": 26,
            "schoolRank": 65,
            "score": 57.5
        },
        {
            "classRank": 27,
            "schoolRank": 67,
            "score": 56.5
        },
        {
            "classRank": 28,
            "schoolRank": 68,
            "score": 56
        },
        {
            "classRank": 29,
            "schoolRank": 70,
            "score": 55
        },
        {
            "classRank": 30,
            "schoolRank": 71,
            "score": 54.5
        },
        {
            "classRank": 31,
            "schoolRank": 79,
            "score": 50.5
        },
        {
            "classRank": 32,
            "schoolRank": 82,
            "score": 49
        },
        {
            "classRank": 33,
            "schoolRank": 82,
            "score": 49
        },
        {
            "classRank": 34,
            "schoolRank": 82,
            "score": 49
        },
        {
            "classRank": 35,
            "schoolRank": 85,
            "score": 47.5
        },
        {
            "classRank": 36,
            "schoolRank": 88,
            "score": 46
        },
        {
            "classRank": 37,
            "schoolRank": 95,
            "score": 42.5
        }
    ],
    "高一09班": [{
            "classRank": 1,
            "schoolRank": 16,
            "score": 82
        },
        {
            "classRank": 2,
            "schoolRank": 20,
            "score": 80
        },
        {
            "classRank": 3,
            "schoolRank": 20,
            "score": 80
        },
        {
            "classRank": 4,
            "schoolRank": 23,
            "score": 78.5
        },
        {
            "classRank": 5,
            "schoolRank": 24,
            "score": 78
        },
        {
            "classRank": 6,
            "schoolRank": 27,
            "score": 76.5
        },
        {
            "classRank": 7,
            "schoolRank": 28,
            "score": 76
        },
        {
            "classRank": 8,
            "schoolRank": 31,
            "score": 74.5
        },
        {
            "classRank": 9,
            "schoolRank": 32,
            "score": 74
        },
        {
            "classRank": 10,
            "schoolRank": 32,
            "score": 74
        },
        {
            "classRank": 11,
            "schoolRank": 34,
            "score": 73
        },
        {
            "classRank": 12,
            "schoolRank": 39,
            "score": 70.5
        },
        {
            "classRank": 13,
            "schoolRank": 40,
            "score": 70
        },
        {
            "classRank": 14,
            "schoolRank": 43,
            "score": 68.5
        },
        {
            "classRank": 15,
            "schoolRank": 47,
            "score": 66.5
        },
        {
            "classRank": 16,
            "schoolRank": 48,
            "score": 66
        },
        {
            "classRank": 17,
            "schoolRank": 48,
            "score": 66
        },
        {
            "classRank": 18,
            "schoolRank": 53,
            "score": 63.5
        },
        {
            "classRank": 19,
            "schoolRank": 53,
            "score": 63.5
        },
        {
            "classRank": 20,
            "schoolRank": 55,
            "score": 62.5
        },
        {
            "classRank": 21,
            "schoolRank": 58,
            "score": 61
        },
        {
            "classRank": 22,
            "schoolRank": 60,
            "score": 60
        },
        {
            "classRank": 23,
            "schoolRank": 60,
            "score": 60
        },
        {
            "classRank": 24,
            "schoolRank": 61,
            "score": 59.5
        },
        {
            "classRank": 25,
            "schoolRank": 66,
            "score": 57
        },
        {
            "classRank": 26,
            "schoolRank": 66,
            "score": 57
        },
        {
            "classRank": 27,
            "schoolRank": 71,
            "score": 54.5
        },
        {
            "classRank": 28,
            "schoolRank": 74,
            "score": 53
        },
        {
            "classRank": 29,
            "schoolRank": 75,
            "score": 52.5
        },
        {
            "classRank": 30,
            "schoolRank": 77,
            "score": 51.5
        },
        {
            "classRank": 31,
            "schoolRank": 79,
            "score": 50.5
        },
        {
            "classRank": 32,
            "schoolRank": 82,
            "score": 49
        },
        {
            "classRank": 33,
            "schoolRank": 83,
            "score": 48.5
        },
        {
            "classRank": 34,
            "schoolRank": 83,
            "score": 48.5
        },
        {
            "classRank": 35,
            "schoolRank": 84,
            "score": 48
        },
        {
            "classRank": 36,
            "schoolRank": 88,
            "score": 46
        },
        {
            "classRank": 37,
            "schoolRank": 93,
            "score": 43.5
        },
        {
            "classRank": 38,
            "schoolRank": 94,
            "score": 43
        },
        {
            "classRank": 39,
            "schoolRank": 101,
            "score": 38.5
        },
        {
            "classRank": 40,
            "schoolRank": 103,
            "score": 37.5
        },
        {
            "classRank": 41,
            "schoolRank": 107,
            "score": 35
        }
    ],
    "高一06班": [{
            "classRank": 1,
            "schoolRank": 5,
            "score": 88
        },
        {
            "classRank": 2,
            "schoolRank": 12,
            "score": 84.5
        },
        {
            "classRank": 3,
            "schoolRank": 17,
            "score": 81.5
        },
        {
            "classRank": 4,
            "schoolRank": 18,
            "score": 81
        },
        {
            "classRank": 5,
            "schoolRank": 19,
            "score": 80.5
        },
        {
            "classRank": 6,
            "schoolRank": 22,
            "score": 79
        },
        {
            "classRank": 7,
            "schoolRank": 22,
            "score": 79
        },
        {
            "classRank": 8,
            "schoolRank": 23,
            "score": 78.5
        },
        {
            "classRank": 9,
            "schoolRank": 27,
            "score": 76.5
        },
        {
            "classRank": 10,
            "schoolRank": 28,
            "score": 76
        },
        {
            "classRank": 11,
            "schoolRank": 31,
            "score": 74.5
        },
        {
            "classRank": 12,
            "schoolRank": 34,
            "score": 73
        },
        {
            "classRank": 13,
            "schoolRank": 38,
            "score": 71
        },
        {
            "classRank": 14,
            "schoolRank": 39,
            "score": 70.5
        },
        {
            "classRank": 15,
            "schoolRank": 41,
            "score": 69.5
        },
        {
            "classRank": 16,
            "schoolRank": 42,
            "score": 69
        },
        {
            "classRank": 17,
            "schoolRank": 47,
            "score": 66.5
        },
        {
            "classRank": 18,
            "schoolRank": 48,
            "score": 66
        },
        {
            "classRank": 19,
            "schoolRank": 50,
            "score": 65
        },
        {
            "classRank": 20,
            "schoolRank": 51,
            "score": 64.5
        },
        {
            "classRank": 21,
            "schoolRank": 52,
            "score": 64
        },
        {
            "classRank": 22,
            "schoolRank": 54,
            "score": 63
        },
        {
            "classRank": 23,
            "schoolRank": 57,
            "score": 61.5
        },
        {
            "classRank": 24,
            "schoolRank": 59,
            "score": 60.5
        },
        {
            "classRank": 25,
            "schoolRank": 60,
            "score": 60
        },
        {
            "classRank": 26,
            "schoolRank": 61,
            "score": 59.5
        },
        {
            "classRank": 27,
            "schoolRank": 62,
            "score": 59
        },
        {
            "classRank": 28,
            "schoolRank": 64,
            "score": 58
        },
        {
            "classRank": 29,
            "schoolRank": 69,
            "score": 55.5
        },
        {
            "classRank": 30,
            "schoolRank": 70,
            "score": 55
        },
        {
            "classRank": 31,
            "schoolRank": 71,
            "score": 54.5
        },
        {
            "classRank": 32,
            "schoolRank": 75,
            "score": 52.5
        },
        {
            "classRank": 33,
            "schoolRank": 76,
            "score": 52
        },
        {
            "classRank": 34,
            "schoolRank": 79,
            "score": 50.5
        },
        {
            "classRank": 35,
            "schoolRank": 79,
            "score": 50.5
        },
        {
            "classRank": 36,
            "schoolRank": 87,
            "score": 46.5
        }
    ],
    "高一07班": [{
            "classRank": 1,
            "schoolRank": 9,
            "score": 86
        },
        {
            "classRank": 2,
            "schoolRank": 16,
            "score": 82
        },
        {
            "classRank": 3,
            "schoolRank": 19,
            "score": 80.5
        },
        {
            "classRank": 4,
            "schoolRank": 19,
            "score": 80.5
        },
        {
            "classRank": 5,
            "schoolRank": 21,
            "score": 79.5
        },
        {
            "classRank": 6,
            "schoolRank": 25,
            "score": 77.5
        },
        {
            "classRank": 7,
            "schoolRank": 31,
            "score": 74.5
        },
        {
            "classRank": 8,
            "schoolRank": 32,
            "score": 74
        },
        {
            "classRank": 9,
            "schoolRank": 32,
            "score": 74
        },
        {
            "classRank": 10,
            "schoolRank": 33,
            "score": 73.5
        },
        {
            "classRank": 11,
            "schoolRank": 36,
            "score": 72
        },
        {
            "classRank": 12,
            "schoolRank": 37,
            "score": 71.5
        },
        {
            "classRank": 13,
            "schoolRank": 40,
            "score": 70
        },
        {
            "classRank": 14,
            "schoolRank": 40,
            "score": 70
        },
        {
            "classRank": 15,
            "schoolRank": 44,
            "score": 68
        },
        {
            "classRank": 16,
            "schoolRank": 45,
            "score": 67.5
        },
        {
            "classRank": 17,
            "schoolRank": 45,
            "score": 67.5
        },
        {
            "classRank": 18,
            "schoolRank": 47,
            "score": 66.5
        },
        {
            "classRank": 19,
            "schoolRank": 48,
            "score": 66
        },
        {
            "classRank": 20,
            "schoolRank": 50,
            "score": 65
        },
        {
            "classRank": 21,
            "schoolRank": 50,
            "score": 65
        },
        {
            "classRank": 22,
            "schoolRank": 51,
            "score": 64.5
        },
        {
            "classRank": 23,
            "schoolRank": 59,
            "score": 60.5
        },
        {
            "classRank": 24,
            "schoolRank": 60,
            "score": 60
        },
        {
            "classRank": 25,
            "schoolRank": 61,
            "score": 59.5
        },
        {
            "classRank": 26,
            "schoolRank": 64,
            "score": 58
        },
        {
            "classRank": 27,
            "schoolRank": 66,
            "score": 57
        },
        {
            "classRank": 28,
            "schoolRank": 66,
            "score": 57
        },
        {
            "classRank": 29,
            "schoolRank": 68,
            "score": 56
        },
        {
            "classRank": 30,
            "schoolRank": 71,
            "score": 54.5
        },
        {
            "classRank": 31,
            "schoolRank": 75,
            "score": 52.5
        },
        {
            "classRank": 32,
            "schoolRank": 79,
            "score": 50.5
        },
        {
            "classRank": 33,
            "schoolRank": 80,
            "score": 50
        },
        {
            "classRank": 34,
            "schoolRank": 80,
            "score": 50
        },
        {
            "classRank": 35,
            "schoolRank": 82,
            "score": 49
        },
        {
            "classRank": 36,
            "schoolRank": 82,
            "score": 49
        },
        {
            "classRank": 37,
            "schoolRank": 82,
            "score": 49
        },
        {
            "classRank": 38,
            "schoolRank": 84,
            "score": 48
        },
        {
            "classRank": 39,
            "schoolRank": 85,
            "score": 47.5
        },
        {
            "classRank": 40,
            "schoolRank": 88,
            "score": 46
        },
        {
            "classRank": 41,
            "schoolRank": 88,
            "score": 46
        },
        {
            "classRank": 42,
            "schoolRank": 91,
            "score": 44.5
        },
        {
            "classRank": 43,
            "schoolRank": 93,
            "score": 43.5
        },
        {
            "classRank": 44,
            "schoolRank": 105,
            "score": 36.5
        },
        {
            "classRank": 45,
            "schoolRank": 108,
            "score": 34.5
        }
    ],
    "高一11班": [{
            "classRank": 1,
            "schoolRank": 20,
            "score": 80
        },
        {
            "classRank": 2,
            "schoolRank": 20,
            "score": 80
        },
        {
            "classRank": 3,
            "schoolRank": 25,
            "score": 77.5
        },
        {
            "classRank": 4,
            "schoolRank": 26,
            "score": 77
        },
        {
            "classRank": 5,
            "schoolRank": 28,
            "score": 76
        },
        {
            "classRank": 6,
            "schoolRank": 28,
            "score": 76
        },
        {
            "classRank": 7,
            "schoolRank": 29,
            "score": 75.5
        },
        {
            "classRank": 8,
            "schoolRank": 34,
            "score": 73
        },
        {
            "classRank": 9,
            "schoolRank": 36,
            "score": 72
        },
        {
            "classRank": 10,
            "schoolRank": 39,
            "score": 70.5
        },
        {
            "classRank": 11,
            "schoolRank": 40,
            "score": 70
        },
        {
            "classRank": 12,
            "schoolRank": 42,
            "score": 69
        },
        {
            "classRank": 13,
            "schoolRank": 46,
            "score": 67
        },
        {
            "classRank": 14,
            "schoolRank": 49,
            "score": 65.5
        },
        {
            "classRank": 15,
            "schoolRank": 53,
            "score": 63.5
        },
        {
            "classRank": 16,
            "schoolRank": 53,
            "score": 63.5
        },
        {
            "classRank": 17,
            "schoolRank": 56,
            "score": 62
        },
        {
            "classRank": 18,
            "schoolRank": 56,
            "score": 62
        },
        {
            "classRank": 19,
            "schoolRank": 58,
            "score": 61
        },
        {
            "classRank": 20,
            "schoolRank": 59,
            "score": 60.5
        },
        {
            "classRank": 21,
            "schoolRank": 62,
            "score": 59
        },
        {
            "classRank": 22,
            "schoolRank": 64,
            "score": 58
        },
        {
            "classRank": 23,
            "schoolRank": 65,
            "score": 57.5
        },
        {
            "classRank": 24,
            "schoolRank": 67,
            "score": 56.5
        },
        {
            "classRank": 25,
            "schoolRank": 72,
            "score": 54
        },
        {
            "classRank": 26,
            "schoolRank": 73,
            "score": 53.5
        },
        {
            "classRank": 27,
            "schoolRank": 74,
            "score": 53
        },
        {
            "classRank": 28,
            "schoolRank": 74,
            "score": 53
        },
        {
            "classRank": 29,
            "schoolRank": 78,
            "score": 51
        },
        {
            "classRank": 30,
            "schoolRank": 80,
            "score": 50
        },
        {
            "classRank": 31,
            "schoolRank": 81,
            "score": 49.5
        },
        {
            "classRank": 32,
            "schoolRank": 83,
            "score": 48.5
        },
        {
            "classRank": 33,
            "schoolRank": 84,
            "score": 48
        },
        {
            "classRank": 34,
            "schoolRank": 86,
            "score": 47
        },
        {
            "classRank": 35,
            "schoolRank": 90,
            "score": 45
        },
        {
            "classRank": 36,
            "schoolRank": 93,
            "score": 43.5
        },
        {
            "classRank": 37,
            "schoolRank": 97,
            "score": 41.5
        },
        {
            "classRank": 38,
            "schoolRank": 98,
            "score": 41
        },
        {
            "classRank": 39,
            "schoolRank": 98,
            "score": 41
        },
        {
            "classRank": 40,
            "schoolRank": 102,
            "score": 38
        },
        {
            "classRank": 41,
            "schoolRank": 103,
            "score": 37.5
        },
        {
            "classRank": 42,
            "schoolRank": 103,
            "score": 37.5
        },
        {
            "classRank": 43,
            "schoolRank": 104,
            "score": 37
        },
        {
            "classRank": 44,
            "schoolRank": 107,
            "score": 35
        }
    ],
    "高一01班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 93.5
        },
        {
            "classRank": 2,
            "schoolRank": 3,
            "score": 90
        },
        {
            "classRank": 3,
            "schoolRank": 4,
            "score": 88.5
        },
        {
            "classRank": 4,
            "schoolRank": 7,
            "score": 87
        },
        {
            "classRank": 5,
            "schoolRank": 8,
            "score": 86.5
        },
        {
            "classRank": 6,
            "schoolRank": 12,
            "score": 84.5
        },
        {
            "classRank": 7,
            "schoolRank": 12,
            "score": 84.5
        },
        {
            "classRank": 8,
            "schoolRank": 13,
            "score": 84
        },
        {
            "classRank": 9,
            "schoolRank": 17,
            "score": 81.5
        },
        {
            "classRank": 10,
            "schoolRank": 21,
            "score": 79.5
        },
        {
            "classRank": 11,
            "schoolRank": 25,
            "score": 77.5
        },
        {
            "classRank": 12,
            "schoolRank": 26,
            "score": 77
        },
        {
            "classRank": 13,
            "schoolRank": 33,
            "score": 73.5
        },
        {
            "classRank": 14,
            "schoolRank": 34,
            "score": 73
        },
        {
            "classRank": 15,
            "schoolRank": 34,
            "score": 73
        },
        {
            "classRank": 16,
            "schoolRank": 35,
            "score": 72.5
        },
        {
            "classRank": 17,
            "schoolRank": 39,
            "score": 70.5
        },
        {
            "classRank": 18,
            "schoolRank": 40,
            "score": 70
        },
        {
            "classRank": 19,
            "schoolRank": 41,
            "score": 69.5
        },
        {
            "classRank": 20,
            "schoolRank": 41,
            "score": 69.5
        },
        {
            "classRank": 21,
            "schoolRank": 45,
            "score": 67.5
        },
        {
            "classRank": 22,
            "schoolRank": 46,
            "score": 67
        },
        {
            "classRank": 23,
            "schoolRank": 48,
            "score": 66
        },
        {
            "classRank": 24,
            "schoolRank": 50,
            "score": 65
        },
        {
            "classRank": 25,
            "schoolRank": 50,
            "score": 65
        },
        {
            "classRank": 26,
            "schoolRank": 50,
            "score": 65
        },
        {
            "classRank": 27,
            "schoolRank": 50,
            "score": 65
        },
        {
            "classRank": 28,
            "schoolRank": 53,
            "score": 63.5
        },
        {
            "classRank": 29,
            "schoolRank": 53,
            "score": 63.5
        },
        {
            "classRank": 30,
            "schoolRank": 54,
            "score": 63
        },
        {
            "classRank": 31,
            "schoolRank": 65,
            "score": 57.5
        },
        {
            "classRank": 32,
            "schoolRank": 65,
            "score": 57.5
        },
        {
            "classRank": 33,
            "schoolRank": 66,
            "score": 57
        },
        {
            "classRank": 34,
            "schoolRank": 70,
            "score": 55
        },
        {
            "classRank": 35,
            "schoolRank": 70,
            "score": 55
        },
        {
            "classRank": 36,
            "schoolRank": 71,
            "score": 54.5
        },
        {
            "classRank": 37,
            "schoolRank": 79,
            "score": 50.5
        },
        {
            "classRank": 38,
            "schoolRank": 83,
            "score": 48.5
        },
        {
            "classRank": 39,
            "schoolRank": 86,
            "score": 47
        },
        {
            "classRank": 40,
            "schoolRank": 87,
            "score": 46.5
        },
        {
            "classRank": 41,
            "schoolRank": 90,
            "score": 45
        }
    ],
    "高一12班": [{
            "classRank": 1,
            "schoolRank": 23,
            "score": 78.5
        },
        {
            "classRank": 2,
            "schoolRank": 25,
            "score": 77.5
        },
        {
            "classRank": 3,
            "schoolRank": 25,
            "score": 77.5
        },
        {
            "classRank": 4,
            "schoolRank": 29,
            "score": 75.5
        },
        {
            "classRank": 5,
            "schoolRank": 30,
            "score": 75
        },
        {
            "classRank": 6,
            "schoolRank": 31,
            "score": 74.5
        },
        {
            "classRank": 7,
            "schoolRank": 37,
            "score": 71.5
        },
        {
            "classRank": 8,
            "schoolRank": 44,
            "score": 68
        },
        {
            "classRank": 9,
            "schoolRank": 44,
            "score": 68
        },
        {
            "classRank": 10,
            "schoolRank": 46,
            "score": 67
        },
        {
            "classRank": 11,
            "schoolRank": 48,
            "score": 66
        },
        {
            "classRank": 12,
            "schoolRank": 49,
            "score": 65.5
        },
        {
            "classRank": 13,
            "schoolRank": 51,
            "score": 64.5
        },
        {
            "classRank": 14,
            "schoolRank": 55,
            "score": 62.5
        },
        {
            "classRank": 15,
            "schoolRank": 58,
            "score": 61
        },
        {
            "classRank": 16,
            "schoolRank": 60,
            "score": 60
        },
        {
            "classRank": 17,
            "schoolRank": 61,
            "score": 59.5
        },
        {
            "classRank": 18,
            "schoolRank": 62,
            "score": 59
        },
        {
            "classRank": 19,
            "schoolRank": 65,
            "score": 57.5
        },
        {
            "classRank": 20,
            "schoolRank": 66,
            "score": 57
        },
        {
            "classRank": 21,
            "schoolRank": 68,
            "score": 56
        },
        {
            "classRank": 22,
            "schoolRank": 69,
            "score": 55.5
        },
        {
            "classRank": 23,
            "schoolRank": 71,
            "score": 54.5
        },
        {
            "classRank": 24,
            "schoolRank": 72,
            "score": 54
        },
        {
            "classRank": 25,
            "schoolRank": 76,
            "score": 52
        },
        {
            "classRank": 26,
            "schoolRank": 77,
            "score": 51.5
        },
        {
            "classRank": 27,
            "schoolRank": 77,
            "score": 51.5
        },
        {
            "classRank": 28,
            "schoolRank": 81,
            "score": 49.5
        },
        {
            "classRank": 29,
            "schoolRank": 84,
            "score": 48
        },
        {
            "classRank": 30,
            "schoolRank": 88,
            "score": 46
        },
        {
            "classRank": 31,
            "schoolRank": 88,
            "score": 46
        },
        {
            "classRank": 32,
            "schoolRank": 91,
            "score": 44.5
        },
        {
            "classRank": 33,
            "schoolRank": 93,
            "score": 43.5
        },
        {
            "classRank": 34,
            "schoolRank": 97,
            "score": 41.5
        },
        {
            "classRank": 35,
            "schoolRank": 98,
            "score": 41
        },
        {
            "classRank": 36,
            "schoolRank": 98,
            "score": 41
        },
        {
            "classRank": 37,
            "schoolRank": 99,
            "score": 40.5
        },
        {
            "classRank": 38,
            "schoolRank": 99,
            "score": 40.5
        },
        {
            "classRank": 39,
            "schoolRank": 100,
            "score": 39
        },
        {
            "classRank": 40,
            "schoolRank": 100,
            "score": 39
        },
        {
            "classRank": 41,
            "schoolRank": 106,
            "score": 36
        },
        {
            "classRank": 42,
            "schoolRank": 107,
            "score": 35
        },
        {
            "classRank": 43,
            "schoolRank": 109,
            "score": 33.5
        },
        {
            "classRank": 44,
            "schoolRank": 110,
            "score": 33
        },
        {
            "classRank": 45,
            "schoolRank": 110,
            "score": 33
        },
        {
            "classRank": 46,
            "schoolRank": 111,
            "score": 32
        },
        {
            "classRank": 47,
            "schoolRank": 112,
            "score": 30.5
        }
    ],
    "高一10班": [{
            "classRank": 1,
            "schoolRank": 15,
            "score": 82.5
        },
        {
            "classRank": 2,
            "schoolRank": 16,
            "score": 82
        },
        {
            "classRank": 3,
            "schoolRank": 17,
            "score": 81.5
        },
        {
            "classRank": 4,
            "schoolRank": 19,
            "score": 80.5
        },
        {
            "classRank": 5,
            "schoolRank": 23,
            "score": 78.5
        },
        {
            "classRank": 6,
            "schoolRank": 23,
            "score": 78.5
        },
        {
            "classRank": 7,
            "schoolRank": 30,
            "score": 75
        },
        {
            "classRank": 8,
            "schoolRank": 31,
            "score": 74.5
        },
        {
            "classRank": 9,
            "schoolRank": 33,
            "score": 73.5
        },
        {
            "classRank": 10,
            "schoolRank": 36,
            "score": 72
        },
        {
            "classRank": 11,
            "schoolRank": 39,
            "score": 70.5
        },
        {
            "classRank": 12,
            "schoolRank": 43,
            "score": 68.5
        },
        {
            "classRank": 13,
            "schoolRank": 44,
            "score": 68
        },
        {
            "classRank": 14,
            "schoolRank": 46,
            "score": 67
        },
        {
            "classRank": 15,
            "schoolRank": 47,
            "score": 66.5
        },
        {
            "classRank": 16,
            "schoolRank": 50,
            "score": 65
        },
        {
            "classRank": 17,
            "schoolRank": 58,
            "score": 61
        },
        {
            "classRank": 18,
            "schoolRank": 61,
            "score": 59.5
        },
        {
            "classRank": 19,
            "schoolRank": 61,
            "score": 59.5
        },
        {
            "classRank": 20,
            "schoolRank": 62,
            "score": 59
        },
        {
            "classRank": 21,
            "schoolRank": 63,
            "score": 58.5
        },
        {
            "classRank": 22,
            "schoolRank": 64,
            "score": 58
        },
        {
            "classRank": 23,
            "schoolRank": 65,
            "score": 57.5
        },
        {
            "classRank": 24,
            "schoolRank": 67,
            "score": 56.5
        },
        {
            "classRank": 25,
            "schoolRank": 69,
            "score": 55.5
        },
        {
            "classRank": 26,
            "schoolRank": 69,
            "score": 55.5
        },
        {
            "classRank": 27,
            "schoolRank": 71,
            "score": 54.5
        },
        {
            "classRank": 28,
            "schoolRank": 73,
            "score": 53.5
        },
        {
            "classRank": 29,
            "schoolRank": 76,
            "score": 52
        },
        {
            "classRank": 30,
            "schoolRank": 80,
            "score": 50
        },
        {
            "classRank": 31,
            "schoolRank": 84,
            "score": 48
        },
        {
            "classRank": 32,
            "schoolRank": 84,
            "score": 48
        },
        {
            "classRank": 33,
            "schoolRank": 86,
            "score": 47
        },
        {
            "classRank": 34,
            "schoolRank": 89,
            "score": 45.5
        },
        {
            "classRank": 35,
            "schoolRank": 94,
            "score": 43
        }
    ],
    "高一04班": [{
            "classRank": 1,
            "schoolRank": 5,
            "score": 88
        },
        {
            "classRank": 2,
            "schoolRank": 5,
            "score": 88
        },
        {
            "classRank": 3,
            "schoolRank": 6,
            "score": 87.5
        },
        {
            "classRank": 4,
            "schoolRank": 15,
            "score": 82.5
        },
        {
            "classRank": 5,
            "schoolRank": 17,
            "score": 81.5
        },
        {
            "classRank": 6,
            "schoolRank": 19,
            "score": 80.5
        },
        {
            "classRank": 7,
            "schoolRank": 19,
            "score": 80.5
        },
        {
            "classRank": 8,
            "schoolRank": 20,
            "score": 80
        },
        {
            "classRank": 9,
            "schoolRank": 20,
            "score": 80
        },
        {
            "classRank": 10,
            "schoolRank": 23,
            "score": 78.5
        },
        {
            "classRank": 11,
            "schoolRank": 26,
            "score": 77
        },
        {
            "classRank": 12,
            "schoolRank": 28,
            "score": 76
        },
        {
            "classRank": 13,
            "schoolRank": 36,
            "score": 72
        },
        {
            "classRank": 14,
            "schoolRank": 37,
            "score": 71.5
        },
        {
            "classRank": 15,
            "schoolRank": 43,
            "score": 68.5
        },
        {
            "classRank": 16,
            "schoolRank": 44,
            "score": 68
        },
        {
            "classRank": 17,
            "schoolRank": 45,
            "score": 67.5
        },
        {
            "classRank": 18,
            "schoolRank": 47,
            "score": 66.5
        },
        {
            "classRank": 19,
            "schoolRank": 48,
            "score": 66
        },
        {
            "classRank": 20,
            "schoolRank": 48,
            "score": 66
        },
        {
            "classRank": 21,
            "schoolRank": 49,
            "score": 65.5
        },
        {
            "classRank": 22,
            "schoolRank": 56,
            "score": 62
        },
        {
            "classRank": 23,
            "schoolRank": 57,
            "score": 61.5
        },
        {
            "classRank": 24,
            "schoolRank": 57,
            "score": 61.5
        },
        {
            "classRank": 25,
            "schoolRank": 58,
            "score": 61
        },
        {
            "classRank": 26,
            "schoolRank": 59,
            "score": 60.5
        },
        {
            "classRank": 27,
            "schoolRank": 61,
            "score": 59.5
        },
        {
            "classRank": 28,
            "schoolRank": 63,
            "score": 58.5
        },
        {
            "classRank": 29,
            "schoolRank": 63,
            "score": 58.5
        },
        {
            "classRank": 30,
            "schoolRank": 66,
            "score": 57
        },
        {
            "classRank": 31,
            "schoolRank": 68,
            "score": 56
        },
        {
            "classRank": 32,
            "schoolRank": 70,
            "score": 55
        },
        {
            "classRank": 33,
            "schoolRank": 71,
            "score": 54.5
        },
        {
            "classRank": 34,
            "schoolRank": 74,
            "score": 53
        },
        {
            "classRank": 35,
            "schoolRank": 80,
            "score": 50
        }
    ],
    "高一05班": [{
            "classRank": 1,
            "schoolRank": 4,
            "score": 88.5
        },
        {
            "classRank": 2,
            "schoolRank": 11,
            "score": 85
        },
        {
            "classRank": 3,
            "schoolRank": 12,
            "score": 84.5
        },
        {
            "classRank": 4,
            "schoolRank": 13,
            "score": 84
        },
        {
            "classRank": 5,
            "schoolRank": 19,
            "score": 80.5
        },
        {
            "classRank": 6,
            "schoolRank": 23,
            "score": 78.5
        },
        {
            "classRank": 7,
            "schoolRank": 24,
            "score": 78
        },
        {
            "classRank": 8,
            "schoolRank": 24,
            "score": 78
        },
        {
            "classRank": 9,
            "schoolRank": 26,
            "score": 77
        },
        {
            "classRank": 10,
            "schoolRank": 27,
            "score": 76.5
        },
        {
            "classRank": 11,
            "schoolRank": 34,
            "score": 73
        },
        {
            "classRank": 12,
            "schoolRank": 35,
            "score": 72.5
        },
        {
            "classRank": 13,
            "schoolRank": 37,
            "score": 71.5
        },
        {
            "classRank": 14,
            "schoolRank": 39,
            "score": 70.5
        },
        {
            "classRank": 15,
            "schoolRank": 39,
            "score": 70.5
        },
        {
            "classRank": 16,
            "schoolRank": 40,
            "score": 70
        },
        {
            "classRank": 17,
            "schoolRank": 45,
            "score": 67.5
        },
        {
            "classRank": 18,
            "schoolRank": 45,
            "score": 67.5
        },
        {
            "classRank": 19,
            "schoolRank": 46,
            "score": 67
        },
        {
            "classRank": 20,
            "schoolRank": 46,
            "score": 67
        },
        {
            "classRank": 21,
            "schoolRank": 47,
            "score": 66.5
        },
        {
            "classRank": 22,
            "schoolRank": 50,
            "score": 65
        },
        {
            "classRank": 23,
            "schoolRank": 51,
            "score": 64.5
        },
        {
            "classRank": 24,
            "schoolRank": 53,
            "score": 63.5
        },
        {
            "classRank": 25,
            "schoolRank": 57,
            "score": 61.5
        },
        {
            "classRank": 26,
            "schoolRank": 60,
            "score": 60
        },
        {
            "classRank": 27,
            "schoolRank": 60,
            "score": 60
        },
        {
            "classRank": 28,
            "schoolRank": 61,
            "score": 59.5
        },
        {
            "classRank": 29,
            "schoolRank": 62,
            "score": 59
        },
        {
            "classRank": 30,
            "schoolRank": 63,
            "score": 58.5
        },
        {
            "classRank": 31,
            "schoolRank": 64,
            "score": 58
        },
        {
            "classRank": 32,
            "schoolRank": 67,
            "score": 56.5
        },
        {
            "classRank": 33,
            "schoolRank": 68,
            "score": 56
        },
        {
            "classRank": 34,
            "schoolRank": 70,
            "score": 55
        },
        {
            "classRank": 35,
            "schoolRank": 70,
            "score": 55
        },
        {
            "classRank": 36,
            "schoolRank": 78,
            "score": 51
        },
        {
            "classRank": 37,
            "schoolRank": 78,
            "score": 51
        },
        {
            "classRank": 38,
            "schoolRank": 82,
            "score": 49
        }
    ],
    "高一02班": [{
            "classRank": 1,
            "schoolRank": 10,
            "score": 85.5
        },
        {
            "classRank": 2,
            "schoolRank": 11,
            "score": 85
        },
        {
            "classRank": 3,
            "schoolRank": 12,
            "score": 84.5
        },
        {
            "classRank": 4,
            "schoolRank": 14,
            "score": 83
        },
        {
            "classRank": 5,
            "schoolRank": 14,
            "score": 83
        },
        {
            "classRank": 6,
            "schoolRank": 14,
            "score": 83
        },
        {
            "classRank": 7,
            "schoolRank": 15,
            "score": 82.5
        },
        {
            "classRank": 8,
            "schoolRank": 16,
            "score": 82
        },
        {
            "classRank": 9,
            "schoolRank": 23,
            "score": 78.5
        },
        {
            "classRank": 10,
            "schoolRank": 25,
            "score": 77.5
        },
        {
            "classRank": 11,
            "schoolRank": 25,
            "score": 77.5
        },
        {
            "classRank": 12,
            "schoolRank": 26,
            "score": 77
        },
        {
            "classRank": 13,
            "schoolRank": 26,
            "score": 77
        },
        {
            "classRank": 14,
            "schoolRank": 29,
            "score": 75.5
        },
        {
            "classRank": 15,
            "schoolRank": 30,
            "score": 75
        },
        {
            "classRank": 16,
            "schoolRank": 32,
            "score": 74
        },
        {
            "classRank": 17,
            "schoolRank": 33,
            "score": 73.5
        },
        {
            "classRank": 18,
            "schoolRank": 37,
            "score": 71.5
        },
        {
            "classRank": 19,
            "schoolRank": 40,
            "score": 70
        },
        {
            "classRank": 20,
            "schoolRank": 41,
            "score": 69.5
        },
        {
            "classRank": 21,
            "schoolRank": 41,
            "score": 69.5
        },
        {
            "classRank": 22,
            "schoolRank": 45,
            "score": 67.5
        },
        {
            "classRank": 23,
            "schoolRank": 45,
            "score": 67.5
        },
        {
            "classRank": 24,
            "schoolRank": 46,
            "score": 67
        },
        {
            "classRank": 25,
            "schoolRank": 52,
            "score": 64
        },
        {
            "classRank": 26,
            "schoolRank": 53,
            "score": 63.5
        },
        {
            "classRank": 27,
            "schoolRank": 53,
            "score": 63.5
        },
        {
            "classRank": 28,
            "schoolRank": 55,
            "score": 62.5
        },
        {
            "classRank": 29,
            "schoolRank": 58,
            "score": 61
        },
        {
            "classRank": 30,
            "schoolRank": 64,
            "score": 58
        },
        {
            "classRank": 31,
            "schoolRank": 64,
            "score": 58
        },
        {
            "classRank": 32,
            "schoolRank": 68,
            "score": 56
        },
        {
            "classRank": 33,
            "schoolRank": 68,
            "score": 56
        },
        {
            "classRank": 34,
            "schoolRank": 72,
            "score": 54
        },
        {
            "classRank": 35,
            "schoolRank": 78,
            "score": 51
        },
        {
            "classRank": 36,
            "schoolRank": 80,
            "score": 50
        }
    ],
    "高一13班": [{
            "classRank": 1,
            "schoolRank": 22,
            "score": 79
        },
        {
            "classRank": 2,
            "schoolRank": 26,
            "score": 77
        },
        {
            "classRank": 3,
            "schoolRank": 29,
            "score": 75.5
        },
        {
            "classRank": 4,
            "schoolRank": 31,
            "score": 74.5
        },
        {
            "classRank": 5,
            "schoolRank": 32,
            "score": 74
        },
        {
            "classRank": 6,
            "schoolRank": 35,
            "score": 72.5
        },
        {
            "classRank": 7,
            "schoolRank": 41,
            "score": 69.5
        },
        {
            "classRank": 8,
            "schoolRank": 44,
            "score": 68
        },
        {
            "classRank": 9,
            "schoolRank": 47,
            "score": 66.5
        },
        {
            "classRank": 10,
            "schoolRank": 48,
            "score": 66
        },
        {
            "classRank": 11,
            "schoolRank": 49,
            "score": 65.5
        },
        {
            "classRank": 12,
            "schoolRank": 49,
            "score": 65.5
        },
        {
            "classRank": 13,
            "schoolRank": 53,
            "score": 63.5
        },
        {
            "classRank": 14,
            "schoolRank": 56,
            "score": 62
        },
        {
            "classRank": 15,
            "schoolRank": 57,
            "score": 61.5
        },
        {
            "classRank": 16,
            "schoolRank": 58,
            "score": 61
        },
        {
            "classRank": 17,
            "schoolRank": 60,
            "score": 60
        },
        {
            "classRank": 18,
            "schoolRank": 61,
            "score": 59.5
        },
        {
            "classRank": 19,
            "schoolRank": 61,
            "score": 59.5
        },
        {
            "classRank": 20,
            "schoolRank": 63,
            "score": 58.5
        },
        {
            "classRank": 21,
            "schoolRank": 65,
            "score": 57.5
        },
        {
            "classRank": 22,
            "schoolRank": 66,
            "score": 57
        },
        {
            "classRank": 23,
            "schoolRank": 71,
            "score": 54.5
        },
        {
            "classRank": 24,
            "schoolRank": 72,
            "score": 54
        },
        {
            "classRank": 25,
            "schoolRank": 73,
            "score": 53.5
        },
        {
            "classRank": 26,
            "schoolRank": 73,
            "score": 53.5
        },
        {
            "classRank": 27,
            "schoolRank": 78,
            "score": 51
        },
        {
            "classRank": 28,
            "schoolRank": 78,
            "score": 51
        },
        {
            "classRank": 29,
            "schoolRank": 81,
            "score": 49.5
        },
        {
            "classRank": 30,
            "schoolRank": 84,
            "score": 48
        },
        {
            "classRank": 31,
            "schoolRank": 85,
            "score": 47.5
        },
        {
            "classRank": 32,
            "schoolRank": 87,
            "score": 46.5
        },
        {
            "classRank": 33,
            "schoolRank": 90,
            "score": 45
        },
        {
            "classRank": 34,
            "schoolRank": 91,
            "score": 44.5
        },
        {
            "classRank": 35,
            "schoolRank": 91,
            "score": 44.5
        },
        {
            "classRank": 36,
            "schoolRank": 92,
            "score": 44
        },
        {
            "classRank": 37,
            "schoolRank": 94,
            "score": 43
        },
        {
            "classRank": 38,
            "schoolRank": 96,
            "score": 42
        },
        {
            "classRank": 39,
            "schoolRank": 99,
            "score": 40.5
        },
        {
            "classRank": 40,
            "schoolRank": 99,
            "score": 40.5
        },
        {
            "classRank": 41,
            "schoolRank": 109,
            "score": 33.5
        },
        {
            "classRank": 42,
            "schoolRank": 112,
            "score": 30.5
        }
    ],
    "高一03班": [{
            "classRank": 1,
            "schoolRank": 2,
            "score": 91
        },
        {
            "classRank": 2,
            "schoolRank": 8,
            "score": 86.5
        },
        {
            "classRank": 3,
            "schoolRank": 13,
            "score": 84
        },
        {
            "classRank": 4,
            "schoolRank": 13,
            "score": 84
        },
        {
            "classRank": 5,
            "schoolRank": 14,
            "score": 83
        },
        {
            "classRank": 6,
            "schoolRank": 15,
            "score": 82.5
        },
        {
            "classRank": 7,
            "schoolRank": 18,
            "score": 81
        },
        {
            "classRank": 8,
            "schoolRank": 18,
            "score": 81
        },
        {
            "classRank": 9,
            "schoolRank": 21,
            "score": 79.5
        },
        {
            "classRank": 10,
            "schoolRank": 22,
            "score": 79
        },
        {
            "classRank": 11,
            "schoolRank": 24,
            "score": 78
        },
        {
            "classRank": 12,
            "schoolRank": 25,
            "score": 77.5
        },
        {
            "classRank": 13,
            "schoolRank": 26,
            "score": 77
        },
        {
            "classRank": 14,
            "schoolRank": 30,
            "score": 75
        },
        {
            "classRank": 15,
            "schoolRank": 35,
            "score": 72.5
        },
        {
            "classRank": 16,
            "schoolRank": 38,
            "score": 71
        },
        {
            "classRank": 17,
            "schoolRank": 43,
            "score": 68.5
        },
        {
            "classRank": 18,
            "schoolRank": 43,
            "score": 68.5
        },
        {
            "classRank": 19,
            "schoolRank": 44,
            "score": 68
        },
        {
            "classRank": 20,
            "schoolRank": 46,
            "score": 67
        },
        {
            "classRank": 21,
            "schoolRank": 46,
            "score": 67
        },
        {
            "classRank": 22,
            "schoolRank": 50,
            "score": 65
        },
        {
            "classRank": 23,
            "schoolRank": 50,
            "score": 65
        },
        {
            "classRank": 24,
            "schoolRank": 52,
            "score": 64
        },
        {
            "classRank": 25,
            "schoolRank": 54,
            "score": 63
        },
        {
            "classRank": 26,
            "schoolRank": 54,
            "score": 63
        },
        {
            "classRank": 27,
            "schoolRank": 54,
            "score": 63
        },
        {
            "classRank": 28,
            "schoolRank": 56,
            "score": 62
        },
        {
            "classRank": 29,
            "schoolRank": 61,
            "score": 59.5
        },
        {
            "classRank": 30,
            "schoolRank": 62,
            "score": 59
        },
        {
            "classRank": 31,
            "schoolRank": 69,
            "score": 55.5
        },
        {
            "classRank": 32,
            "schoolRank": 71,
            "score": 54.5
        },
        {
            "classRank": 33,
            "schoolRank": 72,
            "score": 54
        },
        {
            "classRank": 34,
            "schoolRank": 73,
            "score": 53.5
        },
        {
            "classRank": 35,
            "schoolRank": 76,
            "score": 52
        },
        {
            "classRank": 36,
            "schoolRank": 82,
            "score": 49
        },
        {
            "classRank": 37,
            "schoolRank": 90,
            "score": 45
        }
    ]
};
var gy7 = [];
getyk(data, gy7);
setMapS1(gy7, '政治', 'm1-7');
data = {
    "高一08班": [{
            "classRank": 1,
            "schoolRank": 12,
            "score": 83.5
        },
        {
            "classRank": 2,
            "schoolRank": 15,
            "score": 82
        },
        {
            "classRank": 3,
            "schoolRank": 17,
            "score": 81
        },
        {
            "classRank": 4,
            "schoolRank": 18,
            "score": 80.5
        },
        {
            "classRank": 5,
            "schoolRank": 23,
            "score": 78
        },
        {
            "classRank": 6,
            "schoolRank": 25,
            "score": 77
        },
        {
            "classRank": 7,
            "schoolRank": 28,
            "score": 75.5
        },
        {
            "classRank": 8,
            "schoolRank": 30,
            "score": 74.5
        },
        {
            "classRank": 9,
            "schoolRank": 34,
            "score": 72.5
        },
        {
            "classRank": 10,
            "schoolRank": 35,
            "score": 72
        },
        {
            "classRank": 11,
            "schoolRank": 39,
            "score": 70
        },
        {
            "classRank": 12,
            "schoolRank": 39,
            "score": 70
        },
        {
            "classRank": 13,
            "schoolRank": 39,
            "score": 70
        },
        {
            "classRank": 14,
            "schoolRank": 40,
            "score": 69.5
        },
        {
            "classRank": 15,
            "schoolRank": 41,
            "score": 69
        },
        {
            "classRank": 16,
            "schoolRank": 41,
            "score": 69
        },
        {
            "classRank": 17,
            "schoolRank": 47,
            "score": 65.5
        },
        {
            "classRank": 18,
            "schoolRank": 47,
            "score": 65.5
        },
        {
            "classRank": 19,
            "schoolRank": 54,
            "score": 62
        },
        {
            "classRank": 20,
            "schoolRank": 56,
            "score": 61
        },
        {
            "classRank": 21,
            "schoolRank": 56,
            "score": 61
        },
        {
            "classRank": 22,
            "schoolRank": 59,
            "score": 59.5
        },
        {
            "classRank": 23,
            "schoolRank": 64,
            "score": 57
        },
        {
            "classRank": 24,
            "schoolRank": 65,
            "score": 56.5
        },
        {
            "classRank": 25,
            "schoolRank": 65,
            "score": 56.5
        },
        {
            "classRank": 26,
            "schoolRank": 66,
            "score": 56
        },
        {
            "classRank": 27,
            "schoolRank": 68,
            "score": 55
        },
        {
            "classRank": 28,
            "schoolRank": 71,
            "score": 53.5
        },
        {
            "classRank": 29,
            "schoolRank": 71,
            "score": 53.5
        },
        {
            "classRank": 30,
            "schoolRank": 74,
            "score": 52
        },
        {
            "classRank": 31,
            "schoolRank": 76,
            "score": 51
        },
        {
            "classRank": 32,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 33,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 34,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 35,
            "schoolRank": 81,
            "score": 48
        },
        {
            "classRank": 36,
            "schoolRank": 87,
            "score": 45
        },
        {
            "classRank": 37,
            "schoolRank": 88,
            "score": 44.5
        }
    ],
    "高一09班": [{
            "classRank": 1,
            "schoolRank": 15,
            "score": 82
        },
        {
            "classRank": 2,
            "schoolRank": 20,
            "score": 79.5
        },
        {
            "classRank": 3,
            "schoolRank": 23,
            "score": 78
        },
        {
            "classRank": 4,
            "schoolRank": 24,
            "score": 77.5
        },
        {
            "classRank": 5,
            "schoolRank": 24,
            "score": 77.5
        },
        {
            "classRank": 6,
            "schoolRank": 27,
            "score": 76
        },
        {
            "classRank": 7,
            "schoolRank": 27,
            "score": 76
        },
        {
            "classRank": 8,
            "schoolRank": 28,
            "score": 75.5
        },
        {
            "classRank": 9,
            "schoolRank": 30,
            "score": 74.5
        },
        {
            "classRank": 10,
            "schoolRank": 36,
            "score": 71.5
        },
        {
            "classRank": 11,
            "schoolRank": 36,
            "score": 71.5
        },
        {
            "classRank": 12,
            "schoolRank": 40,
            "score": 69.5
        },
        {
            "classRank": 13,
            "schoolRank": 40,
            "score": 69.5
        },
        {
            "classRank": 14,
            "schoolRank": 40,
            "score": 69.5
        },
        {
            "classRank": 15,
            "schoolRank": 41,
            "score": 69
        },
        {
            "classRank": 16,
            "schoolRank": 43,
            "score": 67.5
        },
        {
            "classRank": 17,
            "schoolRank": 45,
            "score": 66.5
        },
        {
            "classRank": 18,
            "schoolRank": 48,
            "score": 65
        },
        {
            "classRank": 19,
            "schoolRank": 52,
            "score": 63
        },
        {
            "classRank": 20,
            "schoolRank": 60,
            "score": 59
        },
        {
            "classRank": 21,
            "schoolRank": 60,
            "score": 59
        },
        {
            "classRank": 22,
            "schoolRank": 61,
            "score": 58.5
        },
        {
            "classRank": 23,
            "schoolRank": 62,
            "score": 58
        },
        {
            "classRank": 24,
            "schoolRank": 62,
            "score": 58
        },
        {
            "classRank": 25,
            "schoolRank": 64,
            "score": 57
        },
        {
            "classRank": 26,
            "schoolRank": 66,
            "score": 56
        },
        {
            "classRank": 27,
            "schoolRank": 70,
            "score": 54
        },
        {
            "classRank": 28,
            "schoolRank": 72,
            "score": 53
        },
        {
            "classRank": 29,
            "schoolRank": 73,
            "score": 52.5
        },
        {
            "classRank": 30,
            "schoolRank": 76,
            "score": 51
        },
        {
            "classRank": 31,
            "schoolRank": 77,
            "score": 50.5
        },
        {
            "classRank": 32,
            "schoolRank": 77,
            "score": 50.5
        },
        {
            "classRank": 33,
            "schoolRank": 81,
            "score": 48
        },
        {
            "classRank": 34,
            "schoolRank": 82,
            "score": 47.5
        },
        {
            "classRank": 35,
            "schoolRank": 86,
            "score": 45.5
        },
        {
            "classRank": 36,
            "schoolRank": 88,
            "score": 44.5
        },
        {
            "classRank": 37,
            "schoolRank": 89,
            "score": 44
        },
        {
            "classRank": 38,
            "schoolRank": 90,
            "score": 43.5
        },
        {
            "classRank": 39,
            "schoolRank": 90,
            "score": 43.5
        },
        {
            "classRank": 40,
            "schoolRank": 97,
            "score": 40
        },
        {
            "classRank": 41,
            "schoolRank": 99,
            "score": 39
        }
    ],
    "高一06班": [{
            "classRank": 1,
            "schoolRank": 4,
            "score": 88
        },
        {
            "classRank": 2,
            "schoolRank": 10,
            "score": 84.5
        },
        {
            "classRank": 3,
            "schoolRank": 13,
            "score": 83
        },
        {
            "classRank": 4,
            "schoolRank": 16,
            "score": 81.5
        },
        {
            "classRank": 5,
            "schoolRank": 16,
            "score": 81.5
        },
        {
            "classRank": 6,
            "schoolRank": 17,
            "score": 81
        },
        {
            "classRank": 7,
            "schoolRank": 22,
            "score": 78.5
        },
        {
            "classRank": 8,
            "schoolRank": 25,
            "score": 77
        },
        {
            "classRank": 9,
            "schoolRank": 27,
            "score": 76
        },
        {
            "classRank": 10,
            "schoolRank": 27,
            "score": 76
        },
        {
            "classRank": 11,
            "schoolRank": 31,
            "score": 74
        },
        {
            "classRank": 12,
            "schoolRank": 32,
            "score": 73.5
        },
        {
            "classRank": 13,
            "schoolRank": 33,
            "score": 73
        },
        {
            "classRank": 14,
            "schoolRank": 36,
            "score": 71.5
        },
        {
            "classRank": 15,
            "schoolRank": 38,
            "score": 70.5
        },
        {
            "classRank": 16,
            "schoolRank": 43,
            "score": 67.5
        },
        {
            "classRank": 17,
            "schoolRank": 43,
            "score": 67.5
        },
        {
            "classRank": 18,
            "schoolRank": 44,
            "score": 67
        },
        {
            "classRank": 19,
            "schoolRank": 45,
            "score": 66.5
        },
        {
            "classRank": 20,
            "schoolRank": 48,
            "score": 65
        },
        {
            "classRank": 21,
            "schoolRank": 50,
            "score": 64
        },
        {
            "classRank": 22,
            "schoolRank": 53,
            "score": 62.5
        },
        {
            "classRank": 23,
            "schoolRank": 56,
            "score": 61
        },
        {
            "classRank": 24,
            "schoolRank": 56,
            "score": 61
        },
        {
            "classRank": 25,
            "schoolRank": 58,
            "score": 60
        },
        {
            "classRank": 26,
            "schoolRank": 59,
            "score": 59.5
        },
        {
            "classRank": 27,
            "schoolRank": 61,
            "score": 58.5
        },
        {
            "classRank": 28,
            "schoolRank": 62,
            "score": 58
        },
        {
            "classRank": 29,
            "schoolRank": 66,
            "score": 56
        },
        {
            "classRank": 30,
            "schoolRank": 72,
            "score": 53
        },
        {
            "classRank": 31,
            "schoolRank": 73,
            "score": 52.5
        },
        {
            "classRank": 32,
            "schoolRank": 74,
            "score": 52
        },
        {
            "classRank": 33,
            "schoolRank": 75,
            "score": 51.5
        },
        {
            "classRank": 34,
            "schoolRank": 76,
            "score": 51
        },
        {
            "classRank": 35,
            "schoolRank": 79,
            "score": 49
        },
        {
            "classRank": 36,
            "schoolRank": 83,
            "score": 47
        }
    ],
    "高一07班": [{
            "classRank": 1,
            "schoolRank": 14,
            "score": 82.5
        },
        {
            "classRank": 2,
            "schoolRank": 17,
            "score": 81
        },
        {
            "classRank": 3,
            "schoolRank": 19,
            "score": 80
        },
        {
            "classRank": 4,
            "schoolRank": 20,
            "score": 79.5
        },
        {
            "classRank": 5,
            "schoolRank": 21,
            "score": 79
        },
        {
            "classRank": 6,
            "schoolRank": 21,
            "score": 79
        },
        {
            "classRank": 7,
            "schoolRank": 26,
            "score": 76.5
        },
        {
            "classRank": 8,
            "schoolRank": 28,
            "score": 75.5
        },
        {
            "classRank": 9,
            "schoolRank": 30,
            "score": 74.5
        },
        {
            "classRank": 10,
            "schoolRank": 32,
            "score": 73.5
        },
        {
            "classRank": 11,
            "schoolRank": 33,
            "score": 73
        },
        {
            "classRank": 12,
            "schoolRank": 35,
            "score": 72
        },
        {
            "classRank": 13,
            "schoolRank": 35,
            "score": 72
        },
        {
            "classRank": 14,
            "schoolRank": 37,
            "score": 71
        },
        {
            "classRank": 15,
            "schoolRank": 39,
            "score": 70
        },
        {
            "classRank": 16,
            "schoolRank": 44,
            "score": 67
        },
        {
            "classRank": 17,
            "schoolRank": 45,
            "score": 66.5
        },
        {
            "classRank": 18,
            "schoolRank": 46,
            "score": 66
        },
        {
            "classRank": 19,
            "schoolRank": 50,
            "score": 64
        },
        {
            "classRank": 20,
            "schoolRank": 51,
            "score": 63.5
        },
        {
            "classRank": 21,
            "schoolRank": 53,
            "score": 62.5
        },
        {
            "classRank": 22,
            "schoolRank": 54,
            "score": 62
        },
        {
            "classRank": 23,
            "schoolRank": 55,
            "score": 61.5
        },
        {
            "classRank": 24,
            "schoolRank": 57,
            "score": 60.5
        },
        {
            "classRank": 25,
            "schoolRank": 58,
            "score": 60
        },
        {
            "classRank": 26,
            "schoolRank": 63,
            "score": 57.5
        },
        {
            "classRank": 27,
            "schoolRank": 63,
            "score": 57.5
        },
        {
            "classRank": 28,
            "schoolRank": 66,
            "score": 56
        },
        {
            "classRank": 29,
            "schoolRank": 70,
            "score": 54
        },
        {
            "classRank": 30,
            "schoolRank": 71,
            "score": 53.5
        },
        {
            "classRank": 31,
            "schoolRank": 72,
            "score": 53
        },
        {
            "classRank": 32,
            "schoolRank": 76,
            "score": 51
        },
        {
            "classRank": 33,
            "schoolRank": 78,
            "score": 49.5
        },
        {
            "classRank": 34,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 35,
            "schoolRank": 81,
            "score": 48
        },
        {
            "classRank": 36,
            "schoolRank": 86,
            "score": 45.5
        },
        {
            "classRank": 37,
            "schoolRank": 87,
            "score": 45
        },
        {
            "classRank": 38,
            "schoolRank": 88,
            "score": 44.5
        },
        {
            "classRank": 39,
            "schoolRank": 88,
            "score": 44.5
        },
        {
            "classRank": 40,
            "schoolRank": 89,
            "score": 44
        },
        {
            "classRank": 41,
            "schoolRank": 91,
            "score": 43
        },
        {
            "classRank": 42,
            "schoolRank": 96,
            "score": 40.5
        },
        {
            "classRank": 43,
            "schoolRank": 97,
            "score": 40
        },
        {
            "classRank": 44,
            "schoolRank": 108,
            "score": 31
        },
        {
            "classRank": 45,
            "schoolRank": 108,
            "score": 31
        }
    ],
    "高一11班": [{
            "classRank": 1,
            "schoolRank": 16,
            "score": 81.5
        },
        {
            "classRank": 2,
            "schoolRank": 22,
            "score": 78.5
        },
        {
            "classRank": 3,
            "schoolRank": 24,
            "score": 77.5
        },
        {
            "classRank": 4,
            "schoolRank": 25,
            "score": 77
        },
        {
            "classRank": 5,
            "schoolRank": 26,
            "score": 76.5
        },
        {
            "classRank": 6,
            "schoolRank": 29,
            "score": 75
        },
        {
            "classRank": 7,
            "schoolRank": 31,
            "score": 74
        },
        {
            "classRank": 8,
            "schoolRank": 32,
            "score": 73.5
        },
        {
            "classRank": 9,
            "schoolRank": 34,
            "score": 72.5
        },
        {
            "classRank": 10,
            "schoolRank": 38,
            "score": 70.5
        },
        {
            "classRank": 11,
            "schoolRank": 41,
            "score": 69
        },
        {
            "classRank": 12,
            "schoolRank": 42,
            "score": 68
        },
        {
            "classRank": 13,
            "schoolRank": 46,
            "score": 66
        },
        {
            "classRank": 14,
            "schoolRank": 50,
            "score": 64
        },
        {
            "classRank": 15,
            "schoolRank": 52,
            "score": 63
        },
        {
            "classRank": 16,
            "schoolRank": 54,
            "score": 62
        },
        {
            "classRank": 17,
            "schoolRank": 57,
            "score": 60.5
        },
        {
            "classRank": 18,
            "schoolRank": 60,
            "score": 59
        },
        {
            "classRank": 19,
            "schoolRank": 60,
            "score": 59
        },
        {
            "classRank": 20,
            "schoolRank": 61,
            "score": 58.5
        },
        {
            "classRank": 21,
            "schoolRank": 66,
            "score": 56
        },
        {
            "classRank": 22,
            "schoolRank": 70,
            "score": 54
        },
        {
            "classRank": 23,
            "schoolRank": 71,
            "score": 53.5
        },
        {
            "classRank": 24,
            "schoolRank": 72,
            "score": 53
        },
        {
            "classRank": 25,
            "schoolRank": 73,
            "score": 52.5
        },
        {
            "classRank": 26,
            "schoolRank": 73,
            "score": 52.5
        },
        {
            "classRank": 27,
            "schoolRank": 74,
            "score": 52
        },
        {
            "classRank": 28,
            "schoolRank": 75,
            "score": 51.5
        },
        {
            "classRank": 29,
            "schoolRank": 75,
            "score": 51.5
        },
        {
            "classRank": 30,
            "schoolRank": 77,
            "score": 50.5
        },
        {
            "classRank": 31,
            "schoolRank": 78,
            "score": 49.5
        },
        {
            "classRank": 32,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 33,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 34,
            "schoolRank": 83,
            "score": 47
        },
        {
            "classRank": 35,
            "schoolRank": 85,
            "score": 46
        },
        {
            "classRank": 36,
            "schoolRank": 87,
            "score": 45
        },
        {
            "classRank": 37,
            "schoolRank": 87,
            "score": 45
        },
        {
            "classRank": 38,
            "schoolRank": 89,
            "score": 44
        },
        {
            "classRank": 39,
            "schoolRank": 91,
            "score": 43
        },
        {
            "classRank": 40,
            "schoolRank": 98,
            "score": 39.5
        },
        {
            "classRank": 41,
            "schoolRank": 102,
            "score": 37
        },
        {
            "classRank": 42,
            "schoolRank": 105,
            "score": 35
        },
        {
            "classRank": 43,
            "schoolRank": 105,
            "score": 35
        },
        {
            "classRank": 44,
            "schoolRank": 105,
            "score": 35
        }
    ],
    "高一01班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 91.5
        },
        {
            "classRank": 2,
            "schoolRank": 5,
            "score": 87
        },
        {
            "classRank": 3,
            "schoolRank": 6,
            "score": 86.5
        },
        {
            "classRank": 4,
            "schoolRank": 9,
            "score": 85
        },
        {
            "classRank": 5,
            "schoolRank": 9,
            "score": 85
        },
        {
            "classRank": 6,
            "schoolRank": 15,
            "score": 82
        },
        {
            "classRank": 7,
            "schoolRank": 15,
            "score": 82
        },
        {
            "classRank": 8,
            "schoolRank": 15,
            "score": 82
        },
        {
            "classRank": 9,
            "schoolRank": 16,
            "score": 81.5
        },
        {
            "classRank": 10,
            "schoolRank": 18,
            "score": 80.5
        },
        {
            "classRank": 11,
            "schoolRank": 21,
            "score": 79
        },
        {
            "classRank": 12,
            "schoolRank": 21,
            "score": 79
        },
        {
            "classRank": 13,
            "schoolRank": 23,
            "score": 78
        },
        {
            "classRank": 14,
            "schoolRank": 23,
            "score": 78
        },
        {
            "classRank": 15,
            "schoolRank": 24,
            "score": 77.5
        },
        {
            "classRank": 16,
            "schoolRank": 31,
            "score": 74
        },
        {
            "classRank": 17,
            "schoolRank": 37,
            "score": 71
        },
        {
            "classRank": 18,
            "schoolRank": 38,
            "score": 70.5
        },
        {
            "classRank": 19,
            "schoolRank": 39,
            "score": 70
        },
        {
            "classRank": 20,
            "schoolRank": 39,
            "score": 70
        },
        {
            "classRank": 21,
            "schoolRank": 41,
            "score": 69
        },
        {
            "classRank": 22,
            "schoolRank": 41,
            "score": 69
        },
        {
            "classRank": 23,
            "schoolRank": 41,
            "score": 69
        },
        {
            "classRank": 24,
            "schoolRank": 42,
            "score": 68
        },
        {
            "classRank": 25,
            "schoolRank": 49,
            "score": 64.5
        },
        {
            "classRank": 26,
            "schoolRank": 53,
            "score": 62.5
        },
        {
            "classRank": 27,
            "schoolRank": 55,
            "score": 61.5
        },
        {
            "classRank": 28,
            "schoolRank": 55,
            "score": 61.5
        },
        {
            "classRank": 29,
            "schoolRank": 56,
            "score": 61
        },
        {
            "classRank": 30,
            "schoolRank": 58,
            "score": 60
        },
        {
            "classRank": 31,
            "schoolRank": 60,
            "score": 59
        },
        {
            "classRank": 32,
            "schoolRank": 63,
            "score": 57.5
        },
        {
            "classRank": 33,
            "schoolRank": 63,
            "score": 57.5
        },
        {
            "classRank": 34,
            "schoolRank": 64,
            "score": 57
        },
        {
            "classRank": 35,
            "schoolRank": 65,
            "score": 56.5
        },
        {
            "classRank": 36,
            "schoolRank": 69,
            "score": 54.5
        },
        {
            "classRank": 37,
            "schoolRank": 69,
            "score": 54.5
        },
        {
            "classRank": 38,
            "schoolRank": 72,
            "score": 53
        },
        {
            "classRank": 39,
            "schoolRank": 73,
            "score": 52.5
        },
        {
            "classRank": 40,
            "schoolRank": 74,
            "score": 52
        },
        {
            "classRank": 41,
            "schoolRank": 85,
            "score": 46
        }
    ],
    "高一12班": [{
            "classRank": 1,
            "schoolRank": 20,
            "score": 79.5
        },
        {
            "classRank": 2,
            "schoolRank": 24,
            "score": 77.5
        },
        {
            "classRank": 3,
            "schoolRank": 27,
            "score": 76
        },
        {
            "classRank": 4,
            "schoolRank": 33,
            "score": 73
        },
        {
            "classRank": 5,
            "schoolRank": 34,
            "score": 72.5
        },
        {
            "classRank": 6,
            "schoolRank": 34,
            "score": 72.5
        },
        {
            "classRank": 7,
            "schoolRank": 39,
            "score": 70
        },
        {
            "classRank": 8,
            "schoolRank": 40,
            "score": 69.5
        },
        {
            "classRank": 9,
            "schoolRank": 40,
            "score": 69.5
        },
        {
            "classRank": 10,
            "schoolRank": 42,
            "score": 68
        },
        {
            "classRank": 11,
            "schoolRank": 44,
            "score": 67
        },
        {
            "classRank": 12,
            "schoolRank": 45,
            "score": 66.5
        },
        {
            "classRank": 13,
            "schoolRank": 47,
            "score": 65.5
        },
        {
            "classRank": 14,
            "schoolRank": 48,
            "score": 65
        },
        {
            "classRank": 15,
            "schoolRank": 49,
            "score": 64.5
        },
        {
            "classRank": 16,
            "schoolRank": 51,
            "score": 63.5
        },
        {
            "classRank": 17,
            "schoolRank": 55,
            "score": 61.5
        },
        {
            "classRank": 18,
            "schoolRank": 57,
            "score": 60.5
        },
        {
            "classRank": 19,
            "schoolRank": 58,
            "score": 60
        },
        {
            "classRank": 20,
            "schoolRank": 61,
            "score": 58.5
        },
        {
            "classRank": 21,
            "schoolRank": 61,
            "score": 58.5
        },
        {
            "classRank": 22,
            "schoolRank": 66,
            "score": 56
        },
        {
            "classRank": 23,
            "schoolRank": 70,
            "score": 54
        },
        {
            "classRank": 24,
            "schoolRank": 72,
            "score": 53
        },
        {
            "classRank": 25,
            "schoolRank": 72,
            "score": 53
        },
        {
            "classRank": 26,
            "schoolRank": 74,
            "score": 52
        },
        {
            "classRank": 27,
            "schoolRank": 76,
            "score": 51
        },
        {
            "classRank": 28,
            "schoolRank": 77,
            "score": 50.5
        },
        {
            "classRank": 29,
            "schoolRank": 78,
            "score": 49.5
        },
        {
            "classRank": 30,
            "schoolRank": 79,
            "score": 49
        },
        {
            "classRank": 31,
            "schoolRank": 79,
            "score": 49
        },
        {
            "classRank": 32,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 33,
            "schoolRank": 82,
            "score": 47.5
        },
        {
            "classRank": 34,
            "schoolRank": 83,
            "score": 47
        },
        {
            "classRank": 35,
            "schoolRank": 86,
            "score": 45.5
        },
        {
            "classRank": 36,
            "schoolRank": 88,
            "score": 44.5
        },
        {
            "classRank": 37,
            "schoolRank": 92,
            "score": 42.5
        },
        {
            "classRank": 38,
            "schoolRank": 93,
            "score": 42
        },
        {
            "classRank": 39,
            "schoolRank": 100,
            "score": 38.5
        },
        {
            "classRank": 40,
            "schoolRank": 100,
            "score": 38.5
        },
        {
            "classRank": 41,
            "schoolRank": 101,
            "score": 37.5
        },
        {
            "classRank": 42,
            "schoolRank": 102,
            "score": 37
        },
        {
            "classRank": 43,
            "schoolRank": 104,
            "score": 35.5
        },
        {
            "classRank": 44,
            "schoolRank": 106,
            "score": 32.5
        },
        {
            "classRank": 45,
            "schoolRank": 107,
            "score": 31.5
        },
        {
            "classRank": 46,
            "schoolRank": 109,
            "score": 30
        },
        {
            "classRank": 47,
            "schoolRank": 110,
            "score": 25
        }
    ],
    "高一10班": [{
            "classRank": 1,
            "schoolRank": 8,
            "score": 85.5
        },
        {
            "classRank": 2,
            "schoolRank": 23,
            "score": 78
        },
        {
            "classRank": 3,
            "schoolRank": 23,
            "score": 78
        },
        {
            "classRank": 4,
            "schoolRank": 25,
            "score": 77
        },
        {
            "classRank": 5,
            "schoolRank": 31,
            "score": 74
        },
        {
            "classRank": 6,
            "schoolRank": 31,
            "score": 74
        },
        {
            "classRank": 7,
            "schoolRank": 32,
            "score": 73.5
        },
        {
            "classRank": 8,
            "schoolRank": 36,
            "score": 71.5
        },
        {
            "classRank": 9,
            "schoolRank": 36,
            "score": 71.5
        },
        {
            "classRank": 10,
            "schoolRank": 39,
            "score": 70
        },
        {
            "classRank": 11,
            "schoolRank": 39,
            "score": 70
        },
        {
            "classRank": 12,
            "schoolRank": 41,
            "score": 69
        },
        {
            "classRank": 13,
            "schoolRank": 41,
            "score": 69
        },
        {
            "classRank": 14,
            "schoolRank": 44,
            "score": 67
        },
        {
            "classRank": 15,
            "schoolRank": 49,
            "score": 64.5
        },
        {
            "classRank": 16,
            "schoolRank": 54,
            "score": 62
        },
        {
            "classRank": 17,
            "schoolRank": 55,
            "score": 61.5
        },
        {
            "classRank": 18,
            "schoolRank": 59,
            "score": 59.5
        },
        {
            "classRank": 19,
            "schoolRank": 59,
            "score": 59.5
        },
        {
            "classRank": 20,
            "schoolRank": 59,
            "score": 59.5
        },
        {
            "classRank": 21,
            "schoolRank": 59,
            "score": 59.5
        },
        {
            "classRank": 22,
            "schoolRank": 62,
            "score": 58
        },
        {
            "classRank": 23,
            "schoolRank": 62,
            "score": 58
        },
        {
            "classRank": 24,
            "schoolRank": 65,
            "score": 56.5
        },
        {
            "classRank": 25,
            "schoolRank": 69,
            "score": 54.5
        },
        {
            "classRank": 26,
            "schoolRank": 69,
            "score": 54.5
        },
        {
            "classRank": 27,
            "schoolRank": 72,
            "score": 53
        },
        {
            "classRank": 28,
            "schoolRank": 74,
            "score": 52
        },
        {
            "classRank": 29,
            "schoolRank": 75,
            "score": 51.5
        },
        {
            "classRank": 30,
            "schoolRank": 76,
            "score": 51
        },
        {
            "classRank": 31,
            "schoolRank": 78,
            "score": 49.5
        },
        {
            "classRank": 32,
            "schoolRank": 82,
            "score": 47.5
        },
        {
            "classRank": 33,
            "schoolRank": 84,
            "score": 46.5
        },
        {
            "classRank": 34,
            "schoolRank": 87,
            "score": 45
        },
        {
            "classRank": 35,
            "schoolRank": 89,
            "score": 44
        }
    ],
    "高一04班": [{
            "classRank": 1,
            "schoolRank": 4,
            "score": 88
        },
        {
            "classRank": 2,
            "schoolRank": 6,
            "score": 86.5
        },
        {
            "classRank": 3,
            "schoolRank": 9,
            "score": 85
        },
        {
            "classRank": 4,
            "schoolRank": 14,
            "score": 82.5
        },
        {
            "classRank": 5,
            "schoolRank": 14,
            "score": 82.5
        },
        {
            "classRank": 6,
            "schoolRank": 15,
            "score": 82
        },
        {
            "classRank": 7,
            "schoolRank": 22,
            "score": 78.5
        },
        {
            "classRank": 8,
            "schoolRank": 22,
            "score": 78.5
        },
        {
            "classRank": 9,
            "schoolRank": 24,
            "score": 77.5
        },
        {
            "classRank": 10,
            "schoolRank": 25,
            "score": 77
        },
        {
            "classRank": 11,
            "schoolRank": 26,
            "score": 76.5
        },
        {
            "classRank": 12,
            "schoolRank": 30,
            "score": 74.5
        },
        {
            "classRank": 13,
            "schoolRank": 31,
            "score": 74
        },
        {
            "classRank": 14,
            "schoolRank": 32,
            "score": 73.5
        },
        {
            "classRank": 15,
            "schoolRank": 37,
            "score": 71
        },
        {
            "classRank": 16,
            "schoolRank": 41,
            "score": 69
        },
        {
            "classRank": 17,
            "schoolRank": 46,
            "score": 66
        },
        {
            "classRank": 18,
            "schoolRank": 47,
            "score": 65.5
        },
        {
            "classRank": 19,
            "schoolRank": 48,
            "score": 65
        },
        {
            "classRank": 20,
            "schoolRank": 49,
            "score": 64.5
        },
        {
            "classRank": 21,
            "schoolRank": 49,
            "score": 64.5
        },
        {
            "classRank": 22,
            "schoolRank": 51,
            "score": 63.5
        },
        {
            "classRank": 23,
            "schoolRank": 53,
            "score": 62.5
        },
        {
            "classRank": 24,
            "schoolRank": 53,
            "score": 62.5
        },
        {
            "classRank": 25,
            "schoolRank": 55,
            "score": 61.5
        },
        {
            "classRank": 26,
            "schoolRank": 58,
            "score": 60
        },
        {
            "classRank": 27,
            "schoolRank": 59,
            "score": 59.5
        },
        {
            "classRank": 28,
            "schoolRank": 61,
            "score": 58.5
        },
        {
            "classRank": 29,
            "schoolRank": 64,
            "score": 57
        },
        {
            "classRank": 30,
            "schoolRank": 64,
            "score": 57
        },
        {
            "classRank": 31,
            "schoolRank": 69,
            "score": 54.5
        },
        {
            "classRank": 32,
            "schoolRank": 69,
            "score": 54.5
        },
        {
            "classRank": 33,
            "schoolRank": 70,
            "score": 54
        },
        {
            "classRank": 34,
            "schoolRank": 74,
            "score": 52
        },
        {
            "classRank": 35,
            "schoolRank": 76,
            "score": 51
        }
    ],
    "高一05班": [{
            "classRank": 1,
            "schoolRank": 5,
            "score": 87
        },
        {
            "classRank": 2,
            "schoolRank": 7,
            "score": 86
        },
        {
            "classRank": 3,
            "schoolRank": 13,
            "score": 83
        },
        {
            "classRank": 4,
            "schoolRank": 16,
            "score": 81.5
        },
        {
            "classRank": 5,
            "schoolRank": 17,
            "score": 81
        },
        {
            "classRank": 6,
            "schoolRank": 21,
            "score": 79
        },
        {
            "classRank": 7,
            "schoolRank": 26,
            "score": 76.5
        },
        {
            "classRank": 8,
            "schoolRank": 28,
            "score": 75.5
        },
        {
            "classRank": 9,
            "schoolRank": 29,
            "score": 75
        },
        {
            "classRank": 10,
            "schoolRank": 31,
            "score": 74
        },
        {
            "classRank": 11,
            "schoolRank": 32,
            "score": 73.5
        },
        {
            "classRank": 12,
            "schoolRank": 36,
            "score": 71.5
        },
        {
            "classRank": 13,
            "schoolRank": 36,
            "score": 71.5
        },
        {
            "classRank": 14,
            "schoolRank": 37,
            "score": 71
        },
        {
            "classRank": 15,
            "schoolRank": 37,
            "score": 71
        },
        {
            "classRank": 16,
            "schoolRank": 41,
            "score": 69
        },
        {
            "classRank": 17,
            "schoolRank": 42,
            "score": 68
        },
        {
            "classRank": 18,
            "schoolRank": 45,
            "score": 66.5
        },
        {
            "classRank": 19,
            "schoolRank": 47,
            "score": 65.5
        },
        {
            "classRank": 20,
            "schoolRank": 48,
            "score": 65
        },
        {
            "classRank": 21,
            "schoolRank": 52,
            "score": 63
        },
        {
            "classRank": 22,
            "schoolRank": 52,
            "score": 63
        },
        {
            "classRank": 23,
            "schoolRank": 53,
            "score": 62.5
        },
        {
            "classRank": 24,
            "schoolRank": 53,
            "score": 62.5
        },
        {
            "classRank": 25,
            "schoolRank": 58,
            "score": 60
        },
        {
            "classRank": 26,
            "schoolRank": 58,
            "score": 60
        },
        {
            "classRank": 27,
            "schoolRank": 60,
            "score": 59
        },
        {
            "classRank": 28,
            "schoolRank": 61,
            "score": 58.5
        },
        {
            "classRank": 29,
            "schoolRank": 61,
            "score": 58.5
        },
        {
            "classRank": 30,
            "schoolRank": 64,
            "score": 57
        },
        {
            "classRank": 31,
            "schoolRank": 68,
            "score": 55
        },
        {
            "classRank": 32,
            "schoolRank": 68,
            "score": 55
        },
        {
            "classRank": 33,
            "schoolRank": 74,
            "score": 52
        },
        {
            "classRank": 34,
            "schoolRank": 75,
            "score": 51.5
        },
        {
            "classRank": 35,
            "schoolRank": 78,
            "score": 49.5
        },
        {
            "classRank": 36,
            "schoolRank": 78,
            "score": 49.5
        },
        {
            "classRank": 37,
            "schoolRank": 80,
            "score": 48.5
        },
        {
            "classRank": 38,
            "schoolRank": 90,
            "score": 43.5
        }
    ],
    "高一02班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 91.5
        },
        {
            "classRank": 2,
            "schoolRank": 2,
            "score": 91
        },
        {
            "classRank": 3,
            "schoolRank": 6,
            "score": 86.5
        },
        {
            "classRank": 4,
            "schoolRank": 8,
            "score": 85.5
        },
        {
            "classRank": 5,
            "schoolRank": 14,
            "score": 82.5
        },
        {
            "classRank": 6,
            "schoolRank": 16,
            "score": 81.5
        },
        {
            "classRank": 7,
            "schoolRank": 17,
            "score": 81
        },
        {
            "classRank": 8,
            "schoolRank": 21,
            "score": 79
        },
        {
            "classRank": 9,
            "schoolRank": 25,
            "score": 77
        },
        {
            "classRank": 10,
            "schoolRank": 25,
            "score": 77
        },
        {
            "classRank": 11,
            "schoolRank": 25,
            "score": 77
        },
        {
            "classRank": 12,
            "schoolRank": 26,
            "score": 76.5
        },
        {
            "classRank": 13,
            "schoolRank": 27,
            "score": 76
        },
        {
            "classRank": 14,
            "schoolRank": 27,
            "score": 76
        },
        {
            "classRank": 15,
            "schoolRank": 28,
            "score": 75.5
        },
        {
            "classRank": 16,
            "schoolRank": 34,
            "score": 72.5
        },
        {
            "classRank": 17,
            "schoolRank": 34,
            "score": 72.5
        },
        {
            "classRank": 18,
            "schoolRank": 38,
            "score": 70.5
        },
        {
            "classRank": 19,
            "schoolRank": 38,
            "score": 70.5
        },
        {
            "classRank": 20,
            "schoolRank": 38,
            "score": 70.5
        },
        {
            "classRank": 21,
            "schoolRank": 41,
            "score": 69
        },
        {
            "classRank": 22,
            "schoolRank": 45,
            "score": 66.5
        },
        {
            "classRank": 23,
            "schoolRank": 49,
            "score": 64.5
        },
        {
            "classRank": 24,
            "schoolRank": 52,
            "score": 63
        },
        {
            "classRank": 25,
            "schoolRank": 52,
            "score": 63
        },
        {
            "classRank": 26,
            "schoolRank": 53,
            "score": 62.5
        },
        {
            "classRank": 27,
            "schoolRank": 54,
            "score": 62
        },
        {
            "classRank": 28,
            "schoolRank": 56,
            "score": 61
        },
        {
            "classRank": 29,
            "schoolRank": 60,
            "score": 59
        },
        {
            "classRank": 30,
            "schoolRank": 64,
            "score": 57
        },
        {
            "classRank": 31,
            "schoolRank": 67,
            "score": 55.5
        },
        {
            "classRank": 32,
            "schoolRank": 67,
            "score": 55.5
        },
        {
            "classRank": 33,
            "schoolRank": 69,
            "score": 54.5
        },
        {
            "classRank": 34,
            "schoolRank": 70,
            "score": 54
        },
        {
            "classRank": 35,
            "schoolRank": 70,
            "score": 54
        },
        {
            "classRank": 36,
            "schoolRank": 76,
            "score": 51
        }
    ],
    "高一13班": [{
            "classRank": 1,
            "schoolRank": 25,
            "score": 77
        },
        {
            "classRank": 2,
            "schoolRank": 27,
            "score": 76
        },
        {
            "classRank": 3,
            "schoolRank": 29,
            "score": 75
        },
        {
            "classRank": 4,
            "schoolRank": 30,
            "score": 74.5
        },
        {
            "classRank": 5,
            "schoolRank": 33,
            "score": 73
        },
        {
            "classRank": 6,
            "schoolRank": 33,
            "score": 73
        },
        {
            "classRank": 7,
            "schoolRank": 33,
            "score": 73
        },
        {
            "classRank": 8,
            "schoolRank": 36,
            "score": 71.5
        },
        {
            "classRank": 9,
            "schoolRank": 37,
            "score": 71
        },
        {
            "classRank": 10,
            "schoolRank": 44,
            "score": 67
        },
        {
            "classRank": 11,
            "schoolRank": 45,
            "score": 66.5
        },
        {
            "classRank": 12,
            "schoolRank": 47,
            "score": 65.5
        },
        {
            "classRank": 13,
            "schoolRank": 51,
            "score": 63.5
        },
        {
            "classRank": 14,
            "schoolRank": 51,
            "score": 63.5
        },
        {
            "classRank": 15,
            "schoolRank": 52,
            "score": 63
        },
        {
            "classRank": 16,
            "schoolRank": 52,
            "score": 63
        },
        {
            "classRank": 17,
            "schoolRank": 53,
            "score": 62.5
        },
        {
            "classRank": 18,
            "schoolRank": 56,
            "score": 61
        },
        {
            "classRank": 19,
            "schoolRank": 57,
            "score": 60.5
        },
        {
            "classRank": 20,
            "schoolRank": 58,
            "score": 60
        },
        {
            "classRank": 21,
            "schoolRank": 61,
            "score": 58.5
        },
        {
            "classRank": 22,
            "schoolRank": 69,
            "score": 54.5
        },
        {
            "classRank": 23,
            "schoolRank": 70,
            "score": 54
        },
        {
            "classRank": 24,
            "schoolRank": 73,
            "score": 52.5
        },
        {
            "classRank": 25,
            "schoolRank": 73,
            "score": 52.5
        },
        {
            "classRank": 26,
            "schoolRank": 75,
            "score": 51.5
        },
        {
            "classRank": 27,
            "schoolRank": 76,
            "score": 51
        },
        {
            "classRank": 28,
            "schoolRank": 76,
            "score": 51
        },
        {
            "classRank": 29,
            "schoolRank": 77,
            "score": 50.5
        },
        {
            "classRank": 30,
            "schoolRank": 79,
            "score": 49
        },
        {
            "classRank": 31,
            "schoolRank": 82,
            "score": 47.5
        },
        {
            "classRank": 32,
            "schoolRank": 84,
            "score": 46.5
        },
        {
            "classRank": 33,
            "schoolRank": 88,
            "score": 44.5
        },
        {
            "classRank": 34,
            "schoolRank": 94,
            "score": 41.5
        },
        {
            "classRank": 35,
            "schoolRank": 95,
            "score": 41
        },
        {
            "classRank": 36,
            "schoolRank": 95,
            "score": 41
        },
        {
            "classRank": 37,
            "schoolRank": 95,
            "score": 41
        },
        {
            "classRank": 38,
            "schoolRank": 97,
            "score": 40
        },
        {
            "classRank": 39,
            "schoolRank": 97,
            "score": 40
        },
        {
            "classRank": 40,
            "schoolRank": 97,
            "score": 40
        },
        {
            "classRank": 41,
            "schoolRank": 97,
            "score": 40
        },
        {
            "classRank": 42,
            "schoolRank": 103,
            "score": 36.5
        }
    ],
    "高一03班": [{
            "classRank": 1,
            "schoolRank": 3,
            "score": 89
        },
        {
            "classRank": 2,
            "schoolRank": 6,
            "score": 86.5
        },
        {
            "classRank": 3,
            "schoolRank": 10,
            "score": 84.5
        },
        {
            "classRank": 4,
            "schoolRank": 11,
            "score": 84
        },
        {
            "classRank": 5,
            "schoolRank": 12,
            "score": 83.5
        },
        {
            "classRank": 6,
            "schoolRank": 14,
            "score": 82.5
        },
        {
            "classRank": 7,
            "schoolRank": 15,
            "score": 82
        },
        {
            "classRank": 8,
            "schoolRank": 15,
            "score": 82
        },
        {
            "classRank": 9,
            "schoolRank": 18,
            "score": 80.5
        },
        {
            "classRank": 10,
            "schoolRank": 22,
            "score": 78.5
        },
        {
            "classRank": 11,
            "schoolRank": 23,
            "score": 78
        },
        {
            "classRank": 12,
            "schoolRank": 26,
            "score": 76.5
        },
        {
            "classRank": 13,
            "schoolRank": 27,
            "score": 76
        },
        {
            "classRank": 14,
            "schoolRank": 29,
            "score": 75
        },
        {
            "classRank": 15,
            "schoolRank": 29,
            "score": 75
        },
        {
            "classRank": 16,
            "schoolRank": 36,
            "score": 71.5
        },
        {
            "classRank": 17,
            "schoolRank": 37,
            "score": 71
        },
        {
            "classRank": 18,
            "schoolRank": 40,
            "score": 69.5
        },
        {
            "classRank": 19,
            "schoolRank": 41,
            "score": 69
        },
        {
            "classRank": 20,
            "schoolRank": 42,
            "score": 68
        },
        {
            "classRank": 21,
            "schoolRank": 46,
            "score": 66
        },
        {
            "classRank": 22,
            "schoolRank": 49,
            "score": 64.5
        },
        {
            "classRank": 23,
            "schoolRank": 51,
            "score": 63.5
        },
        {
            "classRank": 24,
            "schoolRank": 51,
            "score": 63.5
        },
        {
            "classRank": 25,
            "schoolRank": 53,
            "score": 62.5
        },
        {
            "classRank": 26,
            "schoolRank": 60,
            "score": 59
        },
        {
            "classRank": 27,
            "schoolRank": 60,
            "score": 59
        },
        {
            "classRank": 28,
            "schoolRank": 63,
            "score": 57.5
        },
        {
            "classRank": 29,
            "schoolRank": 65,
            "score": 56.5
        },
        {
            "classRank": 30,
            "schoolRank": 66,
            "score": 56
        },
        {
            "classRank": 31,
            "schoolRank": 67,
            "score": 55.5
        },
        {
            "classRank": 32,
            "schoolRank": 70,
            "score": 54
        },
        {
            "classRank": 33,
            "schoolRank": 70,
            "score": 54
        },
        {
            "classRank": 34,
            "schoolRank": 70,
            "score": 54
        },
        {
            "classRank": 35,
            "schoolRank": 71,
            "score": 53.5
        },
        {
            "classRank": 36,
            "schoolRank": 76,
            "score": 51
        },
        {
            "classRank": 37,
            "schoolRank": 79,
            "score": 49
        }
    ]
};
var gy8 = [];
getyk(data, gy8)
setMapS1(gy8, '历史', 'm1-8');
data = {
    "高一08班": [{
            "classRank": 1,
            "schoolRank": 14,
            "score": 83.5
        },
        {
            "classRank": 2,
            "schoolRank": 19,
            "score": 81
        },
        {
            "classRank": 3,
            "schoolRank": 20,
            "score": 80.5
        },
        {
            "classRank": 4,
            "schoolRank": 21,
            "score": 80
        },
        {
            "classRank": 5,
            "schoolRank": 21,
            "score": 80
        },
        {
            "classRank": 6,
            "schoolRank": 21,
            "score": 80
        },
        {
            "classRank": 7,
            "schoolRank": 29,
            "score": 76
        },
        {
            "classRank": 8,
            "schoolRank": 29,
            "score": 76
        },
        {
            "classRank": 9,
            "schoolRank": 29,
            "score": 76
        },
        {
            "classRank": 10,
            "schoolRank": 30,
            "score": 75.5
        },
        {
            "classRank": 11,
            "schoolRank": 33,
            "score": 74
        },
        {
            "classRank": 12,
            "schoolRank": 36,
            "score": 72.5
        },
        {
            "classRank": 13,
            "schoolRank": 38,
            "score": 71.5
        },
        {
            "classRank": 14,
            "schoolRank": 42,
            "score": 69.5
        },
        {
            "classRank": 15,
            "schoolRank": 44,
            "score": 68.5
        },
        {
            "classRank": 16,
            "schoolRank": 46,
            "score": 67.5
        },
        {
            "classRank": 17,
            "schoolRank": 48,
            "score": 66.5
        },
        {
            "classRank": 18,
            "schoolRank": 49,
            "score": 66
        },
        {
            "classRank": 19,
            "schoolRank": 51,
            "score": 65
        },
        {
            "classRank": 20,
            "schoolRank": 55,
            "score": 63
        },
        {
            "classRank": 21,
            "schoolRank": 57,
            "score": 62
        },
        {
            "classRank": 22,
            "schoolRank": 61,
            "score": 60
        },
        {
            "classRank": 23,
            "schoolRank": 61,
            "score": 60
        },
        {
            "classRank": 24,
            "schoolRank": 65,
            "score": 58
        },
        {
            "classRank": 25,
            "schoolRank": 68,
            "score": 56.5
        },
        {
            "classRank": 26,
            "schoolRank": 71,
            "score": 55
        },
        {
            "classRank": 27,
            "schoolRank": 71,
            "score": 55
        },
        {
            "classRank": 28,
            "schoolRank": 73,
            "score": 54
        },
        {
            "classRank": 29,
            "schoolRank": 73,
            "score": 54
        },
        {
            "classRank": 30,
            "schoolRank": 75,
            "score": 53
        },
        {
            "classRank": 31,
            "schoolRank": 76,
            "score": 52.5
        },
        {
            "classRank": 32,
            "schoolRank": 76,
            "score": 52.5
        },
        {
            "classRank": 33,
            "schoolRank": 77,
            "score": 52
        },
        {
            "classRank": 34,
            "schoolRank": 78,
            "score": 51.5
        },
        {
            "classRank": 35,
            "schoolRank": 83,
            "score": 49
        },
        {
            "classRank": 36,
            "schoolRank": 84,
            "score": 48.5
        },
        {
            "classRank": 37,
            "schoolRank": 90,
            "score": 45.5
        }
    ],
    "高一09班": [{
            "classRank": 1,
            "schoolRank": 19,
            "score": 81
        },
        {
            "classRank": 2,
            "schoolRank": 22,
            "score": 79.5
        },
        {
            "classRank": 3,
            "schoolRank": 23,
            "score": 79
        },
        {
            "classRank": 4,
            "schoolRank": 23,
            "score": 79
        },
        {
            "classRank": 5,
            "schoolRank": 27,
            "score": 77
        },
        {
            "classRank": 6,
            "schoolRank": 28,
            "score": 76.5
        },
        {
            "classRank": 7,
            "schoolRank": 30,
            "score": 75.5
        },
        {
            "classRank": 8,
            "schoolRank": 30,
            "score": 75.5
        },
        {
            "classRank": 9,
            "schoolRank": 34,
            "score": 73.5
        },
        {
            "classRank": 10,
            "schoolRank": 36,
            "score": 72.5
        },
        {
            "classRank": 11,
            "schoolRank": 36,
            "score": 72.5
        },
        {
            "classRank": 12,
            "schoolRank": 37,
            "score": 72
        },
        {
            "classRank": 13,
            "schoolRank": 37,
            "score": 72
        },
        {
            "classRank": 14,
            "schoolRank": 40,
            "score": 70.5
        },
        {
            "classRank": 15,
            "schoolRank": 44,
            "score": 68.5
        },
        {
            "classRank": 16,
            "schoolRank": 48,
            "score": 66.5
        },
        {
            "classRank": 17,
            "schoolRank": 49,
            "score": 66
        },
        {
            "classRank": 18,
            "schoolRank": 52,
            "score": 64.5
        },
        {
            "classRank": 19,
            "schoolRank": 54,
            "score": 63.5
        },
        {
            "classRank": 20,
            "schoolRank": 56,
            "score": 62.5
        },
        {
            "classRank": 21,
            "schoolRank": 58,
            "score": 61.5
        },
        {
            "classRank": 22,
            "schoolRank": 63,
            "score": 59
        },
        {
            "classRank": 23,
            "schoolRank": 64,
            "score": 58.5
        },
        {
            "classRank": 24,
            "schoolRank": 68,
            "score": 56.5
        },
        {
            "classRank": 25,
            "schoolRank": 69,
            "score": 56
        },
        {
            "classRank": 26,
            "schoolRank": 74,
            "score": 53.5
        },
        {
            "classRank": 27,
            "schoolRank": 76,
            "score": 52.5
        },
        {
            "classRank": 28,
            "schoolRank": 76,
            "score": 52.5
        },
        {
            "classRank": 29,
            "schoolRank": 77,
            "score": 52
        },
        {
            "classRank": 30,
            "schoolRank": 79,
            "score": 51
        },
        {
            "classRank": 31,
            "schoolRank": 83,
            "score": 49
        },
        {
            "classRank": 32,
            "schoolRank": 83,
            "score": 49
        },
        {
            "classRank": 33,
            "schoolRank": 84,
            "score": 48.5
        },
        {
            "classRank": 34,
            "schoolRank": 85,
            "score": 48
        },
        {
            "classRank": 35,
            "schoolRank": 87,
            "score": 47
        },
        {
            "classRank": 36,
            "schoolRank": 88,
            "score": 46.5
        },
        {
            "classRank": 37,
            "schoolRank": 91,
            "score": 45
        },
        {
            "classRank": 38,
            "schoolRank": 97,
            "score": 42
        },
        {
            "classRank": 39,
            "schoolRank": 98,
            "score": 41.5
        },
        {
            "classRank": 40,
            "schoolRank": 100,
            "score": 40.5
        },
        {
            "classRank": 41,
            "schoolRank": 101,
            "score": 40
        }
    ],
    "高一06班": [{
            "classRank": 1,
            "schoolRank": 10,
            "score": 85.5
        },
        {
            "classRank": 2,
            "schoolRank": 11,
            "score": 85
        },
        {
            "classRank": 3,
            "schoolRank": 15,
            "score": 83
        },
        {
            "classRank": 4,
            "schoolRank": 18,
            "score": 81.5
        },
        {
            "classRank": 5,
            "schoolRank": 19,
            "score": 81
        },
        {
            "classRank": 6,
            "schoolRank": 24,
            "score": 78.5
        },
        {
            "classRank": 7,
            "schoolRank": 26,
            "score": 77.5
        },
        {
            "classRank": 8,
            "schoolRank": 27,
            "score": 77
        },
        {
            "classRank": 9,
            "schoolRank": 27,
            "score": 77
        },
        {
            "classRank": 10,
            "schoolRank": 28,
            "score": 76.5
        },
        {
            "classRank": 11,
            "schoolRank": 30,
            "score": 75.5
        },
        {
            "classRank": 12,
            "schoolRank": 34,
            "score": 73.5
        },
        {
            "classRank": 13,
            "schoolRank": 36,
            "score": 72.5
        },
        {
            "classRank": 14,
            "schoolRank": 40,
            "score": 70.5
        },
        {
            "classRank": 15,
            "schoolRank": 40,
            "score": 70.5
        },
        {
            "classRank": 16,
            "schoolRank": 41,
            "score": 70
        },
        {
            "classRank": 17,
            "schoolRank": 44,
            "score": 68.5
        },
        {
            "classRank": 18,
            "schoolRank": 44,
            "score": 68.5
        },
        {
            "classRank": 19,
            "schoolRank": 46,
            "score": 67.5
        },
        {
            "classRank": 20,
            "schoolRank": 48,
            "score": 66.5
        },
        {
            "classRank": 21,
            "schoolRank": 49,
            "score": 66
        },
        {
            "classRank": 22,
            "schoolRank": 51,
            "score": 65
        },
        {
            "classRank": 23,
            "schoolRank": 59,
            "score": 61
        },
        {
            "classRank": 24,
            "schoolRank": 59,
            "score": 61
        },
        {
            "classRank": 25,
            "schoolRank": 60,
            "score": 60.5
        },
        {
            "classRank": 26,
            "schoolRank": 63,
            "score": 59
        },
        {
            "classRank": 27,
            "schoolRank": 64,
            "score": 58.5
        },
        {
            "classRank": 28,
            "schoolRank": 69,
            "score": 56
        },
        {
            "classRank": 29,
            "schoolRank": 69,
            "score": 56
        },
        {
            "classRank": 30,
            "schoolRank": 72,
            "score": 54.5
        },
        {
            "classRank": 31,
            "schoolRank": 75,
            "score": 53
        },
        {
            "classRank": 32,
            "schoolRank": 75,
            "score": 53
        },
        {
            "classRank": 33,
            "schoolRank": 76,
            "score": 52.5
        },
        {
            "classRank": 34,
            "schoolRank": 79,
            "score": 51
        },
        {
            "classRank": 35,
            "schoolRank": 90,
            "score": 45.5
        },
        {
            "classRank": 36,
            "schoolRank": 91,
            "score": 45
        }
    ],
    "高一07班": [{
            "classRank": 1,
            "schoolRank": 6,
            "score": 87.5
        },
        {
            "classRank": 2,
            "schoolRank": 8,
            "score": 86.5
        },
        {
            "classRank": 3,
            "schoolRank": 9,
            "score": 86
        },
        {
            "classRank": 4,
            "schoolRank": 13,
            "score": 84
        },
        {
            "classRank": 5,
            "schoolRank": 17,
            "score": 82
        },
        {
            "classRank": 6,
            "schoolRank": 24,
            "score": 78.5
        },
        {
            "classRank": 7,
            "schoolRank": 26,
            "score": 77.5
        },
        {
            "classRank": 8,
            "schoolRank": 27,
            "score": 77
        },
        {
            "classRank": 9,
            "schoolRank": 32,
            "score": 74.5
        },
        {
            "classRank": 10,
            "schoolRank": 35,
            "score": 73
        },
        {
            "classRank": 11,
            "schoolRank": 35,
            "score": 73
        },
        {
            "classRank": 12,
            "schoolRank": 36,
            "score": 72.5
        },
        {
            "classRank": 13,
            "schoolRank": 38,
            "score": 71.5
        },
        {
            "classRank": 14,
            "schoolRank": 44,
            "score": 68.5
        },
        {
            "classRank": 15,
            "schoolRank": 46,
            "score": 67.5
        },
        {
            "classRank": 16,
            "schoolRank": 47,
            "score": 67
        },
        {
            "classRank": 17,
            "schoolRank": 49,
            "score": 66
        },
        {
            "classRank": 18,
            "schoolRank": 50,
            "score": 65.5
        },
        {
            "classRank": 19,
            "schoolRank": 52,
            "score": 64.5
        },
        {
            "classRank": 20,
            "schoolRank": 53,
            "score": 64
        },
        {
            "classRank": 21,
            "schoolRank": 54,
            "score": 63.5
        },
        {
            "classRank": 22,
            "schoolRank": 57,
            "score": 62
        },
        {
            "classRank": 23,
            "schoolRank": 58,
            "score": 61.5
        },
        {
            "classRank": 24,
            "schoolRank": 61,
            "score": 60
        },
        {
            "classRank": 25,
            "schoolRank": 63,
            "score": 59
        },
        {
            "classRank": 26,
            "schoolRank": 65,
            "score": 58
        },
        {
            "classRank": 27,
            "schoolRank": 71,
            "score": 55
        },
        {
            "classRank": 28,
            "schoolRank": 71,
            "score": 55
        },
        {
            "classRank": 29,
            "schoolRank": 72,
            "score": 54.5
        },
        {
            "classRank": 30,
            "schoolRank": 73,
            "score": 54
        },
        {
            "classRank": 31,
            "schoolRank": 76,
            "score": 52.5
        },
        {
            "classRank": 32,
            "schoolRank": 77,
            "score": 52
        },
        {
            "classRank": 33,
            "schoolRank": 78,
            "score": 51.5
        },
        {
            "classRank": 34,
            "schoolRank": 78,
            "score": 51.5
        },
        {
            "classRank": 35,
            "schoolRank": 80,
            "score": 50.5
        },
        {
            "classRank": 36,
            "schoolRank": 82,
            "score": 49.5
        },
        {
            "classRank": 37,
            "schoolRank": 88,
            "score": 46.5
        },
        {
            "classRank": 38,
            "schoolRank": 92,
            "score": 44.5
        },
        {
            "classRank": 39,
            "schoolRank": 98,
            "score": 41.5
        },
        {
            "classRank": 40,
            "schoolRank": 98,
            "score": 41.5
        },
        {
            "classRank": 41,
            "schoolRank": 98,
            "score": 41.5
        },
        {
            "classRank": 42,
            "schoolRank": 99,
            "score": 41
        },
        {
            "classRank": 43,
            "schoolRank": 101,
            "score": 40
        },
        {
            "classRank": 44,
            "schoolRank": 102,
            "score": 39
        },
        {
            "classRank": 45,
            "schoolRank": 102,
            "score": 39
        }
    ],
    "高一11班": [{
            "classRank": 1,
            "schoolRank": 22,
            "score": 79.5
        },
        {
            "classRank": 2,
            "schoolRank": 23,
            "score": 79
        },
        {
            "classRank": 3,
            "schoolRank": 24,
            "score": 78.5
        },
        {
            "classRank": 4,
            "schoolRank": 25,
            "score": 78
        },
        {
            "classRank": 5,
            "schoolRank": 32,
            "score": 74.5
        },
        {
            "classRank": 6,
            "schoolRank": 37,
            "score": 72
        },
        {
            "classRank": 7,
            "schoolRank": 37,
            "score": 72
        },
        {
            "classRank": 8,
            "schoolRank": 39,
            "score": 71
        },
        {
            "classRank": 9,
            "schoolRank": 39,
            "score": 71
        },
        {
            "classRank": 10,
            "schoolRank": 39,
            "score": 71
        },
        {
            "classRank": 11,
            "schoolRank": 40,
            "score": 70.5
        },
        {
            "classRank": 12,
            "schoolRank": 42,
            "score": 69.5
        },
        {
            "classRank": 13,
            "schoolRank": 44,
            "score": 68.5
        },
        {
            "classRank": 14,
            "schoolRank": 45,
            "score": 68
        },
        {
            "classRank": 15,
            "schoolRank": 48,
            "score": 66.5
        },
        {
            "classRank": 16,
            "schoolRank": 54,
            "score": 63.5
        },
        {
            "classRank": 17,
            "schoolRank": 55,
            "score": 63
        },
        {
            "classRank": 18,
            "schoolRank": 55,
            "score": 63
        },
        {
            "classRank": 19,
            "schoolRank": 60,
            "score": 60.5
        },
        {
            "classRank": 20,
            "schoolRank": 62,
            "score": 59.5
        },
        {
            "classRank": 21,
            "schoolRank": 67,
            "score": 57
        },
        {
            "classRank": 22,
            "schoolRank": 67,
            "score": 57
        },
        {
            "classRank": 23,
            "schoolRank": 68,
            "score": 56.5
        },
        {
            "classRank": 24,
            "schoolRank": 68,
            "score": 56.5
        },
        {
            "classRank": 25,
            "schoolRank": 74,
            "score": 53.5
        },
        {
            "classRank": 26,
            "schoolRank": 75,
            "score": 53
        },
        {
            "classRank": 27,
            "schoolRank": 75,
            "score": 53
        },
        {
            "classRank": 28,
            "schoolRank": 75,
            "score": 53
        },
        {
            "classRank": 29,
            "schoolRank": 81,
            "score": 50
        },
        {
            "classRank": 30,
            "schoolRank": 81,
            "score": 50
        },
        {
            "classRank": 31,
            "schoolRank": 83,
            "score": 49
        },
        {
            "classRank": 32,
            "schoolRank": 84,
            "score": 48.5
        },
        {
            "classRank": 33,
            "schoolRank": 86,
            "score": 47.5
        },
        {
            "classRank": 34,
            "schoolRank": 88,
            "score": 46.5
        },
        {
            "classRank": 35,
            "schoolRank": 91,
            "score": 45
        },
        {
            "classRank": 36,
            "schoolRank": 92,
            "score": 44.5
        },
        {
            "classRank": 37,
            "schoolRank": 92,
            "score": 44.5
        },
        {
            "classRank": 38,
            "schoolRank": 94,
            "score": 43.5
        },
        {
            "classRank": 39,
            "schoolRank": 97,
            "score": 42
        },
        {
            "classRank": 40,
            "schoolRank": 97,
            "score": 42
        },
        {
            "classRank": 41,
            "schoolRank": 100,
            "score": 40.5
        },
        {
            "classRank": 42,
            "schoolRank": 103,
            "score": 38
        },
        {
            "classRank": 43,
            "schoolRank": 104,
            "score": 37.5
        },
        {
            "classRank": 44,
            "schoolRank": 105,
            "score": 37
        }
    ],
    "高一01班": [{
            "classRank": 1,
            "schoolRank": 2,
            "score": 91
        },
        {
            "classRank": 2,
            "schoolRank": 3,
            "score": 90
        },
        {
            "classRank": 3,
            "schoolRank": 4,
            "score": 89.5
        },
        {
            "classRank": 4,
            "schoolRank": 6,
            "score": 87.5
        },
        {
            "classRank": 5,
            "schoolRank": 7,
            "score": 87
        },
        {
            "classRank": 6,
            "schoolRank": 7,
            "score": 87
        },
        {
            "classRank": 7,
            "schoolRank": 11,
            "score": 85
        },
        {
            "classRank": 8,
            "schoolRank": 13,
            "score": 84
        },
        {
            "classRank": 9,
            "schoolRank": 14,
            "score": 83.5
        },
        {
            "classRank": 10,
            "schoolRank": 19,
            "score": 81
        },
        {
            "classRank": 11,
            "schoolRank": 19,
            "score": 81
        },
        {
            "classRank": 12,
            "schoolRank": 24,
            "score": 78.5
        },
        {
            "classRank": 13,
            "schoolRank": 25,
            "score": 78
        },
        {
            "classRank": 14,
            "schoolRank": 27,
            "score": 77
        },
        {
            "classRank": 15,
            "schoolRank": 31,
            "score": 75
        },
        {
            "classRank": 16,
            "schoolRank": 33,
            "score": 74
        },
        {
            "classRank": 17,
            "schoolRank": 35,
            "score": 73
        },
        {
            "classRank": 18,
            "schoolRank": 41,
            "score": 70
        },
        {
            "classRank": 19,
            "schoolRank": 41,
            "score": 70
        },
        {
            "classRank": 20,
            "schoolRank": 42,
            "score": 69.5
        },
        {
            "classRank": 21,
            "schoolRank": 43,
            "score": 69
        },
        {
            "classRank": 22,
            "schoolRank": 43,
            "score": 69
        },
        {
            "classRank": 23,
            "schoolRank": 47,
            "score": 67
        },
        {
            "classRank": 24,
            "schoolRank": 47,
            "score": 67
        },
        {
            "classRank": 25,
            "schoolRank": 50,
            "score": 65.5
        },
        {
            "classRank": 26,
            "schoolRank": 54,
            "score": 63.5
        },
        {
            "classRank": 27,
            "schoolRank": 56,
            "score": 62.5
        },
        {
            "classRank": 28,
            "schoolRank": 56,
            "score": 62.5
        },
        {
            "classRank": 29,
            "schoolRank": 58,
            "score": 61.5
        },
        {
            "classRank": 30,
            "schoolRank": 59,
            "score": 61
        },
        {
            "classRank": 31,
            "schoolRank": 60,
            "score": 60.5
        },
        {
            "classRank": 32,
            "schoolRank": 65,
            "score": 58
        },
        {
            "classRank": 33,
            "schoolRank": 68,
            "score": 56.5
        },
        {
            "classRank": 34,
            "schoolRank": 68,
            "score": 56.5
        },
        {
            "classRank": 35,
            "schoolRank": 68,
            "score": 56.5
        },
        {
            "classRank": 36,
            "schoolRank": 70,
            "score": 55.5
        },
        {
            "classRank": 37,
            "schoolRank": 79,
            "score": 51
        },
        {
            "classRank": 38,
            "schoolRank": 82,
            "score": 49.5
        },
        {
            "classRank": 39,
            "schoolRank": 86,
            "score": 47.5
        },
        {
            "classRank": 40,
            "schoolRank": 87,
            "score": 47
        },
        {
            "classRank": 41,
            "schoolRank": 89,
            "score": 46
        }
    ],
    "高一12班": [{
            "classRank": 1,
            "schoolRank": 27,
            "score": 77
        },
        {
            "classRank": 2,
            "schoolRank": 28,
            "score": 76.5
        },
        {
            "classRank": 3,
            "schoolRank": 32,
            "score": 74.5
        },
        {
            "classRank": 4,
            "schoolRank": 33,
            "score": 74
        },
        {
            "classRank": 5,
            "schoolRank": 34,
            "score": 73.5
        },
        {
            "classRank": 6,
            "schoolRank": 36,
            "score": 72.5
        },
        {
            "classRank": 7,
            "schoolRank": 37,
            "score": 72
        },
        {
            "classRank": 8,
            "schoolRank": 39,
            "score": 71
        },
        {
            "classRank": 9,
            "schoolRank": 44,
            "score": 68.5
        },
        {
            "classRank": 10,
            "schoolRank": 44,
            "score": 68.5
        },
        {
            "classRank": 11,
            "schoolRank": 45,
            "score": 68
        },
        {
            "classRank": 12,
            "schoolRank": 45,
            "score": 68
        },
        {
            "classRank": 13,
            "schoolRank": 49,
            "score": 66
        },
        {
            "classRank": 14,
            "schoolRank": 55,
            "score": 63
        },
        {
            "classRank": 15,
            "schoolRank": 56,
            "score": 62.5
        },
        {
            "classRank": 16,
            "schoolRank": 56,
            "score": 62.5
        },
        {
            "classRank": 17,
            "schoolRank": 57,
            "score": 62
        },
        {
            "classRank": 18,
            "schoolRank": 58,
            "score": 61.5
        },
        {
            "classRank": 19,
            "schoolRank": 62,
            "score": 59.5
        },
        {
            "classRank": 20,
            "schoolRank": 63,
            "score": 59
        },
        {
            "classRank": 21,
            "schoolRank": 66,
            "score": 57.5
        },
        {
            "classRank": 22,
            "schoolRank": 66,
            "score": 57.5
        },
        {
            "classRank": 23,
            "schoolRank": 68,
            "score": 56.5
        },
        {
            "classRank": 24,
            "schoolRank": 73,
            "score": 54
        },
        {
            "classRank": 25,
            "schoolRank": 74,
            "score": 53.5
        },
        {
            "classRank": 26,
            "schoolRank": 75,
            "score": 53
        },
        {
            "classRank": 27,
            "schoolRank": 76,
            "score": 52.5
        },
        {
            "classRank": 28,
            "schoolRank": 77,
            "score": 52
        },
        {
            "classRank": 29,
            "schoolRank": 83,
            "score": 49
        },
        {
            "classRank": 30,
            "schoolRank": 85,
            "score": 48
        },
        {
            "classRank": 31,
            "schoolRank": 87,
            "score": 47
        },
        {
            "classRank": 32,
            "schoolRank": 87,
            "score": 47
        },
        {
            "classRank": 33,
            "schoolRank": 95,
            "score": 43
        },
        {
            "classRank": 34,
            "schoolRank": 96,
            "score": 42.5
        },
        {
            "classRank": 35,
            "schoolRank": 97,
            "score": 42
        },
        {
            "classRank": 36,
            "schoolRank": 98,
            "score": 41.5
        },
        {
            "classRank": 37,
            "schoolRank": 98,
            "score": 41.5
        },
        {
            "classRank": 38,
            "schoolRank": 100,
            "score": 40.5
        },
        {
            "classRank": 39,
            "schoolRank": 102,
            "score": 39
        },
        {
            "classRank": 40,
            "schoolRank": 103,
            "score": 38
        },
        {
            "classRank": 41,
            "schoolRank": 106,
            "score": 36.5
        },
        {
            "classRank": 42,
            "schoolRank": 106,
            "score": 36.5
        },
        {
            "classRank": 43,
            "schoolRank": 106,
            "score": 36.5
        },
        {
            "classRank": 44,
            "schoolRank": 107,
            "score": 35.5
        },
        {
            "classRank": 45,
            "schoolRank": 107,
            "score": 35.5
        },
        {
            "classRank": 46,
            "schoolRank": 108,
            "score": 35
        },
        {
            "classRank": 47,
            "schoolRank": 110,
            "score": 29
        }
    ],
    "高一10班": [{
            "classRank": 1,
            "schoolRank": 11,
            "score": 85
        },
        {
            "classRank": 2,
            "schoolRank": 26,
            "score": 77.5
        },
        {
            "classRank": 3,
            "schoolRank": 26,
            "score": 77.5
        },
        {
            "classRank": 4,
            "schoolRank": 27,
            "score": 77
        },
        {
            "classRank": 5,
            "schoolRank": 29,
            "score": 76
        },
        {
            "classRank": 6,
            "schoolRank": 30,
            "score": 75.5
        },
        {
            "classRank": 7,
            "schoolRank": 33,
            "score": 74
        },
        {
            "classRank": 8,
            "schoolRank": 38,
            "score": 71.5
        },
        {
            "classRank": 9,
            "schoolRank": 39,
            "score": 71
        },
        {
            "classRank": 10,
            "schoolRank": 41,
            "score": 70
        },
        {
            "classRank": 11,
            "schoolRank": 43,
            "score": 69
        },
        {
            "classRank": 12,
            "schoolRank": 47,
            "score": 67
        },
        {
            "classRank": 13,
            "schoolRank": 50,
            "score": 65.5
        },
        {
            "classRank": 14,
            "schoolRank": 50,
            "score": 65.5
        },
        {
            "classRank": 15,
            "schoolRank": 51,
            "score": 65
        },
        {
            "classRank": 16,
            "schoolRank": 52,
            "score": 64.5
        },
        {
            "classRank": 17,
            "schoolRank": 52,
            "score": 64.5
        },
        {
            "classRank": 18,
            "schoolRank": 52,
            "score": 64.5
        },
        {
            "classRank": 19,
            "schoolRank": 61,
            "score": 60
        },
        {
            "classRank": 20,
            "schoolRank": 61,
            "score": 60
        },
        {
            "classRank": 21,
            "schoolRank": 63,
            "score": 59
        },
        {
            "classRank": 22,
            "schoolRank": 65,
            "score": 58
        },
        {
            "classRank": 23,
            "schoolRank": 67,
            "score": 57
        },
        {
            "classRank": 24,
            "schoolRank": 69,
            "score": 56
        },
        {
            "classRank": 25,
            "schoolRank": 70,
            "score": 55.5
        },
        {
            "classRank": 26,
            "schoolRank": 72,
            "score": 54.5
        },
        {
            "classRank": 27,
            "schoolRank": 73,
            "score": 54
        },
        {
            "classRank": 28,
            "schoolRank": 75,
            "score": 53
        },
        {
            "classRank": 29,
            "schoolRank": 79,
            "score": 51
        },
        {
            "classRank": 30,
            "schoolRank": 83,
            "score": 49
        },
        {
            "classRank": 31,
            "schoolRank": 84,
            "score": 48.5
        },
        {
            "classRank": 32,
            "schoolRank": 84,
            "score": 48.5
        },
        {
            "classRank": 33,
            "schoolRank": 85,
            "score": 48
        },
        {
            "classRank": 34,
            "schoolRank": 87,
            "score": 47
        },
        {
            "classRank": 35,
            "schoolRank": 95,
            "score": 43
        }
    ],
    "高一04班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 92
        },
        {
            "classRank": 2,
            "schoolRank": 8,
            "score": 86.5
        },
        {
            "classRank": 3,
            "schoolRank": 10,
            "score": 85.5
        },
        {
            "classRank": 4,
            "schoolRank": 12,
            "score": 84.5
        },
        {
            "classRank": 5,
            "schoolRank": 16,
            "score": 82.5
        },
        {
            "classRank": 6,
            "schoolRank": 23,
            "score": 79
        },
        {
            "classRank": 7,
            "schoolRank": 23,
            "score": 79
        },
        {
            "classRank": 8,
            "schoolRank": 24,
            "score": 78.5
        },
        {
            "classRank": 9,
            "schoolRank": 28,
            "score": 76.5
        },
        {
            "classRank": 10,
            "schoolRank": 29,
            "score": 76
        },
        {
            "classRank": 11,
            "schoolRank": 29,
            "score": 76
        },
        {
            "classRank": 12,
            "schoolRank": 29,
            "score": 76
        },
        {
            "classRank": 13,
            "schoolRank": 32,
            "score": 74.5
        },
        {
            "classRank": 14,
            "schoolRank": 32,
            "score": 74.5
        },
        {
            "classRank": 15,
            "schoolRank": 32,
            "score": 74.5
        },
        {
            "classRank": 16,
            "schoolRank": 34,
            "score": 73.5
        },
        {
            "classRank": 17,
            "schoolRank": 43,
            "score": 69
        },
        {
            "classRank": 18,
            "schoolRank": 48,
            "score": 66.5
        },
        {
            "classRank": 19,
            "schoolRank": 50,
            "score": 65.5
        },
        {
            "classRank": 20,
            "schoolRank": 51,
            "score": 65
        },
        {
            "classRank": 21,
            "schoolRank": 51,
            "score": 65
        },
        {
            "classRank": 22,
            "schoolRank": 51,
            "score": 65
        },
        {
            "classRank": 23,
            "schoolRank": 54,
            "score": 63.5
        },
        {
            "classRank": 24,
            "schoolRank": 59,
            "score": 61
        },
        {
            "classRank": 25,
            "schoolRank": 60,
            "score": 60.5
        },
        {
            "classRank": 26,
            "schoolRank": 63,
            "score": 59
        },
        {
            "classRank": 27,
            "schoolRank": 65,
            "score": 58
        },
        {
            "classRank": 28,
            "schoolRank": 66,
            "score": 57.5
        },
        {
            "classRank": 29,
            "schoolRank": 69,
            "score": 56
        },
        {
            "classRank": 30,
            "schoolRank": 72,
            "score": 54.5
        },
        {
            "classRank": 31,
            "schoolRank": 72,
            "score": 54.5
        },
        {
            "classRank": 32,
            "schoolRank": 75,
            "score": 53
        },
        {
            "classRank": 33,
            "schoolRank": 75,
            "score": 53
        },
        {
            "classRank": 34,
            "schoolRank": 80,
            "score": 50.5
        },
        {
            "classRank": 35,
            "schoolRank": 84,
            "score": 48.5
        }
    ],
    "高一05班": [{
            "classRank": 1,
            "schoolRank": 6,
            "score": 87.5
        },
        {
            "classRank": 2,
            "schoolRank": 13,
            "score": 84
        },
        {
            "classRank": 3,
            "schoolRank": 14,
            "score": 83.5
        },
        {
            "classRank": 4,
            "schoolRank": 15,
            "score": 83
        },
        {
            "classRank": 5,
            "schoolRank": 16,
            "score": 82.5
        },
        {
            "classRank": 6,
            "schoolRank": 18,
            "score": 81.5
        },
        {
            "classRank": 7,
            "schoolRank": 19,
            "score": 81
        },
        {
            "classRank": 8,
            "schoolRank": 23,
            "score": 79
        },
        {
            "classRank": 9,
            "schoolRank": 31,
            "score": 75
        },
        {
            "classRank": 10,
            "schoolRank": 31,
            "score": 75
        },
        {
            "classRank": 11,
            "schoolRank": 33,
            "score": 74
        },
        {
            "classRank": 12,
            "schoolRank": 35,
            "score": 73
        },
        {
            "classRank": 13,
            "schoolRank": 36,
            "score": 72.5
        },
        {
            "classRank": 14,
            "schoolRank": 37,
            "score": 72
        },
        {
            "classRank": 15,
            "schoolRank": 37,
            "score": 72
        },
        {
            "classRank": 16,
            "schoolRank": 38,
            "score": 71.5
        },
        {
            "classRank": 17,
            "schoolRank": 42,
            "score": 69.5
        },
        {
            "classRank": 18,
            "schoolRank": 44,
            "score": 68.5
        },
        {
            "classRank": 19,
            "schoolRank": 47,
            "score": 67
        },
        {
            "classRank": 20,
            "schoolRank": 51,
            "score": 65
        },
        {
            "classRank": 21,
            "schoolRank": 54,
            "score": 63.5
        },
        {
            "classRank": 22,
            "schoolRank": 55,
            "score": 63
        },
        {
            "classRank": 23,
            "schoolRank": 55,
            "score": 63
        },
        {
            "classRank": 24,
            "schoolRank": 59,
            "score": 61
        },
        {
            "classRank": 25,
            "schoolRank": 59,
            "score": 61
        },
        {
            "classRank": 26,
            "schoolRank": 59,
            "score": 61
        },
        {
            "classRank": 27,
            "schoolRank": 60,
            "score": 60.5
        },
        {
            "classRank": 28,
            "schoolRank": 63,
            "score": 59
        },
        {
            "classRank": 29,
            "schoolRank": 69,
            "score": 56
        },
        {
            "classRank": 30,
            "schoolRank": 69,
            "score": 56
        },
        {
            "classRank": 31,
            "schoolRank": 70,
            "score": 55.5
        },
        {
            "classRank": 32,
            "schoolRank": 71,
            "score": 55
        },
        {
            "classRank": 33,
            "schoolRank": 76,
            "score": 52.5
        },
        {
            "classRank": 34,
            "schoolRank": 76,
            "score": 52.5
        },
        {
            "classRank": 35,
            "schoolRank": 78,
            "score": 51.5
        },
        {
            "classRank": 36,
            "schoolRank": 79,
            "score": 51
        },
        {
            "classRank": 37,
            "schoolRank": 85,
            "score": 48
        },
        {
            "classRank": 38,
            "schoolRank": 86,
            "score": 47.5
        }
    ],
    "高一02班": [{
            "classRank": 1,
            "schoolRank": 13,
            "score": 84
        },
        {
            "classRank": 2,
            "schoolRank": 13,
            "score": 84
        },
        {
            "classRank": 3,
            "schoolRank": 16,
            "score": 82.5
        },
        {
            "classRank": 4,
            "schoolRank": 17,
            "score": 82
        },
        {
            "classRank": 5,
            "schoolRank": 20,
            "score": 80.5
        },
        {
            "classRank": 6,
            "schoolRank": 22,
            "score": 79.5
        },
        {
            "classRank": 7,
            "schoolRank": 22,
            "score": 79.5
        },
        {
            "classRank": 8,
            "schoolRank": 25,
            "score": 78
        },
        {
            "classRank": 9,
            "schoolRank": 26,
            "score": 77.5
        },
        {
            "classRank": 10,
            "schoolRank": 27,
            "score": 77
        },
        {
            "classRank": 11,
            "schoolRank": 28,
            "score": 76.5
        },
        {
            "classRank": 12,
            "schoolRank": 28,
            "score": 76.5
        },
        {
            "classRank": 13,
            "schoolRank": 29,
            "score": 76
        },
        {
            "classRank": 14,
            "schoolRank": 31,
            "score": 75
        },
        {
            "classRank": 15,
            "schoolRank": 32,
            "score": 74.5
        },
        {
            "classRank": 16,
            "schoolRank": 33,
            "score": 74
        },
        {
            "classRank": 17,
            "schoolRank": 36,
            "score": 72.5
        },
        {
            "classRank": 18,
            "schoolRank": 38,
            "score": 71.5
        },
        {
            "classRank": 19,
            "schoolRank": 40,
            "score": 70.5
        },
        {
            "classRank": 20,
            "schoolRank": 43,
            "score": 69
        },
        {
            "classRank": 21,
            "schoolRank": 47,
            "score": 67
        },
        {
            "classRank": 22,
            "schoolRank": 48,
            "score": 66.5
        },
        {
            "classRank": 23,
            "schoolRank": 50,
            "score": 65.5
        },
        {
            "classRank": 24,
            "schoolRank": 55,
            "score": 63
        },
        {
            "classRank": 25,
            "schoolRank": 59,
            "score": 61
        },
        {
            "classRank": 26,
            "schoolRank": 62,
            "score": 59.5
        },
        {
            "classRank": 27,
            "schoolRank": 62,
            "score": 59.5
        },
        {
            "classRank": 28,
            "schoolRank": 64,
            "score": 58.5
        },
        {
            "classRank": 29,
            "schoolRank": 65,
            "score": 58
        },
        {
            "classRank": 30,
            "schoolRank": 68,
            "score": 56.5
        },
        {
            "classRank": 31,
            "schoolRank": 70,
            "score": 55.5
        },
        {
            "classRank": 32,
            "schoolRank": 72,
            "score": 54.5
        },
        {
            "classRank": 33,
            "schoolRank": 72,
            "score": 54.5
        },
        {
            "classRank": 34,
            "schoolRank": 73,
            "score": 54
        },
        {
            "classRank": 35,
            "schoolRank": 74,
            "score": 53.5
        },
        {
            "classRank": 36,
            "schoolRank": 76,
            "score": 52.5
        }
    ],
    "高一13班": [{
            "classRank": 1,
            "schoolRank": 21,
            "score": 80
        },
        {
            "classRank": 2,
            "schoolRank": 27,
            "score": 77
        },
        {
            "classRank": 3,
            "schoolRank": 29,
            "score": 76
        },
        {
            "classRank": 4,
            "schoolRank": 33,
            "score": 74
        },
        {
            "classRank": 5,
            "schoolRank": 38,
            "score": 71.5
        },
        {
            "classRank": 6,
            "schoolRank": 39,
            "score": 71
        },
        {
            "classRank": 7,
            "schoolRank": 39,
            "score": 71
        },
        {
            "classRank": 8,
            "schoolRank": 42,
            "score": 69.5
        },
        {
            "classRank": 9,
            "schoolRank": 43,
            "score": 69
        },
        {
            "classRank": 10,
            "schoolRank": 46,
            "score": 67.5
        },
        {
            "classRank": 11,
            "schoolRank": 46,
            "score": 67.5
        },
        {
            "classRank": 12,
            "schoolRank": 48,
            "score": 66.5
        },
        {
            "classRank": 13,
            "schoolRank": 48,
            "score": 66.5
        },
        {
            "classRank": 14,
            "schoolRank": 53,
            "score": 64
        },
        {
            "classRank": 15,
            "schoolRank": 54,
            "score": 63.5
        },
        {
            "classRank": 16,
            "schoolRank": 57,
            "score": 62
        },
        {
            "classRank": 17,
            "schoolRank": 57,
            "score": 62
        },
        {
            "classRank": 18,
            "schoolRank": 62,
            "score": 59.5
        },
        {
            "classRank": 19,
            "schoolRank": 67,
            "score": 57
        },
        {
            "classRank": 20,
            "schoolRank": 68,
            "score": 56.5
        },
        {
            "classRank": 21,
            "schoolRank": 71,
            "score": 55
        },
        {
            "classRank": 22,
            "schoolRank": 71,
            "score": 55
        },
        {
            "classRank": 23,
            "schoolRank": 72,
            "score": 54.5
        },
        {
            "classRank": 24,
            "schoolRank": 74,
            "score": 53.5
        },
        {
            "classRank": 25,
            "schoolRank": 74,
            "score": 53.5
        },
        {
            "classRank": 26,
            "schoolRank": 75,
            "score": 53
        },
        {
            "classRank": 27,
            "schoolRank": 75,
            "score": 53
        },
        {
            "classRank": 28,
            "schoolRank": 78,
            "score": 51.5
        },
        {
            "classRank": 29,
            "schoolRank": 81,
            "score": 50
        },
        {
            "classRank": 30,
            "schoolRank": 81,
            "score": 50
        },
        {
            "classRank": 31,
            "schoolRank": 88,
            "score": 46.5
        },
        {
            "classRank": 32,
            "schoolRank": 90,
            "score": 45.5
        },
        {
            "classRank": 33,
            "schoolRank": 91,
            "score": 45
        },
        {
            "classRank": 34,
            "schoolRank": 93,
            "score": 44
        },
        {
            "classRank": 35,
            "schoolRank": 94,
            "score": 43.5
        },
        {
            "classRank": 36,
            "schoolRank": 97,
            "score": 42
        },
        {
            "classRank": 37,
            "schoolRank": 98,
            "score": 41.5
        },
        {
            "classRank": 38,
            "schoolRank": 98,
            "score": 41.5
        },
        {
            "classRank": 39,
            "schoolRank": 103,
            "score": 38
        },
        {
            "classRank": 40,
            "schoolRank": 104,
            "score": 37.5
        },
        {
            "classRank": 41,
            "schoolRank": 104,
            "score": 37.5
        },
        {
            "classRank": 42,
            "schoolRank": 109,
            "score": 32.5
        }
    ],
    "高一03班": [{
            "classRank": 1,
            "schoolRank": 5,
            "score": 88.5
        },
        {
            "classRank": 2,
            "schoolRank": 7,
            "score": 87
        },
        {
            "classRank": 3,
            "schoolRank": 9,
            "score": 86
        },
        {
            "classRank": 4,
            "schoolRank": 13,
            "score": 84
        },
        {
            "classRank": 5,
            "schoolRank": 15,
            "score": 83
        },
        {
            "classRank": 6,
            "schoolRank": 15,
            "score": 83
        },
        {
            "classRank": 7,
            "schoolRank": 21,
            "score": 80
        },
        {
            "classRank": 8,
            "schoolRank": 21,
            "score": 80
        },
        {
            "classRank": 9,
            "schoolRank": 23,
            "score": 79
        },
        {
            "classRank": 10,
            "schoolRank": 26,
            "score": 77.5
        },
        {
            "classRank": 11,
            "schoolRank": 28,
            "score": 76.5
        },
        {
            "classRank": 12,
            "schoolRank": 29,
            "score": 76
        },
        {
            "classRank": 13,
            "schoolRank": 30,
            "score": 75.5
        },
        {
            "classRank": 14,
            "schoolRank": 32,
            "score": 74.5
        },
        {
            "classRank": 15,
            "schoolRank": 32,
            "score": 74.5
        },
        {
            "classRank": 16,
            "schoolRank": 35,
            "score": 73
        },
        {
            "classRank": 17,
            "schoolRank": 41,
            "score": 70
        },
        {
            "classRank": 18,
            "schoolRank": 41,
            "score": 70
        },
        {
            "classRank": 19,
            "schoolRank": 45,
            "score": 68
        },
        {
            "classRank": 20,
            "schoolRank": 45,
            "score": 68
        },
        {
            "classRank": 21,
            "schoolRank": 49,
            "score": 66
        },
        {
            "classRank": 22,
            "schoolRank": 51,
            "score": 65
        },
        {
            "classRank": 23,
            "schoolRank": 51,
            "score": 65
        },
        {
            "classRank": 24,
            "schoolRank": 53,
            "score": 64
        },
        {
            "classRank": 25,
            "schoolRank": 55,
            "score": 63
        },
        {
            "classRank": 26,
            "schoolRank": 55,
            "score": 63
        },
        {
            "classRank": 27,
            "schoolRank": 55,
            "score": 63
        },
        {
            "classRank": 28,
            "schoolRank": 62,
            "score": 59.5
        },
        {
            "classRank": 29,
            "schoolRank": 65,
            "score": 58
        },
        {
            "classRank": 30,
            "schoolRank": 68,
            "score": 56.5
        },
        {
            "classRank": 31,
            "schoolRank": 68,
            "score": 56.5
        },
        {
            "classRank": 32,
            "schoolRank": 70,
            "score": 55.5
        },
        {
            "classRank": 33,
            "schoolRank": 73,
            "score": 54
        },
        {
            "classRank": 34,
            "schoolRank": 77,
            "score": 52
        },
        {
            "classRank": 35,
            "schoolRank": 81,
            "score": 50
        },
        {
            "classRank": 36,
            "schoolRank": 83,
            "score": 49
        },
        {
            "classRank": 37,
            "schoolRank": 85,
            "score": 48
        }
    ]
};
var gy9 = [];
getyk(data, gy9);
setMapS1(gy9, '地理', 'm1-9');
ddb(1);

//高二第一次月考语文
data = {
    "高二01班": [{
            "classRank": 1,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 2,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 3,
            "schoolRank": 8,
            "score": 96
        },
        {
            "classRank": 4,
            "schoolRank": 9,
            "score": 95.5
        },
        {
            "classRank": 5,
            "schoolRank": 10,
            "score": 95
        },
        {
            "classRank": 6,
            "schoolRank": 16,
            "score": 92
        },
        {
            "classRank": 7,
            "schoolRank": 20,
            "score": 89.5
        },
        {
            "classRank": 8,
            "schoolRank": 25,
            "score": 87
        },
        {
            "classRank": 9,
            "schoolRank": 26,
            "score": 86.5
        },
        {
            "classRank": 10,
            "schoolRank": 28,
            "score": 85.5
        },
        {
            "classRank": 11,
            "schoolRank": 28,
            "score": 85.5
        },
        {
            "classRank": 12,
            "schoolRank": 30,
            "score": 84.5
        },
        {
            "classRank": 13,
            "schoolRank": 30,
            "score": 84.5
        },
        {
            "classRank": 14,
            "schoolRank": 35,
            "score": 82
        },
        {
            "classRank": 15,
            "schoolRank": 36,
            "score": 81.5
        },
        {
            "classRank": 16,
            "schoolRank": 46,
            "score": 76.5
        },
        {
            "classRank": 17,
            "schoolRank": 47,
            "score": 76
        },
        {
            "classRank": 18,
            "schoolRank": 48,
            "score": 75.5
        },
        {
            "classRank": 19,
            "schoolRank": 53,
            "score": 72.5
        },
        {
            "classRank": 20,
            "schoolRank": 59,
            "score": 69
        },
        {
            "classRank": 21,
            "schoolRank": 62,
            "score": 67.5
        },
        {
            "classRank": 22,
            "schoolRank": 64,
            "score": 65
        },
        {
            "classRank": 23,
            "schoolRank": 67,
            "score": 63
        },
        {
            "classRank": 24,
            "schoolRank": 70,
            "score": 60.5
        },
        {
            "classRank": 25,
            "schoolRank": 75,
            "score": 55
        },
        {
            "classRank": 26,
            "schoolRank": 80,
            "score": 133
        },
        {
            "classRank": 27,
            "schoolRank": 81,
            "score": 131
        },
        {
            "classRank": 28,
            "schoolRank": 86,
            "score": 128
        },
        {
            "classRank": 29,
            "schoolRank": 87,
            "score": 127.5
        },
        {
            "classRank": 30,
            "schoolRank": 90,
            "score": 126
        },
        {
            "classRank": 31,
            "schoolRank": 92,
            "score": 125
        },
        {
            "classRank": 32,
            "schoolRank": 97,
            "score": 122.5
        },
        {
            "classRank": 33,
            "schoolRank": 99,
            "score": 121
        },
        {
            "classRank": 34,
            "schoolRank": 99,
            "score": 121
        },
        {
            "classRank": 35,
            "schoolRank": 102,
            "score": 119.5
        },
        {
            "classRank": 36,
            "schoolRank": 106,
            "score": 117.5
        },
        {
            "classRank": 37,
            "schoolRank": 109,
            "score": 116
        },
        {
            "classRank": 38,
            "schoolRank": 109,
            "score": 116
        },
        {
            "classRank": 39,
            "schoolRank": 112,
            "score": 114.5
        },
        {
            "classRank": 40,
            "schoolRank": 114,
            "score": 113.5
        },
        {
            "classRank": 41,
            "schoolRank": 118,
            "score": 111.5
        },
        {
            "classRank": 42,
            "schoolRank": 118,
            "score": 111.5
        },
        {
            "classRank": 43,
            "schoolRank": 126,
            "score": 107.5
        },
        {
            "classRank": 44,
            "schoolRank": 127,
            "score": 107
        },
        {
            "classRank": 45,
            "schoolRank": 129,
            "score": 106
        },
        {
            "classRank": 46,
            "schoolRank": 133,
            "score": 104
        },
        {
            "classRank": 47,
            "schoolRank": 139,
            "score": 101
        },
        {
            "classRank": 48,
            "schoolRank": 140,
            "score": 100.5
        }
    ],
    "高二10班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 99.5
        },
        {
            "classRank": 2,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 3,
            "schoolRank": 12,
            "score": 94
        },
        {
            "classRank": 4,
            "schoolRank": 14,
            "score": 93
        },
        {
            "classRank": 5,
            "schoolRank": 15,
            "score": 92.5
        },
        {
            "classRank": 6,
            "schoolRank": 16,
            "score": 92
        },
        {
            "classRank": 7,
            "schoolRank": 25,
            "score": 87
        },
        {
            "classRank": 8,
            "schoolRank": 30,
            "score": 84.5
        },
        {
            "classRank": 9,
            "schoolRank": 39,
            "score": 80
        },
        {
            "classRank": 10,
            "schoolRank": 42,
            "score": 78.5
        },
        {
            "classRank": 11,
            "schoolRank": 43,
            "score": 78
        },
        {
            "classRank": 12,
            "schoolRank": 43,
            "score": 78
        },
        {
            "classRank": 13,
            "schoolRank": 44,
            "score": 77.5
        },
        {
            "classRank": 14,
            "schoolRank": 45,
            "score": 77
        },
        {
            "classRank": 15,
            "schoolRank": 45,
            "score": 77
        },
        {
            "classRank": 16,
            "schoolRank": 49,
            "score": 75
        },
        {
            "classRank": 17,
            "schoolRank": 50,
            "score": 74.5
        },
        {
            "classRank": 18,
            "schoolRank": 52,
            "score": 73
        },
        {
            "classRank": 19,
            "schoolRank": 55,
            "score": 71.5
        },
        {
            "classRank": 20,
            "schoolRank": 57,
            "score": 70
        },
        {
            "classRank": 21,
            "schoolRank": 60,
            "score": 68.5
        },
        {
            "classRank": 22,
            "schoolRank": 61,
            "score": 68
        },
        {
            "classRank": 23,
            "schoolRank": 70,
            "score": 60.5
        },
        {
            "classRank": 24,
            "schoolRank": 94,
            "score": 124
        },
        {
            "classRank": 25,
            "schoolRank": 98,
            "score": 121.5
        },
        {
            "classRank": 26,
            "schoolRank": 100,
            "score": 120.5
        },
        {
            "classRank": 27,
            "schoolRank": 102,
            "score": 119.5
        },
        {
            "classRank": 28,
            "schoolRank": 102,
            "score": 119.5
        },
        {
            "classRank": 29,
            "schoolRank": 109,
            "score": 116
        },
        {
            "classRank": 30,
            "schoolRank": 110,
            "score": 115.5
        },
        {
            "classRank": 31,
            "schoolRank": 118,
            "score": 111.5
        },
        {
            "classRank": 32,
            "schoolRank": 125,
            "score": 108
        },
        {
            "classRank": 33,
            "schoolRank": 127,
            "score": 107
        },
        {
            "classRank": 34,
            "schoolRank": 132,
            "score": 104.5
        },
        {
            "classRank": 35,
            "schoolRank": 132,
            "score": 104.5
        },
        {
            "classRank": 36,
            "schoolRank": 133,
            "score": 104
        },
        {
            "classRank": 37,
            "schoolRank": 137,
            "score": 102
        },
        {
            "classRank": 38,
            "schoolRank": 137,
            "score": 102
        },
        {
            "classRank": 39,
            "schoolRank": 138,
            "score": 101.5
        }
    ],
    "高二04班": [{
            "classRank": 1,
            "schoolRank": 3,
            "score": 98.5
        },
        {
            "classRank": 2,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 3,
            "schoolRank": 5,
            "score": 97.5
        },
        {
            "classRank": 4,
            "schoolRank": 9,
            "score": 95.5
        },
        {
            "classRank": 5,
            "schoolRank": 16,
            "score": 92
        },
        {
            "classRank": 6,
            "schoolRank": 17,
            "score": 91
        },
        {
            "classRank": 7,
            "schoolRank": 19,
            "score": 90
        },
        {
            "classRank": 8,
            "schoolRank": 19,
            "score": 90
        },
        {
            "classRank": 9,
            "schoolRank": 22,
            "score": 88.5
        },
        {
            "classRank": 10,
            "schoolRank": 28,
            "score": 85.5
        },
        {
            "classRank": 11,
            "schoolRank": 31,
            "score": 84
        },
        {
            "classRank": 12,
            "schoolRank": 31,
            "score": 84
        },
        {
            "classRank": 13,
            "schoolRank": 33,
            "score": 83
        },
        {
            "classRank": 14,
            "schoolRank": 40,
            "score": 79.5
        },
        {
            "classRank": 15,
            "schoolRank": 41,
            "score": 79
        },
        {
            "classRank": 16,
            "schoolRank": 42,
            "score": 78.5
        },
        {
            "classRank": 17,
            "schoolRank": 49,
            "score": 75
        },
        {
            "classRank": 18,
            "schoolRank": 79,
            "score": 133.5
        },
        {
            "classRank": 19,
            "schoolRank": 83,
            "score": 129.5
        },
        {
            "classRank": 20,
            "schoolRank": 89,
            "score": 126.5
        },
        {
            "classRank": 21,
            "schoolRank": 91,
            "score": 125.5
        },
        {
            "classRank": 22,
            "schoolRank": 92,
            "score": 125
        },
        {
            "classRank": 23,
            "schoolRank": 98,
            "score": 121.5
        },
        {
            "classRank": 24,
            "schoolRank": 101,
            "score": 120
        },
        {
            "classRank": 25,
            "schoolRank": 103,
            "score": 119
        },
        {
            "classRank": 26,
            "schoolRank": 105,
            "score": 118
        },
        {
            "classRank": 27,
            "schoolRank": 105,
            "score": 118
        },
        {
            "classRank": 28,
            "schoolRank": 107,
            "score": 117
        },
        {
            "classRank": 29,
            "schoolRank": 112,
            "score": 114.5
        },
        {
            "classRank": 30,
            "schoolRank": 114,
            "score": 113.5
        },
        {
            "classRank": 31,
            "schoolRank": 119,
            "score": 111
        },
        {
            "classRank": 32,
            "schoolRank": 124,
            "score": 108.5
        },
        {
            "classRank": 33,
            "schoolRank": 124,
            "score": 108.5
        },
        {
            "classRank": 34,
            "schoolRank": 130,
            "score": 105.5
        },
        {
            "classRank": 35,
            "schoolRank": 131,
            "score": 105
        },
        {
            "classRank": 36,
            "schoolRank": 138,
            "score": 101.5
        }
    ],
    "高二05班": [{
            "classRank": 1,
            "schoolRank": 2,
            "score": 99
        },
        {
            "classRank": 2,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 3,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 4,
            "schoolRank": 7,
            "score": 96.5
        },
        {
            "classRank": 5,
            "schoolRank": 8,
            "score": 96
        },
        {
            "classRank": 6,
            "schoolRank": 17,
            "score": 91
        },
        {
            "classRank": 7,
            "schoolRank": 18,
            "score": 90.5
        },
        {
            "classRank": 8,
            "schoolRank": 18,
            "score": 90.5
        },
        {
            "classRank": 9,
            "schoolRank": 24,
            "score": 87.5
        },
        {
            "classRank": 10,
            "schoolRank": 28,
            "score": 85.5
        },
        {
            "classRank": 11,
            "schoolRank": 29,
            "score": 85
        },
        {
            "classRank": 12,
            "schoolRank": 33,
            "score": 83
        },
        {
            "classRank": 13,
            "schoolRank": 36,
            "score": 81.5
        },
        {
            "classRank": 14,
            "schoolRank": 41,
            "score": 79
        },
        {
            "classRank": 15,
            "schoolRank": 47,
            "score": 76
        },
        {
            "classRank": 16,
            "schoolRank": 51,
            "score": 73.5
        },
        {
            "classRank": 17,
            "schoolRank": 53,
            "score": 72.5
        },
        {
            "classRank": 18,
            "schoolRank": 55,
            "score": 71.5
        },
        {
            "classRank": 19,
            "schoolRank": 61,
            "score": 68
        },
        {
            "classRank": 20,
            "schoolRank": 63,
            "score": 67
        },
        {
            "classRank": 21,
            "schoolRank": 64,
            "score": 65
        },
        {
            "classRank": 22,
            "schoolRank": 64,
            "score": 65
        },
        {
            "classRank": 23,
            "schoolRank": 87,
            "score": 127.5
        },
        {
            "classRank": 24,
            "schoolRank": 88,
            "score": 127
        },
        {
            "classRank": 25,
            "schoolRank": 91,
            "score": 125.5
        },
        {
            "classRank": 26,
            "schoolRank": 94,
            "score": 124
        },
        {
            "classRank": 27,
            "schoolRank": 94,
            "score": 124
        },
        {
            "classRank": 28,
            "schoolRank": 95,
            "score": 123.5
        },
        {
            "classRank": 29,
            "schoolRank": 101,
            "score": 120
        },
        {
            "classRank": 30,
            "schoolRank": 105,
            "score": 118
        },
        {
            "classRank": 31,
            "schoolRank": 108,
            "score": 116.5
        },
        {
            "classRank": 32,
            "schoolRank": 108,
            "score": 116.5
        },
        {
            "classRank": 33,
            "schoolRank": 124,
            "score": 108.5
        },
        {
            "classRank": 34,
            "schoolRank": 125,
            "score": 108
        },
        {
            "classRank": 35,
            "schoolRank": 127,
            "score": 107
        },
        {
            "classRank": 36,
            "schoolRank": 127,
            "score": 107
        },
        {
            "classRank": 37,
            "schoolRank": 128,
            "score": 106.5
        },
        {
            "classRank": 38,
            "schoolRank": 130,
            "score": 105.5
        },
        {
            "classRank": 39,
            "schoolRank": 135,
            "score": 103
        },
        {
            "classRank": 40,
            "schoolRank": 135,
            "score": 103
        },
        {
            "classRank": 41,
            "schoolRank": 137,
            "score": 102
        },
        {
            "classRank": 42,
            "schoolRank": 137,
            "score": 102
        }
    ],
    "高二02班": [{
            "classRank": 1,
            "schoolRank": 5,
            "score": 97.5
        },
        {
            "classRank": 2,
            "schoolRank": 8,
            "score": 96
        },
        {
            "classRank": 3,
            "schoolRank": 11,
            "score": 94.5
        },
        {
            "classRank": 4,
            "schoolRank": 12,
            "score": 94
        },
        {
            "classRank": 5,
            "schoolRank": 14,
            "score": 93
        },
        {
            "classRank": 6,
            "schoolRank": 15,
            "score": 92.5
        },
        {
            "classRank": 7,
            "schoolRank": 17,
            "score": 91
        },
        {
            "classRank": 8,
            "schoolRank": 21,
            "score": 89
        },
        {
            "classRank": 9,
            "schoolRank": 22,
            "score": 88.5
        },
        {
            "classRank": 10,
            "schoolRank": 26,
            "score": 86.5
        },
        {
            "classRank": 11,
            "schoolRank": 26,
            "score": 86.5
        },
        {
            "classRank": 12,
            "schoolRank": 30,
            "score": 84.5
        },
        {
            "classRank": 13,
            "schoolRank": 34,
            "score": 82.5
        },
        {
            "classRank": 14,
            "schoolRank": 36,
            "score": 81.5
        },
        {
            "classRank": 15,
            "schoolRank": 37,
            "score": 81
        },
        {
            "classRank": 16,
            "schoolRank": 43,
            "score": 78
        },
        {
            "classRank": 17,
            "schoolRank": 45,
            "score": 77
        },
        {
            "classRank": 18,
            "schoolRank": 45,
            "score": 77
        },
        {
            "classRank": 19,
            "schoolRank": 52,
            "score": 73
        },
        {
            "classRank": 20,
            "schoolRank": 53,
            "score": 72.5
        },
        {
            "classRank": 21,
            "schoolRank": 56,
            "score": 70.5
        },
        {
            "classRank": 22,
            "schoolRank": 56,
            "score": 70.5
        },
        {
            "classRank": 23,
            "schoolRank": 56,
            "score": 70.5
        },
        {
            "classRank": 24,
            "schoolRank": 57,
            "score": 70
        },
        {
            "classRank": 25,
            "schoolRank": 68,
            "score": 62.5
        },
        {
            "classRank": 26,
            "schoolRank": 69,
            "score": 61.5
        },
        {
            "classRank": 27,
            "schoolRank": 81,
            "score": 131
        },
        {
            "classRank": 28,
            "schoolRank": 82,
            "score": 130
        },
        {
            "classRank": 29,
            "schoolRank": 86,
            "score": 128
        },
        {
            "classRank": 30,
            "schoolRank": 91,
            "score": 125.5
        },
        {
            "classRank": 31,
            "schoolRank": 92,
            "score": 125
        },
        {
            "classRank": 32,
            "schoolRank": 97,
            "score": 122.5
        },
        {
            "classRank": 33,
            "schoolRank": 98,
            "score": 121.5
        },
        {
            "classRank": 34,
            "schoolRank": 102,
            "score": 119.5
        },
        {
            "classRank": 35,
            "schoolRank": 102,
            "score": 119.5
        },
        {
            "classRank": 36,
            "schoolRank": 108,
            "score": 116.5
        },
        {
            "classRank": 37,
            "schoolRank": 109,
            "score": 116
        },
        {
            "classRank": 38,
            "schoolRank": 112,
            "score": 114.5
        },
        {
            "classRank": 39,
            "schoolRank": 114,
            "score": 113.5
        },
        {
            "classRank": 40,
            "schoolRank": 115,
            "score": 113
        },
        {
            "classRank": 41,
            "schoolRank": 117,
            "score": 112
        },
        {
            "classRank": 42,
            "schoolRank": 119,
            "score": 111
        },
        {
            "classRank": 43,
            "schoolRank": 122,
            "score": 109.5
        },
        {
            "classRank": 44,
            "schoolRank": 123,
            "score": 109
        },
        {
            "classRank": 45,
            "schoolRank": 130,
            "score": 105.5
        },
        {
            "classRank": 46,
            "schoolRank": 135,
            "score": 103
        },
        {
            "classRank": 47,
            "schoolRank": 135,
            "score": 103
        }
    ],
    "高二03班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 99.5
        },
        {
            "classRank": 2,
            "schoolRank": 5,
            "score": 97.5
        },
        {
            "classRank": 3,
            "schoolRank": 11,
            "score": 94.5
        },
        {
            "classRank": 4,
            "schoolRank": 15,
            "score": 92.5
        },
        {
            "classRank": 5,
            "schoolRank": 16,
            "score": 92
        },
        {
            "classRank": 6,
            "schoolRank": 18,
            "score": 90.5
        },
        {
            "classRank": 7,
            "schoolRank": 24,
            "score": 87.5
        },
        {
            "classRank": 8,
            "schoolRank": 24,
            "score": 87.5
        },
        {
            "classRank": 9,
            "schoolRank": 24,
            "score": 87.5
        },
        {
            "classRank": 10,
            "schoolRank": 25,
            "score": 87
        },
        {
            "classRank": 11,
            "schoolRank": 26,
            "score": 86.5
        },
        {
            "classRank": 12,
            "schoolRank": 35,
            "score": 82
        },
        {
            "classRank": 13,
            "schoolRank": 38,
            "score": 80.5
        },
        {
            "classRank": 14,
            "schoolRank": 39,
            "score": 80
        },
        {
            "classRank": 15,
            "schoolRank": 42,
            "score": 78.5
        },
        {
            "classRank": 16,
            "schoolRank": 44,
            "score": 77.5
        },
        {
            "classRank": 17,
            "schoolRank": 48,
            "score": 75.5
        },
        {
            "classRank": 18,
            "schoolRank": 53,
            "score": 72.5
        },
        {
            "classRank": 19,
            "schoolRank": 61,
            "score": 68
        },
        {
            "classRank": 20,
            "schoolRank": 62,
            "score": 67.5
        },
        {
            "classRank": 21,
            "schoolRank": 65,
            "score": 64
        },
        {
            "classRank": 22,
            "schoolRank": 65,
            "score": 64
        },
        {
            "classRank": 23,
            "schoolRank": 78,
            "score": 134.5
        },
        {
            "classRank": 24,
            "schoolRank": 79,
            "score": 133.5
        },
        {
            "classRank": 25,
            "schoolRank": 83,
            "score": 129.5
        },
        {
            "classRank": 26,
            "schoolRank": 83,
            "score": 129.5
        },
        {
            "classRank": 27,
            "schoolRank": 85,
            "score": 128.5
        },
        {
            "classRank": 28,
            "schoolRank": 88,
            "score": 127
        },
        {
            "classRank": 29,
            "schoolRank": 89,
            "score": 126.5
        },
        {
            "classRank": 30,
            "schoolRank": 96,
            "score": 123
        },
        {
            "classRank": 31,
            "schoolRank": 102,
            "score": 119.5
        },
        {
            "classRank": 32,
            "schoolRank": 110,
            "score": 115.5
        },
        {
            "classRank": 33,
            "schoolRank": 113,
            "score": 114
        },
        {
            "classRank": 34,
            "schoolRank": 118,
            "score": 111.5
        },
        {
            "classRank": 35,
            "schoolRank": 119,
            "score": 111
        },
        {
            "classRank": 36,
            "schoolRank": 122,
            "score": 109.5
        },
        {
            "classRank": 37,
            "schoolRank": 125,
            "score": 108
        },
        {
            "classRank": 38,
            "schoolRank": 127,
            "score": 107
        },
        {
            "classRank": 39,
            "schoolRank": 129,
            "score": 106
        },
        {
            "classRank": 40,
            "schoolRank": 137,
            "score": 102
        },
        {
            "classRank": 41,
            "schoolRank": 139,
            "score": 101
        },
        {
            "classRank": 42,
            "schoolRank": 140,
            "score": 100.5
        }
    ],
    "高二08班": [{
            "classRank": 1,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 2,
            "schoolRank": 7,
            "score": 96.5
        },
        {
            "classRank": 3,
            "schoolRank": 8,
            "score": 96
        },
        {
            "classRank": 4,
            "schoolRank": 9,
            "score": 95.5
        },
        {
            "classRank": 5,
            "schoolRank": 13,
            "score": 93.5
        },
        {
            "classRank": 6,
            "schoolRank": 14,
            "score": 93
        },
        {
            "classRank": 7,
            "schoolRank": 14,
            "score": 93
        },
        {
            "classRank": 8,
            "schoolRank": 21,
            "score": 89
        },
        {
            "classRank": 9,
            "schoolRank": 27,
            "score": 86
        },
        {
            "classRank": 10,
            "schoolRank": 32,
            "score": 83.5
        },
        {
            "classRank": 11,
            "schoolRank": 35,
            "score": 82
        },
        {
            "classRank": 12,
            "schoolRank": 41,
            "score": 79
        },
        {
            "classRank": 13,
            "schoolRank": 45,
            "score": 77
        },
        {
            "classRank": 14,
            "schoolRank": 48,
            "score": 75.5
        },
        {
            "classRank": 15,
            "schoolRank": 48,
            "score": 75.5
        },
        {
            "classRank": 16,
            "schoolRank": 49,
            "score": 75
        },
        {
            "classRank": 17,
            "schoolRank": 50,
            "score": 74.5
        },
        {
            "classRank": 18,
            "schoolRank": 52,
            "score": 73
        },
        {
            "classRank": 19,
            "schoolRank": 53,
            "score": 72.5
        },
        {
            "classRank": 20,
            "schoolRank": 87,
            "score": 127.5
        },
        {
            "classRank": 21,
            "schoolRank": 91,
            "score": 125.5
        },
        {
            "classRank": 22,
            "schoolRank": 94,
            "score": 124
        },
        {
            "classRank": 23,
            "schoolRank": 98,
            "score": 121.5
        },
        {
            "classRank": 24,
            "schoolRank": 108,
            "score": 116.5
        },
        {
            "classRank": 25,
            "schoolRank": 110,
            "score": 115.5
        },
        {
            "classRank": 26,
            "schoolRank": 111,
            "score": 115
        },
        {
            "classRank": 27,
            "schoolRank": 114,
            "score": 113.5
        },
        {
            "classRank": 28,
            "schoolRank": 123,
            "score": 109
        },
        {
            "classRank": 29,
            "schoolRank": 125,
            "score": 108
        },
        {
            "classRank": 30,
            "schoolRank": 126,
            "score": 107.5
        },
        {
            "classRank": 31,
            "schoolRank": 126,
            "score": 107.5
        },
        {
            "classRank": 32,
            "schoolRank": 136,
            "score": 102.5
        },
        {
            "classRank": 33,
            "schoolRank": 137,
            "score": 102
        },
        {
            "classRank": 34,
            "schoolRank": 137,
            "score": 102
        },
        {
            "classRank": 35,
            "schoolRank": 140,
            "score": 100.5
        }
    ],
    "高二09班": [{
            "classRank": 1,
            "schoolRank": 3,
            "score": 98.5
        },
        {
            "classRank": 2,
            "schoolRank": 7,
            "score": 96.5
        },
        {
            "classRank": 3,
            "schoolRank": 8,
            "score": 96
        },
        {
            "classRank": 4,
            "schoolRank": 9,
            "score": 95.5
        },
        {
            "classRank": 5,
            "schoolRank": 12,
            "score": 94
        },
        {
            "classRank": 6,
            "schoolRank": 20,
            "score": 89.5
        },
        {
            "classRank": 7,
            "schoolRank": 21,
            "score": 89
        },
        {
            "classRank": 8,
            "schoolRank": 23,
            "score": 88
        },
        {
            "classRank": 9,
            "schoolRank": 28,
            "score": 85.5
        },
        {
            "classRank": 10,
            "schoolRank": 29,
            "score": 85
        },
        {
            "classRank": 11,
            "schoolRank": 30,
            "score": 84.5
        },
        {
            "classRank": 12,
            "schoolRank": 31,
            "score": 84
        },
        {
            "classRank": 13,
            "schoolRank": 35,
            "score": 82
        },
        {
            "classRank": 14,
            "schoolRank": 41,
            "score": 79
        },
        {
            "classRank": 15,
            "schoolRank": 42,
            "score": 78.5
        },
        {
            "classRank": 16,
            "schoolRank": 45,
            "score": 77
        },
        {
            "classRank": 17,
            "schoolRank": 49,
            "score": 75
        },
        {
            "classRank": 18,
            "schoolRank": 50,
            "score": 74.5
        },
        {
            "classRank": 19,
            "schoolRank": 51,
            "score": 73.5
        },
        {
            "classRank": 20,
            "schoolRank": 58,
            "score": 69.5
        },
        {
            "classRank": 21,
            "schoolRank": 60,
            "score": 68.5
        },
        {
            "classRank": 22,
            "schoolRank": 62,
            "score": 67.5
        },
        {
            "classRank": 23,
            "schoolRank": 66,
            "score": 63.5
        },
        {
            "classRank": 24,
            "schoolRank": 66,
            "score": 63.5
        },
        {
            "classRank": 25,
            "schoolRank": 69,
            "score": 61.5
        },
        {
            "classRank": 26,
            "schoolRank": 69,
            "score": 61.5
        },
        {
            "classRank": 27,
            "schoolRank": 72,
            "score": 58
        },
        {
            "classRank": 28,
            "schoolRank": 72,
            "score": 58
        },
        {
            "classRank": 29,
            "schoolRank": 73,
            "score": 57.5
        },
        {
            "classRank": 30,
            "schoolRank": 73,
            "score": 57.5
        },
        {
            "classRank": 31,
            "schoolRank": 74,
            "score": 56
        },
        {
            "classRank": 32,
            "schoolRank": 76,
            "score": 51.5
        },
        {
            "classRank": 33,
            "schoolRank": 77,
            "score": 33.5
        },
        {
            "classRank": 34,
            "schoolRank": 88,
            "score": 127
        },
        {
            "classRank": 35,
            "schoolRank": 103,
            "score": 119
        },
        {
            "classRank": 36,
            "schoolRank": 108,
            "score": 116.5
        },
        {
            "classRank": 37,
            "schoolRank": 108,
            "score": 116.5
        },
        {
            "classRank": 38,
            "schoolRank": 108,
            "score": 116.5
        },
        {
            "classRank": 39,
            "schoolRank": 109,
            "score": 116
        },
        {
            "classRank": 40,
            "schoolRank": 110,
            "score": 115.5
        },
        {
            "classRank": 41,
            "schoolRank": 116,
            "score": 112.5
        },
        {
            "classRank": 42,
            "schoolRank": 128,
            "score": 106.5
        },
        {
            "classRank": 43,
            "schoolRank": 130,
            "score": 105.5
        },
        {
            "classRank": 44,
            "schoolRank": 132,
            "score": 104.5
        },
        {
            "classRank": 45,
            "schoolRank": 134,
            "score": 103.5
        },
        {
            "classRank": 46,
            "schoolRank": 135,
            "score": 103
        },
        {
            "classRank": 47,
            "schoolRank": 136,
            "score": 102.5
        },
        {
            "classRank": 48,
            "schoolRank": 139,
            "score": 101
        }
    ],
    "高二06班": [{
            "classRank": 1,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 2,
            "schoolRank": 5,
            "score": 97.5
        },
        {
            "classRank": 3,
            "schoolRank": 7,
            "score": 96.5
        },
        {
            "classRank": 4,
            "schoolRank": 12,
            "score": 94
        },
        {
            "classRank": 5,
            "schoolRank": 12,
            "score": 94
        },
        {
            "classRank": 6,
            "schoolRank": 13,
            "score": 93.5
        },
        {
            "classRank": 7,
            "schoolRank": 17,
            "score": 91
        },
        {
            "classRank": 8,
            "schoolRank": 21,
            "score": 89
        },
        {
            "classRank": 9,
            "schoolRank": 30,
            "score": 84.5
        },
        {
            "classRank": 10,
            "schoolRank": 32,
            "score": 83.5
        },
        {
            "classRank": 11,
            "schoolRank": 34,
            "score": 82.5
        },
        {
            "classRank": 12,
            "schoolRank": 40,
            "score": 79.5
        },
        {
            "classRank": 13,
            "schoolRank": 41,
            "score": 79
        },
        {
            "classRank": 14,
            "schoolRank": 42,
            "score": 78.5
        },
        {
            "classRank": 15,
            "schoolRank": 42,
            "score": 78.5
        },
        {
            "classRank": 16,
            "schoolRank": 47,
            "score": 76
        },
        {
            "classRank": 17,
            "schoolRank": 50,
            "score": 74.5
        },
        {
            "classRank": 18,
            "schoolRank": 54,
            "score": 72
        },
        {
            "classRank": 19,
            "schoolRank": 57,
            "score": 70
        },
        {
            "classRank": 20,
            "schoolRank": 60,
            "score": 68.5
        },
        {
            "classRank": 21,
            "schoolRank": 62,
            "score": 67.5
        },
        {
            "classRank": 22,
            "schoolRank": 63,
            "score": 67
        },
        {
            "classRank": 23,
            "schoolRank": 63,
            "score": 67
        },
        {
            "classRank": 24,
            "schoolRank": 66,
            "score": 63.5
        },
        {
            "classRank": 25,
            "schoolRank": 67,
            "score": 63
        },
        {
            "classRank": 26,
            "schoolRank": 69,
            "score": 61.5
        },
        {
            "classRank": 27,
            "schoolRank": 71,
            "score": 59
        },
        {
            "classRank": 28,
            "schoolRank": 84,
            "score": 129
        },
        {
            "classRank": 29,
            "schoolRank": 87,
            "score": 127.5
        },
        {
            "classRank": 30,
            "schoolRank": 90,
            "score": 126
        },
        {
            "classRank": 31,
            "schoolRank": 91,
            "score": 125.5
        },
        {
            "classRank": 32,
            "schoolRank": 98,
            "score": 121.5
        },
        {
            "classRank": 33,
            "schoolRank": 104,
            "score": 118.5
        },
        {
            "classRank": 34,
            "schoolRank": 107,
            "score": 117
        },
        {
            "classRank": 35,
            "schoolRank": 112,
            "score": 114.5
        },
        {
            "classRank": 36,
            "schoolRank": 117,
            "score": 112
        },
        {
            "classRank": 37,
            "schoolRank": 121,
            "score": 110
        },
        {
            "classRank": 38,
            "schoolRank": 122,
            "score": 109.5
        },
        {
            "classRank": 39,
            "schoolRank": 123,
            "score": 109
        },
        {
            "classRank": 40,
            "schoolRank": 125,
            "score": 108
        },
        {
            "classRank": 41,
            "schoolRank": 130,
            "score": 105.5
        },
        {
            "classRank": 42,
            "schoolRank": 137,
            "score": 102
        },
        {
            "classRank": 43,
            "schoolRank": 138,
            "score": 101.5
        },
        {
            "classRank": 44,
            "schoolRank": 139,
            "score": 101
        },
        {
            "classRank": 45,
            "schoolRank": 139,
            "score": 101
        }
    ],
    "高二07班": [{
            "classRank": 1,
            "schoolRank": 3,
            "score": 98.5
        },
        {
            "classRank": 2,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 3,
            "schoolRank": 8,
            "score": 96
        },
        {
            "classRank": 4,
            "schoolRank": 9,
            "score": 95.5
        },
        {
            "classRank": 5,
            "schoolRank": 12,
            "score": 94
        },
        {
            "classRank": 6,
            "schoolRank": 15,
            "score": 92.5
        },
        {
            "classRank": 7,
            "schoolRank": 16,
            "score": 92
        },
        {
            "classRank": 8,
            "schoolRank": 17,
            "score": 91
        },
        {
            "classRank": 9,
            "schoolRank": 18,
            "score": 90.5
        },
        {
            "classRank": 10,
            "schoolRank": 21,
            "score": 89
        },
        {
            "classRank": 11,
            "schoolRank": 26,
            "score": 86.5
        },
        {
            "classRank": 12,
            "schoolRank": 28,
            "score": 85.5
        },
        {
            "classRank": 13,
            "schoolRank": 30,
            "score": 84.5
        },
        {
            "classRank": 14,
            "schoolRank": 42,
            "score": 78.5
        },
        {
            "classRank": 15,
            "schoolRank": 43,
            "score": 78
        },
        {
            "classRank": 16,
            "schoolRank": 48,
            "score": 75.5
        },
        {
            "classRank": 17,
            "schoolRank": 49,
            "score": 75
        },
        {
            "classRank": 18,
            "schoolRank": 54,
            "score": 72
        },
        {
            "classRank": 19,
            "schoolRank": 58,
            "score": 69.5
        },
        {
            "classRank": 20,
            "schoolRank": 60,
            "score": 68.5
        },
        {
            "classRank": 21,
            "schoolRank": 62,
            "score": 67.5
        },
        {
            "classRank": 22,
            "schoolRank": 93,
            "score": 124.5
        },
        {
            "classRank": 23,
            "schoolRank": 94,
            "score": 124
        },
        {
            "classRank": 24,
            "schoolRank": 98,
            "score": 121.5
        },
        {
            "classRank": 25,
            "schoolRank": 104,
            "score": 118.5
        },
        {
            "classRank": 26,
            "schoolRank": 106,
            "score": 117.5
        },
        {
            "classRank": 27,
            "schoolRank": 108,
            "score": 116.5
        },
        {
            "classRank": 28,
            "schoolRank": 110,
            "score": 115.5
        },
        {
            "classRank": 29,
            "schoolRank": 112,
            "score": 114.5
        },
        {
            "classRank": 30,
            "schoolRank": 116,
            "score": 112.5
        },
        {
            "classRank": 31,
            "schoolRank": 120,
            "score": 110.5
        },
        {
            "classRank": 32,
            "schoolRank": 123,
            "score": 109
        },
        {
            "classRank": 33,
            "schoolRank": 124,
            "score": 108.5
        },
        {
            "classRank": 34,
            "schoolRank": 129,
            "score": 106
        },
        {
            "classRank": 35,
            "schoolRank": 136,
            "score": 102.5
        },
        {
            "classRank": 36,
            "schoolRank": 139,
            "score": 101
        },
        {
            "classRank": 37,
            "schoolRank": 139,
            "score": 101
        }
    ]
}
//高二语文
var ge1 = [];
getyk(data, ge1);

//放置高二语文图形

setMapS2(ge1, '语文', 'm2-1');
data={
"高二01班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 99
},
{
"classRank": 2,
"schoolRank": 6,
"score": 97
},
{
"classRank": 3,
"schoolRank": 13,
"score": 93
},
{
"classRank": 4,
"schoolRank": 17,
"score": 91
},
{
"classRank": 5,
"schoolRank": 18,
"score": 90.5
},
{
"classRank": 6,
"schoolRank": 19,
"score": 89.5
},
{
"classRank": 7,
"schoolRank": 20,
"score": 89
},
{
"classRank": 8,
"schoolRank": 26,
"score": 86
},
{
"classRank": 9,
"schoolRank": 29,
"score": 84.5
},
{
"classRank": 10,
"schoolRank": 35,
"score": 81.5
},
{
"classRank": 11,
"schoolRank": 36,
"score": 81
},
{
"classRank": 12,
"schoolRank": 37,
"score": 80.5
},
{
"classRank": 13,
"schoolRank": 38,
"score": 80
},
{
"classRank": 14,
"schoolRank": 40,
"score": 79
},
{
"classRank": 15,
"schoolRank": 44,
"score": 77
},
{
"classRank": 16,
"schoolRank": 46,
"score": 76
},
{
"classRank": 17,
"schoolRank": 47,
"score": 75.5
},
{
"classRank": 18,
"schoolRank": 48,
"score": 75
},
{
"classRank": 19,
"schoolRank": 55,
"score": 71
},
{
"classRank": 20,
"schoolRank": 56,
"score": 70.5
},
{
"classRank": 21,
"schoolRank": 60,
"score": 68.5
},
{
"classRank": 22,
"schoolRank": 63,
"score": 66.5
},
{
"classRank": 23,
"schoolRank": 69,
"score": 63.5
},
{
"classRank": 24,
"schoolRank": 70,
"score": 62.5
},
{
"classRank": 25,
"schoolRank": 71,
"score": 62
},
{
"classRank": 26,
"schoolRank": 82,
"score": 136.5
},
{
"classRank": 27,
"schoolRank": 84,
"score": 132
},
{
"classRank": 28,
"schoolRank": 85,
"score": 131.5
},
{
"classRank": 29,
"schoolRank": 86,
"score": 131
},
{
"classRank": 30,
"schoolRank": 88,
"score": 130
},
{
"classRank": 31,
"schoolRank": 95,
"score": 125.5
},
{
"classRank": 32,
"schoolRank": 97,
"score": 124.5
},
{
"classRank": 33,
"schoolRank": 104,
"score": 121
},
{
"classRank": 34,
"schoolRank": 105,
"score": 120.5
},
{
"classRank": 35,
"schoolRank": 107,
"score": 119.5
},
{
"classRank": 36,
"schoolRank": 108,
"score": 119
},
{
"classRank": 37,
"schoolRank": 109,
"score": 118.5
},
{
"classRank": 38,
"schoolRank": 113,
"score": 115.5
},
{
"classRank": 39,
"schoolRank": 117,
"score": 113.5
},
{
"classRank": 40,
"schoolRank": 121,
"score": 111.5
},
{
"classRank": 41,
"schoolRank": 124,
"score": 109.5
},
{
"classRank": 42,
"schoolRank": 126,
"score": 108.5
},
{
"classRank": 43,
"schoolRank": 128,
"score": 107.5
},
{
"classRank": 44,
"schoolRank": 128,
"score": 107.5
},
{
"classRank": 45,
"schoolRank": 133,
"score": 105
},
{
"classRank": 46,
"schoolRank": 136,
"score": 103.5
},
{
"classRank": 47,
"schoolRank": 139,
"score": 102
},
{
"classRank": 48,
"schoolRank": 141,
"score": 101
}
],
"高二10班": [
{
"classRank": 1,
"schoolRank": 3,
"score": 98.5
},
{
"classRank": 2,
"schoolRank": 4,
"score": 98
},
{
"classRank": 3,
"schoolRank": 5,
"score": 97.5
},
{
"classRank": 4,
"schoolRank": 7,
"score": 96
},
{
"classRank": 5,
"schoolRank": 14,
"score": 92.5
},
{
"classRank": 6,
"schoolRank": 15,
"score": 92
},
{
"classRank": 7,
"schoolRank": 19,
"score": 89.5
},
{
"classRank": 8,
"schoolRank": 21,
"score": 88.5
},
{
"classRank": 9,
"schoolRank": 23,
"score": 87.5
},
{
"classRank": 10,
"schoolRank": 24,
"score": 87
},
{
"classRank": 11,
"schoolRank": 31,
"score": 83.5
},
{
"classRank": 12,
"schoolRank": 34,
"score": 82
},
{
"classRank": 13,
"schoolRank": 35,
"score": 81.5
},
{
"classRank": 14,
"schoolRank": 37,
"score": 80.5
},
{
"classRank": 15,
"schoolRank": 38,
"score": 80
},
{
"classRank": 16,
"schoolRank": 41,
"score": 78.5
},
{
"classRank": 17,
"schoolRank": 48,
"score": 75
},
{
"classRank": 18,
"schoolRank": 54,
"score": 71.5
},
{
"classRank": 19,
"schoolRank": 56,
"score": 70.5
},
{
"classRank": 20,
"schoolRank": 57,
"score": 70
},
{
"classRank": 21,
"schoolRank": 58,
"score": 69.5
},
{
"classRank": 22,
"schoolRank": 59,
"score": 69
},
{
"classRank": 23,
"schoolRank": 60,
"score": 68.5
},
{
"classRank": 24,
"schoolRank": 64,
"score": 66
},
{
"classRank": 25,
"schoolRank": 69,
"score": 63.5
},
{
"classRank": 26,
"schoolRank": 75,
"score": 56.5
},
{
"classRank": 27,
"schoolRank": 102,
"score": 122
},
{
"classRank": 28,
"schoolRank": 111,
"score": 117
},
{
"classRank": 29,
"schoolRank": 112,
"score": 116.5
},
{
"classRank": 30,
"schoolRank": 115,
"score": 114.5
},
{
"classRank": 31,
"schoolRank": 117,
"score": 113.5
},
{
"classRank": 32,
"schoolRank": 118,
"score": 113
},
{
"classRank": 33,
"schoolRank": 122,
"score": 110.5
},
{
"classRank": 34,
"schoolRank": 125,
"score": 109
},
{
"classRank": 35,
"schoolRank": 128,
"score": 107.5
},
{
"classRank": 36,
"schoolRank": 130,
"score": 106.5
},
{
"classRank": 37,
"schoolRank": 133,
"score": 105
},
{
"classRank": 38,
"schoolRank": 136,
"score": 103.5
},
{
"classRank": 39,
"schoolRank": 137,
"score": 103
}
],
"高二04班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 99
},
{
"classRank": 2,
"schoolRank": 4,
"score": 98
},
{
"classRank": 3,
"schoolRank": 5,
"score": 97.5
},
{
"classRank": 4,
"schoolRank": 9,
"score": 95
},
{
"classRank": 5,
"schoolRank": 11,
"score": 94
},
{
"classRank": 6,
"schoolRank": 14,
"score": 92.5
},
{
"classRank": 7,
"schoolRank": 18,
"score": 90.5
},
{
"classRank": 8,
"schoolRank": 22,
"score": 88
},
{
"classRank": 9,
"schoolRank": 25,
"score": 86.5
},
{
"classRank": 10,
"schoolRank": 27,
"score": 85.5
},
{
"classRank": 11,
"schoolRank": 27,
"score": 85.5
},
{
"classRank": 12,
"schoolRank": 28,
"score": 85
},
{
"classRank": 13,
"schoolRank": 30,
"score": 84
},
{
"classRank": 14,
"schoolRank": 34,
"score": 82
},
{
"classRank": 15,
"schoolRank": 34,
"score": 82
},
{
"classRank": 16,
"schoolRank": 35,
"score": 81.5
},
{
"classRank": 17,
"schoolRank": 46,
"score": 76
},
{
"classRank": 18,
"schoolRank": 89,
"score": 129.5
},
{
"classRank": 19,
"schoolRank": 96,
"score": 125
},
{
"classRank": 20,
"schoolRank": 99,
"score": 123.5
},
{
"classRank": 21,
"schoolRank": 101,
"score": 122.5
},
{
"classRank": 22,
"schoolRank": 105,
"score": 120.5
},
{
"classRank": 23,
"schoolRank": 106,
"score": 120
},
{
"classRank": 24,
"schoolRank": 110,
"score": 118
},
{
"classRank": 25,
"schoolRank": 111,
"score": 117
},
{
"classRank": 26,
"schoolRank": 113,
"score": 115.5
},
{
"classRank": 27,
"schoolRank": 116,
"score": 114
},
{
"classRank": 28,
"schoolRank": 120,
"score": 112
},
{
"classRank": 29,
"schoolRank": 122,
"score": 110.5
},
{
"classRank": 30,
"schoolRank": 127,
"score": 108
},
{
"classRank": 31,
"schoolRank": 130,
"score": 106.5
},
{
"classRank": 32,
"schoolRank": 132,
"score": 105.5
},
{
"classRank": 33,
"schoolRank": 134,
"score": 104.5
},
{
"classRank": 34,
"schoolRank": 137,
"score": 103
},
{
"classRank": 35,
"schoolRank": 138,
"score": 102.5
},
{
"classRank": 36,
"schoolRank": 143,
"score": 100
}
],
"高二05班": [
{
"classRank": 1,
"schoolRank": 3,
"score": 98.5
},
{
"classRank": 2,
"schoolRank": 7,
"score": 96
},
{
"classRank": 3,
"schoolRank": 8,
"score": 95.5
},
{
"classRank": 4,
"schoolRank": 14,
"score": 92.5
},
{
"classRank": 5,
"schoolRank": 19,
"score": 89.5
},
{
"classRank": 6,
"schoolRank": 19,
"score": 89.5
},
{
"classRank": 7,
"schoolRank": 22,
"score": 88
},
{
"classRank": 8,
"schoolRank": 23,
"score": 87.5
},
{
"classRank": 9,
"schoolRank": 23,
"score": 87.5
},
{
"classRank": 10,
"schoolRank": 29,
"score": 84.5
},
{
"classRank": 11,
"schoolRank": 31,
"score": 83.5
},
{
"classRank": 12,
"schoolRank": 32,
"score": 83
},
{
"classRank": 13,
"schoolRank": 39,
"score": 79.5
},
{
"classRank": 14,
"schoolRank": 44,
"score": 77
},
{
"classRank": 15,
"schoolRank": 45,
"score": 76.5
},
{
"classRank": 16,
"schoolRank": 52,
"score": 73
},
{
"classRank": 17,
"schoolRank": 54,
"score": 71.5
},
{
"classRank": 18,
"schoolRank": 54,
"score": 71.5
},
{
"classRank": 19,
"schoolRank": 61,
"score": 68
},
{
"classRank": 20,
"schoolRank": 64,
"score": 66
},
{
"classRank": 21,
"schoolRank": 65,
"score": 65.5
},
{
"classRank": 22,
"schoolRank": 89,
"score": 129.5
},
{
"classRank": 23,
"schoolRank": 89,
"score": 129.5
},
{
"classRank": 24,
"schoolRank": 93,
"score": 126.5
},
{
"classRank": 25,
"schoolRank": 97,
"score": 124.5
},
{
"classRank": 26,
"schoolRank": 100,
"score": 123
},
{
"classRank": 27,
"schoolRank": 102,
"score": 122
},
{
"classRank": 28,
"schoolRank": 104,
"score": 121
},
{
"classRank": 29,
"schoolRank": 106,
"score": 120
},
{
"classRank": 30,
"schoolRank": 114,
"score": 115
},
{
"classRank": 31,
"schoolRank": 120,
"score": 112
},
{
"classRank": 32,
"schoolRank": 122,
"score": 110.5
},
{
"classRank": 33,
"schoolRank": 122,
"score": 110.5
},
{
"classRank": 34,
"schoolRank": 124,
"score": 109.5
},
{
"classRank": 35,
"schoolRank": 125,
"score": 109
},
{
"classRank": 36,
"schoolRank": 126,
"score": 108.5
},
{
"classRank": 37,
"schoolRank": 129,
"score": 107
},
{
"classRank": 38,
"schoolRank": 133,
"score": 105
},
{
"classRank": 39,
"schoolRank": 135,
"score": 104
},
{
"classRank": 40,
"schoolRank": 138,
"score": 102.5
},
{
"classRank": 41,
"schoolRank": 140,
"score": 101.5
},
{
"classRank": 42,
"schoolRank": 142,
"score": 100.5
}
],
"高二02班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 99.5
},
{
"classRank": 2,
"schoolRank": 5,
"score": 97.5
},
{
"classRank": 3,
"schoolRank": 10,
"score": 94.5
},
{
"classRank": 4,
"schoolRank": 14,
"score": 92.5
},
{
"classRank": 5,
"schoolRank": 16,
"score": 91.5
},
{
"classRank": 6,
"schoolRank": 17,
"score": 91
},
{
"classRank": 7,
"schoolRank": 18,
"score": 90.5
},
{
"classRank": 8,
"schoolRank": 18,
"score": 90.5
},
{
"classRank": 9,
"schoolRank": 33,
"score": 82.5
},
{
"classRank": 10,
"schoolRank": 35,
"score": 81.5
},
{
"classRank": 11,
"schoolRank": 41,
"score": 78.5
},
{
"classRank": 12,
"schoolRank": 45,
"score": 76.5
},
{
"classRank": 13,
"schoolRank": 47,
"score": 75.5
},
{
"classRank": 14,
"schoolRank": 49,
"score": 74.5
},
{
"classRank": 15,
"schoolRank": 52,
"score": 73
},
{
"classRank": 16,
"schoolRank": 59,
"score": 69
},
{
"classRank": 17,
"schoolRank": 59,
"score": 69
},
{
"classRank": 18,
"schoolRank": 59,
"score": 69
},
{
"classRank": 19,
"schoolRank": 62,
"score": 67.5
},
{
"classRank": 20,
"schoolRank": 63,
"score": 66.5
},
{
"classRank": 21,
"schoolRank": 65,
"score": 65.5
},
{
"classRank": 22,
"schoolRank": 66,
"score": 65
},
{
"classRank": 23,
"schoolRank": 68,
"score": 64
},
{
"classRank": 24,
"schoolRank": 83,
"score": 132.5
},
{
"classRank": 25,
"schoolRank": 87,
"score": 130.5
},
{
"classRank": 26,
"schoolRank": 90,
"score": 128
},
{
"classRank": 27,
"schoolRank": 91,
"score": 127.5
},
{
"classRank": 28,
"schoolRank": 95,
"score": 125.5
},
{
"classRank": 29,
"schoolRank": 103,
"score": 121.5
},
{
"classRank": 30,
"schoolRank": 104,
"score": 121
},
{
"classRank": 31,
"schoolRank": 105,
"score": 120.5
},
{
"classRank": 32,
"schoolRank": 105,
"score": 120.5
},
{
"classRank": 33,
"schoolRank": 108,
"score": 119
},
{
"classRank": 34,
"schoolRank": 112,
"score": 116.5
},
{
"classRank": 35,
"schoolRank": 113,
"score": 115.5
},
{
"classRank": 36,
"schoolRank": 114,
"score": 115
},
{
"classRank": 37,
"schoolRank": 115,
"score": 114.5
},
{
"classRank": 38,
"schoolRank": 117,
"score": 113.5
},
{
"classRank": 39,
"schoolRank": 121,
"score": 111.5
},
{
"classRank": 40,
"schoolRank": 124,
"score": 109.5
},
{
"classRank": 41,
"schoolRank": 125,
"score": 109
},
{
"classRank": 42,
"schoolRank": 128,
"score": 107.5
},
{
"classRank": 43,
"schoolRank": 129,
"score": 107
},
{
"classRank": 44,
"schoolRank": 136,
"score": 103.5
},
{
"classRank": 45,
"schoolRank": 137,
"score": 103
},
{
"classRank": 46,
"schoolRank": 141,
"score": 101
},
{
"classRank": 47,
"schoolRank": 143,
"score": 100
}
],
"高二03班": [
{
"classRank": 1,
"schoolRank": 8,
"score": 95.5
},
{
"classRank": 2,
"schoolRank": 9,
"score": 95
},
{
"classRank": 3,
"schoolRank": 10,
"score": 94.5
},
{
"classRank": 4,
"schoolRank": 14,
"score": 92.5
},
{
"classRank": 5,
"schoolRank": 15,
"score": 92
},
{
"classRank": 6,
"schoolRank": 16,
"score": 91.5
},
{
"classRank": 7,
"schoolRank": 17,
"score": 91
},
{
"classRank": 8,
"schoolRank": 20,
"score": 89
},
{
"classRank": 9,
"schoolRank": 23,
"score": 87.5
},
{
"classRank": 10,
"schoolRank": 25,
"score": 86.5
},
{
"classRank": 11,
"schoolRank": 26,
"score": 86
},
{
"classRank": 12,
"schoolRank": 30,
"score": 84
},
{
"classRank": 13,
"schoolRank": 33,
"score": 82.5
},
{
"classRank": 14,
"schoolRank": 35,
"score": 81.5
},
{
"classRank": 15,
"schoolRank": 38,
"score": 80
},
{
"classRank": 16,
"schoolRank": 41,
"score": 78.5
},
{
"classRank": 17,
"schoolRank": 43,
"score": 77.5
},
{
"classRank": 18,
"schoolRank": 54,
"score": 71.5
},
{
"classRank": 19,
"schoolRank": 61,
"score": 68
},
{
"classRank": 20,
"schoolRank": 61,
"score": 68
},
{
"classRank": 21,
"schoolRank": 62,
"score": 67.5
},
{
"classRank": 22,
"schoolRank": 81,
"score": 137
},
{
"classRank": 23,
"schoolRank": 94,
"score": 126
},
{
"classRank": 24,
"schoolRank": 94,
"score": 126
},
{
"classRank": 25,
"schoolRank": 98,
"score": 124
},
{
"classRank": 26,
"schoolRank": 101,
"score": 122.5
},
{
"classRank": 27,
"schoolRank": 105,
"score": 120.5
},
{
"classRank": 28,
"schoolRank": 107,
"score": 119.5
},
{
"classRank": 29,
"schoolRank": 109,
"score": 118.5
},
{
"classRank": 30,
"schoolRank": 109,
"score": 118.5
},
{
"classRank": 31,
"schoolRank": 109,
"score": 118.5
},
{
"classRank": 32,
"schoolRank": 114,
"score": 115
},
{
"classRank": 33,
"schoolRank": 116,
"score": 114
},
{
"classRank": 34,
"schoolRank": 119,
"score": 112.5
},
{
"classRank": 35,
"schoolRank": 121,
"score": 111.5
},
{
"classRank": 36,
"schoolRank": 126,
"score": 108.5
},
{
"classRank": 37,
"schoolRank": 128,
"score": 107.5
},
{
"classRank": 38,
"schoolRank": 131,
"score": 106
},
{
"classRank": 39,
"schoolRank": 132,
"score": 105.5
},
{
"classRank": 40,
"schoolRank": 134,
"score": 104.5
},
{
"classRank": 41,
"schoolRank": 137,
"score": 103
},
{
"classRank": 42,
"schoolRank": 140,
"score": 101.5
}
],
"高二08班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 99.5
},
{
"classRank": 2,
"schoolRank": 7,
"score": 96
},
{
"classRank": 3,
"schoolRank": 11,
"score": 94
},
{
"classRank": 4,
"schoolRank": 19,
"score": 89.5
},
{
"classRank": 5,
"schoolRank": 20,
"score": 89
},
{
"classRank": 6,
"schoolRank": 20,
"score": 89
},
{
"classRank": 7,
"schoolRank": 20,
"score": 89
},
{
"classRank": 8,
"schoolRank": 26,
"score": 86
},
{
"classRank": 9,
"schoolRank": 27,
"score": 85.5
},
{
"classRank": 10,
"schoolRank": 29,
"score": 84.5
},
{
"classRank": 11,
"schoolRank": 31,
"score": 83.5
},
{
"classRank": 12,
"schoolRank": 32,
"score": 83
},
{
"classRank": 13,
"schoolRank": 38,
"score": 80
},
{
"classRank": 14,
"schoolRank": 38,
"score": 80
},
{
"classRank": 15,
"schoolRank": 40,
"score": 79
},
{
"classRank": 16,
"schoolRank": 42,
"score": 78
},
{
"classRank": 17,
"schoolRank": 43,
"score": 77.5
},
{
"classRank": 18,
"schoolRank": 60,
"score": 68.5
},
{
"classRank": 19,
"schoolRank": 88,
"score": 130
},
{
"classRank": 20,
"schoolRank": 101,
"score": 122.5
},
{
"classRank": 21,
"schoolRank": 104,
"score": 121
},
{
"classRank": 22,
"schoolRank": 107,
"score": 119.5
},
{
"classRank": 23,
"schoolRank": 108,
"score": 119
},
{
"classRank": 24,
"schoolRank": 108,
"score": 119
},
{
"classRank": 25,
"schoolRank": 113,
"score": 115.5
},
{
"classRank": 26,
"schoolRank": 114,
"score": 115
},
{
"classRank": 27,
"schoolRank": 120,
"score": 112
},
{
"classRank": 28,
"schoolRank": 122,
"score": 110.5
},
{
"classRank": 29,
"schoolRank": 127,
"score": 108
},
{
"classRank": 30,
"schoolRank": 129,
"score": 107
},
{
"classRank": 31,
"schoolRank": 129,
"score": 107
},
{
"classRank": 32,
"schoolRank": 138,
"score": 102.5
},
{
"classRank": 33,
"schoolRank": 139,
"score": 102
},
{
"classRank": 34,
"schoolRank": 140,
"score": 101.5
},
{
"classRank": 35,
"schoolRank": 143,
"score": 100
}
],
"高二09班": [
{
"classRank": 1,
"schoolRank": 4,
"score": 98
},
{
"classRank": 2,
"schoolRank": 4,
"score": 98
},
{
"classRank": 3,
"schoolRank": 5,
"score": 97.5
},
{
"classRank": 4,
"schoolRank": 8,
"score": 95.5
},
{
"classRank": 5,
"schoolRank": 9,
"score": 95
},
{
"classRank": 6,
"schoolRank": 9,
"score": 95
},
{
"classRank": 7,
"schoolRank": 14,
"score": 92.5
},
{
"classRank": 8,
"schoolRank": 20,
"score": 89
},
{
"classRank": 9,
"schoolRank": 21,
"score": 88.5
},
{
"classRank": 10,
"schoolRank": 22,
"score": 88
},
{
"classRank": 11,
"schoolRank": 26,
"score": 86
},
{
"classRank": 12,
"schoolRank": 26,
"score": 86
},
{
"classRank": 13,
"schoolRank": 29,
"score": 84.5
},
{
"classRank": 14,
"schoolRank": 32,
"score": 83
},
{
"classRank": 15,
"schoolRank": 34,
"score": 82
},
{
"classRank": 16,
"schoolRank": 37,
"score": 80.5
},
{
"classRank": 17,
"schoolRank": 43,
"score": 77.5
},
{
"classRank": 18,
"schoolRank": 46,
"score": 76
},
{
"classRank": 19,
"schoolRank": 48,
"score": 75
},
{
"classRank": 20,
"schoolRank": 50,
"score": 74
},
{
"classRank": 21,
"schoolRank": 53,
"score": 72
},
{
"classRank": 22,
"schoolRank": 59,
"score": 69
},
{
"classRank": 23,
"schoolRank": 60,
"score": 68.5
},
{
"classRank": 24,
"schoolRank": 69,
"score": 63.5
},
{
"classRank": 25,
"schoolRank": 70,
"score": 62.5
},
{
"classRank": 26,
"schoolRank": 71,
"score": 62
},
{
"classRank": 27,
"schoolRank": 73,
"score": 60.5
},
{
"classRank": 28,
"schoolRank": 74,
"score": 57.5
},
{
"classRank": 29,
"schoolRank": 75,
"score": 56.5
},
{
"classRank": 30,
"schoolRank": 76,
"score": 56
},
{
"classRank": 31,
"schoolRank": 77,
"score": 55
},
{
"classRank": 32,
"schoolRank": 78,
"score": 54
},
{
"classRank": 33,
"schoolRank": 78,
"score": 54
},
{
"classRank": 34,
"schoolRank": 79,
"score": 53.5
},
{
"classRank": 35,
"schoolRank": 80,
"score": 48
},
{
"classRank": 36,
"schoolRank": 92,
"score": 127
},
{
"classRank": 37,
"schoolRank": 102,
"score": 122
},
{
"classRank": 38,
"schoolRank": 106,
"score": 120
},
{
"classRank": 39,
"schoolRank": 109,
"score": 118.5
},
{
"classRank": 40,
"schoolRank": 111,
"score": 117
},
{
"classRank": 41,
"schoolRank": 112,
"score": 116.5
},
{
"classRank": 42,
"schoolRank": 112,
"score": 116.5
},
{
"classRank": 43,
"schoolRank": 118,
"score": 113
},
{
"classRank": 44,
"schoolRank": 124,
"score": 109.5
},
{
"classRank": 45,
"schoolRank": 125,
"score": 109
},
{
"classRank": 46,
"schoolRank": 137,
"score": 103
},
{
"classRank": 47,
"schoolRank": 137,
"score": 103
},
{
"classRank": 48,
"schoolRank": 140,
"score": 101.5
}
],
"高二06班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 99.5
},
{
"classRank": 2,
"schoolRank": 3,
"score": 98.5
},
{
"classRank": 3,
"schoolRank": 5,
"score": 97.5
},
{
"classRank": 4,
"schoolRank": 12,
"score": 93.5
},
{
"classRank": 5,
"schoolRank": 13,
"score": 93
},
{
"classRank": 6,
"schoolRank": 16,
"score": 91.5
},
{
"classRank": 7,
"schoolRank": 18,
"score": 90.5
},
{
"classRank": 8,
"schoolRank": 18,
"score": 90.5
},
{
"classRank": 9,
"schoolRank": 20,
"score": 89
},
{
"classRank": 10,
"schoolRank": 22,
"score": 88
},
{
"classRank": 11,
"schoolRank": 23,
"score": 87.5
},
{
"classRank": 12,
"schoolRank": 23,
"score": 87.5
},
{
"classRank": 13,
"schoolRank": 23,
"score": 87.5
},
{
"classRank": 14,
"schoolRank": 40,
"score": 79
},
{
"classRank": 15,
"schoolRank": 41,
"score": 78.5
},
{
"classRank": 16,
"schoolRank": 42,
"score": 78
},
{
"classRank": 17,
"schoolRank": 44,
"score": 77
},
{
"classRank": 18,
"schoolRank": 48,
"score": 75
},
{
"classRank": 19,
"schoolRank": 50,
"score": 74
},
{
"classRank": 20,
"schoolRank": 51,
"score": 73.5
},
{
"classRank": 21,
"schoolRank": 55,
"score": 71
},
{
"classRank": 22,
"schoolRank": 57,
"score": 70
},
{
"classRank": 23,
"schoolRank": 59,
"score": 69
},
{
"classRank": 24,
"schoolRank": 65,
"score": 65.5
},
{
"classRank": 25,
"schoolRank": 67,
"score": 64.5
},
{
"classRank": 26,
"schoolRank": 72,
"score": 61
},
{
"classRank": 27,
"schoolRank": 72,
"score": 61
},
{
"classRank": 28,
"schoolRank": 73,
"score": 60.5
},
{
"classRank": 29,
"schoolRank": 93,
"score": 126.5
},
{
"classRank": 30,
"schoolRank": 93,
"score": 126.5
},
{
"classRank": 31,
"schoolRank": 101,
"score": 122.5
},
{
"classRank": 32,
"schoolRank": 105,
"score": 120.5
},
{
"classRank": 33,
"schoolRank": 107,
"score": 119.5
},
{
"classRank": 34,
"schoolRank": 113,
"score": 115.5
},
{
"classRank": 35,
"schoolRank": 117,
"score": 113.5
},
{
"classRank": 36,
"schoolRank": 120,
"score": 112
},
{
"classRank": 37,
"schoolRank": 123,
"score": 110
},
{
"classRank": 38,
"schoolRank": 126,
"score": 108.5
},
{
"classRank": 39,
"schoolRank": 126,
"score": 108.5
},
{
"classRank": 40,
"schoolRank": 130,
"score": 106.5
},
{
"classRank": 41,
"schoolRank": 131,
"score": 106
},
{
"classRank": 42,
"schoolRank": 132,
"score": 105.5
},
{
"classRank": 43,
"schoolRank": 133,
"score": 105
},
{
"classRank": 44,
"schoolRank": 135,
"score": 104
},
{
"classRank": 45,
"schoolRank": 136,
"score": 103.5
}
],
"高二07班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 99
},
{
"classRank": 2,
"schoolRank": 4,
"score": 98
},
{
"classRank": 3,
"schoolRank": 4,
"score": 98
},
{
"classRank": 4,
"schoolRank": 6,
"score": 97
},
{
"classRank": 5,
"schoolRank": 7,
"score": 96
},
{
"classRank": 6,
"schoolRank": 13,
"score": 93
},
{
"classRank": 7,
"schoolRank": 16,
"score": 91.5
},
{
"classRank": 8,
"schoolRank": 21,
"score": 88.5
},
{
"classRank": 9,
"schoolRank": 22,
"score": 88
},
{
"classRank": 10,
"schoolRank": 26,
"score": 86
},
{
"classRank": 11,
"schoolRank": 33,
"score": 82.5
},
{
"classRank": 12,
"schoolRank": 34,
"score": 82
},
{
"classRank": 13,
"schoolRank": 42,
"score": 78
},
{
"classRank": 14,
"schoolRank": 42,
"score": 78
},
{
"classRank": 15,
"schoolRank": 42,
"score": 78
},
{
"classRank": 16,
"schoolRank": 45,
"score": 76.5
},
{
"classRank": 17,
"schoolRank": 46,
"score": 76
},
{
"classRank": 18,
"schoolRank": 49,
"score": 74.5
},
{
"classRank": 19,
"schoolRank": 52,
"score": 73
},
{
"classRank": 20,
"schoolRank": 53,
"score": 72
},
{
"classRank": 21,
"schoolRank": 58,
"score": 69.5
},
{
"classRank": 22,
"schoolRank": 98,
"score": 124
},
{
"classRank": 23,
"schoolRank": 99,
"score": 123.5
},
{
"classRank": 24,
"schoolRank": 106,
"score": 120
},
{
"classRank": 25,
"schoolRank": 107,
"score": 119.5
},
{
"classRank": 26,
"schoolRank": 108,
"score": 119
},
{
"classRank": 27,
"schoolRank": 114,
"score": 115
},
{
"classRank": 28,
"schoolRank": 116,
"score": 114
},
{
"classRank": 29,
"schoolRank": 117,
"score": 113.5
},
{
"classRank": 30,
"schoolRank": 117,
"score": 113.5
},
{
"classRank": 31,
"schoolRank": 120,
"score": 112
},
{
"classRank": 32,
"schoolRank": 125,
"score": 109
},
{
"classRank": 33,
"schoolRank": 127,
"score": 108
},
{
"classRank": 34,
"schoolRank": 127,
"score": 108
},
{
"classRank": 35,
"schoolRank": 132,
"score": 105.5
},
{
"classRank": 36,
"schoolRank": 137,
"score": 103
},
{
"classRank": 37,
"schoolRank": 142,
"score": 100.5
}
]
};
var ge2 = [];
getyk(data, ge2);
setMapS2(ge2, '数学', 'm2-2');
data={
"高二01班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 99.5
},
{
"classRank": 2,
"schoolRank": 1,
"score": 99.5
},
{
"classRank": 3,
"schoolRank": 5,
"score": 97.5
},
{
"classRank": 4,
"schoolRank": 9,
"score": 95.5
},
{
"classRank": 5,
"schoolRank": 11,
"score": 94.5
},
{
"classRank": 6,
"schoolRank": 15,
"score": 92.5
},
{
"classRank": 7,
"schoolRank": 19,
"score": 90.5
},
{
"classRank": 8,
"schoolRank": 21,
"score": 89.5
},
{
"classRank": 9,
"schoolRank": 22,
"score": 89
},
{
"classRank": 10,
"schoolRank": 24,
"score": 88
},
{
"classRank": 11,
"schoolRank": 26,
"score": 87
},
{
"classRank": 12,
"schoolRank": 29,
"score": 85.5
},
{
"classRank": 13,
"schoolRank": 30,
"score": 85
},
{
"classRank": 14,
"schoolRank": 32,
"score": 84
},
{
"classRank": 15,
"schoolRank": 32,
"score": 84
},
{
"classRank": 16,
"schoolRank": 40,
"score": 80
},
{
"classRank": 17,
"schoolRank": 44,
"score": 78
},
{
"classRank": 18,
"schoolRank": 52,
"score": 74
},
{
"classRank": 19,
"schoolRank": 53,
"score": 73.5
},
{
"classRank": 20,
"schoolRank": 54,
"score": 73
},
{
"classRank": 21,
"schoolRank": 58,
"score": 71
},
{
"classRank": 22,
"schoolRank": 65,
"score": 67.5
},
{
"classRank": 23,
"schoolRank": 70,
"score": 64.5
},
{
"classRank": 24,
"schoolRank": 70,
"score": 64.5
},
{
"classRank": 25,
"schoolRank": 81,
"score": 53
},
{
"classRank": 26,
"schoolRank": 84,
"score": 132
},
{
"classRank": 27,
"schoolRank": 87,
"score": 129.5
},
{
"classRank": 28,
"schoolRank": 92,
"score": 126
},
{
"classRank": 29,
"schoolRank": 95,
"score": 124.5
},
{
"classRank": 30,
"schoolRank": 98,
"score": 123
},
{
"classRank": 31,
"schoolRank": 100,
"score": 122
},
{
"classRank": 32,
"schoolRank": 101,
"score": 121.5
},
{
"classRank": 33,
"schoolRank": 101,
"score": 121.5
},
{
"classRank": 34,
"schoolRank": 103,
"score": 120.5
},
{
"classRank": 35,
"schoolRank": 104,
"score": 120
},
{
"classRank": 36,
"schoolRank": 104,
"score": 120
},
{
"classRank": 37,
"schoolRank": 105,
"score": 119.5
},
{
"classRank": 38,
"schoolRank": 107,
"score": 118.5
},
{
"classRank": 39,
"schoolRank": 110,
"score": 117
},
{
"classRank": 40,
"schoolRank": 113,
"score": 115
},
{
"classRank": 41,
"schoolRank": 124,
"score": 109.5
},
{
"classRank": 42,
"schoolRank": 126,
"score": 108
},
{
"classRank": 43,
"schoolRank": 127,
"score": 107.5
},
{
"classRank": 44,
"schoolRank": 128,
"score": 107
},
{
"classRank": 45,
"schoolRank": 129,
"score": 106.5
},
{
"classRank": 46,
"schoolRank": 141,
"score": 100.5
},
{
"classRank": 47,
"schoolRank": 142,
"score": 100
},
{
"classRank": 48,
"schoolRank": 142,
"score": 100
}
],
"高二10班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 99
},
{
"classRank": 2,
"schoolRank": 4,
"score": 98
},
{
"classRank": 3,
"schoolRank": 4,
"score": 98
},
{
"classRank": 4,
"schoolRank": 8,
"score": 96
},
{
"classRank": 5,
"schoolRank": 12,
"score": 94
},
{
"classRank": 6,
"schoolRank": 14,
"score": 93
},
{
"classRank": 7,
"schoolRank": 17,
"score": 91.5
},
{
"classRank": 8,
"schoolRank": 20,
"score": 90
},
{
"classRank": 9,
"schoolRank": 24,
"score": 88
},
{
"classRank": 10,
"schoolRank": 26,
"score": 87
},
{
"classRank": 11,
"schoolRank": 28,
"score": 86
},
{
"classRank": 12,
"schoolRank": 34,
"score": 83
},
{
"classRank": 13,
"schoolRank": 34,
"score": 83
},
{
"classRank": 14,
"schoolRank": 35,
"score": 82.5
},
{
"classRank": 15,
"schoolRank": 35,
"score": 82.5
},
{
"classRank": 16,
"schoolRank": 35,
"score": 82.5
},
{
"classRank": 17,
"schoolRank": 37,
"score": 81.5
},
{
"classRank": 18,
"schoolRank": 45,
"score": 77.5
},
{
"classRank": 19,
"schoolRank": 48,
"score": 76
},
{
"classRank": 20,
"schoolRank": 56,
"score": 72
},
{
"classRank": 21,
"schoolRank": 58,
"score": 71
},
{
"classRank": 22,
"schoolRank": 64,
"score": 68
},
{
"classRank": 23,
"schoolRank": 64,
"score": 68
},
{
"classRank": 24,
"schoolRank": 67,
"score": 66
},
{
"classRank": 25,
"schoolRank": 69,
"score": 65
},
{
"classRank": 26,
"schoolRank": 76,
"score": 59.5
},
{
"classRank": 27,
"schoolRank": 97,
"score": 123.5
},
{
"classRank": 28,
"schoolRank": 101,
"score": 121.5
},
{
"classRank": 29,
"schoolRank": 103,
"score": 120.5
},
{
"classRank": 30,
"schoolRank": 114,
"score": 114.5
},
{
"classRank": 31,
"schoolRank": 115,
"score": 114
},
{
"classRank": 32,
"schoolRank": 120,
"score": 111.5
},
{
"classRank": 33,
"schoolRank": 124,
"score": 109.5
},
{
"classRank": 34,
"schoolRank": 127,
"score": 107.5
},
{
"classRank": 35,
"schoolRank": 130,
"score": 106
},
{
"classRank": 36,
"schoolRank": 131,
"score": 105.5
},
{
"classRank": 37,
"schoolRank": 133,
"score": 104.5
},
{
"classRank": 38,
"schoolRank": 134,
"score": 104
},
{
"classRank": 39,
"schoolRank": 140,
"score": 101
}
],
"高二04班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 99
},
{
"classRank": 2,
"schoolRank": 3,
"score": 98.5
},
{
"classRank": 3,
"schoolRank": 10,
"score": 95
},
{
"classRank": 4,
"schoolRank": 13,
"score": 93.5
},
{
"classRank": 5,
"schoolRank": 13,
"score": 93.5
},
{
"classRank": 6,
"schoolRank": 15,
"score": 92.5
},
{
"classRank": 7,
"schoolRank": 16,
"score": 92
},
{
"classRank": 8,
"schoolRank": 20,
"score": 90
},
{
"classRank": 9,
"schoolRank": 28,
"score": 86
},
{
"classRank": 10,
"schoolRank": 29,
"score": 85.5
},
{
"classRank": 11,
"schoolRank": 38,
"score": 81
},
{
"classRank": 12,
"schoolRank": 38,
"score": 81
},
{
"classRank": 13,
"schoolRank": 43,
"score": 78.5
},
{
"classRank": 14,
"schoolRank": 50,
"score": 75
},
{
"classRank": 15,
"schoolRank": 55,
"score": 72.5
},
{
"classRank": 16,
"schoolRank": 87,
"score": 129.5
},
{
"classRank": 17,
"schoolRank": 88,
"score": 129
},
{
"classRank": 18,
"schoolRank": 93,
"score": 125.5
},
{
"classRank": 19,
"schoolRank": 96,
"score": 124
},
{
"classRank": 20,
"schoolRank": 98,
"score": 123
},
{
"classRank": 21,
"schoolRank": 104,
"score": 120
},
{
"classRank": 22,
"schoolRank": 105,
"score": 119.5
},
{
"classRank": 23,
"schoolRank": 106,
"score": 119
},
{
"classRank": 24,
"schoolRank": 108,
"score": 118
},
{
"classRank": 25,
"schoolRank": 111,
"score": 116.5
},
{
"classRank": 26,
"schoolRank": 112,
"score": 115.5
},
{
"classRank": 27,
"schoolRank": 113,
"score": 115
},
{
"classRank": 28,
"schoolRank": 119,
"score": 112
},
{
"classRank": 29,
"schoolRank": 124,
"score": 109.5
},
{
"classRank": 30,
"schoolRank": 125,
"score": 109
},
{
"classRank": 31,
"schoolRank": 134,
"score": 104
},
{
"classRank": 32,
"schoolRank": 134,
"score": 104
},
{
"classRank": 33,
"schoolRank": 136,
"score": 103
},
{
"classRank": 34,
"schoolRank": 139,
"score": 101.5
},
{
"classRank": 35,
"schoolRank": 140,
"score": 101
},
{
"classRank": 36,
"schoolRank": 141,
"score": 100.5
}
],
"高二05班": [
{
"classRank": 1,
"schoolRank": 4,
"score": 98
},
{
"classRank": 2,
"schoolRank": 13,
"score": 93.5
},
{
"classRank": 3,
"schoolRank": 15,
"score": 92.5
},
{
"classRank": 4,
"schoolRank": 16,
"score": 92
},
{
"classRank": 5,
"schoolRank": 17,
"score": 91.5
},
{
"classRank": 6,
"schoolRank": 17,
"score": 91.5
},
{
"classRank": 7,
"schoolRank": 18,
"score": 91
},
{
"classRank": 8,
"schoolRank": 19,
"score": 90.5
},
{
"classRank": 9,
"schoolRank": 19,
"score": 90.5
},
{
"classRank": 10,
"schoolRank": 29,
"score": 85.5
},
{
"classRank": 11,
"schoolRank": 31,
"score": 84.5
},
{
"classRank": 12,
"schoolRank": 33,
"score": 83.5
},
{
"classRank": 13,
"schoolRank": 38,
"score": 81
},
{
"classRank": 14,
"schoolRank": 41,
"score": 79.5
},
{
"classRank": 15,
"schoolRank": 42,
"score": 79
},
{
"classRank": 16,
"schoolRank": 46,
"score": 77
},
{
"classRank": 17,
"schoolRank": 47,
"score": 76.5
},
{
"classRank": 18,
"schoolRank": 48,
"score": 76
},
{
"classRank": 19,
"schoolRank": 53,
"score": 73.5
},
{
"classRank": 20,
"schoolRank": 53,
"score": 73.5
},
{
"classRank": 21,
"schoolRank": 54,
"score": 73
},
{
"classRank": 22,
"schoolRank": 62,
"score": 69
},
{
"classRank": 23,
"schoolRank": 63,
"score": 68.5
},
{
"classRank": 24,
"schoolRank": 88,
"score": 129
},
{
"classRank": 25,
"schoolRank": 89,
"score": 128.5
},
{
"classRank": 26,
"schoolRank": 91,
"score": 126.5
},
{
"classRank": 27,
"schoolRank": 94,
"score": 125
},
{
"classRank": 28,
"schoolRank": 103,
"score": 120.5
},
{
"classRank": 29,
"schoolRank": 103,
"score": 120.5
},
{
"classRank": 30,
"schoolRank": 104,
"score": 120
},
{
"classRank": 31,
"schoolRank": 113,
"score": 115
},
{
"classRank": 32,
"schoolRank": 114,
"score": 114.5
},
{
"classRank": 33,
"schoolRank": 116,
"score": 113.5
},
{
"classRank": 34,
"schoolRank": 117,
"score": 113
},
{
"classRank": 35,
"schoolRank": 119,
"score": 112
},
{
"classRank": 36,
"schoolRank": 124,
"score": 109.5
},
{
"classRank": 37,
"schoolRank": 125,
"score": 109
},
{
"classRank": 38,
"schoolRank": 126,
"score": 108
},
{
"classRank": 39,
"schoolRank": 127,
"score": 107.5
},
{
"classRank": 40,
"schoolRank": 134,
"score": 104
},
{
"classRank": 41,
"schoolRank": 139,
"score": 101.5
},
{
"classRank": 42,
"schoolRank": 140,
"score": 101
}
],
"高二02班": [
{
"classRank": 1,
"schoolRank": 4,
"score": 98
},
{
"classRank": 2,
"schoolRank": 6,
"score": 97
},
{
"classRank": 3,
"schoolRank": 9,
"score": 95.5
},
{
"classRank": 4,
"schoolRank": 10,
"score": 95
},
{
"classRank": 5,
"schoolRank": 16,
"score": 92
},
{
"classRank": 6,
"schoolRank": 20,
"score": 90
},
{
"classRank": 7,
"schoolRank": 23,
"score": 88.5
},
{
"classRank": 8,
"schoolRank": 24,
"score": 88
},
{
"classRank": 9,
"schoolRank": 26,
"score": 87
},
{
"classRank": 10,
"schoolRank": 32,
"score": 84
},
{
"classRank": 11,
"schoolRank": 36,
"score": 82
},
{
"classRank": 12,
"schoolRank": 36,
"score": 82
},
{
"classRank": 13,
"schoolRank": 37,
"score": 81.5
},
{
"classRank": 14,
"schoolRank": 41,
"score": 79.5
},
{
"classRank": 15,
"schoolRank": 42,
"score": 79
},
{
"classRank": 16,
"schoolRank": 44,
"score": 78
},
{
"classRank": 17,
"schoolRank": 46,
"score": 77
},
{
"classRank": 18,
"schoolRank": 47,
"score": 76.5
},
{
"classRank": 19,
"schoolRank": 50,
"score": 75
},
{
"classRank": 20,
"schoolRank": 54,
"score": 73
},
{
"classRank": 21,
"schoolRank": 57,
"score": 71.5
},
{
"classRank": 22,
"schoolRank": 58,
"score": 71
},
{
"classRank": 23,
"schoolRank": 65,
"score": 67.5
},
{
"classRank": 24,
"schoolRank": 66,
"score": 67
},
{
"classRank": 25,
"schoolRank": 70,
"score": 64.5
},
{
"classRank": 26,
"schoolRank": 84,
"score": 132
},
{
"classRank": 27,
"schoolRank": 86,
"score": 131
},
{
"classRank": 28,
"schoolRank": 88,
"score": 129
},
{
"classRank": 29,
"schoolRank": 92,
"score": 126
},
{
"classRank": 30,
"schoolRank": 93,
"score": 125.5
},
{
"classRank": 31,
"schoolRank": 98,
"score": 123
},
{
"classRank": 32,
"schoolRank": 101,
"score": 121.5
},
{
"classRank": 33,
"schoolRank": 105,
"score": 119.5
},
{
"classRank": 34,
"schoolRank": 109,
"score": 117.5
},
{
"classRank": 35,
"schoolRank": 115,
"score": 114
},
{
"classRank": 36,
"schoolRank": 118,
"score": 112.5
},
{
"classRank": 37,
"schoolRank": 118,
"score": 112.5
},
{
"classRank": 38,
"schoolRank": 120,
"score": 111.5
},
{
"classRank": 39,
"schoolRank": 121,
"score": 111
},
{
"classRank": 40,
"schoolRank": 122,
"score": 110.5
},
{
"classRank": 41,
"schoolRank": 122,
"score": 110.5
},
{
"classRank": 42,
"schoolRank": 123,
"score": 110
},
{
"classRank": 43,
"schoolRank": 123,
"score": 110
},
{
"classRank": 44,
"schoolRank": 125,
"score": 109
},
{
"classRank": 45,
"schoolRank": 128,
"score": 107
},
{
"classRank": 46,
"schoolRank": 128,
"score": 107
},
{
"classRank": 47,
"schoolRank": 134,
"score": 104
}
],
"高二03班": [
{
"classRank": 1,
"schoolRank": 3,
"score": 98.5
},
{
"classRank": 2,
"schoolRank": 3,
"score": 98.5
},
{
"classRank": 3,
"schoolRank": 5,
"score": 97.5
},
{
"classRank": 4,
"schoolRank": 7,
"score": 96.5
},
{
"classRank": 5,
"schoolRank": 8,
"score": 96
},
{
"classRank": 6,
"schoolRank": 18,
"score": 91
},
{
"classRank": 7,
"schoolRank": 20,
"score": 90
},
{
"classRank": 8,
"schoolRank": 20,
"score": 90
},
{
"classRank": 9,
"schoolRank": 23,
"score": 88.5
},
{
"classRank": 10,
"schoolRank": 27,
"score": 86.5
},
{
"classRank": 11,
"schoolRank": 27,
"score": 86.5
},
{
"classRank": 12,
"schoolRank": 28,
"score": 86
},
{
"classRank": 13,
"schoolRank": 31,
"score": 84.5
},
{
"classRank": 14,
"schoolRank": 35,
"score": 82.5
},
{
"classRank": 15,
"schoolRank": 35,
"score": 82.5
},
{
"classRank": 16,
"schoolRank": 37,
"score": 81.5
},
{
"classRank": 17,
"schoolRank": 48,
"score": 76
},
{
"classRank": 18,
"schoolRank": 49,
"score": 75.5
},
{
"classRank": 19,
"schoolRank": 52,
"score": 74
},
{
"classRank": 20,
"schoolRank": 57,
"score": 71.5
},
{
"classRank": 21,
"schoolRank": 64,
"score": 68
},
{
"classRank": 22,
"schoolRank": 69,
"score": 65
},
{
"classRank": 23,
"schoolRank": 85,
"score": 131.5
},
{
"classRank": 24,
"schoolRank": 90,
"score": 127.5
},
{
"classRank": 25,
"schoolRank": 96,
"score": 124
},
{
"classRank": 26,
"schoolRank": 99,
"score": 122.5
},
{
"classRank": 27,
"schoolRank": 100,
"score": 122
},
{
"classRank": 28,
"schoolRank": 100,
"score": 122
},
{
"classRank": 29,
"schoolRank": 101,
"score": 121.5
},
{
"classRank": 30,
"schoolRank": 102,
"score": 121
},
{
"classRank": 31,
"schoolRank": 102,
"score": 121
},
{
"classRank": 32,
"schoolRank": 107,
"score": 118.5
},
{
"classRank": 33,
"schoolRank": 119,
"score": 112
},
{
"classRank": 34,
"schoolRank": 120,
"score": 111.5
},
{
"classRank": 35,
"schoolRank": 122,
"score": 110.5
},
{
"classRank": 36,
"schoolRank": 124,
"score": 109.5
},
{
"classRank": 37,
"schoolRank": 125,
"score": 109
},
{
"classRank": 38,
"schoolRank": 125,
"score": 109
},
{
"classRank": 39,
"schoolRank": 128,
"score": 107
},
{
"classRank": 40,
"schoolRank": 134,
"score": 104
},
{
"classRank": 41,
"schoolRank": 136,
"score": 103
},
{
"classRank": 42,
"schoolRank": 141,
"score": 100.5
}
],
"高二08班": [
{
"classRank": 1,
"schoolRank": 9,
"score": 95.5
},
{
"classRank": 2,
"schoolRank": 10,
"score": 95
},
{
"classRank": 3,
"schoolRank": 11,
"score": 94.5
},
{
"classRank": 4,
"schoolRank": 13,
"score": 93.5
},
{
"classRank": 5,
"schoolRank": 13,
"score": 93.5
},
{
"classRank": 6,
"schoolRank": 17,
"score": 91.5
},
{
"classRank": 7,
"schoolRank": 18,
"score": 91
},
{
"classRank": 8,
"schoolRank": 18,
"score": 91
},
{
"classRank": 9,
"schoolRank": 22,
"score": 89
},
{
"classRank": 10,
"schoolRank": 27,
"score": 86.5
},
{
"classRank": 11,
"schoolRank": 31,
"score": 84.5
},
{
"classRank": 12,
"schoolRank": 39,
"score": 80.5
},
{
"classRank": 13,
"schoolRank": 41,
"score": 79.5
},
{
"classRank": 14,
"schoolRank": 44,
"score": 78
},
{
"classRank": 15,
"schoolRank": 45,
"score": 77.5
},
{
"classRank": 16,
"schoolRank": 47,
"score": 76.5
},
{
"classRank": 17,
"schoolRank": 51,
"score": 74.5
},
{
"classRank": 18,
"schoolRank": 52,
"score": 74
},
{
"classRank": 19,
"schoolRank": 57,
"score": 71.5
},
{
"classRank": 20,
"schoolRank": 87,
"score": 129.5
},
{
"classRank": 21,
"schoolRank": 104,
"score": 120
},
{
"classRank": 22,
"schoolRank": 104,
"score": 120
},
{
"classRank": 23,
"schoolRank": 110,
"score": 117
},
{
"classRank": 24,
"schoolRank": 113,
"score": 115
},
{
"classRank": 25,
"schoolRank": 114,
"score": 114.5
},
{
"classRank": 26,
"schoolRank": 115,
"score": 114
},
{
"classRank": 27,
"schoolRank": 116,
"score": 113.5
},
{
"classRank": 28,
"schoolRank": 120,
"score": 111.5
},
{
"classRank": 29,
"schoolRank": 132,
"score": 105
},
{
"classRank": 30,
"schoolRank": 134,
"score": 104
},
{
"classRank": 31,
"schoolRank": 136,
"score": 103
},
{
"classRank": 32,
"schoolRank": 137,
"score": 102.5
},
{
"classRank": 33,
"schoolRank": 139,
"score": 101.5
},
{
"classRank": 34,
"schoolRank": 140,
"score": 101
},
{
"classRank": 35,
"schoolRank": 142,
"score": 100
}
],
"高二09班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 99
},
{
"classRank": 2,
"schoolRank": 3,
"score": 98.5
},
{
"classRank": 3,
"schoolRank": 15,
"score": 92.5
},
{
"classRank": 4,
"schoolRank": 20,
"score": 90
},
{
"classRank": 5,
"schoolRank": 26,
"score": 87
},
{
"classRank": 6,
"schoolRank": 26,
"score": 87
},
{
"classRank": 7,
"schoolRank": 30,
"score": 85
},
{
"classRank": 8,
"schoolRank": 32,
"score": 84
},
{
"classRank": 9,
"schoolRank": 36,
"score": 82
},
{
"classRank": 10,
"schoolRank": 38,
"score": 81
},
{
"classRank": 11,
"schoolRank": 38,
"score": 81
},
{
"classRank": 12,
"schoolRank": 39,
"score": 80.5
},
{
"classRank": 13,
"schoolRank": 45,
"score": 77.5
},
{
"classRank": 14,
"schoolRank": 49,
"score": 75.5
},
{
"classRank": 15,
"schoolRank": 50,
"score": 75
},
{
"classRank": 16,
"schoolRank": 55,
"score": 72.5
},
{
"classRank": 17,
"schoolRank": 58,
"score": 71
},
{
"classRank": 18,
"schoolRank": 59,
"score": 70.5
},
{
"classRank": 19,
"schoolRank": 59,
"score": 70.5
},
{
"classRank": 20,
"schoolRank": 61,
"score": 69.5
},
{
"classRank": 21,
"schoolRank": 64,
"score": 68
},
{
"classRank": 22,
"schoolRank": 69,
"score": 65
},
{
"classRank": 23,
"schoolRank": 71,
"score": 64
},
{
"classRank": 24,
"schoolRank": 74,
"score": 62
},
{
"classRank": 25,
"schoolRank": 75,
"score": 61.5
},
{
"classRank": 26,
"schoolRank": 77,
"score": 59
},
{
"classRank": 27,
"schoolRank": 78,
"score": 58
},
{
"classRank": 28,
"schoolRank": 79,
"score": 55
},
{
"classRank": 29,
"schoolRank": 80,
"score": 53.5
},
{
"classRank": 30,
"schoolRank": 81,
"score": 53
},
{
"classRank": 31,
"schoolRank": 82,
"score": 52
},
{
"classRank": 32,
"schoolRank": 83,
"score": 49
},
{
"classRank": 33,
"schoolRank": 84,
"score": 132
},
{
"classRank": 34,
"schoolRank": 98,
"score": 123
},
{
"classRank": 35,
"schoolRank": 105,
"score": 119.5
},
{
"classRank": 36,
"schoolRank": 106,
"score": 119
},
{
"classRank": 37,
"schoolRank": 109,
"score": 117.5
},
{
"classRank": 38,
"schoolRank": 110,
"score": 117
},
{
"classRank": 39,
"schoolRank": 119,
"score": 112
},
{
"classRank": 40,
"schoolRank": 121,
"score": 111
},
{
"classRank": 41,
"schoolRank": 124,
"score": 109.5
},
{
"classRank": 42,
"schoolRank": 125,
"score": 109
},
{
"classRank": 43,
"schoolRank": 125,
"score": 109
},
{
"classRank": 44,
"schoolRank": 136,
"score": 103
},
{
"classRank": 45,
"schoolRank": 138,
"score": 102
},
{
"classRank": 46,
"schoolRank": 140,
"score": 101
},
{
"classRank": 47,
"schoolRank": 142,
"score": 100
},
{
"classRank": 48,
"schoolRank": 142,
"score": 100
}
],
"高二06班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 99
},
{
"classRank": 2,
"schoolRank": 5,
"score": 97.5
},
{
"classRank": 3,
"schoolRank": 10,
"score": 95
},
{
"classRank": 4,
"schoolRank": 12,
"score": 94
},
{
"classRank": 5,
"schoolRank": 13,
"score": 93.5
},
{
"classRank": 6,
"schoolRank": 18,
"score": 91
},
{
"classRank": 7,
"schoolRank": 25,
"score": 87.5
},
{
"classRank": 8,
"schoolRank": 27,
"score": 86.5
},
{
"classRank": 9,
"schoolRank": 29,
"score": 85.5
},
{
"classRank": 10,
"schoolRank": 33,
"score": 83.5
},
{
"classRank": 11,
"schoolRank": 33,
"score": 83.5
},
{
"classRank": 12,
"schoolRank": 39,
"score": 80.5
},
{
"classRank": 13,
"schoolRank": 40,
"score": 80
},
{
"classRank": 14,
"schoolRank": 43,
"score": 78.5
},
{
"classRank": 15,
"schoolRank": 43,
"score": 78.5
},
{
"classRank": 16,
"schoolRank": 56,
"score": 72
},
{
"classRank": 17,
"schoolRank": 59,
"score": 70.5
},
{
"classRank": 18,
"schoolRank": 60,
"score": 70
},
{
"classRank": 19,
"schoolRank": 61,
"score": 69.5
},
{
"classRank": 20,
"schoolRank": 62,
"score": 69
},
{
"classRank": 21,
"schoolRank": 64,
"score": 68
},
{
"classRank": 22,
"schoolRank": 71,
"score": 64
},
{
"classRank": 23,
"schoolRank": 71,
"score": 64
},
{
"classRank": 24,
"schoolRank": 72,
"score": 63.5
},
{
"classRank": 25,
"schoolRank": 73,
"score": 63
},
{
"classRank": 26,
"schoolRank": 77,
"score": 59
},
{
"classRank": 27,
"schoolRank": 96,
"score": 124
},
{
"classRank": 28,
"schoolRank": 99,
"score": 122.5
},
{
"classRank": 29,
"schoolRank": 100,
"score": 122
},
{
"classRank": 30,
"schoolRank": 101,
"score": 121.5
},
{
"classRank": 31,
"schoolRank": 101,
"score": 121.5
},
{
"classRank": 32,
"schoolRank": 104,
"score": 120
},
{
"classRank": 33,
"schoolRank": 109,
"score": 117.5
},
{
"classRank": 34,
"schoolRank": 112,
"score": 115.5
},
{
"classRank": 35,
"schoolRank": 121,
"score": 111
},
{
"classRank": 36,
"schoolRank": 122,
"score": 110.5
},
{
"classRank": 37,
"schoolRank": 123,
"score": 110
},
{
"classRank": 38,
"schoolRank": 124,
"score": 109.5
},
{
"classRank": 39,
"schoolRank": 126,
"score": 108
},
{
"classRank": 40,
"schoolRank": 129,
"score": 106.5
},
{
"classRank": 41,
"schoolRank": 130,
"score": 106
},
{
"classRank": 42,
"schoolRank": 135,
"score": 103.5
},
{
"classRank": 43,
"schoolRank": 135,
"score": 103.5
},
{
"classRank": 44,
"schoolRank": 137,
"score": 102.5
},
{
"classRank": 45,
"schoolRank": 141,
"score": 100.5
}
],
"高二07班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 99
},
{
"classRank": 2,
"schoolRank": 5,
"score": 97.5
},
{
"classRank": 3,
"schoolRank": 7,
"score": 96.5
},
{
"classRank": 4,
"schoolRank": 8,
"score": 96
},
{
"classRank": 5,
"schoolRank": 13,
"score": 93.5
},
{
"classRank": 6,
"schoolRank": 17,
"score": 91.5
},
{
"classRank": 7,
"schoolRank": 20,
"score": 90
},
{
"classRank": 8,
"schoolRank": 21,
"score": 89.5
},
{
"classRank": 9,
"schoolRank": 21,
"score": 89.5
},
{
"classRank": 10,
"schoolRank": 22,
"score": 89
},
{
"classRank": 11,
"schoolRank": 26,
"score": 87
},
{
"classRank": 12,
"schoolRank": 27,
"score": 86.5
},
{
"classRank": 13,
"schoolRank": 38,
"score": 81
},
{
"classRank": 14,
"schoolRank": 45,
"score": 77.5
},
{
"classRank": 15,
"schoolRank": 48,
"score": 76
},
{
"classRank": 16,
"schoolRank": 48,
"score": 76
},
{
"classRank": 17,
"schoolRank": 48,
"score": 76
},
{
"classRank": 18,
"schoolRank": 48,
"score": 76
},
{
"classRank": 19,
"schoolRank": 49,
"score": 75.5
},
{
"classRank": 20,
"schoolRank": 60,
"score": 70
},
{
"classRank": 21,
"schoolRank": 61,
"score": 69.5
},
{
"classRank": 22,
"schoolRank": 68,
"score": 65.5
},
{
"classRank": 23,
"schoolRank": 96,
"score": 124
},
{
"classRank": 24,
"schoolRank": 102,
"score": 121
},
{
"classRank": 25,
"schoolRank": 103,
"score": 120.5
},
{
"classRank": 26,
"schoolRank": 104,
"score": 120
},
{
"classRank": 27,
"schoolRank": 107,
"score": 118.5
},
{
"classRank": 28,
"schoolRank": 107,
"score": 118.5
},
{
"classRank": 29,
"schoolRank": 108,
"score": 118
},
{
"classRank": 30,
"schoolRank": 112,
"score": 115.5
},
{
"classRank": 31,
"schoolRank": 127,
"score": 107.5
},
{
"classRank": 32,
"schoolRank": 128,
"score": 107
},
{
"classRank": 33,
"schoolRank": 129,
"score": 106.5
},
{
"classRank": 34,
"schoolRank": 133,
"score": 104.5
},
{
"classRank": 35,
"schoolRank": 137,
"score": 102.5
},
{
"classRank": 36,
"schoolRank": 140,
"score": 101
},
{
"classRank": 37,
"schoolRank": 141,
"score": 100.5
}
]
};
var ge3 = [];
getyk(data, ge3);
setMapS2(ge3, '英语', 'm2-3');
data={
"高二01班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 92.5
},
{
"classRank": 2,
"schoolRank": 2,
"score": 89.5
},
{
"classRank": 3,
"schoolRank": 3,
"score": 89
},
{
"classRank": 4,
"schoolRank": 5,
"score": 86.5
},
{
"classRank": 5,
"schoolRank": 7,
"score": 85.5
},
{
"classRank": 6,
"schoolRank": 7,
"score": 85.5
},
{
"classRank": 7,
"schoolRank": 8,
"score": 85
},
{
"classRank": 8,
"schoolRank": 18,
"score": 80
},
{
"classRank": 9,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 10,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 11,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 12,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 13,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 14,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 15,
"schoolRank": 32,
"score": 73
},
{
"classRank": 16,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 17,
"schoolRank": 36,
"score": 71
},
{
"classRank": 18,
"schoolRank": 36,
"score": 71
},
{
"classRank": 19,
"schoolRank": 36,
"score": 71
},
{
"classRank": 20,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 21,
"schoolRank": 38,
"score": 70
},
{
"classRank": 22,
"schoolRank": 38,
"score": 70
},
{
"classRank": 23,
"schoolRank": 40,
"score": 69
},
{
"classRank": 24,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 25,
"schoolRank": 44,
"score": 67
},
{
"classRank": 26,
"schoolRank": 44,
"score": 67
},
{
"classRank": 27,
"schoolRank": 45,
"score": 66.5
},
{
"classRank": 28,
"schoolRank": 48,
"score": 65
},
{
"classRank": 29,
"schoolRank": 53,
"score": 62.5
},
{
"classRank": 30,
"schoolRank": 55,
"score": 61.5
},
{
"classRank": 31,
"schoolRank": 60,
"score": 59
},
{
"classRank": 32,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 33,
"schoolRank": 66,
"score": 56
},
{
"classRank": 34,
"schoolRank": 70,
"score": 54
},
{
"classRank": 35,
"schoolRank": 72,
"score": 53
},
{
"classRank": 36,
"schoolRank": 72,
"score": 53
},
{
"classRank": 37,
"schoolRank": 74,
"score": 52
},
{
"classRank": 38,
"schoolRank": 75,
"score": 51.5
},
{
"classRank": 39,
"schoolRank": 76,
"score": 51
},
{
"classRank": 40,
"schoolRank": 80,
"score": 49
},
{
"classRank": 41,
"schoolRank": 81,
"score": 48.5
},
{
"classRank": 42,
"schoolRank": 82,
"score": 48
},
{
"classRank": 43,
"schoolRank": 86,
"score": 46
},
{
"classRank": 44,
"schoolRank": 87,
"score": 45.5
},
{
"classRank": 45,
"schoolRank": 90,
"score": 44
},
{
"classRank": 46,
"schoolRank": 96,
"score": 40.5
},
{
"classRank": 47,
"schoolRank": 97,
"score": 40
},
{
"classRank": 48,
"schoolRank": 99,
"score": 39
}
],
"高二10班": [
{
"classRank": 1,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 2,
"schoolRank": 20,
"score": 79
},
{
"classRank": 3,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 4,
"schoolRank": 25,
"score": 76.5
},
{
"classRank": 5,
"schoolRank": 28,
"score": 75
},
{
"classRank": 6,
"schoolRank": 32,
"score": 73
},
{
"classRank": 7,
"schoolRank": 32,
"score": 73
},
{
"classRank": 8,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 9,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 10,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 11,
"schoolRank": 36,
"score": 71
},
{
"classRank": 12,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 13,
"schoolRank": 42,
"score": 68
},
{
"classRank": 14,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 15,
"schoolRank": 44,
"score": 67
},
{
"classRank": 16,
"schoolRank": 46,
"score": 66
},
{
"classRank": 17,
"schoolRank": 48,
"score": 65
},
{
"classRank": 18,
"schoolRank": 53,
"score": 62.5
},
{
"classRank": 19,
"schoolRank": 54,
"score": 62
},
{
"classRank": 20,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 21,
"schoolRank": 59,
"score": 59.5
},
{
"classRank": 22,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 23,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 24,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 25,
"schoolRank": 64,
"score": 57
},
{
"classRank": 26,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 27,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 28,
"schoolRank": 74,
"score": 52
},
{
"classRank": 29,
"schoolRank": 76,
"score": 51
},
{
"classRank": 30,
"schoolRank": 76,
"score": 51
},
{
"classRank": 31,
"schoolRank": 83,
"score": 47.5
},
{
"classRank": 32,
"schoolRank": 85,
"score": 46.5
},
{
"classRank": 33,
"schoolRank": 90,
"score": 44
},
{
"classRank": 34,
"schoolRank": 90,
"score": 44
},
{
"classRank": 35,
"schoolRank": 91,
"score": 43.5
},
{
"classRank": 36,
"schoolRank": 91,
"score": 43.5
},
{
"classRank": 37,
"schoolRank": 94,
"score": 42
},
{
"classRank": 38,
"schoolRank": 97,
"score": 40
},
{
"classRank": 39,
"schoolRank": 99,
"score": 39
}
],
"高二04班": [
{
"classRank": 1,
"schoolRank": 5,
"score": 86.5
},
{
"classRank": 2,
"schoolRank": 6,
"score": 86
},
{
"classRank": 3,
"schoolRank": 9,
"score": 84.5
},
{
"classRank": 4,
"schoolRank": 9,
"score": 84.5
},
{
"classRank": 5,
"schoolRank": 11,
"score": 83.5
},
{
"classRank": 6,
"schoolRank": 12,
"score": 83
},
{
"classRank": 7,
"schoolRank": 12,
"score": 83
},
{
"classRank": 8,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 9,
"schoolRank": 22,
"score": 78
},
{
"classRank": 10,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 11,
"schoolRank": 26,
"score": 76
},
{
"classRank": 12,
"schoolRank": 26,
"score": 76
},
{
"classRank": 13,
"schoolRank": 30,
"score": 74
},
{
"classRank": 14,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 15,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 16,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 17,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 18,
"schoolRank": 36,
"score": 71
},
{
"classRank": 19,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 20,
"schoolRank": 42,
"score": 68
},
{
"classRank": 21,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 22,
"schoolRank": 44,
"score": 67
},
{
"classRank": 23,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 24,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 25,
"schoolRank": 58,
"score": 60
},
{
"classRank": 26,
"schoolRank": 62,
"score": 58
},
{
"classRank": 27,
"schoolRank": 62,
"score": 58
},
{
"classRank": 28,
"schoolRank": 63,
"score": 57.5
},
{
"classRank": 29,
"schoolRank": 63,
"score": 57.5
},
{
"classRank": 30,
"schoolRank": 66,
"score": 56
},
{
"classRank": 31,
"schoolRank": 66,
"score": 56
},
{
"classRank": 32,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 33,
"schoolRank": 73,
"score": 52.5
},
{
"classRank": 34,
"schoolRank": 75,
"score": 51.5
},
{
"classRank": 35,
"schoolRank": 79,
"score": 49.5
},
{
"classRank": 36,
"schoolRank": 80,
"score": 49
}
],
"高二05班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 89.5
},
{
"classRank": 2,
"schoolRank": 8,
"score": 85
},
{
"classRank": 3,
"schoolRank": 10,
"score": 84
},
{
"classRank": 4,
"schoolRank": 11,
"score": 83.5
},
{
"classRank": 5,
"schoolRank": 12,
"score": 83
},
{
"classRank": 6,
"schoolRank": 18,
"score": 80
},
{
"classRank": 7,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 8,
"schoolRank": 22,
"score": 78
},
{
"classRank": 9,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 10,
"schoolRank": 26,
"score": 76
},
{
"classRank": 11,
"schoolRank": 28,
"score": 75
},
{
"classRank": 12,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 13,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 14,
"schoolRank": 38,
"score": 70
},
{
"classRank": 15,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 16,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 17,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 18,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 19,
"schoolRank": 44,
"score": 67
},
{
"classRank": 20,
"schoolRank": 44,
"score": 67
},
{
"classRank": 21,
"schoolRank": 45,
"score": 66.5
},
{
"classRank": 22,
"schoolRank": 45,
"score": 66.5
},
{
"classRank": 23,
"schoolRank": 47,
"score": 65.5
},
{
"classRank": 24,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 25,
"schoolRank": 52,
"score": 63
},
{
"classRank": 26,
"schoolRank": 54,
"score": 62
},
{
"classRank": 27,
"schoolRank": 60,
"score": 59
},
{
"classRank": 28,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 29,
"schoolRank": 63,
"score": 57.5
},
{
"classRank": 30,
"schoolRank": 65,
"score": 56.5
},
{
"classRank": 31,
"schoolRank": 66,
"score": 56
},
{
"classRank": 32,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 33,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 34,
"schoolRank": 68,
"score": 55
},
{
"classRank": 35,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 36,
"schoolRank": 74,
"score": 52
},
{
"classRank": 37,
"schoolRank": 80,
"score": 49
},
{
"classRank": 38,
"schoolRank": 83,
"score": 47.5
},
{
"classRank": 39,
"schoolRank": 84,
"score": 47
},
{
"classRank": 40,
"schoolRank": 84,
"score": 47
},
{
"classRank": 41,
"schoolRank": 86,
"score": 46
},
{
"classRank": 42,
"schoolRank": 89,
"score": 44.5
}
],
"高二02班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 89.5
},
{
"classRank": 2,
"schoolRank": 5,
"score": 86.5
},
{
"classRank": 3,
"schoolRank": 8,
"score": 85
},
{
"classRank": 4,
"schoolRank": 8,
"score": 85
},
{
"classRank": 5,
"schoolRank": 11,
"score": 83.5
},
{
"classRank": 6,
"schoolRank": 13,
"score": 82.5
},
{
"classRank": 7,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 8,
"schoolRank": 17,
"score": 80.5
},
{
"classRank": 9,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 10,
"schoolRank": 22,
"score": 78
},
{
"classRank": 11,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 12,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 13,
"schoolRank": 24,
"score": 77
},
{
"classRank": 14,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 15,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 16,
"schoolRank": 34,
"score": 72
},
{
"classRank": 17,
"schoolRank": 34,
"score": 72
},
{
"classRank": 18,
"schoolRank": 36,
"score": 71
},
{
"classRank": 19,
"schoolRank": 36,
"score": 71
},
{
"classRank": 20,
"schoolRank": 38,
"score": 70
},
{
"classRank": 21,
"schoolRank": 40,
"score": 69
},
{
"classRank": 22,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 23,
"schoolRank": 48,
"score": 65
},
{
"classRank": 24,
"schoolRank": 48,
"score": 65
},
{
"classRank": 25,
"schoolRank": 54,
"score": 62
},
{
"classRank": 26,
"schoolRank": 55,
"score": 61.5
},
{
"classRank": 27,
"schoolRank": 56,
"score": 61
},
{
"classRank": 28,
"schoolRank": 62,
"score": 58
},
{
"classRank": 29,
"schoolRank": 62,
"score": 58
},
{
"classRank": 30,
"schoolRank": 65,
"score": 56.5
},
{
"classRank": 31,
"schoolRank": 66,
"score": 56
},
{
"classRank": 32,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 33,
"schoolRank": 68,
"score": 55
},
{
"classRank": 34,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 35,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 36,
"schoolRank": 73,
"score": 52.5
},
{
"classRank": 37,
"schoolRank": 75,
"score": 51.5
},
{
"classRank": 38,
"schoolRank": 79,
"score": 49.5
},
{
"classRank": 39,
"schoolRank": 81,
"score": 48.5
},
{
"classRank": 40,
"schoolRank": 81,
"score": 48.5
},
{
"classRank": 41,
"schoolRank": 82,
"score": 48
},
{
"classRank": 42,
"schoolRank": 83,
"score": 47.5
},
{
"classRank": 43,
"schoolRank": 85,
"score": 46.5
},
{
"classRank": 44,
"schoolRank": 87,
"score": 45.5
},
{
"classRank": 45,
"schoolRank": 88,
"score": 45
},
{
"classRank": 46,
"schoolRank": 92,
"score": 43
},
{
"classRank": 47,
"schoolRank": 92,
"score": 43
}
],
"高二03班": [
{
"classRank": 1,
"schoolRank": 4,
"score": 88
},
{
"classRank": 2,
"schoolRank": 13,
"score": 82.5
},
{
"classRank": 3,
"schoolRank": 13,
"score": 82.5
},
{
"classRank": 4,
"schoolRank": 13,
"score": 82.5
},
{
"classRank": 5,
"schoolRank": 14,
"score": 82
},
{
"classRank": 6,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 7,
"schoolRank": 17,
"score": 80.5
},
{
"classRank": 8,
"schoolRank": 20,
"score": 79
},
{
"classRank": 9,
"schoolRank": 22,
"score": 78
},
{
"classRank": 10,
"schoolRank": 22,
"score": 78
},
{
"classRank": 11,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 12,
"schoolRank": 26,
"score": 76
},
{
"classRank": 13,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 14,
"schoolRank": 28,
"score": 75
},
{
"classRank": 15,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 16,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 17,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 18,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 19,
"schoolRank": 40,
"score": 69
},
{
"classRank": 20,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 21,
"schoolRank": 42,
"score": 68
},
{
"classRank": 22,
"schoolRank": 46,
"score": 66
},
{
"classRank": 23,
"schoolRank": 46,
"score": 66
},
{
"classRank": 24,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 25,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 26,
"schoolRank": 56,
"score": 61
},
{
"classRank": 27,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 28,
"schoolRank": 59,
"score": 59.5
},
{
"classRank": 29,
"schoolRank": 62,
"score": 58
},
{
"classRank": 30,
"schoolRank": 63,
"score": 57.5
},
{
"classRank": 31,
"schoolRank": 64,
"score": 57
},
{
"classRank": 32,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 33,
"schoolRank": 72,
"score": 53
},
{
"classRank": 34,
"schoolRank": 74,
"score": 52
},
{
"classRank": 35,
"schoolRank": 75,
"score": 51.5
},
{
"classRank": 36,
"schoolRank": 80,
"score": 49
},
{
"classRank": 37,
"schoolRank": 80,
"score": 49
},
{
"classRank": 38,
"schoolRank": 81,
"score": 48.5
},
{
"classRank": 39,
"schoolRank": 81,
"score": 48.5
},
{
"classRank": 40,
"schoolRank": 81,
"score": 48.5
},
{
"classRank": 41,
"schoolRank": 84,
"score": 47
},
{
"classRank": 42,
"schoolRank": 88,
"score": 45
}
],
"高二08班": [
{
"classRank": 1,
"schoolRank": 11,
"score": 83.5
},
{
"classRank": 2,
"schoolRank": 16,
"score": 81
},
{
"classRank": 3,
"schoolRank": 17,
"score": 80.5
},
{
"classRank": 4,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 5,
"schoolRank": 24,
"score": 77
},
{
"classRank": 6,
"schoolRank": 24,
"score": 77
},
{
"classRank": 7,
"schoolRank": 28,
"score": 75
},
{
"classRank": 8,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 9,
"schoolRank": 30,
"score": 74
},
{
"classRank": 10,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 11,
"schoolRank": 36,
"score": 71
},
{
"classRank": 12,
"schoolRank": 40,
"score": 69
},
{
"classRank": 13,
"schoolRank": 42,
"score": 68
},
{
"classRank": 14,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 15,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 16,
"schoolRank": 46,
"score": 66
},
{
"classRank": 17,
"schoolRank": 47,
"score": 65.5
},
{
"classRank": 18,
"schoolRank": 48,
"score": 65
},
{
"classRank": 19,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 20,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 21,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 22,
"schoolRank": 53,
"score": 62.5
},
{
"classRank": 23,
"schoolRank": 59,
"score": 59.5
},
{
"classRank": 24,
"schoolRank": 60,
"score": 59
},
{
"classRank": 25,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 26,
"schoolRank": 62,
"score": 58
},
{
"classRank": 27,
"schoolRank": 62,
"score": 58
},
{
"classRank": 28,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 29,
"schoolRank": 70,
"score": 54
},
{
"classRank": 30,
"schoolRank": 70,
"score": 54
},
{
"classRank": 31,
"schoolRank": 70,
"score": 54
},
{
"classRank": 32,
"schoolRank": 75,
"score": 51.5
},
{
"classRank": 33,
"schoolRank": 79,
"score": 49.5
},
{
"classRank": 34,
"schoolRank": 80,
"score": 49
},
{
"classRank": 35,
"schoolRank": 90,
"score": 44
}
],
"高二09班": [
{
"classRank": 1,
"schoolRank": 14,
"score": 82
},
{
"classRank": 2,
"schoolRank": 16,
"score": 81
},
{
"classRank": 3,
"schoolRank": 17,
"score": 80.5
},
{
"classRank": 4,
"schoolRank": 18,
"score": 80
},
{
"classRank": 5,
"schoolRank": 24,
"score": 77
},
{
"classRank": 6,
"schoolRank": 25,
"score": 76.5
},
{
"classRank": 7,
"schoolRank": 28,
"score": 75
},
{
"classRank": 8,
"schoolRank": 28,
"score": 75
},
{
"classRank": 9,
"schoolRank": 28,
"score": 75
},
{
"classRank": 10,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 11,
"schoolRank": 34,
"score": 72
},
{
"classRank": 12,
"schoolRank": 34,
"score": 72
},
{
"classRank": 13,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 14,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 15,
"schoolRank": 47,
"score": 65.5
},
{
"classRank": 16,
"schoolRank": 48,
"score": 65
},
{
"classRank": 17,
"schoolRank": 53,
"score": 62.5
},
{
"classRank": 18,
"schoolRank": 53,
"score": 62.5
},
{
"classRank": 19,
"schoolRank": 55,
"score": 61.5
},
{
"classRank": 20,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 21,
"schoolRank": 60,
"score": 59
},
{
"classRank": 22,
"schoolRank": 62,
"score": 58
},
{
"classRank": 23,
"schoolRank": 63,
"score": 57.5
},
{
"classRank": 24,
"schoolRank": 64,
"score": 57
},
{
"classRank": 25,
"schoolRank": 64,
"score": 57
},
{
"classRank": 26,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 27,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 28,
"schoolRank": 71,
"score": 53.5
},
{
"classRank": 29,
"schoolRank": 72,
"score": 53
},
{
"classRank": 30,
"schoolRank": 73,
"score": 52.5
},
{
"classRank": 31,
"schoolRank": 76,
"score": 51
},
{
"classRank": 32,
"schoolRank": 79,
"score": 49.5
},
{
"classRank": 33,
"schoolRank": 82,
"score": 48
},
{
"classRank": 34,
"schoolRank": 83,
"score": 47.5
},
{
"classRank": 35,
"schoolRank": 84,
"score": 47
},
{
"classRank": 36,
"schoolRank": 85,
"score": 46.5
},
{
"classRank": 37,
"schoolRank": 88,
"score": 45
},
{
"classRank": 38,
"schoolRank": 90,
"score": 44
},
{
"classRank": 39,
"schoolRank": 96,
"score": 40.5
},
{
"classRank": 40,
"schoolRank": 97,
"score": 40
},
{
"classRank": 41,
"schoolRank": 98,
"score": 39.5
},
{
"classRank": 42,
"schoolRank": 100,
"score": 37.5
},
{
"classRank": 43,
"schoolRank": 100,
"score": 37.5
},
{
"classRank": 44,
"schoolRank": 101,
"score": 35
},
{
"classRank": 45,
"schoolRank": 102,
"score": 34
},
{
"classRank": 46,
"schoolRank": 103,
"score": 32
},
{
"classRank": 47,
"schoolRank": 104,
"score": 31
},
{
"classRank": 48,
"schoolRank": 105,
"score": 30.5
}
],
"高二06班": [
{
"classRank": 1,
"schoolRank": 14,
"score": 82
},
{
"classRank": 2,
"schoolRank": 14,
"score": 82
},
{
"classRank": 3,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 4,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 5,
"schoolRank": 22,
"score": 78
},
{
"classRank": 6,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 7,
"schoolRank": 25,
"score": 76.5
},
{
"classRank": 8,
"schoolRank": 25,
"score": 76.5
},
{
"classRank": 9,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 10,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 11,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 12,
"schoolRank": 28,
"score": 75
},
{
"classRank": 13,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 14,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 15,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 16,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 17,
"schoolRank": 42,
"score": 68
},
{
"classRank": 18,
"schoolRank": 42,
"score": 68
},
{
"classRank": 19,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 20,
"schoolRank": 47,
"score": 65.5
},
{
"classRank": 21,
"schoolRank": 48,
"score": 65
},
{
"classRank": 22,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 23,
"schoolRank": 52,
"score": 63
},
{
"classRank": 24,
"schoolRank": 56,
"score": 61
},
{
"classRank": 25,
"schoolRank": 59,
"score": 59.5
},
{
"classRank": 26,
"schoolRank": 60,
"score": 59
},
{
"classRank": 27,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 28,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 29,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 30,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 31,
"schoolRank": 68,
"score": 55
},
{
"classRank": 32,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 33,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 34,
"schoolRank": 77,
"score": 50.5
},
{
"classRank": 35,
"schoolRank": 78,
"score": 50
},
{
"classRank": 36,
"schoolRank": 80,
"score": 49
},
{
"classRank": 37,
"schoolRank": 82,
"score": 48
},
{
"classRank": 38,
"schoolRank": 82,
"score": 48
},
{
"classRank": 39,
"schoolRank": 91,
"score": 43.5
},
{
"classRank": 40,
"schoolRank": 91,
"score": 43.5
},
{
"classRank": 41,
"schoolRank": 92,
"score": 43
},
{
"classRank": 42,
"schoolRank": 92,
"score": 43
},
{
"classRank": 43,
"schoolRank": 93,
"score": 42.5
},
{
"classRank": 44,
"schoolRank": 95,
"score": 41
},
{
"classRank": 45,
"schoolRank": 98,
"score": 39.5
}
],
"高二07班": [
{
"classRank": 1,
"schoolRank": 12,
"score": 83
},
{
"classRank": 2,
"schoolRank": 20,
"score": 79
},
{
"classRank": 3,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 4,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 5,
"schoolRank": 24,
"score": 77
},
{
"classRank": 6,
"schoolRank": 24,
"score": 77
},
{
"classRank": 7,
"schoolRank": 25,
"score": 76.5
},
{
"classRank": 8,
"schoolRank": 26,
"score": 76
},
{
"classRank": 9,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 10,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 11,
"schoolRank": 30,
"score": 74
},
{
"classRank": 12,
"schoolRank": 30,
"score": 74
},
{
"classRank": 13,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 14,
"schoolRank": 36,
"score": 71
},
{
"classRank": 15,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 16,
"schoolRank": 42,
"score": 68
},
{
"classRank": 17,
"schoolRank": 45,
"score": 66.5
},
{
"classRank": 18,
"schoolRank": 47,
"score": 65.5
},
{
"classRank": 19,
"schoolRank": 48,
"score": 65
},
{
"classRank": 20,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 21,
"schoolRank": 50,
"score": 64
},
{
"classRank": 22,
"schoolRank": 50,
"score": 64
},
{
"classRank": 23,
"schoolRank": 52,
"score": 63
},
{
"classRank": 24,
"schoolRank": 54,
"score": 62
},
{
"classRank": 25,
"schoolRank": 54,
"score": 62
},
{
"classRank": 26,
"schoolRank": 60,
"score": 59
},
{
"classRank": 27,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 28,
"schoolRank": 62,
"score": 58
},
{
"classRank": 29,
"schoolRank": 68,
"score": 55
},
{
"classRank": 30,
"schoolRank": 71,
"score": 53.5
},
{
"classRank": 31,
"schoolRank": 75,
"score": 51.5
},
{
"classRank": 32,
"schoolRank": 76,
"score": 51
},
{
"classRank": 33,
"schoolRank": 76,
"score": 51
},
{
"classRank": 34,
"schoolRank": 81,
"score": 48.5
},
{
"classRank": 35,
"schoolRank": 85,
"score": 46.5
},
{
"classRank": 36,
"schoolRank": 86,
"score": 46
},
{
"classRank": 37,
"schoolRank": 89,
"score": 44.5
}
]
};
var ge4 = [];
getyk(data, ge4);
setMapS2(ge4, '物理', 'm2-4');
data={
"高二01班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 93.5
},
{
"classRank": 2,
"schoolRank": 4,
"score": 89
},
{
"classRank": 3,
"schoolRank": 4,
"score": 89
},
{
"classRank": 4,
"schoolRank": 7,
"score": 86.5
},
{
"classRank": 5,
"schoolRank": 7,
"score": 86.5
},
{
"classRank": 6,
"schoolRank": 10,
"score": 85
},
{
"classRank": 7,
"schoolRank": 13,
"score": 83.5
},
{
"classRank": 8,
"schoolRank": 16,
"score": 82
},
{
"classRank": 9,
"schoolRank": 20,
"score": 80
},
{
"classRank": 10,
"schoolRank": 25,
"score": 77.5
},
{
"classRank": 11,
"schoolRank": 28,
"score": 76
},
{
"classRank": 12,
"schoolRank": 28,
"score": 76
},
{
"classRank": 13,
"schoolRank": 28,
"score": 76
},
{
"classRank": 14,
"schoolRank": 29,
"score": 75.5
},
{
"classRank": 15,
"schoolRank": 33,
"score": 73.5
},
{
"classRank": 16,
"schoolRank": 34,
"score": 73
},
{
"classRank": 17,
"schoolRank": 35,
"score": 72.5
},
{
"classRank": 18,
"schoolRank": 35,
"score": 72.5
},
{
"classRank": 19,
"schoolRank": 39,
"score": 70
},
{
"classRank": 20,
"schoolRank": 40,
"score": 69.5
},
{
"classRank": 21,
"schoolRank": 46,
"score": 66.5
},
{
"classRank": 22,
"schoolRank": 47,
"score": 66
},
{
"classRank": 23,
"schoolRank": 48,
"score": 65.5
},
{
"classRank": 24,
"schoolRank": 48,
"score": 65.5
},
{
"classRank": 25,
"schoolRank": 49,
"score": 65
},
{
"classRank": 26,
"schoolRank": 53,
"score": 63
},
{
"classRank": 27,
"schoolRank": 53,
"score": 63
},
{
"classRank": 28,
"schoolRank": 56,
"score": 61.5
},
{
"classRank": 29,
"schoolRank": 58,
"score": 60.5
},
{
"classRank": 30,
"schoolRank": 60,
"score": 59.5
},
{
"classRank": 31,
"schoolRank": 61,
"score": 59
},
{
"classRank": 32,
"schoolRank": 62,
"score": 58.5
},
{
"classRank": 33,
"schoolRank": 63,
"score": 58
},
{
"classRank": 34,
"schoolRank": 65,
"score": 57
},
{
"classRank": 35,
"schoolRank": 67,
"score": 56
},
{
"classRank": 36,
"schoolRank": 69,
"score": 55
},
{
"classRank": 37,
"schoolRank": 73,
"score": 53
},
{
"classRank": 38,
"schoolRank": 74,
"score": 52.5
},
{
"classRank": 39,
"schoolRank": 75,
"score": 52
},
{
"classRank": 40,
"schoolRank": 76,
"score": 51.5
},
{
"classRank": 41,
"schoolRank": 77,
"score": 51
},
{
"classRank": 42,
"schoolRank": 80,
"score": 49.5
},
{
"classRank": 43,
"schoolRank": 84,
"score": 47.5
},
{
"classRank": 44,
"schoolRank": 86,
"score": 46.5
},
{
"classRank": 45,
"schoolRank": 91,
"score": 44
},
{
"classRank": 46,
"schoolRank": 93,
"score": 43
},
{
"classRank": 47,
"schoolRank": 94,
"score": 42.5
},
{
"classRank": 48,
"schoolRank": 97,
"score": 40.5
}
],
"高二10班": [
{
"classRank": 1,
"schoolRank": 16,
"score": 82
},
{
"classRank": 2,
"schoolRank": 21,
"score": 79.5
},
{
"classRank": 3,
"schoolRank": 26,
"score": 77
},
{
"classRank": 4,
"schoolRank": 26,
"score": 77
},
{
"classRank": 5,
"schoolRank": 28,
"score": 76
},
{
"classRank": 6,
"schoolRank": 31,
"score": 74.5
},
{
"classRank": 7,
"schoolRank": 34,
"score": 73
},
{
"classRank": 8,
"schoolRank": 37,
"score": 71.5
},
{
"classRank": 9,
"schoolRank": 42,
"score": 68.5
},
{
"classRank": 10,
"schoolRank": 43,
"score": 68
},
{
"classRank": 11,
"schoolRank": 44,
"score": 67.5
},
{
"classRank": 12,
"schoolRank": 45,
"score": 67
},
{
"classRank": 13,
"schoolRank": 45,
"score": 67
},
{
"classRank": 14,
"schoolRank": 45,
"score": 67
},
{
"classRank": 15,
"schoolRank": 46,
"score": 66.5
},
{
"classRank": 16,
"schoolRank": 47,
"score": 66
},
{
"classRank": 17,
"schoolRank": 49,
"score": 65
},
{
"classRank": 18,
"schoolRank": 52,
"score": 63.5
},
{
"classRank": 19,
"schoolRank": 55,
"score": 62
},
{
"classRank": 20,
"schoolRank": 59,
"score": 60
},
{
"classRank": 21,
"schoolRank": 59,
"score": 60
},
{
"classRank": 22,
"schoolRank": 59,
"score": 60
},
{
"classRank": 23,
"schoolRank": 60,
"score": 59.5
},
{
"classRank": 24,
"schoolRank": 63,
"score": 58
},
{
"classRank": 25,
"schoolRank": 63,
"score": 58
},
{
"classRank": 26,
"schoolRank": 67,
"score": 56
},
{
"classRank": 27,
"schoolRank": 68,
"score": 55.5
},
{
"classRank": 28,
"schoolRank": 73,
"score": 53
},
{
"classRank": 29,
"schoolRank": 75,
"score": 52
},
{
"classRank": 30,
"schoolRank": 78,
"score": 50.5
},
{
"classRank": 31,
"schoolRank": 78,
"score": 50.5
},
{
"classRank": 32,
"schoolRank": 79,
"score": 50
},
{
"classRank": 33,
"schoolRank": 82,
"score": 48.5
},
{
"classRank": 34,
"schoolRank": 88,
"score": 45.5
},
{
"classRank": 35,
"schoolRank": 88,
"score": 45.5
},
{
"classRank": 36,
"schoolRank": 94,
"score": 42.5
},
{
"classRank": 37,
"schoolRank": 96,
"score": 41
},
{
"classRank": 38,
"schoolRank": 98,
"score": 40
},
{
"classRank": 39,
"schoolRank": 106,
"score": 35.5
}
],
"高二04班": [
{
"classRank": 1,
"schoolRank": 10,
"score": 85
},
{
"classRank": 2,
"schoolRank": 11,
"score": 84.5
},
{
"classRank": 3,
"schoolRank": 13,
"score": 83.5
},
{
"classRank": 4,
"schoolRank": 15,
"score": 82.5
},
{
"classRank": 5,
"schoolRank": 18,
"score": 81
},
{
"classRank": 6,
"schoolRank": 19,
"score": 80.5
},
{
"classRank": 7,
"schoolRank": 21,
"score": 79.5
},
{
"classRank": 8,
"schoolRank": 22,
"score": 79
},
{
"classRank": 9,
"schoolRank": 23,
"score": 78.5
},
{
"classRank": 10,
"schoolRank": 23,
"score": 78.5
},
{
"classRank": 11,
"schoolRank": 33,
"score": 73.5
},
{
"classRank": 12,
"schoolRank": 34,
"score": 73
},
{
"classRank": 13,
"schoolRank": 37,
"score": 71.5
},
{
"classRank": 14,
"schoolRank": 37,
"score": 71.5
},
{
"classRank": 15,
"schoolRank": 39,
"score": 70
},
{
"classRank": 16,
"schoolRank": 39,
"score": 70
},
{
"classRank": 17,
"schoolRank": 41,
"score": 69
},
{
"classRank": 18,
"schoolRank": 43,
"score": 68
},
{
"classRank": 19,
"schoolRank": 46,
"score": 66.5
},
{
"classRank": 20,
"schoolRank": 46,
"score": 66.5
},
{
"classRank": 21,
"schoolRank": 47,
"score": 66
},
{
"classRank": 22,
"schoolRank": 48,
"score": 65.5
},
{
"classRank": 23,
"schoolRank": 48,
"score": 65.5
},
{
"classRank": 24,
"schoolRank": 51,
"score": 64
},
{
"classRank": 25,
"schoolRank": 55,
"score": 62
},
{
"classRank": 26,
"schoolRank": 56,
"score": 61.5
},
{
"classRank": 27,
"schoolRank": 59,
"score": 60
},
{
"classRank": 28,
"schoolRank": 61,
"score": 59
},
{
"classRank": 29,
"schoolRank": 62,
"score": 58.5
},
{
"classRank": 30,
"schoolRank": 65,
"score": 57
},
{
"classRank": 31,
"schoolRank": 66,
"score": 56.5
},
{
"classRank": 32,
"schoolRank": 67,
"score": 56
},
{
"classRank": 33,
"schoolRank": 68,
"score": 55.5
},
{
"classRank": 34,
"schoolRank": 73,
"score": 53
},
{
"classRank": 35,
"schoolRank": 82,
"score": 48.5
},
{
"classRank": 36,
"schoolRank": 86,
"score": 46.5
}
],
"高二05班": [
{
"classRank": 1,
"schoolRank": 7,
"score": 86.5
},
{
"classRank": 2,
"schoolRank": 7,
"score": 86.5
},
{
"classRank": 3,
"schoolRank": 10,
"score": 85
},
{
"classRank": 4,
"schoolRank": 15,
"score": 82.5
},
{
"classRank": 5,
"schoolRank": 16,
"score": 82
},
{
"classRank": 6,
"schoolRank": 20,
"score": 80
},
{
"classRank": 7,
"schoolRank": 21,
"score": 79.5
},
{
"classRank": 8,
"schoolRank": 23,
"score": 78.5
},
{
"classRank": 9,
"schoolRank": 24,
"score": 78
},
{
"classRank": 10,
"schoolRank": 27,
"score": 76.5
},
{
"classRank": 11,
"schoolRank": 29,
"score": 75.5
},
{
"classRank": 12,
"schoolRank": 34,
"score": 73
},
{
"classRank": 13,
"schoolRank": 36,
"score": 72
},
{
"classRank": 14,
"schoolRank": 36,
"score": 72
},
{
"classRank": 15,
"schoolRank": 37,
"score": 71.5
},
{
"classRank": 16,
"schoolRank": 44,
"score": 67.5
},
{
"classRank": 17,
"schoolRank": 44,
"score": 67.5
},
{
"classRank": 18,
"schoolRank": 45,
"score": 67
},
{
"classRank": 19,
"schoolRank": 45,
"score": 67
},
{
"classRank": 20,
"schoolRank": 47,
"score": 66
},
{
"classRank": 21,
"schoolRank": 52,
"score": 63.5
},
{
"classRank": 22,
"schoolRank": 52,
"score": 63.5
},
{
"classRank": 23,
"schoolRank": 53,
"score": 63
},
{
"classRank": 24,
"schoolRank": 57,
"score": 61
},
{
"classRank": 25,
"schoolRank": 57,
"score": 61
},
{
"classRank": 26,
"schoolRank": 60,
"score": 59.5
},
{
"classRank": 27,
"schoolRank": 60,
"score": 59.5
},
{
"classRank": 28,
"schoolRank": 62,
"score": 58.5
},
{
"classRank": 29,
"schoolRank": 63,
"score": 58
},
{
"classRank": 30,
"schoolRank": 63,
"score": 58
},
{
"classRank": 31,
"schoolRank": 64,
"score": 57.5
},
{
"classRank": 32,
"schoolRank": 65,
"score": 57
},
{
"classRank": 33,
"schoolRank": 66,
"score": 56.5
},
{
"classRank": 34,
"schoolRank": 76,
"score": 51.5
},
{
"classRank": 35,
"schoolRank": 77,
"score": 51
},
{
"classRank": 36,
"schoolRank": 80,
"score": 49.5
},
{
"classRank": 37,
"schoolRank": 80,
"score": 49.5
},
{
"classRank": 38,
"schoolRank": 85,
"score": 47
},
{
"classRank": 39,
"schoolRank": 85,
"score": 47
},
{
"classRank": 40,
"schoolRank": 93,
"score": 43
},
{
"classRank": 41,
"schoolRank": 97,
"score": 40.5
},
{
"classRank": 42,
"schoolRank": 100,
"score": 39
}
],
"高二02班": [
{
"classRank": 1,
"schoolRank": 6,
"score": 87.5
},
{
"classRank": 2,
"schoolRank": 7,
"score": 86.5
},
{
"classRank": 3,
"schoolRank": 10,
"score": 85
},
{
"classRank": 4,
"schoolRank": 11,
"score": 84.5
},
{
"classRank": 5,
"schoolRank": 13,
"score": 83.5
},
{
"classRank": 6,
"schoolRank": 15,
"score": 82.5
},
{
"classRank": 7,
"schoolRank": 18,
"score": 81
},
{
"classRank": 8,
"schoolRank": 21,
"score": 79.5
},
{
"classRank": 9,
"schoolRank": 22,
"score": 79
},
{
"classRank": 10,
"schoolRank": 26,
"score": 77
},
{
"classRank": 11,
"schoolRank": 26,
"score": 77
},
{
"classRank": 12,
"schoolRank": 27,
"score": 76.5
},
{
"classRank": 13,
"schoolRank": 29,
"score": 75.5
},
{
"classRank": 14,
"schoolRank": 30,
"score": 75
},
{
"classRank": 15,
"schoolRank": 32,
"score": 74
},
{
"classRank": 16,
"schoolRank": 36,
"score": 72
},
{
"classRank": 17,
"schoolRank": 37,
"score": 71.5
},
{
"classRank": 18,
"schoolRank": 44,
"score": 67.5
},
{
"classRank": 19,
"schoolRank": 44,
"score": 67.5
},
{
"classRank": 20,
"schoolRank": 46,
"score": 66.5
},
{
"classRank": 21,
"schoolRank": 47,
"score": 66
},
{
"classRank": 22,
"schoolRank": 48,
"score": 65.5
},
{
"classRank": 23,
"schoolRank": 52,
"score": 63.5
},
{
"classRank": 24,
"schoolRank": 53,
"score": 63
},
{
"classRank": 25,
"schoolRank": 57,
"score": 61
},
{
"classRank": 26,
"schoolRank": 58,
"score": 60.5
},
{
"classRank": 27,
"schoolRank": 58,
"score": 60.5
},
{
"classRank": 28,
"schoolRank": 62,
"score": 58.5
},
{
"classRank": 29,
"schoolRank": 62,
"score": 58.5
},
{
"classRank": 30,
"schoolRank": 63,
"score": 58
},
{
"classRank": 31,
"schoolRank": 65,
"score": 57
},
{
"classRank": 32,
"schoolRank": 66,
"score": 56.5
},
{
"classRank": 33,
"schoolRank": 68,
"score": 55.5
},
{
"classRank": 34,
"schoolRank": 69,
"score": 55
},
{
"classRank": 35,
"schoolRank": 69,
"score": 55
},
{
"classRank": 36,
"schoolRank": 70,
"score": 54.5
},
{
"classRank": 37,
"schoolRank": 71,
"score": 54
},
{
"classRank": 38,
"schoolRank": 75,
"score": 52
},
{
"classRank": 39,
"schoolRank": 77,
"score": 51
},
{
"classRank": 40,
"schoolRank": 79,
"score": 50
},
{
"classRank": 41,
"schoolRank": 81,
"score": 49
},
{
"classRank": 42,
"schoolRank": 84,
"score": 47.5
},
{
"classRank": 43,
"schoolRank": 86,
"score": 46.5
},
{
"classRank": 44,
"schoolRank": 89,
"score": 45
},
{
"classRank": 45,
"schoolRank": 90,
"score": 44.5
},
{
"classRank": 46,
"schoolRank": 97,
"score": 40.5
},
{
"classRank": 47,
"schoolRank": 105,
"score": 36.5
}
],
"高二03班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 90.5
},
{
"classRank": 2,
"schoolRank": 3,
"score": 89.5
},
{
"classRank": 3,
"schoolRank": 5,
"score": 88
},
{
"classRank": 4,
"schoolRank": 10,
"score": 85
},
{
"classRank": 5,
"schoolRank": 12,
"score": 84
},
{
"classRank": 6,
"schoolRank": 15,
"score": 82.5
},
{
"classRank": 7,
"schoolRank": 16,
"score": 82
},
{
"classRank": 8,
"schoolRank": 16,
"score": 82
},
{
"classRank": 9,
"schoolRank": 16,
"score": 82
},
{
"classRank": 10,
"schoolRank": 17,
"score": 81.5
},
{
"classRank": 11,
"schoolRank": 24,
"score": 78
},
{
"classRank": 12,
"schoolRank": 28,
"score": 76
},
{
"classRank": 13,
"schoolRank": 32,
"score": 74
},
{
"classRank": 14,
"schoolRank": 35,
"score": 72.5
},
{
"classRank": 15,
"schoolRank": 35,
"score": 72.5
},
{
"classRank": 16,
"schoolRank": 37,
"score": 71.5
},
{
"classRank": 17,
"schoolRank": 41,
"score": 69
},
{
"classRank": 18,
"schoolRank": 46,
"score": 66.5
},
{
"classRank": 19,
"schoolRank": 46,
"score": 66.5
},
{
"classRank": 20,
"schoolRank": 47,
"score": 66
},
{
"classRank": 21,
"schoolRank": 47,
"score": 66
},
{
"classRank": 22,
"schoolRank": 48,
"score": 65.5
},
{
"classRank": 23,
"schoolRank": 49,
"score": 65
},
{
"classRank": 24,
"schoolRank": 50,
"score": 64.5
},
{
"classRank": 25,
"schoolRank": 54,
"score": 62.5
},
{
"classRank": 26,
"schoolRank": 54,
"score": 62.5
},
{
"classRank": 27,
"schoolRank": 55,
"score": 62
},
{
"classRank": 28,
"schoolRank": 56,
"score": 61.5
},
{
"classRank": 29,
"schoolRank": 59,
"score": 60
},
{
"classRank": 30,
"schoolRank": 59,
"score": 60
},
{
"classRank": 31,
"schoolRank": 65,
"score": 57
},
{
"classRank": 32,
"schoolRank": 69,
"score": 55
},
{
"classRank": 33,
"schoolRank": 70,
"score": 54.5
},
{
"classRank": 34,
"schoolRank": 72,
"score": 53.5
},
{
"classRank": 35,
"schoolRank": 73,
"score": 53
},
{
"classRank": 36,
"schoolRank": 76,
"score": 51.5
},
{
"classRank": 37,
"schoolRank": 82,
"score": 48.5
},
{
"classRank": 38,
"schoolRank": 86,
"score": 46.5
},
{
"classRank": 39,
"schoolRank": 88,
"score": 45.5
},
{
"classRank": 40,
"schoolRank": 89,
"score": 45
},
{
"classRank": 41,
"schoolRank": 90,
"score": 44.5
},
{
"classRank": 42,
"schoolRank": 92,
"score": 43.5
}
],
"高二08班": [
{
"classRank": 1,
"schoolRank": 15,
"score": 82.5
},
{
"classRank": 2,
"schoolRank": 16,
"score": 82
},
{
"classRank": 3,
"schoolRank": 18,
"score": 81
},
{
"classRank": 4,
"schoolRank": 24,
"score": 78
},
{
"classRank": 5,
"schoolRank": 25,
"score": 77.5
},
{
"classRank": 6,
"schoolRank": 27,
"score": 76.5
},
{
"classRank": 7,
"schoolRank": 29,
"score": 75.5
},
{
"classRank": 8,
"schoolRank": 30,
"score": 75
},
{
"classRank": 9,
"schoolRank": 32,
"score": 74
},
{
"classRank": 10,
"schoolRank": 35,
"score": 72.5
},
{
"classRank": 11,
"schoolRank": 36,
"score": 72
},
{
"classRank": 12,
"schoolRank": 40,
"score": 69.5
},
{
"classRank": 13,
"schoolRank": 41,
"score": 69
},
{
"classRank": 14,
"schoolRank": 42,
"score": 68.5
},
{
"classRank": 15,
"schoolRank": 45,
"score": 67
},
{
"classRank": 16,
"schoolRank": 48,
"score": 65.5
},
{
"classRank": 17,
"schoolRank": 52,
"score": 63.5
},
{
"classRank": 18,
"schoolRank": 53,
"score": 63
},
{
"classRank": 19,
"schoolRank": 54,
"score": 62.5
},
{
"classRank": 20,
"schoolRank": 56,
"score": 61.5
},
{
"classRank": 21,
"schoolRank": 56,
"score": 61.5
},
{
"classRank": 22,
"schoolRank": 58,
"score": 60.5
},
{
"classRank": 23,
"schoolRank": 58,
"score": 60.5
},
{
"classRank": 24,
"schoolRank": 63,
"score": 58
},
{
"classRank": 25,
"schoolRank": 64,
"score": 57.5
},
{
"classRank": 26,
"schoolRank": 64,
"score": 57.5
},
{
"classRank": 27,
"schoolRank": 68,
"score": 55.5
},
{
"classRank": 28,
"schoolRank": 69,
"score": 55
},
{
"classRank": 29,
"schoolRank": 77,
"score": 51
},
{
"classRank": 30,
"schoolRank": 80,
"score": 49.5
},
{
"classRank": 31,
"schoolRank": 81,
"score": 49
},
{
"classRank": 32,
"schoolRank": 82,
"score": 48.5
},
{
"classRank": 33,
"schoolRank": 87,
"score": 46
},
{
"classRank": 34,
"schoolRank": 89,
"score": 45
},
{
"classRank": 35,
"schoolRank": 89,
"score": 45
}
],
"高二09班": [
{
"classRank": 1,
"schoolRank": 12,
"score": 84
},
{
"classRank": 2,
"schoolRank": 15,
"score": 82.5
},
{
"classRank": 3,
"schoolRank": 25,
"score": 77.5
},
{
"classRank": 4,
"schoolRank": 27,
"score": 76.5
},
{
"classRank": 5,
"schoolRank": 29,
"score": 75.5
},
{
"classRank": 6,
"schoolRank": 32,
"score": 74
},
{
"classRank": 7,
"schoolRank": 33,
"score": 73.5
},
{
"classRank": 8,
"schoolRank": 34,
"score": 73
},
{
"classRank": 9,
"schoolRank": 34,
"score": 73
},
{
"classRank": 10,
"schoolRank": 35,
"score": 72.5
},
{
"classRank": 11,
"schoolRank": 40,
"score": 69.5
},
{
"classRank": 12,
"schoolRank": 41,
"score": 69
},
{
"classRank": 13,
"schoolRank": 41,
"score": 69
},
{
"classRank": 14,
"schoolRank": 49,
"score": 65
},
{
"classRank": 15,
"schoolRank": 51,
"score": 64
},
{
"classRank": 16,
"schoolRank": 51,
"score": 64
},
{
"classRank": 17,
"schoolRank": 52,
"score": 63.5
},
{
"classRank": 18,
"schoolRank": 52,
"score": 63.5
},
{
"classRank": 19,
"schoolRank": 53,
"score": 63
},
{
"classRank": 20,
"schoolRank": 58,
"score": 60.5
},
{
"classRank": 21,
"schoolRank": 59,
"score": 60
},
{
"classRank": 22,
"schoolRank": 61,
"score": 59
},
{
"classRank": 23,
"schoolRank": 62,
"score": 58.5
},
{
"classRank": 24,
"schoolRank": 62,
"score": 58.5
},
{
"classRank": 25,
"schoolRank": 68,
"score": 55.5
},
{
"classRank": 26,
"schoolRank": 69,
"score": 55
},
{
"classRank": 27,
"schoolRank": 70,
"score": 54.5
},
{
"classRank": 28,
"schoolRank": 72,
"score": 53.5
},
{
"classRank": 29,
"schoolRank": 72,
"score": 53.5
},
{
"classRank": 30,
"schoolRank": 75,
"score": 52
},
{
"classRank": 31,
"schoolRank": 79,
"score": 50
},
{
"classRank": 32,
"schoolRank": 81,
"score": 49
},
{
"classRank": 33,
"schoolRank": 84,
"score": 47.5
},
{
"classRank": 34,
"schoolRank": 86,
"score": 46.5
},
{
"classRank": 35,
"schoolRank": 86,
"score": 46.5
},
{
"classRank": 36,
"schoolRank": 87,
"score": 46
},
{
"classRank": 37,
"schoolRank": 88,
"score": 45.5
},
{
"classRank": 38,
"schoolRank": 88,
"score": 45.5
},
{
"classRank": 39,
"schoolRank": 93,
"score": 43
},
{
"classRank": 40,
"schoolRank": 94,
"score": 42.5
},
{
"classRank": 41,
"schoolRank": 95,
"score": 42
},
{
"classRank": 42,
"schoolRank": 97,
"score": 40.5
},
{
"classRank": 43,
"schoolRank": 99,
"score": 39.5
},
{
"classRank": 44,
"schoolRank": 102,
"score": 38
},
{
"classRank": 45,
"schoolRank": 103,
"score": 37.5
},
{
"classRank": 46,
"schoolRank": 104,
"score": 37
},
{
"classRank": 47,
"schoolRank": 107,
"score": 35
},
{
"classRank": 48,
"schoolRank": 108,
"score": 29.5
}
],
"高二06班": [
{
"classRank": 1,
"schoolRank": 8,
"score": 86
},
{
"classRank": 2,
"schoolRank": 9,
"score": 85.5
},
{
"classRank": 3,
"schoolRank": 15,
"score": 82.5
},
{
"classRank": 4,
"schoolRank": 15,
"score": 82.5
},
{
"classRank": 5,
"schoolRank": 16,
"score": 82
},
{
"classRank": 6,
"schoolRank": 21,
"score": 79.5
},
{
"classRank": 7,
"schoolRank": 21,
"score": 79.5
},
{
"classRank": 8,
"schoolRank": 23,
"score": 78.5
},
{
"classRank": 9,
"schoolRank": 25,
"score": 77.5
},
{
"classRank": 10,
"schoolRank": 34,
"score": 73
},
{
"classRank": 11,
"schoolRank": 38,
"score": 70.5
},
{
"classRank": 12,
"schoolRank": 38,
"score": 70.5
},
{
"classRank": 13,
"schoolRank": 38,
"score": 70.5
},
{
"classRank": 14,
"schoolRank": 38,
"score": 70.5
},
{
"classRank": 15,
"schoolRank": 39,
"score": 70
},
{
"classRank": 16,
"schoolRank": 40,
"score": 69.5
},
{
"classRank": 17,
"schoolRank": 42,
"score": 68.5
},
{
"classRank": 18,
"schoolRank": 48,
"score": 65.5
},
{
"classRank": 19,
"schoolRank": 48,
"score": 65.5
},
{
"classRank": 20,
"schoolRank": 48,
"score": 65.5
},
{
"classRank": 21,
"schoolRank": 49,
"score": 65
},
{
"classRank": 22,
"schoolRank": 51,
"score": 64
},
{
"classRank": 23,
"schoolRank": 51,
"score": 64
},
{
"classRank": 24,
"schoolRank": 52,
"score": 63.5
},
{
"classRank": 25,
"schoolRank": 53,
"score": 63
},
{
"classRank": 26,
"schoolRank": 60,
"score": 59.5
},
{
"classRank": 27,
"schoolRank": 62,
"score": 58.5
},
{
"classRank": 28,
"schoolRank": 62,
"score": 58.5
},
{
"classRank": 29,
"schoolRank": 65,
"score": 57
},
{
"classRank": 30,
"schoolRank": 66,
"score": 56.5
},
{
"classRank": 31,
"schoolRank": 67,
"score": 56
},
{
"classRank": 32,
"schoolRank": 72,
"score": 53.5
},
{
"classRank": 33,
"schoolRank": 75,
"score": 52
},
{
"classRank": 34,
"schoolRank": 77,
"score": 51
},
{
"classRank": 35,
"schoolRank": 79,
"score": 50
},
{
"classRank": 36,
"schoolRank": 80,
"score": 49.5
},
{
"classRank": 37,
"schoolRank": 80,
"score": 49.5
},
{
"classRank": 38,
"schoolRank": 83,
"score": 48
},
{
"classRank": 39,
"schoolRank": 85,
"score": 47
},
{
"classRank": 40,
"schoolRank": 89,
"score": 45
},
{
"classRank": 41,
"schoolRank": 90,
"score": 44.5
},
{
"classRank": 42,
"schoolRank": 90,
"score": 44.5
},
{
"classRank": 43,
"schoolRank": 92,
"score": 43.5
},
{
"classRank": 44,
"schoolRank": 94,
"score": 42.5
},
{
"classRank": 45,
"schoolRank": 101,
"score": 38.5
}
],
"高二07班": [
{
"classRank": 1,
"schoolRank": 14,
"score": 83
},
{
"classRank": 2,
"schoolRank": 17,
"score": 81.5
},
{
"classRank": 3,
"schoolRank": 20,
"score": 80
},
{
"classRank": 4,
"schoolRank": 21,
"score": 79.5
},
{
"classRank": 5,
"schoolRank": 22,
"score": 79
},
{
"classRank": 6,
"schoolRank": 24,
"score": 78
},
{
"classRank": 7,
"schoolRank": 28,
"score": 76
},
{
"classRank": 8,
"schoolRank": 28,
"score": 76
},
{
"classRank": 9,
"schoolRank": 32,
"score": 74
},
{
"classRank": 10,
"schoolRank": 34,
"score": 73
},
{
"classRank": 11,
"schoolRank": 35,
"score": 72.5
},
{
"classRank": 12,
"schoolRank": 38,
"score": 70.5
},
{
"classRank": 13,
"schoolRank": 40,
"score": 69.5
},
{
"classRank": 14,
"schoolRank": 42,
"score": 68.5
},
{
"classRank": 15,
"schoolRank": 43,
"score": 68
},
{
"classRank": 16,
"schoolRank": 45,
"score": 67
},
{
"classRank": 17,
"schoolRank": 46,
"score": 66.5
},
{
"classRank": 18,
"schoolRank": 46,
"score": 66.5
},
{
"classRank": 19,
"schoolRank": 46,
"score": 66.5
},
{
"classRank": 20,
"schoolRank": 50,
"score": 64.5
},
{
"classRank": 21,
"schoolRank": 50,
"score": 64.5
},
{
"classRank": 22,
"schoolRank": 57,
"score": 61
},
{
"classRank": 23,
"schoolRank": 57,
"score": 61
},
{
"classRank": 24,
"schoolRank": 59,
"score": 60
},
{
"classRank": 25,
"schoolRank": 59,
"score": 60
},
{
"classRank": 26,
"schoolRank": 61,
"score": 59
},
{
"classRank": 27,
"schoolRank": 69,
"score": 55
},
{
"classRank": 28,
"schoolRank": 71,
"score": 54
},
{
"classRank": 29,
"schoolRank": 72,
"score": 53.5
},
{
"classRank": 30,
"schoolRank": 75,
"score": 52
},
{
"classRank": 31,
"schoolRank": 76,
"score": 51.5
},
{
"classRank": 32,
"schoolRank": 76,
"score": 51.5
},
{
"classRank": 33,
"schoolRank": 79,
"score": 50
},
{
"classRank": 34,
"schoolRank": 80,
"score": 49.5
},
{
"classRank": 35,
"schoolRank": 80,
"score": 49.5
},
{
"classRank": 36,
"schoolRank": 88,
"score": 45.5
},
{
"classRank": 37,
"schoolRank": 89,
"score": 45
}
]
};
var ge5 = [];
getyk(data, ge5);
setMapS2(ge5, '化学', 'm2-5');
data={
"高二01班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 95
},
{
"classRank": 2,
"schoolRank": 4,
"score": 89
},
{
"classRank": 3,
"schoolRank": 6,
"score": 86.5
},
{
"classRank": 4,
"schoolRank": 9,
"score": 85
},
{
"classRank": 5,
"schoolRank": 13,
"score": 83
},
{
"classRank": 6,
"schoolRank": 14,
"score": 82.5
},
{
"classRank": 7,
"schoolRank": 16,
"score": 81
},
{
"classRank": 8,
"schoolRank": 16,
"score": 81
},
{
"classRank": 9,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 10,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 11,
"schoolRank": 24,
"score": 77
},
{
"classRank": 12,
"schoolRank": 26,
"score": 76
},
{
"classRank": 13,
"schoolRank": 26,
"score": 76
},
{
"classRank": 14,
"schoolRank": 26,
"score": 76
},
{
"classRank": 15,
"schoolRank": 28,
"score": 75
},
{
"classRank": 16,
"schoolRank": 30,
"score": 74
},
{
"classRank": 17,
"schoolRank": 32,
"score": 73
},
{
"classRank": 18,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 19,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 20,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 21,
"schoolRank": 36,
"score": 71
},
{
"classRank": 22,
"schoolRank": 42,
"score": 67.5
},
{
"classRank": 23,
"schoolRank": 44,
"score": 66.5
},
{
"classRank": 24,
"schoolRank": 44,
"score": 66.5
},
{
"classRank": 25,
"schoolRank": 47,
"score": 65
},
{
"classRank": 26,
"schoolRank": 51,
"score": 63
},
{
"classRank": 27,
"schoolRank": 51,
"score": 63
},
{
"classRank": 28,
"schoolRank": 54,
"score": 61.5
},
{
"classRank": 29,
"schoolRank": 55,
"score": 61
},
{
"classRank": 30,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 31,
"schoolRank": 59,
"score": 59
},
{
"classRank": 32,
"schoolRank": 59,
"score": 59
},
{
"classRank": 33,
"schoolRank": 66,
"score": 55.5
},
{
"classRank": 34,
"schoolRank": 67,
"score": 55
},
{
"classRank": 35,
"schoolRank": 67,
"score": 55
},
{
"classRank": 36,
"schoolRank": 67,
"score": 55
},
{
"classRank": 37,
"schoolRank": 68,
"score": 54.5
},
{
"classRank": 38,
"schoolRank": 71,
"score": 53
},
{
"classRank": 39,
"schoolRank": 77,
"score": 50
},
{
"classRank": 40,
"schoolRank": 79,
"score": 49
},
{
"classRank": 41,
"schoolRank": 81,
"score": 48
},
{
"classRank": 42,
"schoolRank": 83,
"score": 47
},
{
"classRank": 43,
"schoolRank": 84,
"score": 46.5
},
{
"classRank": 44,
"schoolRank": 84,
"score": 46.5
},
{
"classRank": 45,
"schoolRank": 87,
"score": 45
},
{
"classRank": 46,
"schoolRank": 88,
"score": 44.5
},
{
"classRank": 47,
"schoolRank": 96,
"score": 39
},
{
"classRank": 48,
"schoolRank": 97,
"score": 38.5
}
],
"高二10班": [
{
"classRank": 1,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 2,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 3,
"schoolRank": 26,
"score": 76
},
{
"classRank": 4,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 5,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 6,
"schoolRank": 32,
"score": 73
},
{
"classRank": 7,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 8,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 9,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 10,
"schoolRank": 36,
"score": 71
},
{
"classRank": 11,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 12,
"schoolRank": 43,
"score": 67
},
{
"classRank": 13,
"schoolRank": 43,
"score": 67
},
{
"classRank": 14,
"schoolRank": 44,
"score": 66.5
},
{
"classRank": 15,
"schoolRank": 44,
"score": 66.5
},
{
"classRank": 16,
"schoolRank": 46,
"score": 65.5
},
{
"classRank": 17,
"schoolRank": 46,
"score": 65.5
},
{
"classRank": 18,
"schoolRank": 47,
"score": 65
},
{
"classRank": 19,
"schoolRank": 48,
"score": 64.5
},
{
"classRank": 20,
"schoolRank": 49,
"score": 64
},
{
"classRank": 21,
"schoolRank": 54,
"score": 61.5
},
{
"classRank": 22,
"schoolRank": 57,
"score": 60
},
{
"classRank": 23,
"schoolRank": 62,
"score": 57.5
},
{
"classRank": 24,
"schoolRank": 65,
"score": 56
},
{
"classRank": 25,
"schoolRank": 66,
"score": 55.5
},
{
"classRank": 26,
"schoolRank": 67,
"score": 55
},
{
"classRank": 27,
"schoolRank": 68,
"score": 54.5
},
{
"classRank": 28,
"schoolRank": 69,
"score": 54
},
{
"classRank": 29,
"schoolRank": 69,
"score": 54
},
{
"classRank": 30,
"schoolRank": 71,
"score": 53
},
{
"classRank": 31,
"schoolRank": 74,
"score": 51.5
},
{
"classRank": 32,
"schoolRank": 75,
"score": 51
},
{
"classRank": 33,
"schoolRank": 75,
"score": 51
},
{
"classRank": 34,
"schoolRank": 79,
"score": 49
},
{
"classRank": 35,
"schoolRank": 81,
"score": 48
},
{
"classRank": 36,
"schoolRank": 84,
"score": 46.5
},
{
"classRank": 37,
"schoolRank": 85,
"score": 46
},
{
"classRank": 38,
"schoolRank": 86,
"score": 45.5
},
{
"classRank": 39,
"schoolRank": 91,
"score": 42
}
],
"高二04班": [
{
"classRank": 1,
"schoolRank": 4,
"score": 89
},
{
"classRank": 2,
"schoolRank": 7,
"score": 86
},
{
"classRank": 3,
"schoolRank": 8,
"score": 85.5
},
{
"classRank": 4,
"schoolRank": 11,
"score": 84
},
{
"classRank": 5,
"schoolRank": 14,
"score": 82.5
},
{
"classRank": 6,
"schoolRank": 15,
"score": 82
},
{
"classRank": 7,
"schoolRank": 18,
"score": 80
},
{
"classRank": 8,
"schoolRank": 18,
"score": 80
},
{
"classRank": 9,
"schoolRank": 22,
"score": 78
},
{
"classRank": 10,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 11,
"schoolRank": 24,
"score": 77
},
{
"classRank": 12,
"schoolRank": 24,
"score": 77
},
{
"classRank": 13,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 14,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 15,
"schoolRank": 34,
"score": 72
},
{
"classRank": 16,
"schoolRank": 38,
"score": 70
},
{
"classRank": 17,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 18,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 19,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 20,
"schoolRank": 42,
"score": 67.5
},
{
"classRank": 21,
"schoolRank": 43,
"score": 67
},
{
"classRank": 22,
"schoolRank": 43,
"score": 67
},
{
"classRank": 23,
"schoolRank": 45,
"score": 66
},
{
"classRank": 24,
"schoolRank": 49,
"score": 64
},
{
"classRank": 25,
"schoolRank": 49,
"score": 64
},
{
"classRank": 26,
"schoolRank": 49,
"score": 64
},
{
"classRank": 27,
"schoolRank": 50,
"score": 63.5
},
{
"classRank": 28,
"schoolRank": 53,
"score": 62
},
{
"classRank": 29,
"schoolRank": 62,
"score": 57.5
},
{
"classRank": 30,
"schoolRank": 63,
"score": 57
},
{
"classRank": 31,
"schoolRank": 63,
"score": 57
},
{
"classRank": 32,
"schoolRank": 68,
"score": 54.5
},
{
"classRank": 33,
"schoolRank": 69,
"score": 54
},
{
"classRank": 34,
"schoolRank": 70,
"score": 53.5
},
{
"classRank": 35,
"schoolRank": 75,
"score": 51
},
{
"classRank": 36,
"schoolRank": 78,
"score": 49.5
}
],
"高二05班": [
{
"classRank": 1,
"schoolRank": 5,
"score": 88
},
{
"classRank": 2,
"schoolRank": 15,
"score": 82
},
{
"classRank": 3,
"schoolRank": 16,
"score": 81
},
{
"classRank": 4,
"schoolRank": 16,
"score": 81
},
{
"classRank": 5,
"schoolRank": 18,
"score": 80
},
{
"classRank": 6,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 7,
"schoolRank": 22,
"score": 78
},
{
"classRank": 8,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 9,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 10,
"schoolRank": 30,
"score": 74
},
{
"classRank": 11,
"schoolRank": 30,
"score": 74
},
{
"classRank": 12,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 13,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 14,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 15,
"schoolRank": 38,
"score": 70
},
{
"classRank": 16,
"schoolRank": 42,
"score": 67.5
},
{
"classRank": 17,
"schoolRank": 43,
"score": 67
},
{
"classRank": 18,
"schoolRank": 44,
"score": 66.5
},
{
"classRank": 19,
"schoolRank": 44,
"score": 66.5
},
{
"classRank": 20,
"schoolRank": 46,
"score": 65.5
},
{
"classRank": 21,
"schoolRank": 47,
"score": 65
},
{
"classRank": 22,
"schoolRank": 48,
"score": 64.5
},
{
"classRank": 23,
"schoolRank": 50,
"score": 63.5
},
{
"classRank": 24,
"schoolRank": 51,
"score": 63
},
{
"classRank": 25,
"schoolRank": 53,
"score": 62
},
{
"classRank": 26,
"schoolRank": 56,
"score": 60.5
},
{
"classRank": 27,
"schoolRank": 57,
"score": 60
},
{
"classRank": 28,
"schoolRank": 57,
"score": 60
},
{
"classRank": 29,
"schoolRank": 64,
"score": 56.5
},
{
"classRank": 30,
"schoolRank": 66,
"score": 55.5
},
{
"classRank": 31,
"schoolRank": 68,
"score": 54.5
},
{
"classRank": 32,
"schoolRank": 68,
"score": 54.5
},
{
"classRank": 33,
"schoolRank": 72,
"score": 52.5
},
{
"classRank": 34,
"schoolRank": 73,
"score": 52
},
{
"classRank": 35,
"schoolRank": 74,
"score": 51.5
},
{
"classRank": 36,
"schoolRank": 75,
"score": 51
},
{
"classRank": 37,
"schoolRank": 76,
"score": 50.5
},
{
"classRank": 38,
"schoolRank": 78,
"score": 49.5
},
{
"classRank": 39,
"schoolRank": 78,
"score": 49.5
},
{
"classRank": 40,
"schoolRank": 83,
"score": 47
},
{
"classRank": 41,
"schoolRank": 84,
"score": 46.5
},
{
"classRank": 42,
"schoolRank": 84,
"score": 46.5
}
],
"高二02班": [
{
"classRank": 1,
"schoolRank": 3,
"score": 89.5
},
{
"classRank": 2,
"schoolRank": 7,
"score": 86
},
{
"classRank": 3,
"schoolRank": 8,
"score": 85.5
},
{
"classRank": 4,
"schoolRank": 10,
"score": 84.5
},
{
"classRank": 5,
"schoolRank": 13,
"score": 83
},
{
"classRank": 6,
"schoolRank": 14,
"score": 82.5
},
{
"classRank": 7,
"schoolRank": 16,
"score": 81
},
{
"classRank": 8,
"schoolRank": 18,
"score": 80
},
{
"classRank": 9,
"schoolRank": 18,
"score": 80
},
{
"classRank": 10,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 11,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 12,
"schoolRank": 25,
"score": 76.5
},
{
"classRank": 13,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 14,
"schoolRank": 28,
"score": 75
},
{
"classRank": 15,
"schoolRank": 30,
"score": 74
},
{
"classRank": 16,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 17,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 18,
"schoolRank": 36,
"score": 71
},
{
"classRank": 19,
"schoolRank": 36,
"score": 71
},
{
"classRank": 20,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 21,
"schoolRank": 38,
"score": 70
},
{
"classRank": 22,
"schoolRank": 42,
"score": 67.5
},
{
"classRank": 23,
"schoolRank": 44,
"score": 66.5
},
{
"classRank": 24,
"schoolRank": 45,
"score": 66
},
{
"classRank": 25,
"schoolRank": 46,
"score": 65.5
},
{
"classRank": 26,
"schoolRank": 54,
"score": 61.5
},
{
"classRank": 27,
"schoolRank": 54,
"score": 61.5
},
{
"classRank": 28,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 29,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 30,
"schoolRank": 61,
"score": 58
},
{
"classRank": 31,
"schoolRank": 63,
"score": 57
},
{
"classRank": 32,
"schoolRank": 65,
"score": 56
},
{
"classRank": 33,
"schoolRank": 69,
"score": 54
},
{
"classRank": 34,
"schoolRank": 69,
"score": 54
},
{
"classRank": 35,
"schoolRank": 69,
"score": 54
},
{
"classRank": 36,
"schoolRank": 70,
"score": 53.5
},
{
"classRank": 37,
"schoolRank": 72,
"score": 52.5
},
{
"classRank": 38,
"schoolRank": 74,
"score": 51.5
},
{
"classRank": 39,
"schoolRank": 76,
"score": 50.5
},
{
"classRank": 40,
"schoolRank": 77,
"score": 50
},
{
"classRank": 41,
"schoolRank": 78,
"score": 49.5
},
{
"classRank": 42,
"schoolRank": 87,
"score": 45
},
{
"classRank": 43,
"schoolRank": 89,
"score": 43.5
},
{
"classRank": 44,
"schoolRank": 91,
"score": 42
},
{
"classRank": 45,
"schoolRank": 93,
"score": 41
},
{
"classRank": 46,
"schoolRank": 93,
"score": 41
},
{
"classRank": 47,
"schoolRank": 98,
"score": 38
}
],
"高二03班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 94
},
{
"classRank": 2,
"schoolRank": 4,
"score": 89
},
{
"classRank": 3,
"schoolRank": 5,
"score": 88
},
{
"classRank": 4,
"schoolRank": 9,
"score": 85
},
{
"classRank": 5,
"schoolRank": 9,
"score": 85
},
{
"classRank": 6,
"schoolRank": 12,
"score": 83.5
},
{
"classRank": 7,
"schoolRank": 12,
"score": 83.5
},
{
"classRank": 8,
"schoolRank": 18,
"score": 80
},
{
"classRank": 9,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 10,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 11,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 12,
"schoolRank": 28,
"score": 75
},
{
"classRank": 13,
"schoolRank": 28,
"score": 75
},
{
"classRank": 14,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 15,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 16,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 17,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 18,
"schoolRank": 38,
"score": 70
},
{
"classRank": 19,
"schoolRank": 40,
"score": 69
},
{
"classRank": 20,
"schoolRank": 44,
"score": 66.5
},
{
"classRank": 21,
"schoolRank": 45,
"score": 66
},
{
"classRank": 22,
"schoolRank": 46,
"score": 65.5
},
{
"classRank": 23,
"schoolRank": 48,
"score": 64.5
},
{
"classRank": 24,
"schoolRank": 49,
"score": 64
},
{
"classRank": 25,
"schoolRank": 49,
"score": 64
},
{
"classRank": 26,
"schoolRank": 50,
"score": 63.5
},
{
"classRank": 27,
"schoolRank": 54,
"score": 61.5
},
{
"classRank": 28,
"schoolRank": 56,
"score": 60.5
},
{
"classRank": 29,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 30,
"schoolRank": 61,
"score": 58
},
{
"classRank": 31,
"schoolRank": 62,
"score": 57.5
},
{
"classRank": 32,
"schoolRank": 63,
"score": 57
},
{
"classRank": 33,
"schoolRank": 64,
"score": 56.5
},
{
"classRank": 34,
"schoolRank": 65,
"score": 56
},
{
"classRank": 35,
"schoolRank": 72,
"score": 52.5
},
{
"classRank": 36,
"schoolRank": 77,
"score": 50
},
{
"classRank": 37,
"schoolRank": 78,
"score": 49.5
},
{
"classRank": 38,
"schoolRank": 79,
"score": 49
},
{
"classRank": 39,
"schoolRank": 81,
"score": 48
},
{
"classRank": 40,
"schoolRank": 81,
"score": 48
},
{
"classRank": 41,
"schoolRank": 81,
"score": 48
},
{
"classRank": 42,
"schoolRank": 84,
"score": 46.5
}
],
"高二08班": [
{
"classRank": 1,
"schoolRank": 16,
"score": 81
},
{
"classRank": 2,
"schoolRank": 17,
"score": 80.5
},
{
"classRank": 3,
"schoolRank": 18,
"score": 80
},
{
"classRank": 4,
"schoolRank": 18,
"score": 80
},
{
"classRank": 5,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 6,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 7,
"schoolRank": 24,
"score": 77
},
{
"classRank": 8,
"schoolRank": 26,
"score": 76
},
{
"classRank": 9,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 10,
"schoolRank": 34,
"score": 72
},
{
"classRank": 11,
"schoolRank": 34,
"score": 72
},
{
"classRank": 12,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 13,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 14,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 15,
"schoolRank": 40,
"score": 69
},
{
"classRank": 16,
"schoolRank": 42,
"score": 67.5
},
{
"classRank": 17,
"schoolRank": 43,
"score": 67
},
{
"classRank": 18,
"schoolRank": 45,
"score": 66
},
{
"classRank": 19,
"schoolRank": 47,
"score": 65
},
{
"classRank": 20,
"schoolRank": 48,
"score": 64.5
},
{
"classRank": 21,
"schoolRank": 51,
"score": 63
},
{
"classRank": 22,
"schoolRank": 56,
"score": 60.5
},
{
"classRank": 23,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 24,
"schoolRank": 61,
"score": 58
},
{
"classRank": 25,
"schoolRank": 64,
"score": 56.5
},
{
"classRank": 26,
"schoolRank": 68,
"score": 54.5
},
{
"classRank": 27,
"schoolRank": 69,
"score": 54
},
{
"classRank": 28,
"schoolRank": 69,
"score": 54
},
{
"classRank": 29,
"schoolRank": 70,
"score": 53.5
},
{
"classRank": 30,
"schoolRank": 73,
"score": 52
},
{
"classRank": 31,
"schoolRank": 78,
"score": 49.5
},
{
"classRank": 32,
"schoolRank": 81,
"score": 48
},
{
"classRank": 33,
"schoolRank": 82,
"score": 47.5
},
{
"classRank": 34,
"schoolRank": 83,
"score": 47
},
{
"classRank": 35,
"schoolRank": 83,
"score": 47
}
],
"高二09班": [
{
"classRank": 1,
"schoolRank": 16,
"score": 81
},
{
"classRank": 2,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 3,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 4,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 5,
"schoolRank": 22,
"score": 78
},
{
"classRank": 6,
"schoolRank": 25,
"score": 76.5
},
{
"classRank": 7,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 8,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 9,
"schoolRank": 32,
"score": 73
},
{
"classRank": 10,
"schoolRank": 32,
"score": 73
},
{
"classRank": 11,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 12,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 13,
"schoolRank": 42,
"score": 67.5
},
{
"classRank": 14,
"schoolRank": 43,
"score": 67
},
{
"classRank": 15,
"schoolRank": 43,
"score": 67
},
{
"classRank": 16,
"schoolRank": 44,
"score": 66.5
},
{
"classRank": 17,
"schoolRank": 45,
"score": 66
},
{
"classRank": 18,
"schoolRank": 46,
"score": 65.5
},
{
"classRank": 19,
"schoolRank": 47,
"score": 65
},
{
"classRank": 20,
"schoolRank": 47,
"score": 65
},
{
"classRank": 21,
"schoolRank": 50,
"score": 63.5
},
{
"classRank": 22,
"schoolRank": 54,
"score": 61.5
},
{
"classRank": 23,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 24,
"schoolRank": 61,
"score": 58
},
{
"classRank": 25,
"schoolRank": 62,
"score": 57.5
},
{
"classRank": 26,
"schoolRank": 66,
"score": 55.5
},
{
"classRank": 27,
"schoolRank": 67,
"score": 55
},
{
"classRank": 28,
"schoolRank": 67,
"score": 55
},
{
"classRank": 29,
"schoolRank": 69,
"score": 54
},
{
"classRank": 30,
"schoolRank": 72,
"score": 52.5
},
{
"classRank": 31,
"schoolRank": 72,
"score": 52.5
},
{
"classRank": 32,
"schoolRank": 76,
"score": 50.5
},
{
"classRank": 33,
"schoolRank": 79,
"score": 49
},
{
"classRank": 34,
"schoolRank": 83,
"score": 47
},
{
"classRank": 35,
"schoolRank": 87,
"score": 45
},
{
"classRank": 36,
"schoolRank": 87,
"score": 45
},
{
"classRank": 37,
"schoolRank": 87,
"score": 45
},
{
"classRank": 38,
"schoolRank": 88,
"score": 44.5
},
{
"classRank": 39,
"schoolRank": 88,
"score": 44.5
},
{
"classRank": 40,
"schoolRank": 90,
"score": 42.5
},
{
"classRank": 41,
"schoolRank": 92,
"score": 41.5
},
{
"classRank": 42,
"schoolRank": 94,
"score": 40.5
},
{
"classRank": 43,
"schoolRank": 95,
"score": 40
},
{
"classRank": 44,
"schoolRank": 97,
"score": 38.5
},
{
"classRank": 45,
"schoolRank": 100,
"score": 37
},
{
"classRank": 46,
"schoolRank": 101,
"score": 34
},
{
"classRank": 47,
"schoolRank": 102,
"score": 33.5
},
{
"classRank": 48,
"schoolRank": 103,
"score": 30
}
],
"高二06班": [
{
"classRank": 1,
"schoolRank": 6,
"score": 86.5
},
{
"classRank": 2,
"schoolRank": 10,
"score": 84.5
},
{
"classRank": 3,
"schoolRank": 17,
"score": 80.5
},
{
"classRank": 4,
"schoolRank": 20,
"score": 79
},
{
"classRank": 5,
"schoolRank": 20,
"score": 79
},
{
"classRank": 6,
"schoolRank": 24,
"score": 77
},
{
"classRank": 7,
"schoolRank": 24,
"score": 77
},
{
"classRank": 8,
"schoolRank": 25,
"score": 76.5
},
{
"classRank": 9,
"schoolRank": 26,
"score": 76
},
{
"classRank": 10,
"schoolRank": 26,
"score": 76
},
{
"classRank": 11,
"schoolRank": 28,
"score": 75
},
{
"classRank": 12,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 13,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 14,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 15,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 16,
"schoolRank": 44,
"score": 66.5
},
{
"classRank": 17,
"schoolRank": 46,
"score": 65.5
},
{
"classRank": 18,
"schoolRank": 48,
"score": 64.5
},
{
"classRank": 19,
"schoolRank": 50,
"score": 63.5
},
{
"classRank": 20,
"schoolRank": 51,
"score": 63
},
{
"classRank": 21,
"schoolRank": 53,
"score": 62
},
{
"classRank": 22,
"schoolRank": 54,
"score": 61.5
},
{
"classRank": 23,
"schoolRank": 54,
"score": 61.5
},
{
"classRank": 24,
"schoolRank": 54,
"score": 61.5
},
{
"classRank": 25,
"schoolRank": 55,
"score": 61
},
{
"classRank": 26,
"schoolRank": 56,
"score": 60.5
},
{
"classRank": 27,
"schoolRank": 57,
"score": 60
},
{
"classRank": 28,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 29,
"schoolRank": 64,
"score": 56.5
},
{
"classRank": 30,
"schoolRank": 67,
"score": 55
},
{
"classRank": 31,
"schoolRank": 69,
"score": 54
},
{
"classRank": 32,
"schoolRank": 74,
"score": 51.5
},
{
"classRank": 33,
"schoolRank": 80,
"score": 48.5
},
{
"classRank": 34,
"schoolRank": 81,
"score": 48
},
{
"classRank": 35,
"schoolRank": 81,
"score": 48
},
{
"classRank": 36,
"schoolRank": 83,
"score": 47
},
{
"classRank": 37,
"schoolRank": 83,
"score": 47
},
{
"classRank": 38,
"schoolRank": 85,
"score": 46
},
{
"classRank": 39,
"schoolRank": 87,
"score": 45
},
{
"classRank": 40,
"schoolRank": 87,
"score": 45
},
{
"classRank": 41,
"schoolRank": 88,
"score": 44.5
},
{
"classRank": 42,
"schoolRank": 88,
"score": 44.5
},
{
"classRank": 43,
"schoolRank": 89,
"score": 43.5
},
{
"classRank": 44,
"schoolRank": 99,
"score": 37.5
},
{
"classRank": 45,
"schoolRank": 101,
"score": 34
}
],
"高二07班": [
{
"classRank": 1,
"schoolRank": 6,
"score": 86.5
},
{
"classRank": 2,
"schoolRank": 12,
"score": 83.5
},
{
"classRank": 3,
"schoolRank": 14,
"score": 82.5
},
{
"classRank": 4,
"schoolRank": 17,
"score": 80.5
},
{
"classRank": 5,
"schoolRank": 20,
"score": 79
},
{
"classRank": 6,
"schoolRank": 22,
"score": 78
},
{
"classRank": 7,
"schoolRank": 25,
"score": 76.5
},
{
"classRank": 8,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 9,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 10,
"schoolRank": 34,
"score": 72
},
{
"classRank": 11,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 12,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 13,
"schoolRank": 38,
"score": 70
},
{
"classRank": 14,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 15,
"schoolRank": 40,
"score": 69
},
{
"classRank": 16,
"schoolRank": 40,
"score": 69
},
{
"classRank": 17,
"schoolRank": 43,
"score": 67
},
{
"classRank": 18,
"schoolRank": 47,
"score": 65
},
{
"classRank": 19,
"schoolRank": 50,
"score": 63.5
},
{
"classRank": 20,
"schoolRank": 50,
"score": 63.5
},
{
"classRank": 21,
"schoolRank": 52,
"score": 62.5
},
{
"classRank": 22,
"schoolRank": 56,
"score": 60.5
},
{
"classRank": 23,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 24,
"schoolRank": 60,
"score": 58.5
},
{
"classRank": 25,
"schoolRank": 62,
"score": 57.5
},
{
"classRank": 26,
"schoolRank": 63,
"score": 57
},
{
"classRank": 27,
"schoolRank": 65,
"score": 56
},
{
"classRank": 28,
"schoolRank": 66,
"score": 55.5
},
{
"classRank": 29,
"schoolRank": 68,
"score": 54.5
},
{
"classRank": 30,
"schoolRank": 69,
"score": 54
},
{
"classRank": 31,
"schoolRank": 69,
"score": 54
},
{
"classRank": 32,
"schoolRank": 73,
"score": 52
},
{
"classRank": 33,
"schoolRank": 74,
"score": 51.5
},
{
"classRank": 34,
"schoolRank": 75,
"score": 51
},
{
"classRank": 35,
"schoolRank": 81,
"score": 48
},
{
"classRank": 36,
"schoolRank": 82,
"score": 47.5
},
{
"classRank": 37,
"schoolRank": 82,
"score": 47.5
}
]
};
var ge6 = [];
getyk(data, ge6);
setMapS2(ge6, '生物', 'm2-6');
data={
"高二01班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 90
},
{
"classRank": 2,
"schoolRank": 2,
"score": 89
},
{
"classRank": 3,
"schoolRank": 4,
"score": 87.5
},
{
"classRank": 4,
"schoolRank": 5,
"score": 87
},
{
"classRank": 5,
"schoolRank": 6,
"score": 86.5
},
{
"classRank": 6,
"schoolRank": 7,
"score": 86
},
{
"classRank": 7,
"schoolRank": 11,
"score": 83.5
},
{
"classRank": 8,
"schoolRank": 12,
"score": 83
},
{
"classRank": 9,
"schoolRank": 18,
"score": 79.5
},
{
"classRank": 10,
"schoolRank": 18,
"score": 79.5
},
{
"classRank": 11,
"schoolRank": 19,
"score": 79
},
{
"classRank": 12,
"schoolRank": 20,
"score": 78.5
},
{
"classRank": 13,
"schoolRank": 24,
"score": 76.5
},
{
"classRank": 14,
"schoolRank": 25,
"score": 76
},
{
"classRank": 15,
"schoolRank": 28,
"score": 74.5
},
{
"classRank": 16,
"schoolRank": 31,
"score": 73
},
{
"classRank": 17,
"schoolRank": 33,
"score": 72
},
{
"classRank": 18,
"schoolRank": 35,
"score": 71
},
{
"classRank": 19,
"schoolRank": 36,
"score": 70.5
},
{
"classRank": 20,
"schoolRank": 39,
"score": 69
},
{
"classRank": 21,
"schoolRank": 41,
"score": 68
},
{
"classRank": 22,
"schoolRank": 42,
"score": 67.5
},
{
"classRank": 23,
"schoolRank": 43,
"score": 67
},
{
"classRank": 24,
"schoolRank": 45,
"score": 66
},
{
"classRank": 25,
"schoolRank": 48,
"score": 64.5
},
{
"classRank": 26,
"schoolRank": 50,
"score": 63.5
},
{
"classRank": 27,
"schoolRank": 54,
"score": 61.5
},
{
"classRank": 28,
"schoolRank": 56,
"score": 60.5
},
{
"classRank": 29,
"schoolRank": 56,
"score": 60.5
},
{
"classRank": 30,
"schoolRank": 57,
"score": 60
},
{
"classRank": 31,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 32,
"schoolRank": 61,
"score": 58
},
{
"classRank": 33,
"schoolRank": 65,
"score": 56
},
{
"classRank": 34,
"schoolRank": 67,
"score": 55
},
{
"classRank": 35,
"schoolRank": 69,
"score": 54
},
{
"classRank": 36,
"schoolRank": 70,
"score": 53.5
},
{
"classRank": 37,
"schoolRank": 72,
"score": 52.5
},
{
"classRank": 38,
"schoolRank": 72,
"score": 52.5
},
{
"classRank": 39,
"schoolRank": 74,
"score": 51.5
},
{
"classRank": 40,
"schoolRank": 75,
"score": 51
},
{
"classRank": 41,
"schoolRank": 76,
"score": 50.5
},
{
"classRank": 42,
"schoolRank": 82,
"score": 47.5
},
{
"classRank": 43,
"schoolRank": 83,
"score": 47
},
{
"classRank": 44,
"schoolRank": 89,
"score": 44
},
{
"classRank": 45,
"schoolRank": 93,
"score": 42
},
{
"classRank": 46,
"schoolRank": 94,
"score": 41.5
},
{
"classRank": 47,
"schoolRank": 97,
"score": 39
},
{
"classRank": 48,
"schoolRank": 100,
"score": 37
}
],
"高二10班": [
{
"classRank": 1,
"schoolRank": 16,
"score": 80.5
},
{
"classRank": 2,
"schoolRank": 20,
"score": 78.5
},
{
"classRank": 3,
"schoolRank": 20,
"score": 78.5
},
{
"classRank": 4,
"schoolRank": 23,
"score": 77
},
{
"classRank": 5,
"schoolRank": 24,
"score": 76.5
},
{
"classRank": 6,
"schoolRank": 27,
"score": 75
},
{
"classRank": 7,
"schoolRank": 31,
"score": 73
},
{
"classRank": 8,
"schoolRank": 31,
"score": 73
},
{
"classRank": 9,
"schoolRank": 32,
"score": 72.5
},
{
"classRank": 10,
"schoolRank": 36,
"score": 70.5
},
{
"classRank": 11,
"schoolRank": 36,
"score": 70.5
},
{
"classRank": 12,
"schoolRank": 37,
"score": 70
},
{
"classRank": 13,
"schoolRank": 37,
"score": 70
},
{
"classRank": 14,
"schoolRank": 40,
"score": 68.5
},
{
"classRank": 15,
"schoolRank": 46,
"score": 65.5
},
{
"classRank": 16,
"schoolRank": 46,
"score": 65.5
},
{
"classRank": 17,
"schoolRank": 48,
"score": 64.5
},
{
"classRank": 18,
"schoolRank": 50,
"score": 63.5
},
{
"classRank": 19,
"schoolRank": 51,
"score": 63
},
{
"classRank": 20,
"schoolRank": 53,
"score": 62
},
{
"classRank": 21,
"schoolRank": 57,
"score": 60
},
{
"classRank": 22,
"schoolRank": 65,
"score": 56
},
{
"classRank": 23,
"schoolRank": 65,
"score": 56
},
{
"classRank": 24,
"schoolRank": 68,
"score": 54.5
},
{
"classRank": 25,
"schoolRank": 70,
"score": 53.5
},
{
"classRank": 26,
"schoolRank": 72,
"score": 52.5
},
{
"classRank": 27,
"schoolRank": 74,
"score": 51.5
},
{
"classRank": 28,
"schoolRank": 74,
"score": 51.5
},
{
"classRank": 29,
"schoolRank": 75,
"score": 51
},
{
"classRank": 30,
"schoolRank": 75,
"score": 51
},
{
"classRank": 31,
"schoolRank": 76,
"score": 50.5
},
{
"classRank": 32,
"schoolRank": 81,
"score": 48
},
{
"classRank": 33,
"schoolRank": 82,
"score": 47.5
},
{
"classRank": 34,
"schoolRank": 86,
"score": 45.5
},
{
"classRank": 35,
"schoolRank": 87,
"score": 45
},
{
"classRank": 36,
"schoolRank": 90,
"score": 43.5
},
{
"classRank": 37,
"schoolRank": 91,
"score": 43
},
{
"classRank": 38,
"schoolRank": 95,
"score": 41
},
{
"classRank": 39,
"schoolRank": 96,
"score": 40
}
],
"高二04班": [
{
"classRank": 1,
"schoolRank": 3,
"score": 88
},
{
"classRank": 2,
"schoolRank": 4,
"score": 87.5
},
{
"classRank": 3,
"schoolRank": 5,
"score": 87
},
{
"classRank": 4,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 5,
"schoolRank": 17,
"score": 80
},
{
"classRank": 6,
"schoolRank": 19,
"score": 79
},
{
"classRank": 7,
"schoolRank": 20,
"score": 78.5
},
{
"classRank": 8,
"schoolRank": 22,
"score": 77.5
},
{
"classRank": 9,
"schoolRank": 22,
"score": 77.5
},
{
"classRank": 10,
"schoolRank": 22,
"score": 77.5
},
{
"classRank": 11,
"schoolRank": 25,
"score": 76
},
{
"classRank": 12,
"schoolRank": 33,
"score": 72
},
{
"classRank": 13,
"schoolRank": 33,
"score": 72
},
{
"classRank": 14,
"schoolRank": 34,
"score": 71.5
},
{
"classRank": 15,
"schoolRank": 34,
"score": 71.5
},
{
"classRank": 16,
"schoolRank": 36,
"score": 70.5
},
{
"classRank": 17,
"schoolRank": 40,
"score": 68.5
},
{
"classRank": 18,
"schoolRank": 42,
"score": 67.5
},
{
"classRank": 19,
"schoolRank": 44,
"score": 66.5
},
{
"classRank": 20,
"schoolRank": 46,
"score": 65.5
},
{
"classRank": 21,
"schoolRank": 47,
"score": 65
},
{
"classRank": 22,
"schoolRank": 49,
"score": 64
},
{
"classRank": 23,
"schoolRank": 52,
"score": 62.5
},
{
"classRank": 24,
"schoolRank": 52,
"score": 62.5
},
{
"classRank": 25,
"schoolRank": 54,
"score": 61.5
},
{
"classRank": 26,
"schoolRank": 57,
"score": 60
},
{
"classRank": 27,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 28,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 29,
"schoolRank": 60,
"score": 58.5
},
{
"classRank": 30,
"schoolRank": 61,
"score": 58
},
{
"classRank": 31,
"schoolRank": 63,
"score": 57
},
{
"classRank": 32,
"schoolRank": 65,
"score": 56
},
{
"classRank": 33,
"schoolRank": 77,
"score": 50
},
{
"classRank": 34,
"schoolRank": 78,
"score": 49.5
},
{
"classRank": 35,
"schoolRank": 80,
"score": 48.5
},
{
"classRank": 36,
"schoolRank": 85,
"score": 46
}
],
"高二05班": [
{
"classRank": 1,
"schoolRank": 8,
"score": 85
},
{
"classRank": 2,
"schoolRank": 12,
"score": 83
},
{
"classRank": 3,
"schoolRank": 16,
"score": 80.5
},
{
"classRank": 4,
"schoolRank": 16,
"score": 80.5
},
{
"classRank": 5,
"schoolRank": 18,
"score": 79.5
},
{
"classRank": 6,
"schoolRank": 19,
"score": 79
},
{
"classRank": 7,
"schoolRank": 19,
"score": 79
},
{
"classRank": 8,
"schoolRank": 19,
"score": 79
},
{
"classRank": 9,
"schoolRank": 21,
"score": 78
},
{
"classRank": 10,
"schoolRank": 25,
"score": 76
},
{
"classRank": 11,
"schoolRank": 26,
"score": 75.5
},
{
"classRank": 12,
"schoolRank": 26,
"score": 75.5
},
{
"classRank": 13,
"schoolRank": 30,
"score": 73.5
},
{
"classRank": 14,
"schoolRank": 31,
"score": 73
},
{
"classRank": 15,
"schoolRank": 32,
"score": 72.5
},
{
"classRank": 16,
"schoolRank": 35,
"score": 71
},
{
"classRank": 17,
"schoolRank": 35,
"score": 71
},
{
"classRank": 18,
"schoolRank": 36,
"score": 70.5
},
{
"classRank": 19,
"schoolRank": 42,
"score": 67.5
},
{
"classRank": 20,
"schoolRank": 45,
"score": 66
},
{
"classRank": 21,
"schoolRank": 46,
"score": 65.5
},
{
"classRank": 22,
"schoolRank": 46,
"score": 65.5
},
{
"classRank": 23,
"schoolRank": 49,
"score": 64
},
{
"classRank": 24,
"schoolRank": 54,
"score": 61.5
},
{
"classRank": 25,
"schoolRank": 55,
"score": 61
},
{
"classRank": 26,
"schoolRank": 60,
"score": 58.5
},
{
"classRank": 27,
"schoolRank": 61,
"score": 58
},
{
"classRank": 28,
"schoolRank": 63,
"score": 57
},
{
"classRank": 29,
"schoolRank": 64,
"score": 56.5
},
{
"classRank": 30,
"schoolRank": 69,
"score": 54
},
{
"classRank": 31,
"schoolRank": 72,
"score": 52.5
},
{
"classRank": 32,
"schoolRank": 73,
"score": 52
},
{
"classRank": 33,
"schoolRank": 73,
"score": 52
},
{
"classRank": 34,
"schoolRank": 75,
"score": 51
},
{
"classRank": 35,
"schoolRank": 76,
"score": 50.5
},
{
"classRank": 36,
"schoolRank": 80,
"score": 48.5
},
{
"classRank": 37,
"schoolRank": 80,
"score": 48.5
},
{
"classRank": 38,
"schoolRank": 81,
"score": 48
},
{
"classRank": 39,
"schoolRank": 84,
"score": 46.5
},
{
"classRank": 40,
"schoolRank": 84,
"score": 46.5
},
{
"classRank": 41,
"schoolRank": 85,
"score": 46
},
{
"classRank": 42,
"schoolRank": 86,
"score": 45.5
}
],
"高二02班": [
{
"classRank": 1,
"schoolRank": 3,
"score": 88
},
{
"classRank": 2,
"schoolRank": 9,
"score": 84.5
},
{
"classRank": 3,
"schoolRank": 11,
"score": 83.5
},
{
"classRank": 4,
"schoolRank": 12,
"score": 83
},
{
"classRank": 5,
"schoolRank": 13,
"score": 82.5
},
{
"classRank": 6,
"schoolRank": 13,
"score": 82.5
},
{
"classRank": 7,
"schoolRank": 14,
"score": 82
},
{
"classRank": 8,
"schoolRank": 16,
"score": 80.5
},
{
"classRank": 9,
"schoolRank": 17,
"score": 80
},
{
"classRank": 10,
"schoolRank": 21,
"score": 78
},
{
"classRank": 11,
"schoolRank": 22,
"score": 77.5
},
{
"classRank": 12,
"schoolRank": 24,
"score": 76.5
},
{
"classRank": 13,
"schoolRank": 25,
"score": 76
},
{
"classRank": 14,
"schoolRank": 28,
"score": 74.5
},
{
"classRank": 15,
"schoolRank": 30,
"score": 73.5
},
{
"classRank": 16,
"schoolRank": 32,
"score": 72.5
},
{
"classRank": 17,
"schoolRank": 32,
"score": 72.5
},
{
"classRank": 18,
"schoolRank": 38,
"score": 69.5
},
{
"classRank": 19,
"schoolRank": 42,
"score": 67.5
},
{
"classRank": 20,
"schoolRank": 44,
"score": 66.5
},
{
"classRank": 21,
"schoolRank": 46,
"score": 65.5
},
{
"classRank": 22,
"schoolRank": 46,
"score": 65.5
},
{
"classRank": 23,
"schoolRank": 47,
"score": 65
},
{
"classRank": 24,
"schoolRank": 47,
"score": 65
},
{
"classRank": 25,
"schoolRank": 49,
"score": 64
},
{
"classRank": 26,
"schoolRank": 49,
"score": 64
},
{
"classRank": 27,
"schoolRank": 53,
"score": 62
},
{
"classRank": 28,
"schoolRank": 53,
"score": 62
},
{
"classRank": 29,
"schoolRank": 56,
"score": 60.5
},
{
"classRank": 30,
"schoolRank": 56,
"score": 60.5
},
{
"classRank": 31,
"schoolRank": 61,
"score": 58
},
{
"classRank": 32,
"schoolRank": 62,
"score": 57.5
},
{
"classRank": 33,
"schoolRank": 65,
"score": 56
},
{
"classRank": 34,
"schoolRank": 67,
"score": 55
},
{
"classRank": 35,
"schoolRank": 67,
"score": 55
},
{
"classRank": 36,
"schoolRank": 68,
"score": 54.5
},
{
"classRank": 37,
"schoolRank": 71,
"score": 53
},
{
"classRank": 38,
"schoolRank": 71,
"score": 53
},
{
"classRank": 39,
"schoolRank": 71,
"score": 53
},
{
"classRank": 40,
"schoolRank": 78,
"score": 49.5
},
{
"classRank": 41,
"schoolRank": 80,
"score": 48.5
},
{
"classRank": 42,
"schoolRank": 81,
"score": 48
},
{
"classRank": 43,
"schoolRank": 82,
"score": 47.5
},
{
"classRank": 44,
"schoolRank": 83,
"score": 47
},
{
"classRank": 45,
"schoolRank": 84,
"score": 46.5
},
{
"classRank": 46,
"schoolRank": 91,
"score": 43
},
{
"classRank": 47,
"schoolRank": 101,
"score": 35
}
],
"高二03班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 89
},
{
"classRank": 2,
"schoolRank": 3,
"score": 88
},
{
"classRank": 3,
"schoolRank": 8,
"score": 85
},
{
"classRank": 4,
"schoolRank": 9,
"score": 84.5
},
{
"classRank": 5,
"schoolRank": 17,
"score": 80
},
{
"classRank": 6,
"schoolRank": 18,
"score": 79.5
},
{
"classRank": 7,
"schoolRank": 19,
"score": 79
},
{
"classRank": 8,
"schoolRank": 20,
"score": 78.5
},
{
"classRank": 9,
"schoolRank": 20,
"score": 78.5
},
{
"classRank": 10,
"schoolRank": 21,
"score": 78
},
{
"classRank": 11,
"schoolRank": 23,
"score": 77
},
{
"classRank": 12,
"schoolRank": 23,
"score": 77
},
{
"classRank": 13,
"schoolRank": 24,
"score": 76.5
},
{
"classRank": 14,
"schoolRank": 26,
"score": 75.5
},
{
"classRank": 15,
"schoolRank": 26,
"score": 75.5
},
{
"classRank": 16,
"schoolRank": 28,
"score": 74.5
},
{
"classRank": 17,
"schoolRank": 31,
"score": 73
},
{
"classRank": 18,
"schoolRank": 37,
"score": 70
},
{
"classRank": 19,
"schoolRank": 38,
"score": 69.5
},
{
"classRank": 20,
"schoolRank": 39,
"score": 69
},
{
"classRank": 21,
"schoolRank": 40,
"score": 68.5
},
{
"classRank": 22,
"schoolRank": 41,
"score": 68
},
{
"classRank": 23,
"schoolRank": 46,
"score": 65.5
},
{
"classRank": 24,
"schoolRank": 52,
"score": 62.5
},
{
"classRank": 25,
"schoolRank": 53,
"score": 62
},
{
"classRank": 26,
"schoolRank": 53,
"score": 62
},
{
"classRank": 27,
"schoolRank": 56,
"score": 60.5
},
{
"classRank": 28,
"schoolRank": 62,
"score": 57.5
},
{
"classRank": 29,
"schoolRank": 63,
"score": 57
},
{
"classRank": 30,
"schoolRank": 63,
"score": 57
},
{
"classRank": 31,
"schoolRank": 66,
"score": 55.5
},
{
"classRank": 32,
"schoolRank": 67,
"score": 55
},
{
"classRank": 33,
"schoolRank": 67,
"score": 55
},
{
"classRank": 34,
"schoolRank": 68,
"score": 54.5
},
{
"classRank": 35,
"schoolRank": 70,
"score": 53.5
},
{
"classRank": 36,
"schoolRank": 72,
"score": 52.5
},
{
"classRank": 37,
"schoolRank": 75,
"score": 51
},
{
"classRank": 38,
"schoolRank": 76,
"score": 50.5
},
{
"classRank": 39,
"schoolRank": 76,
"score": 50.5
},
{
"classRank": 40,
"schoolRank": 77,
"score": 50
},
{
"classRank": 41,
"schoolRank": 81,
"score": 48
},
{
"classRank": 42,
"schoolRank": 91,
"score": 43
}
],
"高二08班": [
{
"classRank": 1,
"schoolRank": 13,
"score": 82.5
},
{
"classRank": 2,
"schoolRank": 16,
"score": 80.5
},
{
"classRank": 3,
"schoolRank": 16,
"score": 80.5
},
{
"classRank": 4,
"schoolRank": 17,
"score": 80
},
{
"classRank": 5,
"schoolRank": 18,
"score": 79.5
},
{
"classRank": 6,
"schoolRank": 23,
"score": 77
},
{
"classRank": 7,
"schoolRank": 27,
"score": 75
},
{
"classRank": 8,
"schoolRank": 30,
"score": 73.5
},
{
"classRank": 9,
"schoolRank": 31,
"score": 73
},
{
"classRank": 10,
"schoolRank": 37,
"score": 70
},
{
"classRank": 11,
"schoolRank": 37,
"score": 70
},
{
"classRank": 12,
"schoolRank": 40,
"score": 68.5
},
{
"classRank": 13,
"schoolRank": 43,
"score": 67
},
{
"classRank": 14,
"schoolRank": 43,
"score": 67
},
{
"classRank": 15,
"schoolRank": 43,
"score": 67
},
{
"classRank": 16,
"schoolRank": 44,
"score": 66.5
},
{
"classRank": 17,
"schoolRank": 44,
"score": 66.5
},
{
"classRank": 18,
"schoolRank": 50,
"score": 63.5
},
{
"classRank": 19,
"schoolRank": 52,
"score": 62.5
},
{
"classRank": 20,
"schoolRank": 54,
"score": 61.5
},
{
"classRank": 21,
"schoolRank": 55,
"score": 61
},
{
"classRank": 22,
"schoolRank": 56,
"score": 60.5
},
{
"classRank": 23,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 24,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 25,
"schoolRank": 60,
"score": 58.5
},
{
"classRank": 26,
"schoolRank": 62,
"score": 57.5
},
{
"classRank": 27,
"schoolRank": 65,
"score": 56
},
{
"classRank": 28,
"schoolRank": 66,
"score": 55.5
},
{
"classRank": 29,
"schoolRank": 68,
"score": 54.5
},
{
"classRank": 30,
"schoolRank": 68,
"score": 54.5
},
{
"classRank": 31,
"schoolRank": 71,
"score": 53
},
{
"classRank": 32,
"schoolRank": 71,
"score": 53
},
{
"classRank": 33,
"schoolRank": 80,
"score": 48.5
},
{
"classRank": 34,
"schoolRank": 81,
"score": 48
},
{
"classRank": 35,
"schoolRank": 95,
"score": 41
}
],
"高二09班": [
{
"classRank": 1,
"schoolRank": 8,
"score": 85
},
{
"classRank": 2,
"schoolRank": 20,
"score": 78.5
},
{
"classRank": 3,
"schoolRank": 21,
"score": 78
},
{
"classRank": 4,
"schoolRank": 21,
"score": 78
},
{
"classRank": 5,
"schoolRank": 24,
"score": 76.5
},
{
"classRank": 6,
"schoolRank": 29,
"score": 74
},
{
"classRank": 7,
"schoolRank": 29,
"score": 74
},
{
"classRank": 8,
"schoolRank": 30,
"score": 73.5
},
{
"classRank": 9,
"schoolRank": 31,
"score": 73
},
{
"classRank": 10,
"schoolRank": 36,
"score": 70.5
},
{
"classRank": 11,
"schoolRank": 37,
"score": 70
},
{
"classRank": 12,
"schoolRank": 37,
"score": 70
},
{
"classRank": 13,
"schoolRank": 38,
"score": 69.5
},
{
"classRank": 14,
"schoolRank": 39,
"score": 69
},
{
"classRank": 15,
"schoolRank": 45,
"score": 66
},
{
"classRank": 16,
"schoolRank": 48,
"score": 64.5
},
{
"classRank": 17,
"schoolRank": 49,
"score": 64
},
{
"classRank": 18,
"schoolRank": 49,
"score": 64
},
{
"classRank": 19,
"schoolRank": 53,
"score": 62
},
{
"classRank": 20,
"schoolRank": 54,
"score": 61.5
},
{
"classRank": 21,
"schoolRank": 56,
"score": 60.5
},
{
"classRank": 22,
"schoolRank": 57,
"score": 60
},
{
"classRank": 23,
"schoolRank": 60,
"score": 58.5
},
{
"classRank": 24,
"schoolRank": 60,
"score": 58.5
},
{
"classRank": 25,
"schoolRank": 60,
"score": 58.5
},
{
"classRank": 26,
"schoolRank": 64,
"score": 56.5
},
{
"classRank": 27,
"schoolRank": 67,
"score": 55
},
{
"classRank": 28,
"schoolRank": 69,
"score": 54
},
{
"classRank": 29,
"schoolRank": 72,
"score": 52.5
},
{
"classRank": 30,
"schoolRank": 76,
"score": 50.5
},
{
"classRank": 31,
"schoolRank": 80,
"score": 48.5
},
{
"classRank": 32,
"schoolRank": 80,
"score": 48.5
},
{
"classRank": 33,
"schoolRank": 80,
"score": 48.5
},
{
"classRank": 34,
"schoolRank": 81,
"score": 48
},
{
"classRank": 35,
"schoolRank": 83,
"score": 47
},
{
"classRank": 36,
"schoolRank": 85,
"score": 46
},
{
"classRank": 37,
"schoolRank": 86,
"score": 45.5
},
{
"classRank": 38,
"schoolRank": 88,
"score": 44.5
},
{
"classRank": 39,
"schoolRank": 90,
"score": 43.5
},
{
"classRank": 40,
"schoolRank": 91,
"score": 43
},
{
"classRank": 41,
"schoolRank": 92,
"score": 42.5
},
{
"classRank": 42,
"schoolRank": 93,
"score": 42
},
{
"classRank": 43,
"schoolRank": 95,
"score": 41
},
{
"classRank": 44,
"schoolRank": 98,
"score": 38.5
},
{
"classRank": 45,
"schoolRank": 100,
"score": 37
},
{
"classRank": 46,
"schoolRank": 101,
"score": 35
},
{
"classRank": 47,
"schoolRank": 102,
"score": 32
},
{
"classRank": 48,
"schoolRank": 102,
"score": 32
}
],
"高二06班": [
{
"classRank": 1,
"schoolRank": 10,
"score": 84
},
{
"classRank": 2,
"schoolRank": 11,
"score": 83.5
},
{
"classRank": 3,
"schoolRank": 16,
"score": 80.5
},
{
"classRank": 4,
"schoolRank": 16,
"score": 80.5
},
{
"classRank": 5,
"schoolRank": 17,
"score": 80
},
{
"classRank": 6,
"schoolRank": 20,
"score": 78.5
},
{
"classRank": 7,
"schoolRank": 25,
"score": 76
},
{
"classRank": 8,
"schoolRank": 26,
"score": 75.5
},
{
"classRank": 9,
"schoolRank": 27,
"score": 75
},
{
"classRank": 10,
"schoolRank": 28,
"score": 74.5
},
{
"classRank": 11,
"schoolRank": 28,
"score": 74.5
},
{
"classRank": 12,
"schoolRank": 33,
"score": 72
},
{
"classRank": 13,
"schoolRank": 34,
"score": 71.5
},
{
"classRank": 14,
"schoolRank": 41,
"score": 68
},
{
"classRank": 15,
"schoolRank": 43,
"score": 67
},
{
"classRank": 16,
"schoolRank": 43,
"score": 67
},
{
"classRank": 17,
"schoolRank": 45,
"score": 66
},
{
"classRank": 18,
"schoolRank": 46,
"score": 65.5
},
{
"classRank": 19,
"schoolRank": 46,
"score": 65.5
},
{
"classRank": 20,
"schoolRank": 47,
"score": 65
},
{
"classRank": 21,
"schoolRank": 50,
"score": 63.5
},
{
"classRank": 22,
"schoolRank": 52,
"score": 62.5
},
{
"classRank": 23,
"schoolRank": 54,
"score": 61.5
},
{
"classRank": 24,
"schoolRank": 56,
"score": 60.5
},
{
"classRank": 25,
"schoolRank": 59,
"score": 59
},
{
"classRank": 26,
"schoolRank": 60,
"score": 58.5
},
{
"classRank": 27,
"schoolRank": 60,
"score": 58.5
},
{
"classRank": 28,
"schoolRank": 62,
"score": 57.5
},
{
"classRank": 29,
"schoolRank": 63,
"score": 57
},
{
"classRank": 30,
"schoolRank": 65,
"score": 56
},
{
"classRank": 31,
"schoolRank": 72,
"score": 52.5
},
{
"classRank": 32,
"schoolRank": 72,
"score": 52.5
},
{
"classRank": 33,
"schoolRank": 72,
"score": 52.5
},
{
"classRank": 34,
"schoolRank": 73,
"score": 52
},
{
"classRank": 35,
"schoolRank": 76,
"score": 50.5
},
{
"classRank": 36,
"schoolRank": 79,
"score": 49
},
{
"classRank": 37,
"schoolRank": 82,
"score": 47.5
},
{
"classRank": 38,
"schoolRank": 83,
"score": 47
},
{
"classRank": 39,
"schoolRank": 85,
"score": 46
},
{
"classRank": 40,
"schoolRank": 85,
"score": 46
},
{
"classRank": 41,
"schoolRank": 87,
"score": 45
},
{
"classRank": 42,
"schoolRank": 89,
"score": 44
},
{
"classRank": 43,
"schoolRank": 93,
"score": 42
},
{
"classRank": 44,
"schoolRank": 97,
"score": 39
},
{
"classRank": 45,
"schoolRank": 99,
"score": 38
}
],
"高二07班": [
{
"classRank": 1,
"schoolRank": 7,
"score": 86
},
{
"classRank": 2,
"schoolRank": 8,
"score": 85
},
{
"classRank": 3,
"schoolRank": 12,
"score": 83
},
{
"classRank": 4,
"schoolRank": 12,
"score": 83
},
{
"classRank": 5,
"schoolRank": 14,
"score": 82
},
{
"classRank": 6,
"schoolRank": 21,
"score": 78
},
{
"classRank": 7,
"schoolRank": 22,
"score": 77.5
},
{
"classRank": 8,
"schoolRank": 24,
"score": 76.5
},
{
"classRank": 9,
"schoolRank": 24,
"score": 76.5
},
{
"classRank": 10,
"schoolRank": 30,
"score": 73.5
},
{
"classRank": 11,
"schoolRank": 33,
"score": 72
},
{
"classRank": 12,
"schoolRank": 36,
"score": 70.5
},
{
"classRank": 13,
"schoolRank": 38,
"score": 69.5
},
{
"classRank": 14,
"schoolRank": 39,
"score": 69
},
{
"classRank": 15,
"schoolRank": 39,
"score": 69
},
{
"classRank": 16,
"schoolRank": 39,
"score": 69
},
{
"classRank": 17,
"schoolRank": 46,
"score": 65.5
},
{
"classRank": 18,
"schoolRank": 46,
"score": 65.5
},
{
"classRank": 19,
"schoolRank": 48,
"score": 64.5
},
{
"classRank": 20,
"schoolRank": 50,
"score": 63.5
},
{
"classRank": 21,
"schoolRank": 52,
"score": 62.5
},
{
"classRank": 22,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 23,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 24,
"schoolRank": 62,
"score": 57.5
},
{
"classRank": 25,
"schoolRank": 65,
"score": 56
},
{
"classRank": 26,
"schoolRank": 66,
"score": 55.5
},
{
"classRank": 27,
"schoolRank": 67,
"score": 55
},
{
"classRank": 28,
"schoolRank": 70,
"score": 53.5
},
{
"classRank": 29,
"schoolRank": 72,
"score": 52.5
},
{
"classRank": 30,
"schoolRank": 74,
"score": 51.5
},
{
"classRank": 31,
"schoolRank": 74,
"score": 51.5
},
{
"classRank": 32,
"schoolRank": 75,
"score": 51
},
{
"classRank": 33,
"schoolRank": 77,
"score": 50
},
{
"classRank": 34,
"schoolRank": 77,
"score": 50
},
{
"classRank": 35,
"schoolRank": 82,
"score": 47.5
},
{
"classRank": 36,
"schoolRank": 88,
"score": 44.5
},
{
"classRank": 37,
"schoolRank": 90,
"score": 43.5
}
]
};
var ge7 = [];
getyk(data, ge7);
setMapS2(ge7, '政治', 'm2-7');
data={
"高二01班": [
{
"classRank": 1,
"schoolRank": 5,
"score": 88
},
{
"classRank": 2,
"schoolRank": 5,
"score": 88
},
{
"classRank": 3,
"schoolRank": 6,
"score": 86.5
},
{
"classRank": 4,
"schoolRank": 7,
"score": 86
},
{
"classRank": 5,
"schoolRank": 11,
"score": 83.5
},
{
"classRank": 6,
"schoolRank": 12,
"score": 83
},
{
"classRank": 7,
"schoolRank": 13,
"score": 82.5
},
{
"classRank": 8,
"schoolRank": 14,
"score": 82
},
{
"classRank": 9,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 10,
"schoolRank": 16,
"score": 81
},
{
"classRank": 11,
"schoolRank": 17,
"score": 80.5
},
{
"classRank": 12,
"schoolRank": 17,
"score": 80.5
},
{
"classRank": 13,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 14,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 15,
"schoolRank": 34,
"score": 72
},
{
"classRank": 16,
"schoolRank": 36,
"score": 71
},
{
"classRank": 17,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 18,
"schoolRank": 42,
"score": 68
},
{
"classRank": 19,
"schoolRank": 42,
"score": 68
},
{
"classRank": 20,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 21,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 22,
"schoolRank": 44,
"score": 67
},
{
"classRank": 23,
"schoolRank": 47,
"score": 65.5
},
{
"classRank": 24,
"schoolRank": 48,
"score": 65
},
{
"classRank": 25,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 26,
"schoolRank": 52,
"score": 63
},
{
"classRank": 27,
"schoolRank": 56,
"score": 61
},
{
"classRank": 28,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 29,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 30,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 31,
"schoolRank": 59,
"score": 59
},
{
"classRank": 32,
"schoolRank": 65,
"score": 56
},
{
"classRank": 33,
"schoolRank": 66,
"score": 55.5
},
{
"classRank": 34,
"schoolRank": 67,
"score": 55
},
{
"classRank": 35,
"schoolRank": 67,
"score": 55
},
{
"classRank": 36,
"schoolRank": 67,
"score": 55
},
{
"classRank": 37,
"schoolRank": 70,
"score": 53.5
},
{
"classRank": 38,
"schoolRank": 71,
"score": 53
},
{
"classRank": 39,
"schoolRank": 79,
"score": 49
},
{
"classRank": 40,
"schoolRank": 79,
"score": 49
},
{
"classRank": 41,
"schoolRank": 83,
"score": 47
},
{
"classRank": 42,
"schoolRank": 83,
"score": 47
},
{
"classRank": 43,
"schoolRank": 86,
"score": 45.5
},
{
"classRank": 44,
"schoolRank": 87,
"score": 45
},
{
"classRank": 45,
"schoolRank": 88,
"score": 44.5
},
{
"classRank": 46,
"schoolRank": 89,
"score": 44
},
{
"classRank": 47,
"schoolRank": 93,
"score": 42
},
{
"classRank": 48,
"schoolRank": 94,
"score": 41.5
}
],
"高二10班": [
{
"classRank": 1,
"schoolRank": 20,
"score": 79
},
{
"classRank": 2,
"schoolRank": 20,
"score": 79
},
{
"classRank": 3,
"schoolRank": 22,
"score": 78
},
{
"classRank": 4,
"schoolRank": 22,
"score": 78
},
{
"classRank": 5,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 6,
"schoolRank": 26,
"score": 76
},
{
"classRank": 7,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 8,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 9,
"schoolRank": 36,
"score": 71
},
{
"classRank": 10,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 11,
"schoolRank": 38,
"score": 70
},
{
"classRank": 12,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 13,
"schoolRank": 40,
"score": 69
},
{
"classRank": 14,
"schoolRank": 45,
"score": 66.5
},
{
"classRank": 15,
"schoolRank": 47,
"score": 65.5
},
{
"classRank": 16,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 17,
"schoolRank": 52,
"score": 63
},
{
"classRank": 18,
"schoolRank": 52,
"score": 63
},
{
"classRank": 19,
"schoolRank": 52,
"score": 63
},
{
"classRank": 20,
"schoolRank": 52,
"score": 63
},
{
"classRank": 21,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 22,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 23,
"schoolRank": 59,
"score": 59
},
{
"classRank": 24,
"schoolRank": 64,
"score": 56.5
},
{
"classRank": 25,
"schoolRank": 65,
"score": 56
},
{
"classRank": 26,
"schoolRank": 71,
"score": 53
},
{
"classRank": 27,
"schoolRank": 73,
"score": 52
},
{
"classRank": 28,
"schoolRank": 73,
"score": 52
},
{
"classRank": 29,
"schoolRank": 74,
"score": 51.5
},
{
"classRank": 30,
"schoolRank": 75,
"score": 51
},
{
"classRank": 31,
"schoolRank": 75,
"score": 51
},
{
"classRank": 32,
"schoolRank": 77,
"score": 50
},
{
"classRank": 33,
"schoolRank": 80,
"score": 48.5
},
{
"classRank": 34,
"schoolRank": 82,
"score": 47.5
},
{
"classRank": 35,
"schoolRank": 84,
"score": 46.5
},
{
"classRank": 36,
"schoolRank": 90,
"score": 43.5
},
{
"classRank": 37,
"schoolRank": 91,
"score": 43
},
{
"classRank": 38,
"schoolRank": 92,
"score": 42.5
},
{
"classRank": 39,
"schoolRank": 96,
"score": 40.5
}
],
"高二04班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 90.5
},
{
"classRank": 2,
"schoolRank": 10,
"score": 84
},
{
"classRank": 3,
"schoolRank": 11,
"score": 83.5
},
{
"classRank": 4,
"schoolRank": 12,
"score": 83
},
{
"classRank": 5,
"schoolRank": 12,
"score": 83
},
{
"classRank": 6,
"schoolRank": 17,
"score": 80.5
},
{
"classRank": 7,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 8,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 9,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 10,
"schoolRank": 25,
"score": 76.5
},
{
"classRank": 11,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 12,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 13,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 14,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 15,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 16,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 17,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 18,
"schoolRank": 40,
"score": 69
},
{
"classRank": 19,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 20,
"schoolRank": 47,
"score": 65.5
},
{
"classRank": 21,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 22,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 23,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 24,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 25,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 26,
"schoolRank": 53,
"score": 62.5
},
{
"classRank": 27,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 28,
"schoolRank": 62,
"score": 57.5
},
{
"classRank": 29,
"schoolRank": 62,
"score": 57.5
},
{
"classRank": 30,
"schoolRank": 63,
"score": 57
},
{
"classRank": 31,
"schoolRank": 67,
"score": 55
},
{
"classRank": 32,
"schoolRank": 69,
"score": 54
},
{
"classRank": 33,
"schoolRank": 72,
"score": 52.5
},
{
"classRank": 34,
"schoolRank": 74,
"score": 51.5
},
{
"classRank": 35,
"schoolRank": 77,
"score": 50
},
{
"classRank": 36,
"schoolRank": 81,
"score": 48
}
],
"高二05班": [
{
"classRank": 1,
"schoolRank": 4,
"score": 88.5
},
{
"classRank": 2,
"schoolRank": 10,
"score": 84
},
{
"classRank": 3,
"schoolRank": 10,
"score": 84
},
{
"classRank": 4,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 5,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 6,
"schoolRank": 16,
"score": 81
},
{
"classRank": 7,
"schoolRank": 18,
"score": 80
},
{
"classRank": 8,
"schoolRank": 28,
"score": 75
},
{
"classRank": 9,
"schoolRank": 28,
"score": 75
},
{
"classRank": 10,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 11,
"schoolRank": 30,
"score": 74
},
{
"classRank": 12,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 13,
"schoolRank": 34,
"score": 72
},
{
"classRank": 14,
"schoolRank": 36,
"score": 71
},
{
"classRank": 15,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 16,
"schoolRank": 38,
"score": 70
},
{
"classRank": 17,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 18,
"schoolRank": 44,
"score": 67
},
{
"classRank": 19,
"schoolRank": 45,
"score": 66.5
},
{
"classRank": 20,
"schoolRank": 48,
"score": 65
},
{
"classRank": 21,
"schoolRank": 48,
"score": 65
},
{
"classRank": 22,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 23,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 24,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 25,
"schoolRank": 59,
"score": 59
},
{
"classRank": 26,
"schoolRank": 59,
"score": 59
},
{
"classRank": 27,
"schoolRank": 60,
"score": 58.5
},
{
"classRank": 28,
"schoolRank": 61,
"score": 58
},
{
"classRank": 29,
"schoolRank": 62,
"score": 57.5
},
{
"classRank": 30,
"schoolRank": 63,
"score": 57
},
{
"classRank": 31,
"schoolRank": 65,
"score": 56
},
{
"classRank": 32,
"schoolRank": 66,
"score": 55.5
},
{
"classRank": 33,
"schoolRank": 69,
"score": 54
},
{
"classRank": 34,
"schoolRank": 69,
"score": 54
},
{
"classRank": 35,
"schoolRank": 73,
"score": 52
},
{
"classRank": 36,
"schoolRank": 75,
"score": 51
},
{
"classRank": 37,
"schoolRank": 82,
"score": 47.5
},
{
"classRank": 38,
"schoolRank": 84,
"score": 46.5
},
{
"classRank": 39,
"schoolRank": 86,
"score": 45.5
},
{
"classRank": 40,
"schoolRank": 88,
"score": 44.5
},
{
"classRank": 41,
"schoolRank": 90,
"score": 43.5
},
{
"classRank": 42,
"schoolRank": 91,
"score": 43
}
],
"高二02班": [
{
"classRank": 1,
"schoolRank": 3,
"score": 89.5
},
{
"classRank": 2,
"schoolRank": 5,
"score": 88
},
{
"classRank": 3,
"schoolRank": 5,
"score": 88
},
{
"classRank": 4,
"schoolRank": 7,
"score": 86
},
{
"classRank": 5,
"schoolRank": 9,
"score": 84.5
},
{
"classRank": 6,
"schoolRank": 16,
"score": 81
},
{
"classRank": 7,
"schoolRank": 18,
"score": 80
},
{
"classRank": 8,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 9,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 10,
"schoolRank": 20,
"score": 79
},
{
"classRank": 11,
"schoolRank": 22,
"score": 78
},
{
"classRank": 12,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 13,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 14,
"schoolRank": 34,
"score": 72
},
{
"classRank": 15,
"schoolRank": 36,
"score": 71
},
{
"classRank": 16,
"schoolRank": 36,
"score": 71
},
{
"classRank": 17,
"schoolRank": 36,
"score": 71
},
{
"classRank": 18,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 19,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 20,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 21,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 22,
"schoolRank": 44,
"score": 67
},
{
"classRank": 23,
"schoolRank": 50,
"score": 64
},
{
"classRank": 24,
"schoolRank": 55,
"score": 61.5
},
{
"classRank": 25,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 26,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 27,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 28,
"schoolRank": 59,
"score": 59
},
{
"classRank": 29,
"schoolRank": 64,
"score": 56.5
},
{
"classRank": 30,
"schoolRank": 67,
"score": 55
},
{
"classRank": 31,
"schoolRank": 67,
"score": 55
},
{
"classRank": 32,
"schoolRank": 69,
"score": 54
},
{
"classRank": 33,
"schoolRank": 69,
"score": 54
},
{
"classRank": 34,
"schoolRank": 71,
"score": 53
},
{
"classRank": 35,
"schoolRank": 72,
"score": 52.5
},
{
"classRank": 36,
"schoolRank": 73,
"score": 52
},
{
"classRank": 37,
"schoolRank": 75,
"score": 51
},
{
"classRank": 38,
"schoolRank": 76,
"score": 50.5
},
{
"classRank": 39,
"schoolRank": 81,
"score": 48
},
{
"classRank": 40,
"schoolRank": 83,
"score": 47
},
{
"classRank": 41,
"schoolRank": 85,
"score": 46
},
{
"classRank": 42,
"schoolRank": 86,
"score": 45.5
},
{
"classRank": 43,
"schoolRank": 88,
"score": 44.5
},
{
"classRank": 44,
"schoolRank": 92,
"score": 42.5
},
{
"classRank": 45,
"schoolRank": 95,
"score": 41
},
{
"classRank": 46,
"schoolRank": 95,
"score": 41
},
{
"classRank": 47,
"schoolRank": 96,
"score": 40.5
}
],
"高二03班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 90
},
{
"classRank": 2,
"schoolRank": 4,
"score": 88.5
},
{
"classRank": 3,
"schoolRank": 9,
"score": 84.5
},
{
"classRank": 4,
"schoolRank": 9,
"score": 84.5
},
{
"classRank": 5,
"schoolRank": 9,
"score": 84.5
},
{
"classRank": 6,
"schoolRank": 10,
"score": 84
},
{
"classRank": 7,
"schoolRank": 11,
"score": 83.5
},
{
"classRank": 8,
"schoolRank": 12,
"score": 83
},
{
"classRank": 9,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 10,
"schoolRank": 26,
"score": 76
},
{
"classRank": 11,
"schoolRank": 28,
"score": 75
},
{
"classRank": 12,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 13,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 14,
"schoolRank": 32,
"score": 73
},
{
"classRank": 15,
"schoolRank": 36,
"score": 71
},
{
"classRank": 16,
"schoolRank": 38,
"score": 70
},
{
"classRank": 17,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 18,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 19,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 20,
"schoolRank": 42,
"score": 68
},
{
"classRank": 21,
"schoolRank": 46,
"score": 66
},
{
"classRank": 22,
"schoolRank": 46,
"score": 66
},
{
"classRank": 23,
"schoolRank": 47,
"score": 65.5
},
{
"classRank": 24,
"schoolRank": 56,
"score": 61
},
{
"classRank": 25,
"schoolRank": 56,
"score": 61
},
{
"classRank": 26,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 27,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 28,
"schoolRank": 59,
"score": 59
},
{
"classRank": 29,
"schoolRank": 60,
"score": 58.5
},
{
"classRank": 30,
"schoolRank": 61,
"score": 58
},
{
"classRank": 31,
"schoolRank": 64,
"score": 56.5
},
{
"classRank": 32,
"schoolRank": 66,
"score": 55.5
},
{
"classRank": 33,
"schoolRank": 66,
"score": 55.5
},
{
"classRank": 34,
"schoolRank": 68,
"score": 54.5
},
{
"classRank": 35,
"schoolRank": 71,
"score": 53
},
{
"classRank": 36,
"schoolRank": 73,
"score": 52
},
{
"classRank": 37,
"schoolRank": 74,
"score": 51.5
},
{
"classRank": 38,
"schoolRank": 74,
"score": 51.5
},
{
"classRank": 39,
"schoolRank": 75,
"score": 51
},
{
"classRank": 40,
"schoolRank": 75,
"score": 51
},
{
"classRank": 41,
"schoolRank": 85,
"score": 46
},
{
"classRank": 42,
"schoolRank": 89,
"score": 44
}
],
"高二08班": [
{
"classRank": 1,
"schoolRank": 16,
"score": 81
},
{
"classRank": 2,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 3,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 4,
"schoolRank": 22,
"score": 78
},
{
"classRank": 5,
"schoolRank": 25,
"score": 76.5
},
{
"classRank": 6,
"schoolRank": 28,
"score": 75
},
{
"classRank": 7,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 8,
"schoolRank": 32,
"score": 73
},
{
"classRank": 9,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 10,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 11,
"schoolRank": 36,
"score": 71
},
{
"classRank": 12,
"schoolRank": 38,
"score": 70
},
{
"classRank": 13,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 14,
"schoolRank": 42,
"score": 68
},
{
"classRank": 15,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 16,
"schoolRank": 44,
"score": 67
},
{
"classRank": 17,
"schoolRank": 45,
"score": 66.5
},
{
"classRank": 18,
"schoolRank": 46,
"score": 66
},
{
"classRank": 19,
"schoolRank": 47,
"score": 65.5
},
{
"classRank": 20,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 21,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 22,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 23,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 24,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 25,
"schoolRank": 60,
"score": 58.5
},
{
"classRank": 26,
"schoolRank": 62,
"score": 57.5
},
{
"classRank": 27,
"schoolRank": 64,
"score": 56.5
},
{
"classRank": 28,
"schoolRank": 65,
"score": 56
},
{
"classRank": 29,
"schoolRank": 70,
"score": 53.5
},
{
"classRank": 30,
"schoolRank": 71,
"score": 53
},
{
"classRank": 31,
"schoolRank": 72,
"score": 52.5
},
{
"classRank": 32,
"schoolRank": 73,
"score": 52
},
{
"classRank": 33,
"schoolRank": 74,
"score": 51.5
},
{
"classRank": 34,
"schoolRank": 78,
"score": 49.5
},
{
"classRank": 35,
"schoolRank": 78,
"score": 49.5
}
],
"高二09班": [
{
"classRank": 1,
"schoolRank": 16,
"score": 81
},
{
"classRank": 2,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 3,
"schoolRank": 20,
"score": 79
},
{
"classRank": 4,
"schoolRank": 20,
"score": 79
},
{
"classRank": 5,
"schoolRank": 24,
"score": 77
},
{
"classRank": 6,
"schoolRank": 26,
"score": 76
},
{
"classRank": 7,
"schoolRank": 26,
"score": 76
},
{
"classRank": 8,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 9,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 10,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 11,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 12,
"schoolRank": 38,
"score": 70
},
{
"classRank": 13,
"schoolRank": 40,
"score": 69
},
{
"classRank": 14,
"schoolRank": 40,
"score": 69
},
{
"classRank": 15,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 16,
"schoolRank": 45,
"score": 66.5
},
{
"classRank": 17,
"schoolRank": 50,
"score": 64
},
{
"classRank": 18,
"schoolRank": 53,
"score": 62.5
},
{
"classRank": 19,
"schoolRank": 53,
"score": 62.5
},
{
"classRank": 20,
"schoolRank": 54,
"score": 62
},
{
"classRank": 21,
"schoolRank": 54,
"score": 62
},
{
"classRank": 22,
"schoolRank": 56,
"score": 61
},
{
"classRank": 23,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 24,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 25,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 26,
"schoolRank": 60,
"score": 58.5
},
{
"classRank": 27,
"schoolRank": 63,
"score": 57
},
{
"classRank": 28,
"schoolRank": 63,
"score": 57
},
{
"classRank": 29,
"schoolRank": 67,
"score": 55
},
{
"classRank": 30,
"schoolRank": 68,
"score": 54.5
},
{
"classRank": 31,
"schoolRank": 71,
"score": 53
},
{
"classRank": 32,
"schoolRank": 74,
"score": 51.5
},
{
"classRank": 33,
"schoolRank": 78,
"score": 49.5
},
{
"classRank": 34,
"schoolRank": 78,
"score": 49.5
},
{
"classRank": 35,
"schoolRank": 78,
"score": 49.5
},
{
"classRank": 36,
"schoolRank": 83,
"score": 47
},
{
"classRank": 37,
"schoolRank": 83,
"score": 47
},
{
"classRank": 38,
"schoolRank": 85,
"score": 46
},
{
"classRank": 39,
"schoolRank": 86,
"score": 45.5
},
{
"classRank": 40,
"schoolRank": 89,
"score": 44
},
{
"classRank": 41,
"schoolRank": 89,
"score": 44
},
{
"classRank": 42,
"schoolRank": 95,
"score": 41
},
{
"classRank": 43,
"schoolRank": 97,
"score": 38
},
{
"classRank": 44,
"schoolRank": 98,
"score": 36.5
},
{
"classRank": 45,
"schoolRank": 99,
"score": 35.5
},
{
"classRank": 46,
"schoolRank": 99,
"score": 35.5
},
{
"classRank": 47,
"schoolRank": 100,
"score": 33.5
},
{
"classRank": 48,
"schoolRank": 101,
"score": 33
}
],
"高二06班": [
{
"classRank": 1,
"schoolRank": 5,
"score": 88
},
{
"classRank": 2,
"schoolRank": 8,
"score": 85.5
},
{
"classRank": 3,
"schoolRank": 13,
"score": 82.5
},
{
"classRank": 4,
"schoolRank": 16,
"score": 81
},
{
"classRank": 5,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 6,
"schoolRank": 22,
"score": 78
},
{
"classRank": 7,
"schoolRank": 26,
"score": 76
},
{
"classRank": 8,
"schoolRank": 28,
"score": 75
},
{
"classRank": 9,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 10,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 11,
"schoolRank": 30,
"score": 74
},
{
"classRank": 12,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 13,
"schoolRank": 36,
"score": 71
},
{
"classRank": 14,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 15,
"schoolRank": 42,
"score": 68
},
{
"classRank": 16,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 17,
"schoolRank": 44,
"score": 67
},
{
"classRank": 18,
"schoolRank": 45,
"score": 66.5
},
{
"classRank": 19,
"schoolRank": 48,
"score": 65
},
{
"classRank": 20,
"schoolRank": 50,
"score": 64
},
{
"classRank": 21,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 22,
"schoolRank": 55,
"score": 61.5
},
{
"classRank": 23,
"schoolRank": 56,
"score": 61
},
{
"classRank": 24,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 25,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 26,
"schoolRank": 59,
"score": 59
},
{
"classRank": 27,
"schoolRank": 60,
"score": 58.5
},
{
"classRank": 28,
"schoolRank": 64,
"score": 56.5
},
{
"classRank": 29,
"schoolRank": 64,
"score": 56.5
},
{
"classRank": 30,
"schoolRank": 67,
"score": 55
},
{
"classRank": 31,
"schoolRank": 67,
"score": 55
},
{
"classRank": 32,
"schoolRank": 67,
"score": 55
},
{
"classRank": 33,
"schoolRank": 68,
"score": 54.5
},
{
"classRank": 34,
"schoolRank": 72,
"score": 52.5
},
{
"classRank": 35,
"schoolRank": 73,
"score": 52
},
{
"classRank": 36,
"schoolRank": 75,
"score": 51
},
{
"classRank": 37,
"schoolRank": 76,
"score": 50.5
},
{
"classRank": 38,
"schoolRank": 80,
"score": 48.5
},
{
"classRank": 39,
"schoolRank": 81,
"score": 48
},
{
"classRank": 40,
"schoolRank": 85,
"score": 46
},
{
"classRank": 41,
"schoolRank": 91,
"score": 43
},
{
"classRank": 42,
"schoolRank": 91,
"score": 43
},
{
"classRank": 43,
"schoolRank": 94,
"score": 41.5
},
{
"classRank": 44,
"schoolRank": 95,
"score": 41
},
{
"classRank": 45,
"schoolRank": 96,
"score": 40.5
}
],
"高二07班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 90
},
{
"classRank": 2,
"schoolRank": 9,
"score": 84.5
},
{
"classRank": 3,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 4,
"schoolRank": 17,
"score": 80.5
},
{
"classRank": 5,
"schoolRank": 18,
"score": 80
},
{
"classRank": 6,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 7,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 8,
"schoolRank": 26,
"score": 76
},
{
"classRank": 9,
"schoolRank": 28,
"score": 75
},
{
"classRank": 10,
"schoolRank": 30,
"score": 74
},
{
"classRank": 11,
"schoolRank": 34,
"score": 72
},
{
"classRank": 12,
"schoolRank": 36,
"score": 71
},
{
"classRank": 13,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 14,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 15,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 16,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 17,
"schoolRank": 45,
"score": 66.5
},
{
"classRank": 18,
"schoolRank": 45,
"score": 66.5
},
{
"classRank": 19,
"schoolRank": 50,
"score": 64
},
{
"classRank": 20,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 21,
"schoolRank": 52,
"score": 63
},
{
"classRank": 22,
"schoolRank": 52,
"score": 63
},
{
"classRank": 23,
"schoolRank": 53,
"score": 62.5
},
{
"classRank": 24,
"schoolRank": 58,
"score": 59.5
},
{
"classRank": 25,
"schoolRank": 61,
"score": 58
},
{
"classRank": 26,
"schoolRank": 63,
"score": 57
},
{
"classRank": 27,
"schoolRank": 64,
"score": 56.5
},
{
"classRank": 28,
"schoolRank": 65,
"score": 56
},
{
"classRank": 29,
"schoolRank": 67,
"score": 55
},
{
"classRank": 30,
"schoolRank": 73,
"score": 52
},
{
"classRank": 31,
"schoolRank": 74,
"score": 51.5
},
{
"classRank": 32,
"schoolRank": 75,
"score": 51
},
{
"classRank": 33,
"schoolRank": 78,
"score": 49.5
},
{
"classRank": 34,
"schoolRank": 82,
"score": 47.5
},
{
"classRank": 35,
"schoolRank": 82,
"score": 47.5
},
{
"classRank": 36,
"schoolRank": 84,
"score": 46.5
},
{
"classRank": 37,
"schoolRank": 87,
"score": 45
}
]
};
var ge8 = [];
getyk(data, ge8);
setMapS2(ge8, '历史', 'm2-8');
data={
"高二01班": [
{
"classRank": 1,
"schoolRank": 6,
"score": 87
},
{
"classRank": 2,
"schoolRank": 8,
"score": 85.5
},
{
"classRank": 3,
"schoolRank": 10,
"score": 84.5
},
{
"classRank": 4,
"schoolRank": 11,
"score": 84
},
{
"classRank": 5,
"schoolRank": 11,
"score": 84
},
{
"classRank": 6,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 7,
"schoolRank": 20,
"score": 79
},
{
"classRank": 8,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 9,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 10,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 11,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 12,
"schoolRank": 25,
"score": 76.5
},
{
"classRank": 13,
"schoolRank": 28,
"score": 75
},
{
"classRank": 14,
"schoolRank": 30,
"score": 74
},
{
"classRank": 15,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 16,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 17,
"schoolRank": 32,
"score": 73
},
{
"classRank": 18,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 19,
"schoolRank": 36,
"score": 71
},
{
"classRank": 20,
"schoolRank": 38,
"score": 70
},
{
"classRank": 21,
"schoolRank": 42,
"score": 68
},
{
"classRank": 22,
"schoolRank": 42,
"score": 68
},
{
"classRank": 23,
"schoolRank": 42,
"score": 68
},
{
"classRank": 24,
"schoolRank": 45,
"score": 66.5
},
{
"classRank": 25,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 26,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 27,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 28,
"schoolRank": 55,
"score": 61.5
},
{
"classRank": 29,
"schoolRank": 59,
"score": 59.5
},
{
"classRank": 30,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 31,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 32,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 33,
"schoolRank": 64,
"score": 57
},
{
"classRank": 34,
"schoolRank": 65,
"score": 56.5
},
{
"classRank": 35,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 36,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 37,
"schoolRank": 70,
"score": 54
},
{
"classRank": 38,
"schoolRank": 70,
"score": 54
},
{
"classRank": 39,
"schoolRank": 79,
"score": 49.5
},
{
"classRank": 40,
"schoolRank": 79,
"score": 49.5
},
{
"classRank": 41,
"schoolRank": 79,
"score": 49.5
},
{
"classRank": 42,
"schoolRank": 80,
"score": 49
},
{
"classRank": 43,
"schoolRank": 85,
"score": 46.5
},
{
"classRank": 44,
"schoolRank": 86,
"score": 46
},
{
"classRank": 45,
"schoolRank": 87,
"score": 45.5
},
{
"classRank": 46,
"schoolRank": 90,
"score": 44
},
{
"classRank": 47,
"schoolRank": 91,
"score": 43.5
},
{
"classRank": 48,
"schoolRank": 95,
"score": 41.5
}
],
"高二10班": [
{
"classRank": 1,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 2,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 3,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 4,
"schoolRank": 24,
"score": 77
},
{
"classRank": 5,
"schoolRank": 24,
"score": 77
},
{
"classRank": 6,
"schoolRank": 24,
"score": 77
},
{
"classRank": 7,
"schoolRank": 28,
"score": 75
},
{
"classRank": 8,
"schoolRank": 28,
"score": 75
},
{
"classRank": 9,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 10,
"schoolRank": 36,
"score": 71
},
{
"classRank": 11,
"schoolRank": 38,
"score": 70
},
{
"classRank": 12,
"schoolRank": 38,
"score": 70
},
{
"classRank": 13,
"schoolRank": 42,
"score": 68
},
{
"classRank": 14,
"schoolRank": 45,
"score": 66.5
},
{
"classRank": 15,
"schoolRank": 45,
"score": 66.5
},
{
"classRank": 16,
"schoolRank": 45,
"score": 66.5
},
{
"classRank": 17,
"schoolRank": 48,
"score": 65
},
{
"classRank": 18,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 19,
"schoolRank": 55,
"score": 61.5
},
{
"classRank": 20,
"schoolRank": 59,
"score": 59.5
},
{
"classRank": 21,
"schoolRank": 60,
"score": 59
},
{
"classRank": 22,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 23,
"schoolRank": 66,
"score": 56
},
{
"classRank": 24,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 25,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 26,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 27,
"schoolRank": 68,
"score": 55
},
{
"classRank": 28,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 29,
"schoolRank": 75,
"score": 51.5
},
{
"classRank": 30,
"schoolRank": 77,
"score": 50.5
},
{
"classRank": 31,
"schoolRank": 78,
"score": 50
},
{
"classRank": 32,
"schoolRank": 78,
"score": 50
},
{
"classRank": 33,
"schoolRank": 79,
"score": 49.5
},
{
"classRank": 34,
"schoolRank": 80,
"score": 49
},
{
"classRank": 35,
"schoolRank": 85,
"score": 46.5
},
{
"classRank": 36,
"schoolRank": 88,
"score": 45
},
{
"classRank": 37,
"schoolRank": 91,
"score": 43.5
},
{
"classRank": 38,
"schoolRank": 94,
"score": 42
},
{
"classRank": 39,
"schoolRank": 96,
"score": 41
}
],
"高二04班": [
{
"classRank": 1,
"schoolRank": 5,
"score": 88
},
{
"classRank": 2,
"schoolRank": 7,
"score": 86
},
{
"classRank": 3,
"schoolRank": 9,
"score": 85
},
{
"classRank": 4,
"schoolRank": 11,
"score": 84
},
{
"classRank": 5,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 6,
"schoolRank": 16,
"score": 81
},
{
"classRank": 7,
"schoolRank": 17,
"score": 80.5
},
{
"classRank": 8,
"schoolRank": 18,
"score": 80
},
{
"classRank": 9,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 10,
"schoolRank": 20,
"score": 79
},
{
"classRank": 11,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 12,
"schoolRank": 24,
"score": 77
},
{
"classRank": 13,
"schoolRank": 25,
"score": 76.5
},
{
"classRank": 14,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 15,
"schoolRank": 36,
"score": 71
},
{
"classRank": 16,
"schoolRank": 38,
"score": 70
},
{
"classRank": 17,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 18,
"schoolRank": 45,
"score": 66.5
},
{
"classRank": 19,
"schoolRank": 46,
"score": 66
},
{
"classRank": 20,
"schoolRank": 48,
"score": 65
},
{
"classRank": 21,
"schoolRank": 50,
"score": 64
},
{
"classRank": 22,
"schoolRank": 52,
"score": 63
},
{
"classRank": 23,
"schoolRank": 53,
"score": 62.5
},
{
"classRank": 24,
"schoolRank": 54,
"score": 62
},
{
"classRank": 25,
"schoolRank": 54,
"score": 62
},
{
"classRank": 26,
"schoolRank": 55,
"score": 61.5
},
{
"classRank": 27,
"schoolRank": 56,
"score": 61
},
{
"classRank": 28,
"schoolRank": 58,
"score": 60
},
{
"classRank": 29,
"schoolRank": 59,
"score": 59.5
},
{
"classRank": 30,
"schoolRank": 59,
"score": 59.5
},
{
"classRank": 31,
"schoolRank": 63,
"score": 57.5
},
{
"classRank": 32,
"schoolRank": 68,
"score": 55
},
{
"classRank": 33,
"schoolRank": 70,
"score": 54
},
{
"classRank": 34,
"schoolRank": 72,
"score": 53
},
{
"classRank": 35,
"schoolRank": 77,
"score": 50.5
},
{
"classRank": 36,
"schoolRank": 81,
"score": 48.5
}
],
"高二05班": [
{
"classRank": 1,
"schoolRank": 8,
"score": 85.5
},
{
"classRank": 2,
"schoolRank": 10,
"score": 84.5
},
{
"classRank": 3,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 4,
"schoolRank": 17,
"score": 80.5
},
{
"classRank": 5,
"schoolRank": 18,
"score": 80
},
{
"classRank": 6,
"schoolRank": 18,
"score": 80
},
{
"classRank": 7,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 8,
"schoolRank": 22,
"score": 78
},
{
"classRank": 9,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 10,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 11,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 12,
"schoolRank": 32,
"score": 73
},
{
"classRank": 13,
"schoolRank": 32,
"score": 73
},
{
"classRank": 14,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 15,
"schoolRank": 36,
"score": 71
},
{
"classRank": 16,
"schoolRank": 38,
"score": 70
},
{
"classRank": 17,
"schoolRank": 40,
"score": 69
},
{
"classRank": 18,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 19,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 20,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 21,
"schoolRank": 44,
"score": 67
},
{
"classRank": 22,
"schoolRank": 46,
"score": 66
},
{
"classRank": 23,
"schoolRank": 52,
"score": 63
},
{
"classRank": 24,
"schoolRank": 52,
"score": 63
},
{
"classRank": 25,
"schoolRank": 55,
"score": 61.5
},
{
"classRank": 26,
"schoolRank": 59,
"score": 59.5
},
{
"classRank": 27,
"schoolRank": 60,
"score": 59
},
{
"classRank": 28,
"schoolRank": 60,
"score": 59
},
{
"classRank": 29,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 30,
"schoolRank": 62,
"score": 58
},
{
"classRank": 31,
"schoolRank": 64,
"score": 57
},
{
"classRank": 32,
"schoolRank": 72,
"score": 53
},
{
"classRank": 33,
"schoolRank": 75,
"score": 51.5
},
{
"classRank": 34,
"schoolRank": 76,
"score": 51
},
{
"classRank": 35,
"schoolRank": 80,
"score": 49
},
{
"classRank": 36,
"schoolRank": 80,
"score": 49
},
{
"classRank": 37,
"schoolRank": 80,
"score": 49
},
{
"classRank": 38,
"schoolRank": 81,
"score": 48.5
},
{
"classRank": 39,
"schoolRank": 82,
"score": 48
},
{
"classRank": 40,
"schoolRank": 83,
"score": 47.5
},
{
"classRank": 41,
"schoolRank": 96,
"score": 41
},
{
"classRank": 42,
"schoolRank": 100,
"score": 38.5
}
],
"高二02班": [
{
"classRank": 1,
"schoolRank": 8,
"score": 85.5
},
{
"classRank": 2,
"schoolRank": 8,
"score": 85.5
},
{
"classRank": 3,
"schoolRank": 9,
"score": 85
},
{
"classRank": 4,
"schoolRank": 10,
"score": 84.5
},
{
"classRank": 5,
"schoolRank": 11,
"score": 84
},
{
"classRank": 6,
"schoolRank": 13,
"score": 82.5
},
{
"classRank": 7,
"schoolRank": 14,
"score": 82
},
{
"classRank": 8,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 9,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 10,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 11,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 12,
"schoolRank": 28,
"score": 75
},
{
"classRank": 13,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 14,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 15,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 16,
"schoolRank": 30,
"score": 74
},
{
"classRank": 17,
"schoolRank": 32,
"score": 73
},
{
"classRank": 18,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 19,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 20,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 21,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 22,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 23,
"schoolRank": 45,
"score": 66.5
},
{
"classRank": 24,
"schoolRank": 48,
"score": 65
},
{
"classRank": 25,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 26,
"schoolRank": 54,
"score": 62
},
{
"classRank": 27,
"schoolRank": 58,
"score": 60
},
{
"classRank": 28,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 29,
"schoolRank": 63,
"score": 57.5
},
{
"classRank": 30,
"schoolRank": 63,
"score": 57.5
},
{
"classRank": 31,
"schoolRank": 63,
"score": 57.5
},
{
"classRank": 32,
"schoolRank": 65,
"score": 56.5
},
{
"classRank": 33,
"schoolRank": 66,
"score": 56
},
{
"classRank": 34,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 35,
"schoolRank": 71,
"score": 53.5
},
{
"classRank": 36,
"schoolRank": 71,
"score": 53.5
},
{
"classRank": 37,
"schoolRank": 73,
"score": 52.5
},
{
"classRank": 38,
"schoolRank": 76,
"score": 51
},
{
"classRank": 39,
"schoolRank": 77,
"score": 50.5
},
{
"classRank": 40,
"schoolRank": 77,
"score": 50.5
},
{
"classRank": 41,
"schoolRank": 78,
"score": 50
},
{
"classRank": 42,
"schoolRank": 84,
"score": 47
},
{
"classRank": 43,
"schoolRank": 86,
"score": 46
},
{
"classRank": 44,
"schoolRank": 86,
"score": 46
},
{
"classRank": 45,
"schoolRank": 87,
"score": 45.5
},
{
"classRank": 46,
"schoolRank": 91,
"score": 43.5
},
{
"classRank": 47,
"schoolRank": 93,
"score": 42.5
}
],
"高二03班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 92.5
},
{
"classRank": 2,
"schoolRank": 3,
"score": 91
},
{
"classRank": 3,
"schoolRank": 4,
"score": 89
},
{
"classRank": 4,
"schoolRank": 7,
"score": 86
},
{
"classRank": 5,
"schoolRank": 9,
"score": 85
},
{
"classRank": 6,
"schoolRank": 14,
"score": 82
},
{
"classRank": 7,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 8,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 9,
"schoolRank": 20,
"score": 79
},
{
"classRank": 10,
"schoolRank": 20,
"score": 79
},
{
"classRank": 11,
"schoolRank": 24,
"score": 77
},
{
"classRank": 12,
"schoolRank": 26,
"score": 76
},
{
"classRank": 13,
"schoolRank": 34,
"score": 72
},
{
"classRank": 14,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 15,
"schoolRank": 36,
"score": 71
},
{
"classRank": 16,
"schoolRank": 38,
"score": 70
},
{
"classRank": 17,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 18,
"schoolRank": 44,
"score": 67
},
{
"classRank": 19,
"schoolRank": 44,
"score": 67
},
{
"classRank": 20,
"schoolRank": 46,
"score": 66
},
{
"classRank": 21,
"schoolRank": 48,
"score": 65
},
{
"classRank": 22,
"schoolRank": 50,
"score": 64
},
{
"classRank": 23,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 24,
"schoolRank": 52,
"score": 63
},
{
"classRank": 25,
"schoolRank": 54,
"score": 62
},
{
"classRank": 26,
"schoolRank": 55,
"score": 61.5
},
{
"classRank": 27,
"schoolRank": 59,
"score": 59.5
},
{
"classRank": 28,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 29,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 30,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 31,
"schoolRank": 66,
"score": 56
},
{
"classRank": 32,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 33,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 34,
"schoolRank": 72,
"score": 53
},
{
"classRank": 35,
"schoolRank": 72,
"score": 53
},
{
"classRank": 36,
"schoolRank": 74,
"score": 52
},
{
"classRank": 37,
"schoolRank": 74,
"score": 52
},
{
"classRank": 38,
"schoolRank": 77,
"score": 50.5
},
{
"classRank": 39,
"schoolRank": 77,
"score": 50.5
},
{
"classRank": 40,
"schoolRank": 80,
"score": 49
},
{
"classRank": 41,
"schoolRank": 83,
"score": 47.5
},
{
"classRank": 42,
"schoolRank": 91,
"score": 43.5
}
],
"高二08班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 91.5
},
{
"classRank": 2,
"schoolRank": 16,
"score": 81
},
{
"classRank": 3,
"schoolRank": 16,
"score": 81
},
{
"classRank": 4,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 5,
"schoolRank": 20,
"score": 79
},
{
"classRank": 6,
"schoolRank": 20,
"score": 79
},
{
"classRank": 7,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 8,
"schoolRank": 24,
"score": 77
},
{
"classRank": 9,
"schoolRank": 28,
"score": 75
},
{
"classRank": 10,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 11,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 12,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 13,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 14,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 15,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 16,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 17,
"schoolRank": 46,
"score": 66
},
{
"classRank": 18,
"schoolRank": 46,
"score": 66
},
{
"classRank": 19,
"schoolRank": 47,
"score": 65.5
},
{
"classRank": 20,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 21,
"schoolRank": 53,
"score": 62.5
},
{
"classRank": 22,
"schoolRank": 55,
"score": 61.5
},
{
"classRank": 23,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 24,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 25,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 26,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 27,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 28,
"schoolRank": 68,
"score": 55
},
{
"classRank": 29,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 30,
"schoolRank": 71,
"score": 53.5
},
{
"classRank": 31,
"schoolRank": 74,
"score": 52
},
{
"classRank": 32,
"schoolRank": 77,
"score": 50.5
},
{
"classRank": 33,
"schoolRank": 79,
"score": 49.5
},
{
"classRank": 34,
"schoolRank": 87,
"score": 45.5
},
{
"classRank": 35,
"schoolRank": 90,
"score": 44
}
],
"高二09班": [
{
"classRank": 1,
"schoolRank": 11,
"score": 84
},
{
"classRank": 2,
"schoolRank": 12,
"score": 83
},
{
"classRank": 3,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 4,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 5,
"schoolRank": 24,
"score": 77
},
{
"classRank": 6,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 7,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 8,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 9,
"schoolRank": 36,
"score": 71
},
{
"classRank": 10,
"schoolRank": 40,
"score": 69
},
{
"classRank": 11,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 12,
"schoolRank": 42,
"score": 68
},
{
"classRank": 13,
"schoolRank": 42,
"score": 68
},
{
"classRank": 14,
"schoolRank": 47,
"score": 65.5
},
{
"classRank": 15,
"schoolRank": 48,
"score": 65
},
{
"classRank": 16,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 17,
"schoolRank": 50,
"score": 64
},
{
"classRank": 18,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 19,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 20,
"schoolRank": 54,
"score": 62
},
{
"classRank": 21,
"schoolRank": 54,
"score": 62
},
{
"classRank": 22,
"schoolRank": 56,
"score": 61
},
{
"classRank": 23,
"schoolRank": 64,
"score": 57
},
{
"classRank": 24,
"schoolRank": 64,
"score": 57
},
{
"classRank": 25,
"schoolRank": 65,
"score": 56.5
},
{
"classRank": 26,
"schoolRank": 68,
"score": 55
},
{
"classRank": 27,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 28,
"schoolRank": 70,
"score": 54
},
{
"classRank": 29,
"schoolRank": 74,
"score": 52
},
{
"classRank": 30,
"schoolRank": 77,
"score": 50.5
},
{
"classRank": 31,
"schoolRank": 80,
"score": 49
},
{
"classRank": 32,
"schoolRank": 82,
"score": 48
},
{
"classRank": 33,
"schoolRank": 84,
"score": 47
},
{
"classRank": 34,
"schoolRank": 85,
"score": 46.5
},
{
"classRank": 35,
"schoolRank": 86,
"score": 46
},
{
"classRank": 36,
"schoolRank": 87,
"score": 45.5
},
{
"classRank": 37,
"schoolRank": 89,
"score": 44.5
},
{
"classRank": 38,
"schoolRank": 90,
"score": 44
},
{
"classRank": 39,
"schoolRank": 92,
"score": 43
},
{
"classRank": 40,
"schoolRank": 95,
"score": 41.5
},
{
"classRank": 41,
"schoolRank": 95,
"score": 41.5
},
{
"classRank": 42,
"schoolRank": 96,
"score": 41
},
{
"classRank": 43,
"schoolRank": 97,
"score": 40.5
},
{
"classRank": 44,
"schoolRank": 98,
"score": 39.5
},
{
"classRank": 45,
"schoolRank": 99,
"score": 39
},
{
"classRank": 46,
"schoolRank": 100,
"score": 38.5
},
{
"classRank": 47,
"schoolRank": 102,
"score": 35.5
},
{
"classRank": 48,
"schoolRank": 103,
"score": 35
}
],
"高二06班": [
{
"classRank": 1,
"schoolRank": 4,
"score": 89
},
{
"classRank": 2,
"schoolRank": 7,
"score": 86
},
{
"classRank": 3,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 4,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 5,
"schoolRank": 16,
"score": 81
},
{
"classRank": 6,
"schoolRank": 16,
"score": 81
},
{
"classRank": 7,
"schoolRank": 26,
"score": 76
},
{
"classRank": 8,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 9,
"schoolRank": 30,
"score": 74
},
{
"classRank": 10,
"schoolRank": 30,
"score": 74
},
{
"classRank": 11,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 12,
"schoolRank": 34,
"score": 72
},
{
"classRank": 13,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 14,
"schoolRank": 38,
"score": 70
},
{
"classRank": 15,
"schoolRank": 40,
"score": 69
},
{
"classRank": 16,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 17,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 18,
"schoolRank": 48,
"score": 65
},
{
"classRank": 19,
"schoolRank": 48,
"score": 65
},
{
"classRank": 20,
"schoolRank": 50,
"score": 64
},
{
"classRank": 21,
"schoolRank": 52,
"score": 63
},
{
"classRank": 22,
"schoolRank": 53,
"score": 62.5
},
{
"classRank": 23,
"schoolRank": 54,
"score": 62
},
{
"classRank": 24,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 25,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 26,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 27,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 28,
"schoolRank": 62,
"score": 58
},
{
"classRank": 29,
"schoolRank": 63,
"score": 57.5
},
{
"classRank": 30,
"schoolRank": 64,
"score": 57
},
{
"classRank": 31,
"schoolRank": 66,
"score": 56
},
{
"classRank": 32,
"schoolRank": 70,
"score": 54
},
{
"classRank": 33,
"schoolRank": 72,
"score": 53
},
{
"classRank": 34,
"schoolRank": 77,
"score": 50.5
},
{
"classRank": 35,
"schoolRank": 79,
"score": 49.5
},
{
"classRank": 36,
"schoolRank": 82,
"score": 48
},
{
"classRank": 37,
"schoolRank": 82,
"score": 48
},
{
"classRank": 38,
"schoolRank": 82,
"score": 48
},
{
"classRank": 39,
"schoolRank": 85,
"score": 46.5
},
{
"classRank": 40,
"schoolRank": 86,
"score": 46
},
{
"classRank": 41,
"schoolRank": 86,
"score": 46
},
{
"classRank": 42,
"schoolRank": 89,
"score": 44.5
},
{
"classRank": 43,
"schoolRank": 90,
"score": 44
},
{
"classRank": 44,
"schoolRank": 94,
"score": 42
},
{
"classRank": 45,
"schoolRank": 101,
"score": 37
}
],
"高二07班": [
{
"classRank": 1,
"schoolRank": 18,
"score": 80
},
{
"classRank": 2,
"schoolRank": 20,
"score": 79
},
{
"classRank": 3,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 4,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 5,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 6,
"schoolRank": 25,
"score": 76.5
},
{
"classRank": 7,
"schoolRank": 25,
"score": 76.5
},
{
"classRank": 8,
"schoolRank": 26,
"score": 76
},
{
"classRank": 9,
"schoolRank": 28,
"score": 75
},
{
"classRank": 10,
"schoolRank": 28,
"score": 75
},
{
"classRank": 11,
"schoolRank": 30,
"score": 74
},
{
"classRank": 12,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 13,
"schoolRank": 38,
"score": 70
},
{
"classRank": 14,
"schoolRank": 38,
"score": 70
},
{
"classRank": 15,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 16,
"schoolRank": 42,
"score": 68
},
{
"classRank": 17,
"schoolRank": 45,
"score": 66.5
},
{
"classRank": 18,
"schoolRank": 47,
"score": 65.5
},
{
"classRank": 19,
"schoolRank": 48,
"score": 65
},
{
"classRank": 20,
"schoolRank": 53,
"score": 62.5
},
{
"classRank": 21,
"schoolRank": 53,
"score": 62.5
},
{
"classRank": 22,
"schoolRank": 55,
"score": 61.5
},
{
"classRank": 23,
"schoolRank": 56,
"score": 61
},
{
"classRank": 24,
"schoolRank": 56,
"score": 61
},
{
"classRank": 25,
"schoolRank": 58,
"score": 60
},
{
"classRank": 26,
"schoolRank": 59,
"score": 59.5
},
{
"classRank": 27,
"schoolRank": 62,
"score": 58
},
{
"classRank": 28,
"schoolRank": 66,
"score": 56
},
{
"classRank": 29,
"schoolRank": 68,
"score": 55
},
{
"classRank": 30,
"schoolRank": 71,
"score": 53.5
},
{
"classRank": 31,
"schoolRank": 72,
"score": 53
},
{
"classRank": 32,
"schoolRank": 76,
"score": 51
},
{
"classRank": 33,
"schoolRank": 77,
"score": 50.5
},
{
"classRank": 34,
"schoolRank": 80,
"score": 49
},
{
"classRank": 35,
"schoolRank": 82,
"score": 48
},
{
"classRank": 36,
"schoolRank": 85,
"score": 46.5
},
{
"classRank": 37,
"schoolRank": 86,
"score": 46
}
]
};
var ge9 = [];
getyk(data, ge9);
setMapS2(ge9, '地理', 'm2-9');
ddb(2);
//高三
data = {
    "高三09班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 99.5
        },
        {
            "classRank": 2,
            "schoolRank": 2,
            "score": 99
        },
        {
            "classRank": 3,
            "schoolRank": 7,
            "score": 96.5
        },
        {
            "classRank": 4,
            "schoolRank": 8,
            "score": 96
        },
        {
            "classRank": 5,
            "schoolRank": 13,
            "score": 93
        },
        {
            "classRank": 6,
            "schoolRank": 17,
            "score": 91
        },
        {
            "classRank": 7,
            "schoolRank": 17,
            "score": 91
        },
        {
            "classRank": 8,
            "schoolRank": 30,
            "score": 84
        },
        {
            "classRank": 9,
            "schoolRank": 31,
            "score": 83.5
        },
        {
            "classRank": 10,
            "schoolRank": 34,
            "score": 82
        },
        {
            "classRank": 11,
            "schoolRank": 36,
            "score": 81
        },
        {
            "classRank": 12,
            "schoolRank": 37,
            "score": 80.5
        },
        {
            "classRank": 13,
            "schoolRank": 39,
            "score": 79.5
        },
        {
            "classRank": 14,
            "schoolRank": 41,
            "score": 78.5
        },
        {
            "classRank": 15,
            "schoolRank": 41,
            "score": 78.5
        },
        {
            "classRank": 16,
            "schoolRank": 42,
            "score": 78
        },
        {
            "classRank": 17,
            "schoolRank": 48,
            "score": 75
        },
        {
            "classRank": 18,
            "schoolRank": 56,
            "score": 71
        },
        {
            "classRank": 19,
            "schoolRank": 59,
            "score": 69.5
        },
        {
            "classRank": 20,
            "schoolRank": 60,
            "score": 69
        },
        {
            "classRank": 21,
            "schoolRank": 60,
            "score": 69
        },
        {
            "classRank": 22,
            "schoolRank": 63,
            "score": 67
        },
        {
            "classRank": 23,
            "schoolRank": 66,
            "score": 65.5
        },
        {
            "classRank": 24,
            "schoolRank": 68,
            "score": 64.5
        },
        {
            "classRank": 25,
            "schoolRank": 68,
            "score": 64.5
        },
        {
            "classRank": 26,
            "schoolRank": 70,
            "score": 63.5
        },
        {
            "classRank": 27,
            "schoolRank": 81,
            "score": 57
        },
        {
            "classRank": 28,
            "schoolRank": 101,
            "score": 126.5
        },
        {
            "classRank": 29,
            "schoolRank": 110,
            "score": 120.5
        },
        {
            "classRank": 30,
            "schoolRank": 118,
            "score": 116.5
        },
        {
            "classRank": 31,
            "schoolRank": 121,
            "score": 115
        },
        {
            "classRank": 32,
            "schoolRank": 126,
            "score": 112.5
        },
        {
            "classRank": 33,
            "schoolRank": 127,
            "score": 112
        },
        {
            "classRank": 34,
            "schoolRank": 129,
            "score": 111
        },
        {
            "classRank": 35,
            "schoolRank": 129,
            "score": 111
        },
        {
            "classRank": 36,
            "schoolRank": 132,
            "score": 109.5
        },
        {
            "classRank": 37,
            "schoolRank": 134,
            "score": 108.5
        },
        {
            "classRank": 38,
            "schoolRank": 135,
            "score": 108
        },
        {
            "classRank": 39,
            "schoolRank": 141,
            "score": 105
        },
        {
            "classRank": 40,
            "schoolRank": 144,
            "score": 103.5
        },
        {
            "classRank": 41,
            "schoolRank": 149,
            "score": 101
        },
        {
            "classRank": 42,
            "schoolRank": 150,
            "score": 100.5
        }
    ],
    "高三07班": [{
            "classRank": 1,
            "schoolRank": 2,
            "score": 99
        },
        {
            "classRank": 2,
            "schoolRank": 3,
            "score": 98.5
        },
        {
            "classRank": 3,
            "schoolRank": 7,
            "score": 96.5
        },
        {
            "classRank": 4,
            "schoolRank": 9,
            "score": 95.5
        },
        {
            "classRank": 5,
            "schoolRank": 12,
            "score": 93.5
        },
        {
            "classRank": 6,
            "schoolRank": 12,
            "score": 93.5
        },
        {
            "classRank": 7,
            "schoolRank": 12,
            "score": 93.5
        },
        {
            "classRank": 8,
            "schoolRank": 17,
            "score": 91
        },
        {
            "classRank": 9,
            "schoolRank": 19,
            "score": 90
        },
        {
            "classRank": 10,
            "schoolRank": 28,
            "score": 85.5
        },
        {
            "classRank": 11,
            "schoolRank": 29,
            "score": 85
        },
        {
            "classRank": 12,
            "schoolRank": 31,
            "score": 83.5
        },
        {
            "classRank": 13,
            "schoolRank": 32,
            "score": 83
        },
        {
            "classRank": 14,
            "schoolRank": 38,
            "score": 80
        },
        {
            "classRank": 15,
            "schoolRank": 38,
            "score": 80
        },
        {
            "classRank": 16,
            "schoolRank": 42,
            "score": 78
        },
        {
            "classRank": 17,
            "schoolRank": 51,
            "score": 73.5
        },
        {
            "classRank": 18,
            "schoolRank": 52,
            "score": 73
        },
        {
            "classRank": 19,
            "schoolRank": 54,
            "score": 72
        },
        {
            "classRank": 20,
            "schoolRank": 56,
            "score": 71
        },
        {
            "classRank": 21,
            "schoolRank": 58,
            "score": 70
        },
        {
            "classRank": 22,
            "schoolRank": 65,
            "score": 66
        },
        {
            "classRank": 23,
            "schoolRank": 66,
            "score": 65.5
        },
        {
            "classRank": 24,
            "schoolRank": 66,
            "score": 65.5
        },
        {
            "classRank": 25,
            "schoolRank": 72,
            "score": 62
        },
        {
            "classRank": 26,
            "schoolRank": 75,
            "score": 60.5
        },
        {
            "classRank": 27,
            "schoolRank": 76,
            "score": 60
        },
        {
            "classRank": 28,
            "schoolRank": 78,
            "score": 59
        },
        {
            "classRank": 29,
            "schoolRank": 84,
            "score": 55.5
        },
        {
            "classRank": 30,
            "schoolRank": 85,
            "score": 54.5
        },
        {
            "classRank": 31,
            "schoolRank": 91,
            "score": 131.5
        },
        {
            "classRank": 32,
            "schoolRank": 101,
            "score": 126.5
        },
        {
            "classRank": 33,
            "schoolRank": 105,
            "score": 123.5
        },
        {
            "classRank": 34,
            "schoolRank": 111,
            "score": 120
        },
        {
            "classRank": 35,
            "schoolRank": 113,
            "score": 119
        },
        {
            "classRank": 36,
            "schoolRank": 114,
            "score": 118.5
        },
        {
            "classRank": 37,
            "schoolRank": 118,
            "score": 116.5
        },
        {
            "classRank": 38,
            "schoolRank": 122,
            "score": 114.5
        },
        {
            "classRank": 39,
            "schoolRank": 124,
            "score": 113.5
        },
        {
            "classRank": 40,
            "schoolRank": 129,
            "score": 111
        },
        {
            "classRank": 41,
            "schoolRank": 132,
            "score": 109.5
        },
        {
            "classRank": 42,
            "schoolRank": 134,
            "score": 108.5
        },
        {
            "classRank": 43,
            "schoolRank": 140,
            "score": 105.5
        },
        {
            "classRank": 44,
            "schoolRank": 141,
            "score": 105
        },
        {
            "classRank": 45,
            "schoolRank": 142,
            "score": 104.5
        },
        {
            "classRank": 46,
            "schoolRank": 150,
            "score": 100.5
        },
        {
            "classRank": 47,
            "schoolRank": 151,
            "score": 100
        }
    ],
    "高三08班": [{
            "classRank": 1,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 2,
            "schoolRank": 8,
            "score": 96
        },
        {
            "classRank": 3,
            "schoolRank": 9,
            "score": 95.5
        },
        {
            "classRank": 4,
            "schoolRank": 13,
            "score": 93
        },
        {
            "classRank": 5,
            "schoolRank": 18,
            "score": 90.5
        },
        {
            "classRank": 6,
            "schoolRank": 19,
            "score": 90
        },
        {
            "classRank": 7,
            "schoolRank": 20,
            "score": 89.5
        },
        {
            "classRank": 8,
            "schoolRank": 23,
            "score": 88
        },
        {
            "classRank": 9,
            "schoolRank": 24,
            "score": 87.5
        },
        {
            "classRank": 10,
            "schoolRank": 27,
            "score": 86
        },
        {
            "classRank": 11,
            "schoolRank": 29,
            "score": 85
        },
        {
            "classRank": 12,
            "schoolRank": 31,
            "score": 83.5
        },
        {
            "classRank": 13,
            "schoolRank": 32,
            "score": 83
        },
        {
            "classRank": 14,
            "schoolRank": 35,
            "score": 81.5
        },
        {
            "classRank": 15,
            "schoolRank": 37,
            "score": 80.5
        },
        {
            "classRank": 16,
            "schoolRank": 43,
            "score": 77.5
        },
        {
            "classRank": 17,
            "schoolRank": 44,
            "score": 77
        },
        {
            "classRank": 18,
            "schoolRank": 45,
            "score": 76.5
        },
        {
            "classRank": 19,
            "schoolRank": 49,
            "score": 74.5
        },
        {
            "classRank": 20,
            "schoolRank": 52,
            "score": 73
        },
        {
            "classRank": 21,
            "schoolRank": 55,
            "score": 71.5
        },
        {
            "classRank": 22,
            "schoolRank": 57,
            "score": 70.5
        },
        {
            "classRank": 23,
            "schoolRank": 58,
            "score": 70
        },
        {
            "classRank": 24,
            "schoolRank": 62,
            "score": 68
        },
        {
            "classRank": 25,
            "schoolRank": 64,
            "score": 66.5
        },
        {
            "classRank": 26,
            "schoolRank": 65,
            "score": 66
        },
        {
            "classRank": 27,
            "schoolRank": 70,
            "score": 63.5
        },
        {
            "classRank": 28,
            "schoolRank": 105,
            "score": 123.5
        },
        {
            "classRank": 29,
            "schoolRank": 106,
            "score": 123
        },
        {
            "classRank": 30,
            "schoolRank": 109,
            "score": 121
        },
        {
            "classRank": 31,
            "schoolRank": 116,
            "score": 117.5
        },
        {
            "classRank": 32,
            "schoolRank": 117,
            "score": 117
        },
        {
            "classRank": 33,
            "schoolRank": 117,
            "score": 117
        },
        {
            "classRank": 34,
            "schoolRank": 120,
            "score": 115.5
        },
        {
            "classRank": 35,
            "schoolRank": 121,
            "score": 115
        },
        {
            "classRank": 36,
            "schoolRank": 125,
            "score": 113
        },
        {
            "classRank": 37,
            "schoolRank": 132,
            "score": 109.5
        },
        {
            "classRank": 38,
            "schoolRank": 135,
            "score": 108
        },
        {
            "classRank": 39,
            "schoolRank": 137,
            "score": 107
        },
        {
            "classRank": 40,
            "schoolRank": 138,
            "score": 106.5
        },
        {
            "classRank": 41,
            "schoolRank": 140,
            "score": 105.5
        },
        {
            "classRank": 42,
            "schoolRank": 149,
            "score": 101
        }
    ],
    "高三05班": [{
            "classRank": 1,
            "schoolRank": 5,
            "score": 97.5
        },
        {
            "classRank": 2,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 3,
            "schoolRank": 9,
            "score": 95.5
        },
        {
            "classRank": 4,
            "schoolRank": 14,
            "score": 92.5
        },
        {
            "classRank": 5,
            "schoolRank": 14,
            "score": 92.5
        },
        {
            "classRank": 6,
            "schoolRank": 18,
            "score": 90.5
        },
        {
            "classRank": 7,
            "schoolRank": 20,
            "score": 89.5
        },
        {
            "classRank": 8,
            "schoolRank": 21,
            "score": 89
        },
        {
            "classRank": 9,
            "schoolRank": 24,
            "score": 87.5
        },
        {
            "classRank": 10,
            "schoolRank": 28,
            "score": 85.5
        },
        {
            "classRank": 11,
            "schoolRank": 29,
            "score": 85
        },
        {
            "classRank": 12,
            "schoolRank": 36,
            "score": 81
        },
        {
            "classRank": 13,
            "schoolRank": 37,
            "score": 80.5
        },
        {
            "classRank": 14,
            "schoolRank": 43,
            "score": 77.5
        },
        {
            "classRank": 15,
            "schoolRank": 45,
            "score": 76.5
        },
        {
            "classRank": 16,
            "schoolRank": 46,
            "score": 76
        },
        {
            "classRank": 17,
            "schoolRank": 48,
            "score": 75
        },
        {
            "classRank": 18,
            "schoolRank": 52,
            "score": 73
        },
        {
            "classRank": 19,
            "schoolRank": 53,
            "score": 72.5
        },
        {
            "classRank": 20,
            "schoolRank": 56,
            "score": 71
        },
        {
            "classRank": 21,
            "schoolRank": 56,
            "score": 71
        },
        {
            "classRank": 22,
            "schoolRank": 69,
            "score": 64
        },
        {
            "classRank": 23,
            "schoolRank": 80,
            "score": 58
        },
        {
            "classRank": 24,
            "schoolRank": 90,
            "score": 132
        },
        {
            "classRank": 25,
            "schoolRank": 93,
            "score": 130.5
        },
        {
            "classRank": 26,
            "schoolRank": 105,
            "score": 123.5
        },
        {
            "classRank": 27,
            "schoolRank": 106,
            "score": 123
        },
        {
            "classRank": 28,
            "schoolRank": 108,
            "score": 121.5
        },
        {
            "classRank": 29,
            "schoolRank": 111,
            "score": 120
        },
        {
            "classRank": 30,
            "schoolRank": 115,
            "score": 118
        },
        {
            "classRank": 31,
            "schoolRank": 116,
            "score": 117.5
        },
        {
            "classRank": 32,
            "schoolRank": 119,
            "score": 116
        },
        {
            "classRank": 33,
            "schoolRank": 121,
            "score": 115
        },
        {
            "classRank": 34,
            "schoolRank": 122,
            "score": 114.5
        },
        {
            "classRank": 35,
            "schoolRank": 123,
            "score": 114
        },
        {
            "classRank": 36,
            "schoolRank": 128,
            "score": 111.5
        },
        {
            "classRank": 37,
            "schoolRank": 131,
            "score": 110
        },
        {
            "classRank": 38,
            "schoolRank": 136,
            "score": 107.5
        },
        {
            "classRank": 39,
            "schoolRank": 137,
            "score": 107
        },
        {
            "classRank": 40,
            "schoolRank": 143,
            "score": 104
        },
        {
            "classRank": 41,
            "schoolRank": 150,
            "score": 100.5
        }
    ],
    "高三06班": [{
            "classRank": 1,
            "schoolRank": 3,
            "score": 98.5
        },
        {
            "classRank": 2,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 3,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 4,
            "schoolRank": 17,
            "score": 91
        },
        {
            "classRank": 5,
            "schoolRank": 18,
            "score": 90.5
        },
        {
            "classRank": 6,
            "schoolRank": 18,
            "score": 90.5
        },
        {
            "classRank": 7,
            "schoolRank": 19,
            "score": 90
        },
        {
            "classRank": 8,
            "schoolRank": 19,
            "score": 90
        },
        {
            "classRank": 9,
            "schoolRank": 27,
            "score": 86
        },
        {
            "classRank": 10,
            "schoolRank": 29,
            "score": 85
        },
        {
            "classRank": 11,
            "schoolRank": 33,
            "score": 82.5
        },
        {
            "classRank": 12,
            "schoolRank": 36,
            "score": 81
        },
        {
            "classRank": 13,
            "schoolRank": 38,
            "score": 80
        },
        {
            "classRank": 14,
            "schoolRank": 44,
            "score": 77
        },
        {
            "classRank": 15,
            "schoolRank": 50,
            "score": 74
        },
        {
            "classRank": 16,
            "schoolRank": 54,
            "score": 72
        },
        {
            "classRank": 17,
            "schoolRank": 55,
            "score": 71.5
        },
        {
            "classRank": 18,
            "schoolRank": 57,
            "score": 70.5
        },
        {
            "classRank": 19,
            "schoolRank": 59,
            "score": 69.5
        },
        {
            "classRank": 20,
            "schoolRank": 60,
            "score": 69
        },
        {
            "classRank": 21,
            "schoolRank": 61,
            "score": 68.5
        },
        {
            "classRank": 22,
            "schoolRank": 67,
            "score": 65
        },
        {
            "classRank": 23,
            "schoolRank": 67,
            "score": 65
        },
        {
            "classRank": 24,
            "schoolRank": 72,
            "score": 62
        },
        {
            "classRank": 25,
            "schoolRank": 74,
            "score": 61
        },
        {
            "classRank": 26,
            "schoolRank": 77,
            "score": 59.5
        },
        {
            "classRank": 27,
            "schoolRank": 86,
            "score": 54
        },
        {
            "classRank": 28,
            "schoolRank": 101,
            "score": 126.5
        },
        {
            "classRank": 29,
            "schoolRank": 102,
            "score": 125.5
        },
        {
            "classRank": 30,
            "schoolRank": 103,
            "score": 125
        },
        {
            "classRank": 31,
            "schoolRank": 112,
            "score": 119.5
        },
        {
            "classRank": 32,
            "schoolRank": 112,
            "score": 119.5
        },
        {
            "classRank": 33,
            "schoolRank": 116,
            "score": 117.5
        },
        {
            "classRank": 34,
            "schoolRank": 126,
            "score": 112.5
        },
        {
            "classRank": 35,
            "schoolRank": 129,
            "score": 111
        },
        {
            "classRank": 36,
            "schoolRank": 129,
            "score": 111
        },
        {
            "classRank": 37,
            "schoolRank": 131,
            "score": 110
        },
        {
            "classRank": 38,
            "schoolRank": 131,
            "score": 110
        },
        {
            "classRank": 39,
            "schoolRank": 134,
            "score": 108.5
        },
        {
            "classRank": 40,
            "schoolRank": 135,
            "score": 108
        },
        {
            "classRank": 41,
            "schoolRank": 140,
            "score": 105.5
        },
        {
            "classRank": 42,
            "schoolRank": 143,
            "score": 104
        },
        {
            "classRank": 43,
            "schoolRank": 144,
            "score": 103.5
        },
        {
            "classRank": 44,
            "schoolRank": 145,
            "score": 103
        },
        {
            "classRank": 45,
            "schoolRank": 145,
            "score": 103
        },
        {
            "classRank": 46,
            "schoolRank": 146,
            "score": 102.5
        }
    ],
    "高三03班": [{
            "classRank": 1,
            "schoolRank": 3,
            "score": 98.5
        },
        {
            "classRank": 2,
            "schoolRank": 5,
            "score": 97.5
        },
        {
            "classRank": 3,
            "schoolRank": 7,
            "score": 96.5
        },
        {
            "classRank": 4,
            "schoolRank": 11,
            "score": 94
        },
        {
            "classRank": 5,
            "schoolRank": 11,
            "score": 94
        },
        {
            "classRank": 6,
            "schoolRank": 12,
            "score": 93.5
        },
        {
            "classRank": 7,
            "schoolRank": 16,
            "score": 91.5
        },
        {
            "classRank": 8,
            "schoolRank": 16,
            "score": 91.5
        },
        {
            "classRank": 9,
            "schoolRank": 20,
            "score": 89.5
        },
        {
            "classRank": 10,
            "schoolRank": 26,
            "score": 86.5
        },
        {
            "classRank": 11,
            "schoolRank": 28,
            "score": 85.5
        },
        {
            "classRank": 12,
            "schoolRank": 33,
            "score": 82.5
        },
        {
            "classRank": 13,
            "schoolRank": 36,
            "score": 81
        },
        {
            "classRank": 14,
            "schoolRank": 38,
            "score": 80
        },
        {
            "classRank": 15,
            "schoolRank": 40,
            "score": 79
        },
        {
            "classRank": 16,
            "schoolRank": 42,
            "score": 78
        },
        {
            "classRank": 17,
            "schoolRank": 47,
            "score": 75.5
        },
        {
            "classRank": 18,
            "schoolRank": 50,
            "score": 74
        },
        {
            "classRank": 19,
            "schoolRank": 52,
            "score": 73
        },
        {
            "classRank": 20,
            "schoolRank": 57,
            "score": 70.5
        },
        {
            "classRank": 21,
            "schoolRank": 58,
            "score": 70
        },
        {
            "classRank": 22,
            "schoolRank": 63,
            "score": 67
        },
        {
            "classRank": 23,
            "schoolRank": 66,
            "score": 65.5
        },
        {
            "classRank": 24,
            "schoolRank": 75,
            "score": 60.5
        },
        {
            "classRank": 25,
            "schoolRank": 76,
            "score": 60
        },
        {
            "classRank": 26,
            "schoolRank": 78,
            "score": 59
        },
        {
            "classRank": 27,
            "schoolRank": 80,
            "score": 58
        },
        {
            "classRank": 28,
            "schoolRank": 82,
            "score": 56.5
        },
        {
            "classRank": 29,
            "schoolRank": 83,
            "score": 56
        },
        {
            "classRank": 30,
            "schoolRank": 91,
            "score": 131.5
        },
        {
            "classRank": 31,
            "schoolRank": 94,
            "score": 130
        },
        {
            "classRank": 32,
            "schoolRank": 98,
            "score": 128
        },
        {
            "classRank": 33,
            "schoolRank": 101,
            "score": 126.5
        },
        {
            "classRank": 34,
            "schoolRank": 107,
            "score": 122.5
        },
        {
            "classRank": 35,
            "schoolRank": 109,
            "score": 121
        },
        {
            "classRank": 36,
            "schoolRank": 110,
            "score": 120.5
        },
        {
            "classRank": 37,
            "schoolRank": 111,
            "score": 120
        },
        {
            "classRank": 38,
            "schoolRank": 118,
            "score": 116.5
        },
        {
            "classRank": 39,
            "schoolRank": 120,
            "score": 115.5
        },
        {
            "classRank": 40,
            "schoolRank": 124,
            "score": 113.5
        },
        {
            "classRank": 41,
            "schoolRank": 127,
            "score": 112
        },
        {
            "classRank": 42,
            "schoolRank": 127,
            "score": 112
        },
        {
            "classRank": 43,
            "schoolRank": 129,
            "score": 111
        },
        {
            "classRank": 44,
            "schoolRank": 132,
            "score": 109.5
        },
        {
            "classRank": 45,
            "schoolRank": 136,
            "score": 107.5
        },
        {
            "classRank": 46,
            "schoolRank": 137,
            "score": 107
        },
        {
            "classRank": 47,
            "schoolRank": 144,
            "score": 103.5
        },
        {
            "classRank": 48,
            "schoolRank": 146,
            "score": 102.5
        },
        {
            "classRank": 49,
            "schoolRank": 149,
            "score": 101
        }
    ],
    "高三04班": [{
            "classRank": 1,
            "schoolRank": 1,
            "score": 99.5
        },
        {
            "classRank": 2,
            "schoolRank": 7,
            "score": 96.5
        },
        {
            "classRank": 3,
            "schoolRank": 12,
            "score": 93.5
        },
        {
            "classRank": 4,
            "schoolRank": 16,
            "score": 91.5
        },
        {
            "classRank": 5,
            "schoolRank": 20,
            "score": 89.5
        },
        {
            "classRank": 6,
            "schoolRank": 22,
            "score": 88.5
        },
        {
            "classRank": 7,
            "schoolRank": 24,
            "score": 87.5
        },
        {
            "classRank": 8,
            "schoolRank": 28,
            "score": 85.5
        },
        {
            "classRank": 9,
            "schoolRank": 29,
            "score": 85
        },
        {
            "classRank": 10,
            "schoolRank": 30,
            "score": 84
        },
        {
            "classRank": 11,
            "schoolRank": 31,
            "score": 83.5
        },
        {
            "classRank": 12,
            "schoolRank": 32,
            "score": 83
        },
        {
            "classRank": 13,
            "schoolRank": 32,
            "score": 83
        },
        {
            "classRank": 14,
            "schoolRank": 38,
            "score": 80
        },
        {
            "classRank": 15,
            "schoolRank": 40,
            "score": 79
        },
        {
            "classRank": 16,
            "schoolRank": 44,
            "score": 77
        },
        {
            "classRank": 17,
            "schoolRank": 46,
            "score": 76
        },
        {
            "classRank": 18,
            "schoolRank": 49,
            "score": 74.5
        },
        {
            "classRank": 19,
            "schoolRank": 54,
            "score": 72
        },
        {
            "classRank": 20,
            "schoolRank": 58,
            "score": 70
        },
        {
            "classRank": 21,
            "schoolRank": 62,
            "score": 68
        },
        {
            "classRank": 22,
            "schoolRank": 91,
            "score": 131.5
        },
        {
            "classRank": 23,
            "schoolRank": 92,
            "score": 131
        },
        {
            "classRank": 24,
            "schoolRank": 95,
            "score": 129.5
        },
        {
            "classRank": 25,
            "schoolRank": 96,
            "score": 129
        },
        {
            "classRank": 26,
            "schoolRank": 99,
            "score": 127.5
        },
        {
            "classRank": 27,
            "schoolRank": 104,
            "score": 124
        },
        {
            "classRank": 28,
            "schoolRank": 107,
            "score": 122.5
        },
        {
            "classRank": 29,
            "schoolRank": 111,
            "score": 120
        },
        {
            "classRank": 30,
            "schoolRank": 111,
            "score": 120
        },
        {
            "classRank": 31,
            "schoolRank": 117,
            "score": 117
        },
        {
            "classRank": 32,
            "schoolRank": 124,
            "score": 113.5
        },
        {
            "classRank": 33,
            "schoolRank": 127,
            "score": 112
        },
        {
            "classRank": 34,
            "schoolRank": 130,
            "score": 110.5
        },
        {
            "classRank": 35,
            "schoolRank": 136,
            "score": 107.5
        },
        {
            "classRank": 36,
            "schoolRank": 139,
            "score": 106
        },
        {
            "classRank": 37,
            "schoolRank": 143,
            "score": 104
        },
        {
            "classRank": 38,
            "schoolRank": 144,
            "score": 103.5
        },
        {
            "classRank": 39,
            "schoolRank": 145,
            "score": 103
        },
        {
            "classRank": 40,
            "schoolRank": 146,
            "score": 102.5
        },
        {
            "classRank": 41,
            "schoolRank": 149,
            "score": 101
        }
    ],
    "高三01班": [{
            "classRank": 1,
            "schoolRank": 2,
            "score": 99
        },
        {
            "classRank": 2,
            "schoolRank": 3,
            "score": 98.5
        },
        {
            "classRank": 3,
            "schoolRank": 6,
            "score": 97
        },
        {
            "classRank": 4,
            "schoolRank": 7,
            "score": 96.5
        },
        {
            "classRank": 5,
            "schoolRank": 8,
            "score": 96
        },
        {
            "classRank": 6,
            "schoolRank": 9,
            "score": 95.5
        },
        {
            "classRank": 7,
            "schoolRank": 12,
            "score": 93.5
        },
        {
            "classRank": 8,
            "schoolRank": 13,
            "score": 93
        },
        {
            "classRank": 9,
            "schoolRank": 20,
            "score": 89.5
        },
        {
            "classRank": 10,
            "schoolRank": 25,
            "score": 87
        },
        {
            "classRank": 11,
            "schoolRank": 26,
            "score": 86.5
        },
        {
            "classRank": 12,
            "schoolRank": 37,
            "score": 80.5
        },
        {
            "classRank": 13,
            "schoolRank": 42,
            "score": 78
        },
        {
            "classRank": 14,
            "schoolRank": 89,
            "score": 143
        },
        {
            "classRank": 15,
            "schoolRank": 90,
            "score": 132
        },
        {
            "classRank": 16,
            "schoolRank": 94,
            "score": 130
        },
        {
            "classRank": 17,
            "schoolRank": 94,
            "score": 130
        },
        {
            "classRank": 18,
            "schoolRank": 96,
            "score": 129
        },
        {
            "classRank": 19,
            "schoolRank": 97,
            "score": 128.5
        },
        {
            "classRank": 20,
            "schoolRank": 99,
            "score": 127.5
        },
        {
            "classRank": 21,
            "schoolRank": 103,
            "score": 125
        },
        {
            "classRank": 22,
            "schoolRank": 111,
            "score": 120
        },
        {
            "classRank": 23,
            "schoolRank": 117,
            "score": 117
        },
        {
            "classRank": 24,
            "schoolRank": 120,
            "score": 115.5
        },
        {
            "classRank": 25,
            "schoolRank": 122,
            "score": 114.5
        },
        {
            "classRank": 26,
            "schoolRank": 126,
            "score": 112.5
        },
        {
            "classRank": 27,
            "schoolRank": 129,
            "score": 111
        },
        {
            "classRank": 28,
            "schoolRank": 130,
            "score": 110.5
        },
        {
            "classRank": 29,
            "schoolRank": 137,
            "score": 107
        },
        {
            "classRank": 30,
            "schoolRank": 138,
            "score": 106.5
        },
        {
            "classRank": 31,
            "schoolRank": 141,
            "score": 105
        },
        {
            "classRank": 32,
            "schoolRank": 142,
            "score": 104.5
        },
        {
            "classRank": 33,
            "schoolRank": 144,
            "score": 103.5
        },
        {
            "classRank": 34,
            "schoolRank": 146,
            "score": 102.5
        },
        {
            "classRank": 35,
            "schoolRank": 151,
            "score": 100
        }
    ],
    "高三02班": [{
            "classRank": 1,
            "schoolRank": 3,
            "score": 98.5
        },
        {
            "classRank": 2,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 3,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 4,
            "schoolRank": 5,
            "score": 97.5
        },
        {
            "classRank": 5,
            "schoolRank": 8,
            "score": 96
        },
        {
            "classRank": 6,
            "schoolRank": 10,
            "score": 94.5
        },
        {
            "classRank": 7,
            "schoolRank": 12,
            "score": 93.5
        },
        {
            "classRank": 8,
            "schoolRank": 18,
            "score": 90.5
        },
        {
            "classRank": 9,
            "schoolRank": 20,
            "score": 89.5
        },
        {
            "classRank": 10,
            "schoolRank": 21,
            "score": 89
        },
        {
            "classRank": 11,
            "schoolRank": 21,
            "score": 89
        },
        {
            "classRank": 12,
            "schoolRank": 21,
            "score": 89
        },
        {
            "classRank": 13,
            "schoolRank": 26,
            "score": 86.5
        },
        {
            "classRank": 14,
            "schoolRank": 27,
            "score": 86
        },
        {
            "classRank": 15,
            "schoolRank": 29,
            "score": 85
        },
        {
            "classRank": 16,
            "schoolRank": 31,
            "score": 83.5
        },
        {
            "classRank": 17,
            "schoolRank": 35,
            "score": 81.5
        },
        {
            "classRank": 18,
            "schoolRank": 43,
            "score": 77.5
        },
        {
            "classRank": 19,
            "schoolRank": 45,
            "score": 76.5
        },
        {
            "classRank": 20,
            "schoolRank": 46,
            "score": 76
        },
        {
            "classRank": 21,
            "schoolRank": 54,
            "score": 72
        },
        {
            "classRank": 22,
            "schoolRank": 67,
            "score": 65
        },
        {
            "classRank": 23,
            "schoolRank": 69,
            "score": 64
        },
        {
            "classRank": 24,
            "schoolRank": 70,
            "score": 63.5
        },
        {
            "classRank": 25,
            "schoolRank": 71,
            "score": 63
        },
        {
            "classRank": 26,
            "schoolRank": 95,
            "score": 129.5
        },
        {
            "classRank": 27,
            "schoolRank": 96,
            "score": 129
        },
        {
            "classRank": 28,
            "schoolRank": 97,
            "score": 128.5
        },
        {
            "classRank": 29,
            "schoolRank": 100,
            "score": 127
        },
        {
            "classRank": 30,
            "schoolRank": 101,
            "score": 126.5
        },
        {
            "classRank": 31,
            "schoolRank": 106,
            "score": 123
        },
        {
            "classRank": 32,
            "schoolRank": 109,
            "score": 121
        },
        {
            "classRank": 33,
            "schoolRank": 111,
            "score": 120
        },
        {
            "classRank": 34,
            "schoolRank": 113,
            "score": 119
        },
        {
            "classRank": 35,
            "schoolRank": 113,
            "score": 119
        },
        {
            "classRank": 36,
            "schoolRank": 118,
            "score": 116.5
        },
        {
            "classRank": 37,
            "schoolRank": 122,
            "score": 114.5
        },
        {
            "classRank": 38,
            "schoolRank": 126,
            "score": 112.5
        },
        {
            "classRank": 39,
            "schoolRank": 128,
            "score": 111.5
        },
        {
            "classRank": 40,
            "schoolRank": 131,
            "score": 110
        },
        {
            "classRank": 41,
            "schoolRank": 132,
            "score": 109.5
        },
        {
            "classRank": 42,
            "schoolRank": 137,
            "score": 107
        },
        {
            "classRank": 43,
            "schoolRank": 138,
            "score": 106.5
        },
        {
            "classRank": 44,
            "schoolRank": 147,
            "score": 102
        }
    ],
    "高三10班": [{
            "classRank": 1,
            "schoolRank": 2,
            "score": 99
        },
        {
            "classRank": 2,
            "schoolRank": 12,
            "score": 93.5
        },
        {
            "classRank": 3,
            "schoolRank": 13,
            "score": 93
        },
        {
            "classRank": 4,
            "schoolRank": 15,
            "score": 92
        },
        {
            "classRank": 5,
            "schoolRank": 17,
            "score": 91
        },
        {
            "classRank": 6,
            "schoolRank": 21,
            "score": 89
        },
        {
            "classRank": 7,
            "schoolRank": 23,
            "score": 88
        },
        {
            "classRank": 8,
            "schoolRank": 25,
            "score": 87
        },
        {
            "classRank": 9,
            "schoolRank": 32,
            "score": 83
        },
        {
            "classRank": 10,
            "schoolRank": 33,
            "score": 82.5
        },
        {
            "classRank": 11,
            "schoolRank": 34,
            "score": 82
        },
        {
            "classRank": 12,
            "schoolRank": 37,
            "score": 80.5
        },
        {
            "classRank": 13,
            "schoolRank": 38,
            "score": 80
        },
        {
            "classRank": 14,
            "schoolRank": 41,
            "score": 78.5
        },
        {
            "classRank": 15,
            "schoolRank": 41,
            "score": 78.5
        },
        {
            "classRank": 16,
            "schoolRank": 44,
            "score": 77
        },
        {
            "classRank": 17,
            "schoolRank": 45,
            "score": 76.5
        },
        {
            "classRank": 18,
            "schoolRank": 53,
            "score": 72.5
        },
        {
            "classRank": 19,
            "schoolRank": 54,
            "score": 72
        },
        {
            "classRank": 20,
            "schoolRank": 59,
            "score": 69.5
        },
        {
            "classRank": 21,
            "schoolRank": 62,
            "score": 68
        },
        {
            "classRank": 22,
            "schoolRank": 64,
            "score": 66.5
        },
        {
            "classRank": 23,
            "schoolRank": 73,
            "score": 61.5
        },
        {
            "classRank": 24,
            "schoolRank": 73,
            "score": 61.5
        },
        {
            "classRank": 25,
            "schoolRank": 76,
            "score": 60
        },
        {
            "classRank": 26,
            "schoolRank": 83,
            "score": 56
        },
        {
            "classRank": 27,
            "schoolRank": 86,
            "score": 54
        },
        {
            "classRank": 28,
            "schoolRank": 86,
            "score": 54
        },
        {
            "classRank": 29,
            "schoolRank": 88,
            "score": 50.5
        },
        {
            "classRank": 30,
            "schoolRank": 101,
            "score": 126.5
        },
        {
            "classRank": 31,
            "schoolRank": 108,
            "score": 121.5
        },
        {
            "classRank": 32,
            "schoolRank": 112,
            "score": 119.5
        },
        {
            "classRank": 33,
            "schoolRank": 118,
            "score": 116.5
        },
        {
            "classRank": 34,
            "schoolRank": 123,
            "score": 114
        },
        {
            "classRank": 35,
            "schoolRank": 130,
            "score": 110.5
        },
        {
            "classRank": 36,
            "schoolRank": 133,
            "score": 109
        },
        {
            "classRank": 37,
            "schoolRank": 137,
            "score": 107
        },
        {
            "classRank": 38,
            "schoolRank": 139,
            "score": 106
        },
        {
            "classRank": 39,
            "schoolRank": 142,
            "score": 104.5
        },
        {
            "classRank": 40,
            "schoolRank": 143,
            "score": 104
        },
        {
            "classRank": 41,
            "schoolRank": 144,
            "score": 103.5
        },
        {
            "classRank": 42,
            "schoolRank": 146,
            "score": 102.5
        },
        {
            "classRank": 43,
            "schoolRank": 146,
            "score": 102.5
        },
        {
            "classRank": 44,
            "schoolRank": 148,
            "score": 101.5
        }
    ],
    "高三11班": [{
            "classRank": 1,
            "schoolRank": 4,
            "score": 98
        },
        {
            "classRank": 2,
            "schoolRank": 8,
            "score": 96
        },
        {
            "classRank": 3,
            "schoolRank": 10,
            "score": 94.5
        },
        {
            "classRank": 4,
            "schoolRank": 12,
            "score": 93.5
        },
        {
            "classRank": 5,
            "schoolRank": 19,
            "score": 90
        },
        {
            "classRank": 6,
            "schoolRank": 22,
            "score": 88.5
        },
        {
            "classRank": 7,
            "schoolRank": 32,
            "score": 83
        },
        {
            "classRank": 8,
            "schoolRank": 34,
            "score": 82
        },
        {
            "classRank": 9,
            "schoolRank": 34,
            "score": 82
        },
        {
            "classRank": 10,
            "schoolRank": 35,
            "score": 81.5
        },
        {
            "classRank": 11,
            "schoolRank": 36,
            "score": 81
        },
        {
            "classRank": 12,
            "schoolRank": 36,
            "score": 81
        },
        {
            "classRank": 13,
            "schoolRank": 37,
            "score": 80.5
        },
        {
            "classRank": 14,
            "schoolRank": 38,
            "score": 80
        },
        {
            "classRank": 15,
            "schoolRank": 44,
            "score": 77
        },
        {
            "classRank": 16,
            "schoolRank": 53,
            "score": 72.5
        },
        {
            "classRank": 17,
            "schoolRank": 53,
            "score": 72.5
        },
        {
            "classRank": 18,
            "schoolRank": 57,
            "score": 70.5
        },
        {
            "classRank": 19,
            "schoolRank": 59,
            "score": 69.5
        },
        {
            "classRank": 20,
            "schoolRank": 61,
            "score": 68.5
        },
        {
            "classRank": 21,
            "schoolRank": 64,
            "score": 66.5
        },
        {
            "classRank": 22,
            "schoolRank": 66,
            "score": 65.5
        },
        {
            "classRank": 23,
            "schoolRank": 73,
            "score": 61.5
        },
        {
            "classRank": 24,
            "schoolRank": 75,
            "score": 60.5
        },
        {
            "classRank": 25,
            "schoolRank": 76,
            "score": 60
        },
        {
            "classRank": 26,
            "schoolRank": 79,
            "score": 58.5
        },
        {
            "classRank": 27,
            "schoolRank": 81,
            "score": 57
        },
        {
            "classRank": 28,
            "schoolRank": 83,
            "score": 56
        },
        {
            "classRank": 29,
            "schoolRank": 83,
            "score": 56
        },
        {
            "classRank": 30,
            "schoolRank": 87,
            "score": 52.5
        },
        {
            "classRank": 31,
            "schoolRank": 116,
            "score": 117.5
        },
        {
            "classRank": 32,
            "schoolRank": 118,
            "score": 116.5
        },
        {
            "classRank": 33,
            "schoolRank": 125,
            "score": 113
        },
        {
            "classRank": 34,
            "schoolRank": 125,
            "score": 113
        },
        {
            "classRank": 35,
            "schoolRank": 126,
            "score": 112.5
        },
        {
            "classRank": 36,
            "schoolRank": 132,
            "score": 109.5
        },
        {
            "classRank": 37,
            "schoolRank": 133,
            "score": 109
        },
        {
            "classRank": 38,
            "schoolRank": 134,
            "score": 108.5
        },
        {
            "classRank": 39,
            "schoolRank": 139,
            "score": 106
        },
        {
            "classRank": 40,
            "schoolRank": 140,
            "score": 105.5
        },
        {
            "classRank": 41,
            "schoolRank": 141,
            "score": 105
        },
        {
            "classRank": 42,
            "schoolRank": 142,
            "score": 104.5
        },
        {
            "classRank": 43,
            "schoolRank": 143,
            "score": 104
        },
        {
            "classRank": 44,
            "schoolRank": 147,
            "score": 102
        }
    ]
}
//高三第一次月考
var gs1 = [];
getyk(data, gs1);
//console.log(gs1);
setMapS3(gs1, '语文', 'm3-1');
data={
"高三09班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 99
},
{
"classRank": 2,
"schoolRank": 8,
"score": 95.5
},
{
"classRank": 3,
"schoolRank": 9,
"score": 95
},
{
"classRank": 4,
"schoolRank": 10,
"score": 94.5
},
{
"classRank": 5,
"schoolRank": 11,
"score": 94
},
{
"classRank": 6,
"schoolRank": 12,
"score": 93.5
},
{
"classRank": 7,
"schoolRank": 13,
"score": 93
},
{
"classRank": 8,
"schoolRank": 16,
"score": 91.5
},
{
"classRank": 9,
"schoolRank": 21,
"score": 89
},
{
"classRank": 10,
"schoolRank": 22,
"score": 88.5
},
{
"classRank": 11,
"schoolRank": 26,
"score": 86.5
},
{
"classRank": 12,
"schoolRank": 38,
"score": 80.5
},
{
"classRank": 13,
"schoolRank": 39,
"score": 80
},
{
"classRank": 14,
"schoolRank": 46,
"score": 76.5
},
{
"classRank": 15,
"schoolRank": 46,
"score": 76.5
},
{
"classRank": 16,
"schoolRank": 48,
"score": 75.5
},
{
"classRank": 17,
"schoolRank": 50,
"score": 74.5
},
{
"classRank": 18,
"schoolRank": 51,
"score": 74
},
{
"classRank": 19,
"schoolRank": 56,
"score": 71.5
},
{
"classRank": 20,
"schoolRank": 58,
"score": 70.5
},
{
"classRank": 21,
"schoolRank": 60,
"score": 69.5
},
{
"classRank": 22,
"schoolRank": 64,
"score": 67.5
},
{
"classRank": 23,
"schoolRank": 65,
"score": 67
},
{
"classRank": 24,
"schoolRank": 67,
"score": 66
},
{
"classRank": 25,
"schoolRank": 75,
"score": 61.5
},
{
"classRank": 26,
"schoolRank": 79,
"score": 59.5
},
{
"classRank": 27,
"schoolRank": 79,
"score": 59.5
},
{
"classRank": 28,
"schoolRank": 80,
"score": 59
},
{
"classRank": 29,
"schoolRank": 99,
"score": 127
},
{
"classRank": 30,
"schoolRank": 110,
"score": 121.5
},
{
"classRank": 31,
"schoolRank": 112,
"score": 120.5
},
{
"classRank": 32,
"schoolRank": 114,
"score": 119.5
},
{
"classRank": 33,
"schoolRank": 128,
"score": 112.5
},
{
"classRank": 34,
"schoolRank": 131,
"score": 111
},
{
"classRank": 35,
"schoolRank": 134,
"score": 109.5
},
{
"classRank": 36,
"schoolRank": 135,
"score": 109
},
{
"classRank": 37,
"schoolRank": 138,
"score": 107.5
},
{
"classRank": 38,
"schoolRank": 141,
"score": 106
},
{
"classRank": 39,
"schoolRank": 143,
"score": 105
},
{
"classRank": 40,
"schoolRank": 146,
"score": 103.5
},
{
"classRank": 41,
"schoolRank": 153,
"score": 100
},
{
"classRank": 42,
"schoolRank": 153,
"score": 100
}
],
"高三07班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 99.5
},
{
"classRank": 2,
"schoolRank": 7,
"score": 96
},
{
"classRank": 3,
"schoolRank": 13,
"score": 93
},
{
"classRank": 4,
"schoolRank": 14,
"score": 92.5
},
{
"classRank": 5,
"schoolRank": 19,
"score": 90
},
{
"classRank": 6,
"schoolRank": 19,
"score": 90
},
{
"classRank": 7,
"schoolRank": 23,
"score": 88
},
{
"classRank": 8,
"schoolRank": 23,
"score": 88
},
{
"classRank": 9,
"schoolRank": 25,
"score": 87
},
{
"classRank": 10,
"schoolRank": 29,
"score": 85
},
{
"classRank": 11,
"schoolRank": 34,
"score": 82.5
},
{
"classRank": 12,
"schoolRank": 37,
"score": 81
},
{
"classRank": 13,
"schoolRank": 39,
"score": 80
},
{
"classRank": 14,
"schoolRank": 41,
"score": 79
},
{
"classRank": 15,
"schoolRank": 43,
"score": 78
},
{
"classRank": 16,
"schoolRank": 44,
"score": 77.5
},
{
"classRank": 17,
"schoolRank": 47,
"score": 76
},
{
"classRank": 18,
"schoolRank": 48,
"score": 75.5
},
{
"classRank": 19,
"schoolRank": 51,
"score": 74
},
{
"classRank": 20,
"schoolRank": 52,
"score": 73.5
},
{
"classRank": 21,
"schoolRank": 62,
"score": 68.5
},
{
"classRank": 22,
"schoolRank": 63,
"score": 68
},
{
"classRank": 23,
"schoolRank": 65,
"score": 67
},
{
"classRank": 24,
"schoolRank": 67,
"score": 66
},
{
"classRank": 25,
"schoolRank": 72,
"score": 63
},
{
"classRank": 26,
"schoolRank": 75,
"score": 61.5
},
{
"classRank": 27,
"schoolRank": 75,
"score": 61.5
},
{
"classRank": 28,
"schoolRank": 76,
"score": 61
},
{
"classRank": 29,
"schoolRank": 82,
"score": 58
},
{
"classRank": 30,
"schoolRank": 86,
"score": 55
},
{
"classRank": 31,
"schoolRank": 111,
"score": 121
},
{
"classRank": 32,
"schoolRank": 111,
"score": 121
},
{
"classRank": 33,
"schoolRank": 112,
"score": 120.5
},
{
"classRank": 34,
"schoolRank": 118,
"score": 117.5
},
{
"classRank": 35,
"schoolRank": 119,
"score": 117
},
{
"classRank": 36,
"schoolRank": 119,
"score": 117
},
{
"classRank": 37,
"schoolRank": 123,
"score": 115
},
{
"classRank": 38,
"schoolRank": 123,
"score": 115
},
{
"classRank": 39,
"schoolRank": 126,
"score": 113.5
},
{
"classRank": 40,
"schoolRank": 130,
"score": 111.5
},
{
"classRank": 41,
"schoolRank": 130,
"score": 111.5
},
{
"classRank": 42,
"schoolRank": 134,
"score": 109.5
},
{
"classRank": 43,
"schoolRank": 135,
"score": 109
},
{
"classRank": 44,
"schoolRank": 144,
"score": 104.5
},
{
"classRank": 45,
"schoolRank": 147,
"score": 103
},
{
"classRank": 46,
"schoolRank": 148,
"score": 102.5
},
{
"classRank": 47,
"schoolRank": 149,
"score": 102
}
],
"高三08班": [
{
"classRank": 1,
"schoolRank": 3,
"score": 98.5
},
{
"classRank": 2,
"schoolRank": 6,
"score": 96.5
},
{
"classRank": 3,
"schoolRank": 8,
"score": 95.5
},
{
"classRank": 4,
"schoolRank": 10,
"score": 94.5
},
{
"classRank": 5,
"schoolRank": 15,
"score": 92
},
{
"classRank": 6,
"schoolRank": 17,
"score": 91
},
{
"classRank": 7,
"schoolRank": 18,
"score": 90.5
},
{
"classRank": 8,
"schoolRank": 19,
"score": 90
},
{
"classRank": 9,
"schoolRank": 21,
"score": 89
},
{
"classRank": 10,
"schoolRank": 22,
"score": 88.5
},
{
"classRank": 11,
"schoolRank": 32,
"score": 83.5
},
{
"classRank": 12,
"schoolRank": 32,
"score": 83.5
},
{
"classRank": 13,
"schoolRank": 39,
"score": 80
},
{
"classRank": 14,
"schoolRank": 41,
"score": 79
},
{
"classRank": 15,
"schoolRank": 44,
"score": 77.5
},
{
"classRank": 16,
"schoolRank": 47,
"score": 76
},
{
"classRank": 17,
"schoolRank": 49,
"score": 75
},
{
"classRank": 18,
"schoolRank": 49,
"score": 75
},
{
"classRank": 19,
"schoolRank": 51,
"score": 74
},
{
"classRank": 20,
"schoolRank": 51,
"score": 74
},
{
"classRank": 21,
"schoolRank": 59,
"score": 70
},
{
"classRank": 22,
"schoolRank": 59,
"score": 70
},
{
"classRank": 23,
"schoolRank": 61,
"score": 69
},
{
"classRank": 24,
"schoolRank": 67,
"score": 66
},
{
"classRank": 25,
"schoolRank": 69,
"score": 64.5
},
{
"classRank": 26,
"schoolRank": 72,
"score": 63
},
{
"classRank": 27,
"schoolRank": 105,
"score": 124
},
{
"classRank": 28,
"schoolRank": 116,
"score": 118.5
},
{
"classRank": 29,
"schoolRank": 116,
"score": 118.5
},
{
"classRank": 30,
"schoolRank": 119,
"score": 117
},
{
"classRank": 31,
"schoolRank": 120,
"score": 116.5
},
{
"classRank": 32,
"schoolRank": 121,
"score": 116
},
{
"classRank": 33,
"schoolRank": 122,
"score": 115.5
},
{
"classRank": 34,
"schoolRank": 127,
"score": 113
},
{
"classRank": 35,
"schoolRank": 128,
"score": 112.5
},
{
"classRank": 36,
"schoolRank": 136,
"score": 108.5
},
{
"classRank": 37,
"schoolRank": 136,
"score": 108.5
},
{
"classRank": 38,
"schoolRank": 137,
"score": 108
},
{
"classRank": 39,
"schoolRank": 143,
"score": 105
},
{
"classRank": 40,
"schoolRank": 148,
"score": 102.5
},
{
"classRank": 41,
"schoolRank": 149,
"score": 102
},
{
"classRank": 42,
"schoolRank": 151,
"score": 101
}
],
"高三05班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 99.5
},
{
"classRank": 2,
"schoolRank": 8,
"score": 95.5
},
{
"classRank": 3,
"schoolRank": 8,
"score": 95.5
},
{
"classRank": 4,
"schoolRank": 9,
"score": 95
},
{
"classRank": 5,
"schoolRank": 12,
"score": 93.5
},
{
"classRank": 6,
"schoolRank": 16,
"score": 91.5
},
{
"classRank": 7,
"schoolRank": 20,
"score": 89.5
},
{
"classRank": 8,
"schoolRank": 27,
"score": 86
},
{
"classRank": 9,
"schoolRank": 28,
"score": 85.5
},
{
"classRank": 10,
"schoolRank": 34,
"score": 82.5
},
{
"classRank": 11,
"schoolRank": 35,
"score": 82
},
{
"classRank": 12,
"schoolRank": 36,
"score": 81.5
},
{
"classRank": 13,
"schoolRank": 36,
"score": 81.5
},
{
"classRank": 14,
"schoolRank": 39,
"score": 80
},
{
"classRank": 15,
"schoolRank": 48,
"score": 75.5
},
{
"classRank": 16,
"schoolRank": 50,
"score": 74.5
},
{
"classRank": 17,
"schoolRank": 50,
"score": 74.5
},
{
"classRank": 18,
"schoolRank": 61,
"score": 69
},
{
"classRank": 19,
"schoolRank": 65,
"score": 67
},
{
"classRank": 20,
"schoolRank": 65,
"score": 67
},
{
"classRank": 21,
"schoolRank": 65,
"score": 67
},
{
"classRank": 22,
"schoolRank": 95,
"score": 130
},
{
"classRank": 23,
"schoolRank": 98,
"score": 127.5
},
{
"classRank": 24,
"schoolRank": 100,
"score": 126.5
},
{
"classRank": 25,
"schoolRank": 103,
"score": 125
},
{
"classRank": 26,
"schoolRank": 106,
"score": 123.5
},
{
"classRank": 27,
"schoolRank": 108,
"score": 122.5
},
{
"classRank": 28,
"schoolRank": 108,
"score": 122.5
},
{
"classRank": 29,
"schoolRank": 108,
"score": 122.5
},
{
"classRank": 30,
"schoolRank": 110,
"score": 121.5
},
{
"classRank": 31,
"schoolRank": 115,
"score": 119
},
{
"classRank": 32,
"schoolRank": 122,
"score": 115.5
},
{
"classRank": 33,
"schoolRank": 130,
"score": 111.5
},
{
"classRank": 34,
"schoolRank": 135,
"score": 109
},
{
"classRank": 35,
"schoolRank": 135,
"score": 109
},
{
"classRank": 36,
"schoolRank": 136,
"score": 108.5
},
{
"classRank": 37,
"schoolRank": 140,
"score": 106.5
},
{
"classRank": 38,
"schoolRank": 142,
"score": 105.5
},
{
"classRank": 39,
"schoolRank": 146,
"score": 103.5
},
{
"classRank": 40,
"schoolRank": 152,
"score": 100.5
},
{
"classRank": 41,
"schoolRank": 152,
"score": 100.5
}
],
"高三06班": [
{
"classRank": 1,
"schoolRank": 3,
"score": 98.5
},
{
"classRank": 2,
"schoolRank": 11,
"score": 94
},
{
"classRank": 3,
"schoolRank": 14,
"score": 92.5
},
{
"classRank": 4,
"schoolRank": 15,
"score": 92
},
{
"classRank": 5,
"schoolRank": 18,
"score": 90.5
},
{
"classRank": 6,
"schoolRank": 21,
"score": 89
},
{
"classRank": 7,
"schoolRank": 23,
"score": 88
},
{
"classRank": 8,
"schoolRank": 27,
"score": 86
},
{
"classRank": 9,
"schoolRank": 30,
"score": 84.5
},
{
"classRank": 10,
"schoolRank": 37,
"score": 81
},
{
"classRank": 11,
"schoolRank": 40,
"score": 79.5
},
{
"classRank": 12,
"schoolRank": 42,
"score": 78.5
},
{
"classRank": 13,
"schoolRank": 47,
"score": 76
},
{
"classRank": 14,
"schoolRank": 55,
"score": 72
},
{
"classRank": 15,
"schoolRank": 56,
"score": 71.5
},
{
"classRank": 16,
"schoolRank": 57,
"score": 71
},
{
"classRank": 17,
"schoolRank": 57,
"score": 71
},
{
"classRank": 18,
"schoolRank": 58,
"score": 70.5
},
{
"classRank": 19,
"schoolRank": 59,
"score": 70
},
{
"classRank": 20,
"schoolRank": 60,
"score": 69.5
},
{
"classRank": 21,
"schoolRank": 65,
"score": 67
},
{
"classRank": 22,
"schoolRank": 67,
"score": 66
},
{
"classRank": 23,
"schoolRank": 68,
"score": 65.5
},
{
"classRank": 24,
"schoolRank": 77,
"score": 60.5
},
{
"classRank": 25,
"schoolRank": 81,
"score": 58.5
},
{
"classRank": 26,
"schoolRank": 88,
"score": 53.5
},
{
"classRank": 27,
"schoolRank": 99,
"score": 127
},
{
"classRank": 28,
"schoolRank": 109,
"score": 122
},
{
"classRank": 29,
"schoolRank": 112,
"score": 120.5
},
{
"classRank": 30,
"schoolRank": 112,
"score": 120.5
},
{
"classRank": 31,
"schoolRank": 112,
"score": 120.5
},
{
"classRank": 32,
"schoolRank": 115,
"score": 119
},
{
"classRank": 33,
"schoolRank": 117,
"score": 118
},
{
"classRank": 34,
"schoolRank": 118,
"score": 117.5
},
{
"classRank": 35,
"schoolRank": 125,
"score": 114
},
{
"classRank": 36,
"schoolRank": 130,
"score": 111.5
},
{
"classRank": 37,
"schoolRank": 136,
"score": 108.5
},
{
"classRank": 38,
"schoolRank": 138,
"score": 107.5
},
{
"classRank": 39,
"schoolRank": 139,
"score": 107
},
{
"classRank": 40,
"schoolRank": 141,
"score": 106
},
{
"classRank": 41,
"schoolRank": 142,
"score": 105.5
},
{
"classRank": 42,
"schoolRank": 143,
"score": 105
},
{
"classRank": 43,
"schoolRank": 144,
"score": 104.5
},
{
"classRank": 44,
"schoolRank": 146,
"score": 103.5
},
{
"classRank": 45,
"schoolRank": 150,
"score": 101.5
},
{
"classRank": 46,
"schoolRank": 150,
"score": 101.5
}
],
"高三03班": [
{
"classRank": 1,
"schoolRank": 3,
"score": 98.5
},
{
"classRank": 2,
"schoolRank": 4,
"score": 97.5
},
{
"classRank": 3,
"schoolRank": 7,
"score": 96
},
{
"classRank": 4,
"schoolRank": 8,
"score": 95.5
},
{
"classRank": 5,
"schoolRank": 10,
"score": 94.5
},
{
"classRank": 6,
"schoolRank": 10,
"score": 94.5
},
{
"classRank": 7,
"schoolRank": 14,
"score": 92.5
},
{
"classRank": 8,
"schoolRank": 15,
"score": 92
},
{
"classRank": 9,
"schoolRank": 19,
"score": 90
},
{
"classRank": 10,
"schoolRank": 21,
"score": 89
},
{
"classRank": 11,
"schoolRank": 22,
"score": 88.5
},
{
"classRank": 12,
"schoolRank": 24,
"score": 87.5
},
{
"classRank": 13,
"schoolRank": 29,
"score": 85
},
{
"classRank": 14,
"schoolRank": 33,
"score": 83
},
{
"classRank": 15,
"schoolRank": 37,
"score": 81
},
{
"classRank": 16,
"schoolRank": 38,
"score": 80.5
},
{
"classRank": 17,
"schoolRank": 40,
"score": 79.5
},
{
"classRank": 18,
"schoolRank": 46,
"score": 76.5
},
{
"classRank": 19,
"schoolRank": 53,
"score": 73
},
{
"classRank": 20,
"schoolRank": 54,
"score": 72.5
},
{
"classRank": 21,
"schoolRank": 58,
"score": 70.5
},
{
"classRank": 22,
"schoolRank": 64,
"score": 67.5
},
{
"classRank": 23,
"schoolRank": 66,
"score": 66.5
},
{
"classRank": 24,
"schoolRank": 70,
"score": 64
},
{
"classRank": 25,
"schoolRank": 74,
"score": 62
},
{
"classRank": 26,
"schoolRank": 77,
"score": 60.5
},
{
"classRank": 27,
"schoolRank": 82,
"score": 58
},
{
"classRank": 28,
"schoolRank": 87,
"score": 54.5
},
{
"classRank": 29,
"schoolRank": 90,
"score": 52
},
{
"classRank": 30,
"schoolRank": 100,
"score": 126.5
},
{
"classRank": 31,
"schoolRank": 101,
"score": 126
},
{
"classRank": 32,
"schoolRank": 101,
"score": 126
},
{
"classRank": 33,
"schoolRank": 104,
"score": 124.5
},
{
"classRank": 34,
"schoolRank": 105,
"score": 124
},
{
"classRank": 35,
"schoolRank": 106,
"score": 123.5
},
{
"classRank": 36,
"schoolRank": 113,
"score": 120
},
{
"classRank": 37,
"schoolRank": 114,
"score": 119.5
},
{
"classRank": 38,
"schoolRank": 118,
"score": 117.5
},
{
"classRank": 39,
"schoolRank": 119,
"score": 117
},
{
"classRank": 40,
"schoolRank": 119,
"score": 117
},
{
"classRank": 41,
"schoolRank": 122,
"score": 115.5
},
{
"classRank": 42,
"schoolRank": 126,
"score": 113.5
},
{
"classRank": 43,
"schoolRank": 134,
"score": 109.5
},
{
"classRank": 44,
"schoolRank": 136,
"score": 108.5
},
{
"classRank": 45,
"schoolRank": 137,
"score": 108
},
{
"classRank": 46,
"schoolRank": 138,
"score": 107.5
},
{
"classRank": 47,
"schoolRank": 143,
"score": 105
},
{
"classRank": 48,
"schoolRank": 145,
"score": 104
},
{
"classRank": 49,
"schoolRank": 146,
"score": 103.5
}
],
"高三04班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 99
},
{
"classRank": 2,
"schoolRank": 4,
"score": 97.5
},
{
"classRank": 3,
"schoolRank": 7,
"score": 96
},
{
"classRank": 4,
"schoolRank": 9,
"score": 95
},
{
"classRank": 5,
"schoolRank": 13,
"score": 93
},
{
"classRank": 6,
"schoolRank": 17,
"score": 91
},
{
"classRank": 7,
"schoolRank": 19,
"score": 90
},
{
"classRank": 8,
"schoolRank": 21,
"score": 89
},
{
"classRank": 9,
"schoolRank": 23,
"score": 88
},
{
"classRank": 10,
"schoolRank": 27,
"score": 86
},
{
"classRank": 11,
"schoolRank": 30,
"score": 84.5
},
{
"classRank": 12,
"schoolRank": 37,
"score": 81
},
{
"classRank": 13,
"schoolRank": 38,
"score": 80.5
},
{
"classRank": 14,
"schoolRank": 40,
"score": 79.5
},
{
"classRank": 15,
"schoolRank": 41,
"score": 79
},
{
"classRank": 16,
"schoolRank": 44,
"score": 77.5
},
{
"classRank": 17,
"schoolRank": 45,
"score": 77
},
{
"classRank": 18,
"schoolRank": 45,
"score": 77
},
{
"classRank": 19,
"schoolRank": 54,
"score": 72.5
},
{
"classRank": 20,
"schoolRank": 56,
"score": 71.5
},
{
"classRank": 21,
"schoolRank": 63,
"score": 68
},
{
"classRank": 22,
"schoolRank": 94,
"score": 130.5
},
{
"classRank": 23,
"schoolRank": 96,
"score": 129.5
},
{
"classRank": 24,
"schoolRank": 102,
"score": 125.5
},
{
"classRank": 25,
"schoolRank": 106,
"score": 123.5
},
{
"classRank": 26,
"schoolRank": 108,
"score": 122.5
},
{
"classRank": 27,
"schoolRank": 108,
"score": 122.5
},
{
"classRank": 28,
"schoolRank": 110,
"score": 121.5
},
{
"classRank": 29,
"schoolRank": 117,
"score": 118
},
{
"classRank": 30,
"schoolRank": 119,
"score": 117
},
{
"classRank": 31,
"schoolRank": 122,
"score": 115.5
},
{
"classRank": 32,
"schoolRank": 128,
"score": 112.5
},
{
"classRank": 33,
"schoolRank": 131,
"score": 111
},
{
"classRank": 34,
"schoolRank": 137,
"score": 108
},
{
"classRank": 35,
"schoolRank": 141,
"score": 106
},
{
"classRank": 36,
"schoolRank": 143,
"score": 105
},
{
"classRank": 37,
"schoolRank": 146,
"score": 103.5
},
{
"classRank": 38,
"schoolRank": 146,
"score": 103.5
},
{
"classRank": 39,
"schoolRank": 149,
"score": 102
},
{
"classRank": 40,
"schoolRank": 150,
"score": 101.5
},
{
"classRank": 41,
"schoolRank": 151,
"score": 101
}
],
"高三01班": [
{
"classRank": 1,
"schoolRank": 6,
"score": 96.5
},
{
"classRank": 2,
"schoolRank": 6,
"score": 96.5
},
{
"classRank": 3,
"schoolRank": 7,
"score": 96
},
{
"classRank": 4,
"schoolRank": 9,
"score": 95
},
{
"classRank": 5,
"schoolRank": 9,
"score": 95
},
{
"classRank": 6,
"schoolRank": 11,
"score": 94
},
{
"classRank": 7,
"schoolRank": 14,
"score": 92.5
},
{
"classRank": 8,
"schoolRank": 16,
"score": 91.5
},
{
"classRank": 9,
"schoolRank": 27,
"score": 86
},
{
"classRank": 10,
"schoolRank": 30,
"score": 84.5
},
{
"classRank": 11,
"schoolRank": 31,
"score": 84
},
{
"classRank": 12,
"schoolRank": 37,
"score": 81
},
{
"classRank": 13,
"schoolRank": 39,
"score": 80
},
{
"classRank": 14,
"schoolRank": 47,
"score": 76
},
{
"classRank": 15,
"schoolRank": 96,
"score": 129.5
},
{
"classRank": 16,
"schoolRank": 97,
"score": 128.5
},
{
"classRank": 17,
"schoolRank": 97,
"score": 128.5
},
{
"classRank": 18,
"schoolRank": 100,
"score": 126.5
},
{
"classRank": 19,
"schoolRank": 100,
"score": 126.5
},
{
"classRank": 20,
"schoolRank": 102,
"score": 125.5
},
{
"classRank": 21,
"schoolRank": 105,
"score": 124
},
{
"classRank": 22,
"schoolRank": 105,
"score": 124
},
{
"classRank": 23,
"schoolRank": 106,
"score": 123.5
},
{
"classRank": 24,
"schoolRank": 106,
"score": 123.5
},
{
"classRank": 25,
"schoolRank": 115,
"score": 119
},
{
"classRank": 26,
"schoolRank": 115,
"score": 119
},
{
"classRank": 27,
"schoolRank": 116,
"score": 118.5
},
{
"classRank": 28,
"schoolRank": 116,
"score": 118.5
},
{
"classRank": 29,
"schoolRank": 117,
"score": 118
},
{
"classRank": 30,
"schoolRank": 119,
"score": 117
},
{
"classRank": 31,
"schoolRank": 124,
"score": 114.5
},
{
"classRank": 32,
"schoolRank": 129,
"score": 112
},
{
"classRank": 33,
"schoolRank": 136,
"score": 108.5
},
{
"classRank": 34,
"schoolRank": 144,
"score": 104.5
},
{
"classRank": 35,
"schoolRank": 151,
"score": 101
}
],
"高三02班": [
{
"classRank": 1,
"schoolRank": 3,
"score": 98.5
},
{
"classRank": 2,
"schoolRank": 5,
"score": 97
},
{
"classRank": 3,
"schoolRank": 5,
"score": 97
},
{
"classRank": 4,
"schoolRank": 6,
"score": 96.5
},
{
"classRank": 5,
"schoolRank": 8,
"score": 95.5
},
{
"classRank": 6,
"schoolRank": 9,
"score": 95
},
{
"classRank": 7,
"schoolRank": 12,
"score": 93.5
},
{
"classRank": 8,
"schoolRank": 21,
"score": 89
},
{
"classRank": 9,
"schoolRank": 25,
"score": 87
},
{
"classRank": 10,
"schoolRank": 28,
"score": 85.5
},
{
"classRank": 11,
"schoolRank": 32,
"score": 83.5
},
{
"classRank": 12,
"schoolRank": 33,
"score": 83
},
{
"classRank": 13,
"schoolRank": 33,
"score": 83
},
{
"classRank": 14,
"schoolRank": 33,
"score": 83
},
{
"classRank": 15,
"schoolRank": 35,
"score": 82
},
{
"classRank": 16,
"schoolRank": 36,
"score": 81.5
},
{
"classRank": 17,
"schoolRank": 36,
"score": 81.5
},
{
"classRank": 18,
"schoolRank": 45,
"score": 77
},
{
"classRank": 19,
"schoolRank": 47,
"score": 76
},
{
"classRank": 20,
"schoolRank": 48,
"score": 75.5
},
{
"classRank": 21,
"schoolRank": 53,
"score": 73
},
{
"classRank": 22,
"schoolRank": 53,
"score": 73
},
{
"classRank": 23,
"schoolRank": 53,
"score": 73
},
{
"classRank": 24,
"schoolRank": 59,
"score": 70
},
{
"classRank": 25,
"schoolRank": 92,
"score": 143
},
{
"classRank": 26,
"schoolRank": 93,
"score": 137.5
},
{
"classRank": 27,
"schoolRank": 96,
"score": 129.5
},
{
"classRank": 28,
"schoolRank": 100,
"score": 126.5
},
{
"classRank": 29,
"schoolRank": 100,
"score": 126.5
},
{
"classRank": 30,
"schoolRank": 103,
"score": 125
},
{
"classRank": 31,
"schoolRank": 104,
"score": 124.5
},
{
"classRank": 32,
"schoolRank": 107,
"score": 123
},
{
"classRank": 33,
"schoolRank": 108,
"score": 122.5
},
{
"classRank": 34,
"schoolRank": 112,
"score": 120.5
},
{
"classRank": 35,
"schoolRank": 116,
"score": 118.5
},
{
"classRank": 36,
"schoolRank": 117,
"score": 118
},
{
"classRank": 37,
"schoolRank": 123,
"score": 115
},
{
"classRank": 38,
"schoolRank": 127,
"score": 113
},
{
"classRank": 39,
"schoolRank": 128,
"score": 112.5
},
{
"classRank": 40,
"schoolRank": 131,
"score": 111
},
{
"classRank": 41,
"schoolRank": 132,
"score": 110.5
},
{
"classRank": 42,
"schoolRank": 134,
"score": 109.5
},
{
"classRank": 43,
"schoolRank": 148,
"score": 102.5
},
{
"classRank": 44,
"schoolRank": 149,
"score": 102
}
],
"高三10班": [
{
"classRank": 1,
"schoolRank": 4,
"score": 97.5
},
{
"classRank": 2,
"schoolRank": 5,
"score": 97
},
{
"classRank": 3,
"schoolRank": 9,
"score": 95
},
{
"classRank": 4,
"schoolRank": 10,
"score": 94.5
},
{
"classRank": 5,
"schoolRank": 11,
"score": 94
},
{
"classRank": 6,
"schoolRank": 12,
"score": 93.5
},
{
"classRank": 7,
"schoolRank": 12,
"score": 93.5
},
{
"classRank": 8,
"schoolRank": 14,
"score": 92.5
},
{
"classRank": 9,
"schoolRank": 18,
"score": 90.5
},
{
"classRank": 10,
"schoolRank": 22,
"score": 88.5
},
{
"classRank": 11,
"schoolRank": 24,
"score": 87.5
},
{
"classRank": 12,
"schoolRank": 27,
"score": 86
},
{
"classRank": 13,
"schoolRank": 31,
"score": 84
},
{
"classRank": 14,
"schoolRank": 39,
"score": 80
},
{
"classRank": 15,
"schoolRank": 42,
"score": 78.5
},
{
"classRank": 16,
"schoolRank": 46,
"score": 76.5
},
{
"classRank": 17,
"schoolRank": 46,
"score": 76.5
},
{
"classRank": 18,
"schoolRank": 46,
"score": 76.5
},
{
"classRank": 19,
"schoolRank": 47,
"score": 76
},
{
"classRank": 20,
"schoolRank": 48,
"score": 75.5
},
{
"classRank": 21,
"schoolRank": 57,
"score": 71
},
{
"classRank": 22,
"schoolRank": 64,
"score": 67.5
},
{
"classRank": 23,
"schoolRank": 65,
"score": 67
},
{
"classRank": 24,
"schoolRank": 67,
"score": 66
},
{
"classRank": 25,
"schoolRank": 68,
"score": 65.5
},
{
"classRank": 26,
"schoolRank": 69,
"score": 64.5
},
{
"classRank": 27,
"schoolRank": 73,
"score": 62.5
},
{
"classRank": 28,
"schoolRank": 75,
"score": 61.5
},
{
"classRank": 29,
"schoolRank": 78,
"score": 60
},
{
"classRank": 30,
"schoolRank": 81,
"score": 58.5
},
{
"classRank": 31,
"schoolRank": 83,
"score": 57
},
{
"classRank": 32,
"schoolRank": 91,
"score": 48.5
},
{
"classRank": 33,
"schoolRank": 110,
"score": 121.5
},
{
"classRank": 34,
"schoolRank": 110,
"score": 121.5
},
{
"classRank": 35,
"schoolRank": 114,
"score": 119.5
},
{
"classRank": 36,
"schoolRank": 115,
"score": 119
},
{
"classRank": 37,
"schoolRank": 119,
"score": 117
},
{
"classRank": 38,
"schoolRank": 120,
"score": 116.5
},
{
"classRank": 39,
"schoolRank": 128,
"score": 112.5
},
{
"classRank": 40,
"schoolRank": 130,
"score": 111.5
},
{
"classRank": 41,
"schoolRank": 131,
"score": 111
},
{
"classRank": 42,
"schoolRank": 133,
"score": 110
},
{
"classRank": 43,
"schoolRank": 140,
"score": 106.5
},
{
"classRank": 44,
"schoolRank": 143,
"score": 105
}
],
"高三11班": [
{
"classRank": 1,
"schoolRank": 4,
"score": 97.5
},
{
"classRank": 2,
"schoolRank": 14,
"score": 92.5
},
{
"classRank": 3,
"schoolRank": 19,
"score": 90
},
{
"classRank": 4,
"schoolRank": 24,
"score": 87.5
},
{
"classRank": 5,
"schoolRank": 27,
"score": 86
},
{
"classRank": 6,
"schoolRank": 28,
"score": 85.5
},
{
"classRank": 7,
"schoolRank": 28,
"score": 85.5
},
{
"classRank": 8,
"schoolRank": 29,
"score": 85
},
{
"classRank": 9,
"schoolRank": 38,
"score": 80.5
},
{
"classRank": 10,
"schoolRank": 41,
"score": 79
},
{
"classRank": 11,
"schoolRank": 41,
"score": 79
},
{
"classRank": 12,
"schoolRank": 44,
"score": 77.5
},
{
"classRank": 13,
"schoolRank": 48,
"score": 75.5
},
{
"classRank": 14,
"schoolRank": 48,
"score": 75.5
},
{
"classRank": 15,
"schoolRank": 50,
"score": 74.5
},
{
"classRank": 16,
"schoolRank": 51,
"score": 74
},
{
"classRank": 17,
"schoolRank": 56,
"score": 71.5
},
{
"classRank": 18,
"schoolRank": 70,
"score": 64
},
{
"classRank": 19,
"schoolRank": 71,
"score": 63.5
},
{
"classRank": 20,
"schoolRank": 71,
"score": 63.5
},
{
"classRank": 21,
"schoolRank": 72,
"score": 63
},
{
"classRank": 22,
"schoolRank": 72,
"score": 63
},
{
"classRank": 23,
"schoolRank": 73,
"score": 62.5
},
{
"classRank": 24,
"schoolRank": 75,
"score": 61.5
},
{
"classRank": 25,
"schoolRank": 84,
"score": 56.5
},
{
"classRank": 26,
"schoolRank": 85,
"score": 56
},
{
"classRank": 27,
"schoolRank": 86,
"score": 55
},
{
"classRank": 28,
"schoolRank": 89,
"score": 53
},
{
"classRank": 29,
"schoolRank": 119,
"score": 117
},
{
"classRank": 30,
"schoolRank": 124,
"score": 114.5
},
{
"classRank": 31,
"schoolRank": 126,
"score": 113.5
},
{
"classRank": 32,
"schoolRank": 126,
"score": 113.5
},
{
"classRank": 33,
"schoolRank": 126,
"score": 113.5
},
{
"classRank": 34,
"schoolRank": 126,
"score": 113.5
},
{
"classRank": 35,
"schoolRank": 131,
"score": 111
},
{
"classRank": 36,
"schoolRank": 140,
"score": 106.5
},
{
"classRank": 37,
"schoolRank": 141,
"score": 106
},
{
"classRank": 38,
"schoolRank": 142,
"score": 105.5
},
{
"classRank": 39,
"schoolRank": 142,
"score": 105.5
},
{
"classRank": 40,
"schoolRank": 143,
"score": 105
},
{
"classRank": 41,
"schoolRank": 143,
"score": 105
},
{
"classRank": 42,
"schoolRank": 148,
"score": 102.5
},
{
"classRank": 43,
"schoolRank": 150,
"score": 101.5
},
{
"classRank": 44,
"schoolRank": 152,
"score": 100.5
}
]
}
var gs2 = [];
getyk(data, gs2);
setMapS3(gs2, '数学', 'm3-2');
data={
"高三09班": [
{
"classRank": 1,
"schoolRank": 4,
"score": 98
},
{
"classRank": 2,
"schoolRank": 6,
"score": 97
},
{
"classRank": 3,
"schoolRank": 11,
"score": 94.5
},
{
"classRank": 4,
"schoolRank": 12,
"score": 94
},
{
"classRank": 5,
"schoolRank": 12,
"score": 94
},
{
"classRank": 6,
"schoolRank": 12,
"score": 94
},
{
"classRank": 7,
"schoolRank": 14,
"score": 93
},
{
"classRank": 8,
"schoolRank": 21,
"score": 89.5
},
{
"classRank": 9,
"schoolRank": 26,
"score": 87
},
{
"classRank": 10,
"schoolRank": 29,
"score": 85.5
},
{
"classRank": 11,
"schoolRank": 32,
"score": 84
},
{
"classRank": 12,
"schoolRank": 32,
"score": 84
},
{
"classRank": 13,
"schoolRank": 34,
"score": 83
},
{
"classRank": 14,
"schoolRank": 41,
"score": 79.5
},
{
"classRank": 15,
"schoolRank": 45,
"score": 77.5
},
{
"classRank": 16,
"schoolRank": 46,
"score": 77
},
{
"classRank": 17,
"schoolRank": 48,
"score": 76
},
{
"classRank": 18,
"schoolRank": 52,
"score": 73.5
},
{
"classRank": 19,
"schoolRank": 56,
"score": 71.5
},
{
"classRank": 20,
"schoolRank": 58,
"score": 70.5
},
{
"classRank": 21,
"schoolRank": 58,
"score": 70.5
},
{
"classRank": 22,
"schoolRank": 60,
"score": 69.5
},
{
"classRank": 23,
"schoolRank": 62,
"score": 68.5
},
{
"classRank": 24,
"schoolRank": 66,
"score": 66.5
},
{
"classRank": 25,
"schoolRank": 69,
"score": 64.5
},
{
"classRank": 26,
"schoolRank": 77,
"score": 60
},
{
"classRank": 27,
"schoolRank": 81,
"score": 57
},
{
"classRank": 28,
"schoolRank": 83,
"score": 55.5
},
{
"classRank": 29,
"schoolRank": 104,
"score": 124.5
},
{
"classRank": 30,
"schoolRank": 104,
"score": 124.5
},
{
"classRank": 31,
"schoolRank": 106,
"score": 123.5
},
{
"classRank": 32,
"schoolRank": 108,
"score": 122.5
},
{
"classRank": 33,
"schoolRank": 115,
"score": 119
},
{
"classRank": 34,
"schoolRank": 117,
"score": 118
},
{
"classRank": 35,
"schoolRank": 121,
"score": 116
},
{
"classRank": 36,
"schoolRank": 125,
"score": 113
},
{
"classRank": 37,
"schoolRank": 127,
"score": 112
},
{
"classRank": 38,
"schoolRank": 133,
"score": 109
},
{
"classRank": 39,
"schoolRank": 137,
"score": 107
},
{
"classRank": 40,
"schoolRank": 143,
"score": 103.5
},
{
"classRank": 41,
"schoolRank": 145,
"score": 102.5
},
{
"classRank": 42,
"schoolRank": 147,
"score": 101.5
}
],
"高三07班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 99
},
{
"classRank": 2,
"schoolRank": 4,
"score": 98
},
{
"classRank": 3,
"schoolRank": 15,
"score": 92.5
},
{
"classRank": 4,
"schoolRank": 16,
"score": 92
},
{
"classRank": 5,
"schoolRank": 18,
"score": 91
},
{
"classRank": 6,
"schoolRank": 19,
"score": 90.5
},
{
"classRank": 7,
"schoolRank": 21,
"score": 89.5
},
{
"classRank": 8,
"schoolRank": 22,
"score": 89
},
{
"classRank": 9,
"schoolRank": 30,
"score": 85
},
{
"classRank": 10,
"schoolRank": 34,
"score": 83
},
{
"classRank": 11,
"schoolRank": 35,
"score": 82.5
},
{
"classRank": 12,
"schoolRank": 36,
"score": 82
},
{
"classRank": 13,
"schoolRank": 41,
"score": 79.5
},
{
"classRank": 14,
"schoolRank": 43,
"score": 78.5
},
{
"classRank": 15,
"schoolRank": 46,
"score": 77
},
{
"classRank": 16,
"schoolRank": 47,
"score": 76.5
},
{
"classRank": 17,
"schoolRank": 52,
"score": 73.5
},
{
"classRank": 18,
"schoolRank": 54,
"score": 72.5
},
{
"classRank": 19,
"schoolRank": 55,
"score": 72
},
{
"classRank": 20,
"schoolRank": 55,
"score": 72
},
{
"classRank": 21,
"schoolRank": 60,
"score": 69.5
},
{
"classRank": 22,
"schoolRank": 61,
"score": 69
},
{
"classRank": 23,
"schoolRank": 65,
"score": 67
},
{
"classRank": 24,
"schoolRank": 69,
"score": 64.5
},
{
"classRank": 25,
"schoolRank": 71,
"score": 63.5
},
{
"classRank": 26,
"schoolRank": 80,
"score": 58
},
{
"classRank": 27,
"schoolRank": 83,
"score": 55.5
},
{
"classRank": 28,
"schoolRank": 84,
"score": 55
},
{
"classRank": 29,
"schoolRank": 84,
"score": 55
},
{
"classRank": 30,
"schoolRank": 87,
"score": 52
},
{
"classRank": 31,
"schoolRank": 101,
"score": 126
},
{
"classRank": 32,
"schoolRank": 109,
"score": 122
},
{
"classRank": 33,
"schoolRank": 110,
"score": 121.5
},
{
"classRank": 34,
"schoolRank": 113,
"score": 120
},
{
"classRank": 35,
"schoolRank": 114,
"score": 119.5
},
{
"classRank": 36,
"schoolRank": 119,
"score": 117
},
{
"classRank": 37,
"schoolRank": 122,
"score": 115.5
},
{
"classRank": 38,
"schoolRank": 123,
"score": 114.5
},
{
"classRank": 39,
"schoolRank": 125,
"score": 113
},
{
"classRank": 40,
"schoolRank": 134,
"score": 108.5
},
{
"classRank": 41,
"schoolRank": 135,
"score": 108
},
{
"classRank": 42,
"schoolRank": 137,
"score": 107
},
{
"classRank": 43,
"schoolRank": 139,
"score": 106
},
{
"classRank": 44,
"schoolRank": 140,
"score": 105
},
{
"classRank": 45,
"schoolRank": 140,
"score": 105
},
{
"classRank": 46,
"schoolRank": 143,
"score": 103.5
},
{
"classRank": 47,
"schoolRank": 148,
"score": 101
}
],
"高三08班": [
{
"classRank": 1,
"schoolRank": 7,
"score": 96.5
},
{
"classRank": 2,
"schoolRank": 8,
"score": 96
},
{
"classRank": 3,
"schoolRank": 12,
"score": 94
},
{
"classRank": 4,
"schoolRank": 17,
"score": 91.5
},
{
"classRank": 5,
"schoolRank": 17,
"score": 91.5
},
{
"classRank": 6,
"schoolRank": 19,
"score": 90.5
},
{
"classRank": 7,
"schoolRank": 19,
"score": 90.5
},
{
"classRank": 8,
"schoolRank": 20,
"score": 90
},
{
"classRank": 9,
"schoolRank": 24,
"score": 88
},
{
"classRank": 10,
"schoolRank": 30,
"score": 85
},
{
"classRank": 11,
"schoolRank": 33,
"score": 83.5
},
{
"classRank": 12,
"schoolRank": 34,
"score": 83
},
{
"classRank": 13,
"schoolRank": 34,
"score": 83
},
{
"classRank": 14,
"schoolRank": 37,
"score": 81.5
},
{
"classRank": 15,
"schoolRank": 38,
"score": 81
},
{
"classRank": 16,
"schoolRank": 38,
"score": 81
},
{
"classRank": 17,
"schoolRank": 45,
"score": 77.5
},
{
"classRank": 18,
"schoolRank": 50,
"score": 75
},
{
"classRank": 19,
"schoolRank": 53,
"score": 73
},
{
"classRank": 20,
"schoolRank": 57,
"score": 71
},
{
"classRank": 21,
"schoolRank": 57,
"score": 71
},
{
"classRank": 22,
"schoolRank": 58,
"score": 70.5
},
{
"classRank": 23,
"schoolRank": 61,
"score": 69
},
{
"classRank": 24,
"schoolRank": 66,
"score": 66.5
},
{
"classRank": 25,
"schoolRank": 67,
"score": 65.5
},
{
"classRank": 26,
"schoolRank": 74,
"score": 61.5
},
{
"classRank": 27,
"schoolRank": 74,
"score": 61.5
},
{
"classRank": 28,
"schoolRank": 107,
"score": 123
},
{
"classRank": 29,
"schoolRank": 112,
"score": 120.5
},
{
"classRank": 30,
"schoolRank": 112,
"score": 120.5
},
{
"classRank": 31,
"schoolRank": 113,
"score": 120
},
{
"classRank": 32,
"schoolRank": 113,
"score": 120
},
{
"classRank": 33,
"schoolRank": 116,
"score": 118.5
},
{
"classRank": 34,
"schoolRank": 121,
"score": 116
},
{
"classRank": 35,
"schoolRank": 133,
"score": 109
},
{
"classRank": 36,
"schoolRank": 135,
"score": 108
},
{
"classRank": 37,
"schoolRank": 137,
"score": 107
},
{
"classRank": 38,
"schoolRank": 140,
"score": 105
},
{
"classRank": 39,
"schoolRank": 141,
"score": 104.5
},
{
"classRank": 40,
"schoolRank": 145,
"score": 102.5
},
{
"classRank": 41,
"schoolRank": 146,
"score": 102
},
{
"classRank": 42,
"schoolRank": 149,
"score": 100.5
}
],
"高三05班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 99.5
},
{
"classRank": 2,
"schoolRank": 2,
"score": 99
},
{
"classRank": 3,
"schoolRank": 3,
"score": 98.5
},
{
"classRank": 4,
"schoolRank": 3,
"score": 98.5
},
{
"classRank": 5,
"schoolRank": 4,
"score": 98
},
{
"classRank": 6,
"schoolRank": 12,
"score": 94
},
{
"classRank": 7,
"schoolRank": 14,
"score": 93
},
{
"classRank": 8,
"schoolRank": 22,
"score": 89
},
{
"classRank": 9,
"schoolRank": 30,
"score": 85
},
{
"classRank": 10,
"schoolRank": 34,
"score": 83
},
{
"classRank": 11,
"schoolRank": 36,
"score": 82
},
{
"classRank": 12,
"schoolRank": 40,
"score": 80
},
{
"classRank": 13,
"schoolRank": 40,
"score": 80
},
{
"classRank": 14,
"schoolRank": 41,
"score": 79.5
},
{
"classRank": 15,
"schoolRank": 41,
"score": 79.5
},
{
"classRank": 16,
"schoolRank": 42,
"score": 79
},
{
"classRank": 17,
"schoolRank": 42,
"score": 79
},
{
"classRank": 18,
"schoolRank": 42,
"score": 79
},
{
"classRank": 19,
"schoolRank": 46,
"score": 77
},
{
"classRank": 20,
"schoolRank": 46,
"score": 77
},
{
"classRank": 21,
"schoolRank": 53,
"score": 73
},
{
"classRank": 22,
"schoolRank": 55,
"score": 72
},
{
"classRank": 23,
"schoolRank": 61,
"score": 69
},
{
"classRank": 24,
"schoolRank": 64,
"score": 67.5
},
{
"classRank": 25,
"schoolRank": 93,
"score": 132.5
},
{
"classRank": 26,
"schoolRank": 96,
"score": 128.5
},
{
"classRank": 27,
"schoolRank": 97,
"score": 128
},
{
"classRank": 28,
"schoolRank": 99,
"score": 127
},
{
"classRank": 29,
"schoolRank": 105,
"score": 124
},
{
"classRank": 30,
"schoolRank": 112,
"score": 120.5
},
{
"classRank": 31,
"schoolRank": 114,
"score": 119.5
},
{
"classRank": 32,
"schoolRank": 120,
"score": 116.5
},
{
"classRank": 33,
"schoolRank": 121,
"score": 116
},
{
"classRank": 34,
"schoolRank": 129,
"score": 111
},
{
"classRank": 35,
"schoolRank": 131,
"score": 110
},
{
"classRank": 36,
"schoolRank": 133,
"score": 109
},
{
"classRank": 37,
"schoolRank": 136,
"score": 107.5
},
{
"classRank": 38,
"schoolRank": 138,
"score": 106.5
},
{
"classRank": 39,
"schoolRank": 141,
"score": 104.5
},
{
"classRank": 40,
"schoolRank": 146,
"score": 102
},
{
"classRank": 41,
"schoolRank": 147,
"score": 101.5
}
],
"高三06班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 99.5
},
{
"classRank": 2,
"schoolRank": 4,
"score": 98
},
{
"classRank": 3,
"schoolRank": 9,
"score": 95.5
},
{
"classRank": 4,
"schoolRank": 12,
"score": 94
},
{
"classRank": 5,
"schoolRank": 16,
"score": 92
},
{
"classRank": 6,
"schoolRank": 18,
"score": 91
},
{
"classRank": 7,
"schoolRank": 18,
"score": 91
},
{
"classRank": 8,
"schoolRank": 21,
"score": 89.5
},
{
"classRank": 9,
"schoolRank": 26,
"score": 87
},
{
"classRank": 10,
"schoolRank": 26,
"score": 87
},
{
"classRank": 11,
"schoolRank": 28,
"score": 86
},
{
"classRank": 12,
"schoolRank": 29,
"score": 85.5
},
{
"classRank": 13,
"schoolRank": 30,
"score": 85
},
{
"classRank": 14,
"schoolRank": 34,
"score": 83
},
{
"classRank": 15,
"schoolRank": 43,
"score": 78.5
},
{
"classRank": 16,
"schoolRank": 45,
"score": 77.5
},
{
"classRank": 17,
"schoolRank": 47,
"score": 76.5
},
{
"classRank": 18,
"schoolRank": 51,
"score": 74.5
},
{
"classRank": 19,
"schoolRank": 52,
"score": 73.5
},
{
"classRank": 20,
"schoolRank": 54,
"score": 72.5
},
{
"classRank": 21,
"schoolRank": 55,
"score": 72
},
{
"classRank": 22,
"schoolRank": 57,
"score": 71
},
{
"classRank": 23,
"schoolRank": 64,
"score": 67.5
},
{
"classRank": 24,
"schoolRank": 65,
"score": 67
},
{
"classRank": 25,
"schoolRank": 72,
"score": 62.5
},
{
"classRank": 26,
"schoolRank": 72,
"score": 62.5
},
{
"classRank": 27,
"schoolRank": 82,
"score": 56.5
},
{
"classRank": 28,
"schoolRank": 83,
"score": 55.5
},
{
"classRank": 29,
"schoolRank": 87,
"score": 52
},
{
"classRank": 30,
"schoolRank": 94,
"score": 130.5
},
{
"classRank": 31,
"schoolRank": 96,
"score": 128.5
},
{
"classRank": 32,
"schoolRank": 97,
"score": 128
},
{
"classRank": 33,
"schoolRank": 99,
"score": 127
},
{
"classRank": 34,
"schoolRank": 110,
"score": 121.5
},
{
"classRank": 35,
"schoolRank": 118,
"score": 117.5
},
{
"classRank": 36,
"schoolRank": 118,
"score": 117.5
},
{
"classRank": 37,
"schoolRank": 122,
"score": 115.5
},
{
"classRank": 38,
"schoolRank": 122,
"score": 115.5
},
{
"classRank": 39,
"schoolRank": 129,
"score": 111
},
{
"classRank": 40,
"schoolRank": 132,
"score": 109.5
},
{
"classRank": 41,
"schoolRank": 134,
"score": 108.5
},
{
"classRank": 42,
"schoolRank": 137,
"score": 107
},
{
"classRank": 43,
"schoolRank": 143,
"score": 103.5
},
{
"classRank": 44,
"schoolRank": 144,
"score": 103
},
{
"classRank": 45,
"schoolRank": 144,
"score": 103
},
{
"classRank": 46,
"schoolRank": 145,
"score": 102.5
}
],
"高三03班": [
{
"classRank": 1,
"schoolRank": 3,
"score": 98.5
},
{
"classRank": 2,
"schoolRank": 6,
"score": 97
},
{
"classRank": 3,
"schoolRank": 8,
"score": 96
},
{
"classRank": 4,
"schoolRank": 15,
"score": 92.5
},
{
"classRank": 5,
"schoolRank": 15,
"score": 92.5
},
{
"classRank": 6,
"schoolRank": 17,
"score": 91.5
},
{
"classRank": 7,
"schoolRank": 17,
"score": 91.5
},
{
"classRank": 8,
"schoolRank": 18,
"score": 91
},
{
"classRank": 9,
"schoolRank": 20,
"score": 90
},
{
"classRank": 10,
"schoolRank": 20,
"score": 90
},
{
"classRank": 11,
"schoolRank": 25,
"score": 87.5
},
{
"classRank": 12,
"schoolRank": 26,
"score": 87
},
{
"classRank": 13,
"schoolRank": 32,
"score": 84
},
{
"classRank": 14,
"schoolRank": 36,
"score": 82
},
{
"classRank": 15,
"schoolRank": 40,
"score": 80
},
{
"classRank": 16,
"schoolRank": 40,
"score": 80
},
{
"classRank": 17,
"schoolRank": 42,
"score": 79
},
{
"classRank": 18,
"schoolRank": 44,
"score": 78
},
{
"classRank": 19,
"schoolRank": 47,
"score": 76.5
},
{
"classRank": 20,
"schoolRank": 49,
"score": 75.5
},
{
"classRank": 21,
"schoolRank": 55,
"score": 72
},
{
"classRank": 22,
"schoolRank": 62,
"score": 68.5
},
{
"classRank": 23,
"schoolRank": 65,
"score": 67
},
{
"classRank": 24,
"schoolRank": 65,
"score": 67
},
{
"classRank": 25,
"schoolRank": 65,
"score": 67
},
{
"classRank": 26,
"schoolRank": 67,
"score": 65.5
},
{
"classRank": 27,
"schoolRank": 73,
"score": 62
},
{
"classRank": 28,
"schoolRank": 74,
"score": 61.5
},
{
"classRank": 29,
"schoolRank": 75,
"score": 61
},
{
"classRank": 30,
"schoolRank": 85,
"score": 54.5
},
{
"classRank": 31,
"schoolRank": 92,
"score": 133
},
{
"classRank": 32,
"schoolRank": 102,
"score": 125.5
},
{
"classRank": 33,
"schoolRank": 105,
"score": 124
},
{
"classRank": 34,
"schoolRank": 106,
"score": 123.5
},
{
"classRank": 35,
"schoolRank": 111,
"score": 121
},
{
"classRank": 36,
"schoolRank": 112,
"score": 120.5
},
{
"classRank": 37,
"schoolRank": 113,
"score": 120
},
{
"classRank": 38,
"schoolRank": 116,
"score": 118.5
},
{
"classRank": 39,
"schoolRank": 119,
"score": 117
},
{
"classRank": 40,
"schoolRank": 122,
"score": 115.5
},
{
"classRank": 41,
"schoolRank": 124,
"score": 114
},
{
"classRank": 42,
"schoolRank": 124,
"score": 114
},
{
"classRank": 43,
"schoolRank": 127,
"score": 112
},
{
"classRank": 44,
"schoolRank": 128,
"score": 111.5
},
{
"classRank": 45,
"schoolRank": 129,
"score": 111
},
{
"classRank": 46,
"schoolRank": 132,
"score": 109.5
},
{
"classRank": 47,
"schoolRank": 134,
"score": 108.5
},
{
"classRank": 48,
"schoolRank": 139,
"score": 106
},
{
"classRank": 49,
"schoolRank": 146,
"score": 102
}
],
"高三04班": [
{
"classRank": 1,
"schoolRank": 10,
"score": 95
},
{
"classRank": 2,
"schoolRank": 13,
"score": 93.5
},
{
"classRank": 3,
"schoolRank": 20,
"score": 90
},
{
"classRank": 4,
"schoolRank": 21,
"score": 89.5
},
{
"classRank": 5,
"schoolRank": 30,
"score": 85
},
{
"classRank": 6,
"schoolRank": 32,
"score": 84
},
{
"classRank": 7,
"schoolRank": 33,
"score": 83.5
},
{
"classRank": 8,
"schoolRank": 33,
"score": 83.5
},
{
"classRank": 9,
"schoolRank": 34,
"score": 83
},
{
"classRank": 10,
"schoolRank": 35,
"score": 82.5
},
{
"classRank": 11,
"schoolRank": 39,
"score": 80.5
},
{
"classRank": 12,
"schoolRank": 41,
"score": 79.5
},
{
"classRank": 13,
"schoolRank": 42,
"score": 79
},
{
"classRank": 14,
"schoolRank": 45,
"score": 77.5
},
{
"classRank": 15,
"schoolRank": 50,
"score": 75
},
{
"classRank": 16,
"schoolRank": 55,
"score": 72
},
{
"classRank": 17,
"schoolRank": 63,
"score": 68
},
{
"classRank": 18,
"schoolRank": 66,
"score": 66.5
},
{
"classRank": 19,
"schoolRank": 66,
"score": 66.5
},
{
"classRank": 20,
"schoolRank": 101,
"score": 126
},
{
"classRank": 21,
"schoolRank": 103,
"score": 125
},
{
"classRank": 22,
"schoolRank": 106,
"score": 123.5
},
{
"classRank": 23,
"schoolRank": 107,
"score": 123
},
{
"classRank": 24,
"schoolRank": 108,
"score": 122.5
},
{
"classRank": 25,
"schoolRank": 109,
"score": 122
},
{
"classRank": 26,
"schoolRank": 116,
"score": 118.5
},
{
"classRank": 27,
"schoolRank": 116,
"score": 118.5
},
{
"classRank": 28,
"schoolRank": 117,
"score": 118
},
{
"classRank": 29,
"schoolRank": 118,
"score": 117.5
},
{
"classRank": 30,
"schoolRank": 119,
"score": 117
},
{
"classRank": 31,
"schoolRank": 121,
"score": 116
},
{
"classRank": 32,
"schoolRank": 122,
"score": 115.5
},
{
"classRank": 33,
"schoolRank": 131,
"score": 110
},
{
"classRank": 34,
"schoolRank": 135,
"score": 108
},
{
"classRank": 35,
"schoolRank": 138,
"score": 106.5
},
{
"classRank": 36,
"schoolRank": 138,
"score": 106.5
},
{
"classRank": 37,
"schoolRank": 143,
"score": 103.5
},
{
"classRank": 38,
"schoolRank": 145,
"score": 102.5
},
{
"classRank": 39,
"schoolRank": 147,
"score": 101.5
},
{
"classRank": 40,
"schoolRank": 150,
"score": 100
},
{
"classRank": 41,
"schoolRank": 150,
"score": 100
}
],
"高三01班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 99.5
},
{
"classRank": 2,
"schoolRank": 5,
"score": 97.5
},
{
"classRank": 3,
"schoolRank": 8,
"score": 96
},
{
"classRank": 4,
"schoolRank": 9,
"score": 95.5
},
{
"classRank": 5,
"schoolRank": 12,
"score": 94
},
{
"classRank": 6,
"schoolRank": 13,
"score": 93.5
},
{
"classRank": 7,
"schoolRank": 14,
"score": 93
},
{
"classRank": 8,
"schoolRank": 14,
"score": 93
},
{
"classRank": 9,
"schoolRank": 26,
"score": 87
},
{
"classRank": 10,
"schoolRank": 26,
"score": 87
},
{
"classRank": 11,
"schoolRank": 27,
"score": 86.5
},
{
"classRank": 12,
"schoolRank": 38,
"score": 81
},
{
"classRank": 13,
"schoolRank": 52,
"score": 73.5
},
{
"classRank": 14,
"schoolRank": 90,
"score": 138.5
},
{
"classRank": 15,
"schoolRank": 91,
"score": 135
},
{
"classRank": 16,
"schoolRank": 96,
"score": 128.5
},
{
"classRank": 17,
"schoolRank": 98,
"score": 127.5
},
{
"classRank": 18,
"schoolRank": 101,
"score": 126
},
{
"classRank": 19,
"schoolRank": 101,
"score": 126
},
{
"classRank": 20,
"schoolRank": 102,
"score": 125.5
},
{
"classRank": 21,
"schoolRank": 107,
"score": 123
},
{
"classRank": 22,
"schoolRank": 108,
"score": 122.5
},
{
"classRank": 23,
"schoolRank": 109,
"score": 122
},
{
"classRank": 24,
"schoolRank": 111,
"score": 121
},
{
"classRank": 25,
"schoolRank": 115,
"score": 119
},
{
"classRank": 26,
"schoolRank": 120,
"score": 116.5
},
{
"classRank": 27,
"schoolRank": 124,
"score": 114
},
{
"classRank": 28,
"schoolRank": 129,
"score": 111
},
{
"classRank": 29,
"schoolRank": 131,
"score": 110
},
{
"classRank": 30,
"schoolRank": 137,
"score": 107
},
{
"classRank": 31,
"schoolRank": 139,
"score": 106
},
{
"classRank": 32,
"schoolRank": 141,
"score": 104.5
},
{
"classRank": 33,
"schoolRank": 144,
"score": 103
},
{
"classRank": 34,
"schoolRank": 144,
"score": 103
},
{
"classRank": 35,
"schoolRank": 147,
"score": 101.5
}
],
"高三02班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 99.5
},
{
"classRank": 2,
"schoolRank": 3,
"score": 98.5
},
{
"classRank": 3,
"schoolRank": 9,
"score": 95.5
},
{
"classRank": 4,
"schoolRank": 12,
"score": 94
},
{
"classRank": 5,
"schoolRank": 12,
"score": 94
},
{
"classRank": 6,
"schoolRank": 23,
"score": 88.5
},
{
"classRank": 7,
"schoolRank": 24,
"score": 88
},
{
"classRank": 8,
"schoolRank": 24,
"score": 88
},
{
"classRank": 9,
"schoolRank": 24,
"score": 88
},
{
"classRank": 10,
"schoolRank": 25,
"score": 87.5
},
{
"classRank": 11,
"schoolRank": 30,
"score": 85
},
{
"classRank": 12,
"schoolRank": 31,
"score": 84.5
},
{
"classRank": 13,
"schoolRank": 32,
"score": 84
},
{
"classRank": 14,
"schoolRank": 33,
"score": 83.5
},
{
"classRank": 15,
"schoolRank": 41,
"score": 79.5
},
{
"classRank": 16,
"schoolRank": 46,
"score": 77
},
{
"classRank": 17,
"schoolRank": 50,
"score": 75
},
{
"classRank": 18,
"schoolRank": 55,
"score": 72
},
{
"classRank": 19,
"schoolRank": 59,
"score": 70
},
{
"classRank": 20,
"schoolRank": 59,
"score": 70
},
{
"classRank": 21,
"schoolRank": 66,
"score": 66.5
},
{
"classRank": 22,
"schoolRank": 81,
"score": 57
},
{
"classRank": 23,
"schoolRank": 90,
"score": 138.5
},
{
"classRank": 24,
"schoolRank": 95,
"score": 129
},
{
"classRank": 25,
"schoolRank": 97,
"score": 128
},
{
"classRank": 26,
"schoolRank": 100,
"score": 126.5
},
{
"classRank": 27,
"schoolRank": 102,
"score": 125.5
},
{
"classRank": 28,
"schoolRank": 107,
"score": 123
},
{
"classRank": 29,
"schoolRank": 108,
"score": 122.5
},
{
"classRank": 30,
"schoolRank": 109,
"score": 122
},
{
"classRank": 31,
"schoolRank": 114,
"score": 119.5
},
{
"classRank": 32,
"schoolRank": 114,
"score": 119.5
},
{
"classRank": 33,
"schoolRank": 118,
"score": 117.5
},
{
"classRank": 34,
"schoolRank": 121,
"score": 116
},
{
"classRank": 35,
"schoolRank": 121,
"score": 116
},
{
"classRank": 36,
"schoolRank": 127,
"score": 112
},
{
"classRank": 37,
"schoolRank": 129,
"score": 111
},
{
"classRank": 38,
"schoolRank": 133,
"score": 109
},
{
"classRank": 39,
"schoolRank": 134,
"score": 108.5
},
{
"classRank": 40,
"schoolRank": 136,
"score": 107.5
},
{
"classRank": 41,
"schoolRank": 136,
"score": 107.5
},
{
"classRank": 42,
"schoolRank": 138,
"score": 106.5
},
{
"classRank": 43,
"schoolRank": 144,
"score": 103
},
{
"classRank": 44,
"schoolRank": 145,
"score": 102.5
}
],
"高三10班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 99.5
},
{
"classRank": 2,
"schoolRank": 4,
"score": 98
},
{
"classRank": 3,
"schoolRank": 6,
"score": 97
},
{
"classRank": 4,
"schoolRank": 10,
"score": 95
},
{
"classRank": 5,
"schoolRank": 13,
"score": 93.5
},
{
"classRank": 6,
"schoolRank": 15,
"score": 92.5
},
{
"classRank": 7,
"schoolRank": 16,
"score": 92
},
{
"classRank": 8,
"schoolRank": 22,
"score": 89
},
{
"classRank": 9,
"schoolRank": 23,
"score": 88.5
},
{
"classRank": 10,
"schoolRank": 23,
"score": 88.5
},
{
"classRank": 11,
"schoolRank": 28,
"score": 86
},
{
"classRank": 12,
"schoolRank": 31,
"score": 84.5
},
{
"classRank": 13,
"schoolRank": 34,
"score": 83
},
{
"classRank": 14,
"schoolRank": 43,
"score": 78.5
},
{
"classRank": 15,
"schoolRank": 46,
"score": 77
},
{
"classRank": 16,
"schoolRank": 47,
"score": 76.5
},
{
"classRank": 17,
"schoolRank": 47,
"score": 76.5
},
{
"classRank": 18,
"schoolRank": 48,
"score": 76
},
{
"classRank": 19,
"schoolRank": 59,
"score": 70
},
{
"classRank": 20,
"schoolRank": 60,
"score": 69.5
},
{
"classRank": 21,
"schoolRank": 64,
"score": 67.5
},
{
"classRank": 22,
"schoolRank": 68,
"score": 65
},
{
"classRank": 23,
"schoolRank": 70,
"score": 64
},
{
"classRank": 24,
"schoolRank": 70,
"score": 64
},
{
"classRank": 25,
"schoolRank": 76,
"score": 60.5
},
{
"classRank": 26,
"schoolRank": 77,
"score": 60
},
{
"classRank": 27,
"schoolRank": 78,
"score": 59.5
},
{
"classRank": 28,
"schoolRank": 79,
"score": 59
},
{
"classRank": 29,
"schoolRank": 82,
"score": 56.5
},
{
"classRank": 30,
"schoolRank": 83,
"score": 55.5
},
{
"classRank": 31,
"schoolRank": 89,
"score": 51
},
{
"classRank": 32,
"schoolRank": 105,
"score": 124
},
{
"classRank": 33,
"schoolRank": 115,
"score": 119
},
{
"classRank": 34,
"schoolRank": 118,
"score": 117.5
},
{
"classRank": 35,
"schoolRank": 119,
"score": 117
},
{
"classRank": 36,
"schoolRank": 120,
"score": 116.5
},
{
"classRank": 37,
"schoolRank": 123,
"score": 114.5
},
{
"classRank": 38,
"schoolRank": 126,
"score": 112.5
},
{
"classRank": 39,
"schoolRank": 135,
"score": 108
},
{
"classRank": 40,
"schoolRank": 141,
"score": 104.5
},
{
"classRank": 41,
"schoolRank": 142,
"score": 104
},
{
"classRank": 42,
"schoolRank": 143,
"score": 103.5
},
{
"classRank": 43,
"schoolRank": 150,
"score": 100
},
{
"classRank": 44,
"schoolRank": 150,
"score": 100
}
],
"高三11班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 99
},
{
"classRank": 2,
"schoolRank": 4,
"score": 98
},
{
"classRank": 3,
"schoolRank": 7,
"score": 96.5
},
{
"classRank": 4,
"schoolRank": 10,
"score": 95
},
{
"classRank": 5,
"schoolRank": 11,
"score": 94.5
},
{
"classRank": 6,
"schoolRank": 12,
"score": 94
},
{
"classRank": 7,
"schoolRank": 13,
"score": 93.5
},
{
"classRank": 8,
"schoolRank": 19,
"score": 90.5
},
{
"classRank": 9,
"schoolRank": 19,
"score": 90.5
},
{
"classRank": 10,
"schoolRank": 22,
"score": 89
},
{
"classRank": 11,
"schoolRank": 23,
"score": 88.5
},
{
"classRank": 12,
"schoolRank": 27,
"score": 86.5
},
{
"classRank": 13,
"schoolRank": 30,
"score": 85
},
{
"classRank": 14,
"schoolRank": 31,
"score": 84.5
},
{
"classRank": 15,
"schoolRank": 34,
"score": 83
},
{
"classRank": 16,
"schoolRank": 39,
"score": 80.5
},
{
"classRank": 17,
"schoolRank": 43,
"score": 78.5
},
{
"classRank": 18,
"schoolRank": 43,
"score": 78.5
},
{
"classRank": 19,
"schoolRank": 50,
"score": 75
},
{
"classRank": 20,
"schoolRank": 51,
"score": 74.5
},
{
"classRank": 21,
"schoolRank": 53,
"score": 73
},
{
"classRank": 22,
"schoolRank": 55,
"score": 72
},
{
"classRank": 23,
"schoolRank": 56,
"score": 71.5
},
{
"classRank": 24,
"schoolRank": 57,
"score": 71
},
{
"classRank": 25,
"schoolRank": 61,
"score": 69
},
{
"classRank": 26,
"schoolRank": 67,
"score": 65.5
},
{
"classRank": 27,
"schoolRank": 69,
"score": 64.5
},
{
"classRank": 28,
"schoolRank": 69,
"score": 64.5
},
{
"classRank": 29,
"schoolRank": 71,
"score": 63.5
},
{
"classRank": 30,
"schoolRank": 74,
"score": 61.5
},
{
"classRank": 31,
"schoolRank": 77,
"score": 60
},
{
"classRank": 32,
"schoolRank": 80,
"score": 58
},
{
"classRank": 33,
"schoolRank": 86,
"score": 52.5
},
{
"classRank": 34,
"schoolRank": 88,
"score": 51.5
},
{
"classRank": 35,
"schoolRank": 109,
"score": 122
},
{
"classRank": 36,
"schoolRank": 116,
"score": 118.5
},
{
"classRank": 37,
"schoolRank": 125,
"score": 113
},
{
"classRank": 38,
"schoolRank": 126,
"score": 112.5
},
{
"classRank": 39,
"schoolRank": 130,
"score": 110.5
},
{
"classRank": 40,
"schoolRank": 135,
"score": 108
},
{
"classRank": 41,
"schoolRank": 138,
"score": 106.5
},
{
"classRank": 42,
"schoolRank": 138,
"score": 106.5
},
{
"classRank": 43,
"schoolRank": 145,
"score": 102.5
},
{
"classRank": 44,
"schoolRank": 146,
"score": 102
}
]
};
var gs3 = [];
getyk(data, gs3);
setMapS3(gs3, '英语', 'm3-3');
data={
"高三09班": [
{
"classRank": 1,
"schoolRank": 18,
"score": 79
},
{
"classRank": 2,
"schoolRank": 19,
"score": 78.5
},
{
"classRank": 3,
"schoolRank": 23,
"score": 76.5
},
{
"classRank": 4,
"schoolRank": 23,
"score": 76.5
},
{
"classRank": 5,
"schoolRank": 25,
"score": 75.5
},
{
"classRank": 6,
"schoolRank": 26,
"score": 75
},
{
"classRank": 7,
"schoolRank": 27,
"score": 74.5
},
{
"classRank": 8,
"schoolRank": 28,
"score": 74
},
{
"classRank": 9,
"schoolRank": 31,
"score": 72.5
},
{
"classRank": 10,
"schoolRank": 31,
"score": 72.5
},
{
"classRank": 11,
"schoolRank": 31,
"score": 72.5
},
{
"classRank": 12,
"schoolRank": 33,
"score": 71.5
},
{
"classRank": 13,
"schoolRank": 34,
"score": 71
},
{
"classRank": 14,
"schoolRank": 37,
"score": 69.5
},
{
"classRank": 15,
"schoolRank": 45,
"score": 65.5
},
{
"classRank": 16,
"schoolRank": 46,
"score": 65
},
{
"classRank": 17,
"schoolRank": 46,
"score": 65
},
{
"classRank": 18,
"schoolRank": 50,
"score": 63
},
{
"classRank": 19,
"schoolRank": 50,
"score": 63
},
{
"classRank": 20,
"schoolRank": 50,
"score": 63
},
{
"classRank": 21,
"schoolRank": 59,
"score": 58.5
},
{
"classRank": 22,
"schoolRank": 59,
"score": 58.5
},
{
"classRank": 23,
"schoolRank": 60,
"score": 58
},
{
"classRank": 24,
"schoolRank": 62,
"score": 57
},
{
"classRank": 25,
"schoolRank": 62,
"score": 57
},
{
"classRank": 26,
"schoolRank": 64,
"score": 56
},
{
"classRank": 27,
"schoolRank": 69,
"score": 53.5
},
{
"classRank": 28,
"schoolRank": 72,
"score": 52
},
{
"classRank": 29,
"schoolRank": 73,
"score": 51.5
},
{
"classRank": 30,
"schoolRank": 74,
"score": 51
},
{
"classRank": 31,
"schoolRank": 75,
"score": 50.5
},
{
"classRank": 32,
"schoolRank": 80,
"score": 48
},
{
"classRank": 33,
"schoolRank": 80,
"score": 48
},
{
"classRank": 34,
"schoolRank": 82,
"score": 47
},
{
"classRank": 35,
"schoolRank": 84,
"score": 46
},
{
"classRank": 36,
"schoolRank": 86,
"score": 45
},
{
"classRank": 37,
"schoolRank": 88,
"score": 44
},
{
"classRank": 38,
"schoolRank": 90,
"score": 43
},
{
"classRank": 39,
"schoolRank": 91,
"score": 42.5
},
{
"classRank": 40,
"schoolRank": 95,
"score": 40.5
},
{
"classRank": 41,
"schoolRank": 98,
"score": 39
},
{
"classRank": 42,
"schoolRank": 100,
"score": 37.5
}
],
"高三07班": [
{
"classRank": 1,
"schoolRank": 4,
"score": 86.5
},
{
"classRank": 2,
"schoolRank": 12,
"score": 82
},
{
"classRank": 3,
"schoolRank": 15,
"score": 80.5
},
{
"classRank": 4,
"schoolRank": 16,
"score": 80
},
{
"classRank": 5,
"schoolRank": 19,
"score": 78.5
},
{
"classRank": 6,
"schoolRank": 20,
"score": 78
},
{
"classRank": 7,
"schoolRank": 23,
"score": 76.5
},
{
"classRank": 8,
"schoolRank": 26,
"score": 75
},
{
"classRank": 9,
"schoolRank": 31,
"score": 72.5
},
{
"classRank": 10,
"schoolRank": 34,
"score": 71
},
{
"classRank": 11,
"schoolRank": 35,
"score": 70.5
},
{
"classRank": 12,
"schoolRank": 37,
"score": 69.5
},
{
"classRank": 13,
"schoolRank": 40,
"score": 68
},
{
"classRank": 14,
"schoolRank": 41,
"score": 67.5
},
{
"classRank": 15,
"schoolRank": 42,
"score": 67
},
{
"classRank": 16,
"schoolRank": 43,
"score": 66.5
},
{
"classRank": 17,
"schoolRank": 44,
"score": 66
},
{
"classRank": 18,
"schoolRank": 45,
"score": 65.5
},
{
"classRank": 19,
"schoolRank": 45,
"score": 65.5
},
{
"classRank": 20,
"schoolRank": 45,
"score": 65.5
},
{
"classRank": 21,
"schoolRank": 47,
"score": 64.5
},
{
"classRank": 22,
"schoolRank": 50,
"score": 63
},
{
"classRank": 23,
"schoolRank": 52,
"score": 62
},
{
"classRank": 24,
"schoolRank": 55,
"score": 60.5
},
{
"classRank": 25,
"schoolRank": 60,
"score": 58
},
{
"classRank": 26,
"schoolRank": 61,
"score": 57.5
},
{
"classRank": 27,
"schoolRank": 63,
"score": 56.5
},
{
"classRank": 28,
"schoolRank": 65,
"score": 55.5
},
{
"classRank": 29,
"schoolRank": 65,
"score": 55.5
},
{
"classRank": 30,
"schoolRank": 66,
"score": 55
},
{
"classRank": 31,
"schoolRank": 69,
"score": 53.5
},
{
"classRank": 32,
"schoolRank": 76,
"score": 50
},
{
"classRank": 33,
"schoolRank": 77,
"score": 49.5
},
{
"classRank": 34,
"schoolRank": 78,
"score": 49
},
{
"classRank": 35,
"schoolRank": 79,
"score": 48.5
},
{
"classRank": 36,
"schoolRank": 85,
"score": 45.5
},
{
"classRank": 37,
"schoolRank": 86,
"score": 45
},
{
"classRank": 38,
"schoolRank": 86,
"score": 45
},
{
"classRank": 39,
"schoolRank": 88,
"score": 44
},
{
"classRank": 40,
"schoolRank": 88,
"score": 44
},
{
"classRank": 41,
"schoolRank": 90,
"score": 43
},
{
"classRank": 42,
"schoolRank": 90,
"score": 43
},
{
"classRank": 43,
"schoolRank": 92,
"score": 42
},
{
"classRank": 44,
"schoolRank": 94,
"score": 41
},
{
"classRank": 45,
"schoolRank": 96,
"score": 40
},
{
"classRank": 46,
"schoolRank": 100,
"score": 37.5
},
{
"classRank": 47,
"schoolRank": 100,
"score": 37.5
}
],
"高三08班": [
{
"classRank": 1,
"schoolRank": 13,
"score": 81.5
},
{
"classRank": 2,
"schoolRank": 14,
"score": 81
},
{
"classRank": 3,
"schoolRank": 15,
"score": 80.5
},
{
"classRank": 4,
"schoolRank": 19,
"score": 78.5
},
{
"classRank": 5,
"schoolRank": 20,
"score": 78
},
{
"classRank": 6,
"schoolRank": 20,
"score": 78
},
{
"classRank": 7,
"schoolRank": 21,
"score": 77.5
},
{
"classRank": 8,
"schoolRank": 23,
"score": 76.5
},
{
"classRank": 9,
"schoolRank": 30,
"score": 73
},
{
"classRank": 10,
"schoolRank": 32,
"score": 72
},
{
"classRank": 11,
"schoolRank": 33,
"score": 71.5
},
{
"classRank": 12,
"schoolRank": 33,
"score": 71.5
},
{
"classRank": 13,
"schoolRank": 34,
"score": 71
},
{
"classRank": 14,
"schoolRank": 35,
"score": 70.5
},
{
"classRank": 15,
"schoolRank": 36,
"score": 70
},
{
"classRank": 16,
"schoolRank": 37,
"score": 69.5
},
{
"classRank": 17,
"schoolRank": 42,
"score": 67
},
{
"classRank": 18,
"schoolRank": 43,
"score": 66.5
},
{
"classRank": 19,
"schoolRank": 49,
"score": 63.5
},
{
"classRank": 20,
"schoolRank": 49,
"score": 63.5
},
{
"classRank": 21,
"schoolRank": 52,
"score": 62
},
{
"classRank": 22,
"schoolRank": 55,
"score": 60.5
},
{
"classRank": 23,
"schoolRank": 56,
"score": 60
},
{
"classRank": 24,
"schoolRank": 57,
"score": 59.5
},
{
"classRank": 25,
"schoolRank": 60,
"score": 58
},
{
"classRank": 26,
"schoolRank": 60,
"score": 58
},
{
"classRank": 27,
"schoolRank": 61,
"score": 57.5
},
{
"classRank": 28,
"schoolRank": 64,
"score": 56
},
{
"classRank": 29,
"schoolRank": 65,
"score": 55.5
},
{
"classRank": 30,
"schoolRank": 68,
"score": 54
},
{
"classRank": 31,
"schoolRank": 72,
"score": 52
},
{
"classRank": 32,
"schoolRank": 78,
"score": 49
},
{
"classRank": 33,
"schoolRank": 78,
"score": 49
},
{
"classRank": 34,
"schoolRank": 80,
"score": 48
},
{
"classRank": 35,
"schoolRank": 80,
"score": 48
},
{
"classRank": 36,
"schoolRank": 82,
"score": 47
},
{
"classRank": 37,
"schoolRank": 82,
"score": 47
},
{
"classRank": 38,
"schoolRank": 85,
"score": 45.5
},
{
"classRank": 39,
"schoolRank": 88,
"score": 44
},
{
"classRank": 40,
"schoolRank": 90,
"score": 43
},
{
"classRank": 41,
"schoolRank": 98,
"score": 39
},
{
"classRank": 42,
"schoolRank": 99,
"score": 38.5
}
],
"高三05班": [
{
"classRank": 1,
"schoolRank": 4,
"score": 86.5
},
{
"classRank": 2,
"schoolRank": 6,
"score": 85.5
},
{
"classRank": 3,
"schoolRank": 11,
"score": 82.5
},
{
"classRank": 4,
"schoolRank": 19,
"score": 78.5
},
{
"classRank": 5,
"schoolRank": 19,
"score": 78.5
},
{
"classRank": 6,
"schoolRank": 20,
"score": 78
},
{
"classRank": 7,
"schoolRank": 22,
"score": 77
},
{
"classRank": 8,
"schoolRank": 22,
"score": 77
},
{
"classRank": 9,
"schoolRank": 25,
"score": 75.5
},
{
"classRank": 10,
"schoolRank": 25,
"score": 75.5
},
{
"classRank": 11,
"schoolRank": 27,
"score": 74.5
},
{
"classRank": 12,
"schoolRank": 27,
"score": 74.5
},
{
"classRank": 13,
"schoolRank": 31,
"score": 72.5
},
{
"classRank": 14,
"schoolRank": 35,
"score": 70.5
},
{
"classRank": 15,
"schoolRank": 35,
"score": 70.5
},
{
"classRank": 16,
"schoolRank": 42,
"score": 67
},
{
"classRank": 17,
"schoolRank": 44,
"score": 66
},
{
"classRank": 18,
"schoolRank": 45,
"score": 65.5
},
{
"classRank": 19,
"schoolRank": 48,
"score": 64
},
{
"classRank": 20,
"schoolRank": 49,
"score": 63.5
},
{
"classRank": 21,
"schoolRank": 49,
"score": 63.5
},
{
"classRank": 22,
"schoolRank": 50,
"score": 63
},
{
"classRank": 23,
"schoolRank": 52,
"score": 62
},
{
"classRank": 24,
"schoolRank": 52,
"score": 62
},
{
"classRank": 25,
"schoolRank": 54,
"score": 61
},
{
"classRank": 26,
"schoolRank": 56,
"score": 60
},
{
"classRank": 27,
"schoolRank": 61,
"score": 57.5
},
{
"classRank": 28,
"schoolRank": 63,
"score": 56.5
},
{
"classRank": 29,
"schoolRank": 64,
"score": 56
},
{
"classRank": 30,
"schoolRank": 64,
"score": 56
},
{
"classRank": 31,
"schoolRank": 65,
"score": 55.5
},
{
"classRank": 32,
"schoolRank": 65,
"score": 55.5
},
{
"classRank": 33,
"schoolRank": 72,
"score": 52
},
{
"classRank": 34,
"schoolRank": 75,
"score": 50.5
},
{
"classRank": 35,
"schoolRank": 76,
"score": 50
},
{
"classRank": 36,
"schoolRank": 78,
"score": 49
},
{
"classRank": 37,
"schoolRank": 80,
"score": 48
},
{
"classRank": 38,
"schoolRank": 80,
"score": 48
},
{
"classRank": 39,
"schoolRank": 83,
"score": 46.5
},
{
"classRank": 40,
"schoolRank": 84,
"score": 46
},
{
"classRank": 41,
"schoolRank": 86,
"score": 45
}
],
"高三06班": [
{
"classRank": 1,
"schoolRank": 5,
"score": 86
},
{
"classRank": 2,
"schoolRank": 8,
"score": 84
},
{
"classRank": 3,
"schoolRank": 13,
"score": 81.5
},
{
"classRank": 4,
"schoolRank": 14,
"score": 81
},
{
"classRank": 5,
"schoolRank": 15,
"score": 80.5
},
{
"classRank": 6,
"schoolRank": 15,
"score": 80.5
},
{
"classRank": 7,
"schoolRank": 16,
"score": 80
},
{
"classRank": 8,
"schoolRank": 20,
"score": 78
},
{
"classRank": 9,
"schoolRank": 20,
"score": 78
},
{
"classRank": 10,
"schoolRank": 22,
"score": 77
},
{
"classRank": 11,
"schoolRank": 24,
"score": 76
},
{
"classRank": 12,
"schoolRank": 29,
"score": 73.5
},
{
"classRank": 13,
"schoolRank": 31,
"score": 72.5
},
{
"classRank": 14,
"schoolRank": 34,
"score": 71
},
{
"classRank": 15,
"schoolRank": 41,
"score": 67.5
},
{
"classRank": 16,
"schoolRank": 43,
"score": 66.5
},
{
"classRank": 17,
"schoolRank": 44,
"score": 66
},
{
"classRank": 18,
"schoolRank": 44,
"score": 66
},
{
"classRank": 19,
"schoolRank": 46,
"score": 65
},
{
"classRank": 20,
"schoolRank": 46,
"score": 65
},
{
"classRank": 21,
"schoolRank": 47,
"score": 64.5
},
{
"classRank": 22,
"schoolRank": 51,
"score": 62.5
},
{
"classRank": 23,
"schoolRank": 52,
"score": 62
},
{
"classRank": 24,
"schoolRank": 53,
"score": 61.5
},
{
"classRank": 25,
"schoolRank": 58,
"score": 59
},
{
"classRank": 26,
"schoolRank": 62,
"score": 57
},
{
"classRank": 27,
"schoolRank": 62,
"score": 57
},
{
"classRank": 28,
"schoolRank": 63,
"score": 56.5
},
{
"classRank": 29,
"schoolRank": 64,
"score": 56
},
{
"classRank": 30,
"schoolRank": 64,
"score": 56
},
{
"classRank": 31,
"schoolRank": 67,
"score": 54.5
},
{
"classRank": 32,
"schoolRank": 71,
"score": 52.5
},
{
"classRank": 33,
"schoolRank": 73,
"score": 51.5
},
{
"classRank": 34,
"schoolRank": 73,
"score": 51.5
},
{
"classRank": 35,
"schoolRank": 76,
"score": 50
},
{
"classRank": 36,
"schoolRank": 78,
"score": 49
},
{
"classRank": 37,
"schoolRank": 81,
"score": 47.5
},
{
"classRank": 38,
"schoolRank": 82,
"score": 47
},
{
"classRank": 39,
"schoolRank": 84,
"score": 46
},
{
"classRank": 40,
"schoolRank": 88,
"score": 44
},
{
"classRank": 41,
"schoolRank": 89,
"score": 43.5
},
{
"classRank": 42,
"schoolRank": 93,
"score": 41.5
},
{
"classRank": 43,
"schoolRank": 97,
"score": 39.5
},
{
"classRank": 44,
"schoolRank": 97,
"score": 39.5
},
{
"classRank": 45,
"schoolRank": 99,
"score": 38.5
},
{
"classRank": 46,
"schoolRank": 102,
"score": 36.5
}
],
"高三03班": [
{
"classRank": 1,
"schoolRank": 3,
"score": 87
},
{
"classRank": 2,
"schoolRank": 4,
"score": 86.5
},
{
"classRank": 3,
"schoolRank": 4,
"score": 86.5
},
{
"classRank": 4,
"schoolRank": 7,
"score": 85
},
{
"classRank": 5,
"schoolRank": 10,
"score": 83
},
{
"classRank": 6,
"schoolRank": 10,
"score": 83
},
{
"classRank": 7,
"schoolRank": 15,
"score": 80.5
},
{
"classRank": 8,
"schoolRank": 19,
"score": 78.5
},
{
"classRank": 9,
"schoolRank": 20,
"score": 78
},
{
"classRank": 10,
"schoolRank": 21,
"score": 77.5
},
{
"classRank": 11,
"schoolRank": 22,
"score": 77
},
{
"classRank": 12,
"schoolRank": 25,
"score": 75.5
},
{
"classRank": 13,
"schoolRank": 26,
"score": 75
},
{
"classRank": 14,
"schoolRank": 26,
"score": 75
},
{
"classRank": 15,
"schoolRank": 29,
"score": 73.5
},
{
"classRank": 16,
"schoolRank": 31,
"score": 72.5
},
{
"classRank": 17,
"schoolRank": 35,
"score": 70.5
},
{
"classRank": 18,
"schoolRank": 36,
"score": 70
},
{
"classRank": 19,
"schoolRank": 36,
"score": 70
},
{
"classRank": 20,
"schoolRank": 47,
"score": 64.5
},
{
"classRank": 21,
"schoolRank": 51,
"score": 62.5
},
{
"classRank": 22,
"schoolRank": 51,
"score": 62.5
},
{
"classRank": 23,
"schoolRank": 53,
"score": 61.5
},
{
"classRank": 24,
"schoolRank": 53,
"score": 61.5
},
{
"classRank": 25,
"schoolRank": 54,
"score": 61
},
{
"classRank": 26,
"schoolRank": 54,
"score": 61
},
{
"classRank": 27,
"schoolRank": 54,
"score": 61
},
{
"classRank": 28,
"schoolRank": 55,
"score": 60.5
},
{
"classRank": 29,
"schoolRank": 55,
"score": 60.5
},
{
"classRank": 30,
"schoolRank": 60,
"score": 58
},
{
"classRank": 31,
"schoolRank": 60,
"score": 58
},
{
"classRank": 32,
"schoolRank": 61,
"score": 57.5
},
{
"classRank": 33,
"schoolRank": 63,
"score": 56.5
},
{
"classRank": 34,
"schoolRank": 63,
"score": 56.5
},
{
"classRank": 35,
"schoolRank": 71,
"score": 52.5
},
{
"classRank": 36,
"schoolRank": 73,
"score": 51.5
},
{
"classRank": 37,
"schoolRank": 73,
"score": 51.5
},
{
"classRank": 38,
"schoolRank": 73,
"score": 51.5
},
{
"classRank": 39,
"schoolRank": 76,
"score": 50
},
{
"classRank": 40,
"schoolRank": 76,
"score": 50
},
{
"classRank": 41,
"schoolRank": 78,
"score": 49
},
{
"classRank": 42,
"schoolRank": 79,
"score": 48.5
},
{
"classRank": 43,
"schoolRank": 82,
"score": 47
},
{
"classRank": 44,
"schoolRank": 91,
"score": 42.5
},
{
"classRank": 45,
"schoolRank": 91,
"score": 42.5
},
{
"classRank": 46,
"schoolRank": 92,
"score": 42
},
{
"classRank": 47,
"schoolRank": 93,
"score": 41.5
},
{
"classRank": 48,
"schoolRank": 96,
"score": 40
},
{
"classRank": 49,
"schoolRank": 101,
"score": 37
}
],
"高三04班": [
{
"classRank": 1,
"schoolRank": 3,
"score": 87
},
{
"classRank": 2,
"schoolRank": 9,
"score": 83.5
},
{
"classRank": 3,
"schoolRank": 9,
"score": 83.5
},
{
"classRank": 4,
"schoolRank": 10,
"score": 83
},
{
"classRank": 5,
"schoolRank": 11,
"score": 82.5
},
{
"classRank": 6,
"schoolRank": 11,
"score": 82.5
},
{
"classRank": 7,
"schoolRank": 15,
"score": 80.5
},
{
"classRank": 8,
"schoolRank": 16,
"score": 80
},
{
"classRank": 9,
"schoolRank": 20,
"score": 78
},
{
"classRank": 10,
"schoolRank": 20,
"score": 78
},
{
"classRank": 11,
"schoolRank": 26,
"score": 75
},
{
"classRank": 12,
"schoolRank": 27,
"score": 74.5
},
{
"classRank": 13,
"schoolRank": 29,
"score": 73.5
},
{
"classRank": 14,
"schoolRank": 29,
"score": 73.5
},
{
"classRank": 15,
"schoolRank": 29,
"score": 73.5
},
{
"classRank": 16,
"schoolRank": 30,
"score": 73
},
{
"classRank": 17,
"schoolRank": 31,
"score": 72.5
},
{
"classRank": 18,
"schoolRank": 36,
"score": 70
},
{
"classRank": 19,
"schoolRank": 36,
"score": 70
},
{
"classRank": 20,
"schoolRank": 37,
"score": 69.5
},
{
"classRank": 21,
"schoolRank": 44,
"score": 66
},
{
"classRank": 22,
"schoolRank": 47,
"score": 64.5
},
{
"classRank": 23,
"schoolRank": 49,
"score": 63.5
},
{
"classRank": 24,
"schoolRank": 50,
"score": 63
},
{
"classRank": 25,
"schoolRank": 52,
"score": 62
},
{
"classRank": 26,
"schoolRank": 53,
"score": 61.5
},
{
"classRank": 27,
"schoolRank": 57,
"score": 59.5
},
{
"classRank": 28,
"schoolRank": 61,
"score": 57.5
},
{
"classRank": 29,
"schoolRank": 62,
"score": 57
},
{
"classRank": 30,
"schoolRank": 63,
"score": 56.5
},
{
"classRank": 31,
"schoolRank": 68,
"score": 54
},
{
"classRank": 32,
"schoolRank": 69,
"score": 53.5
},
{
"classRank": 33,
"schoolRank": 70,
"score": 53
},
{
"classRank": 34,
"schoolRank": 72,
"score": 52
},
{
"classRank": 35,
"schoolRank": 73,
"score": 51.5
},
{
"classRank": 36,
"schoolRank": 74,
"score": 51
},
{
"classRank": 37,
"schoolRank": 76,
"score": 50
},
{
"classRank": 38,
"schoolRank": 77,
"score": 49.5
},
{
"classRank": 39,
"schoolRank": 77,
"score": 49.5
},
{
"classRank": 40,
"schoolRank": 78,
"score": 49
},
{
"classRank": 41,
"schoolRank": 79,
"score": 48.5
}
],
"高三01班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 93
},
{
"classRank": 2,
"schoolRank": 3,
"score": 87
},
{
"classRank": 3,
"schoolRank": 3,
"score": 87
},
{
"classRank": 4,
"schoolRank": 5,
"score": 86
},
{
"classRank": 5,
"schoolRank": 6,
"score": 85.5
},
{
"classRank": 6,
"schoolRank": 8,
"score": 84
},
{
"classRank": 7,
"schoolRank": 9,
"score": 83.5
},
{
"classRank": 8,
"schoolRank": 9,
"score": 83.5
},
{
"classRank": 9,
"schoolRank": 12,
"score": 82
},
{
"classRank": 10,
"schoolRank": 12,
"score": 82
},
{
"classRank": 11,
"schoolRank": 13,
"score": 81.5
},
{
"classRank": 12,
"schoolRank": 24,
"score": 76
},
{
"classRank": 13,
"schoolRank": 26,
"score": 75
},
{
"classRank": 14,
"schoolRank": 26,
"score": 75
},
{
"classRank": 15,
"schoolRank": 26,
"score": 75
},
{
"classRank": 16,
"schoolRank": 27,
"score": 74.5
},
{
"classRank": 17,
"schoolRank": 30,
"score": 73
},
{
"classRank": 18,
"schoolRank": 31,
"score": 72.5
},
{
"classRank": 19,
"schoolRank": 31,
"score": 72.5
},
{
"classRank": 20,
"schoolRank": 35,
"score": 70.5
},
{
"classRank": 21,
"schoolRank": 37,
"score": 69.5
},
{
"classRank": 22,
"schoolRank": 40,
"score": 68
},
{
"classRank": 23,
"schoolRank": 41,
"score": 67.5
},
{
"classRank": 24,
"schoolRank": 43,
"score": 66.5
},
{
"classRank": 25,
"schoolRank": 47,
"score": 64.5
},
{
"classRank": 26,
"schoolRank": 47,
"score": 64.5
},
{
"classRank": 27,
"schoolRank": 48,
"score": 64
},
{
"classRank": 28,
"schoolRank": 49,
"score": 63.5
},
{
"classRank": 29,
"schoolRank": 54,
"score": 61
},
{
"classRank": 30,
"schoolRank": 56,
"score": 60
},
{
"classRank": 31,
"schoolRank": 56,
"score": 60
},
{
"classRank": 32,
"schoolRank": 57,
"score": 59.5
},
{
"classRank": 33,
"schoolRank": 58,
"score": 59
},
{
"classRank": 34,
"schoolRank": 61,
"score": 57.5
},
{
"classRank": 35,
"schoolRank": 64,
"score": 56
}
],
"高三02班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 87.5
},
{
"classRank": 2,
"schoolRank": 5,
"score": 86
},
{
"classRank": 3,
"schoolRank": 5,
"score": 86
},
{
"classRank": 4,
"schoolRank": 7,
"score": 85
},
{
"classRank": 5,
"schoolRank": 8,
"score": 84
},
{
"classRank": 6,
"schoolRank": 8,
"score": 84
},
{
"classRank": 7,
"schoolRank": 11,
"score": 82.5
},
{
"classRank": 8,
"schoolRank": 12,
"score": 82
},
{
"classRank": 9,
"schoolRank": 18,
"score": 79
},
{
"classRank": 10,
"schoolRank": 20,
"score": 78
},
{
"classRank": 11,
"schoolRank": 22,
"score": 77
},
{
"classRank": 12,
"schoolRank": 24,
"score": 76
},
{
"classRank": 13,
"schoolRank": 25,
"score": 75.5
},
{
"classRank": 14,
"schoolRank": 29,
"score": 73.5
},
{
"classRank": 15,
"schoolRank": 33,
"score": 71.5
},
{
"classRank": 16,
"schoolRank": 34,
"score": 71
},
{
"classRank": 17,
"schoolRank": 34,
"score": 71
},
{
"classRank": 18,
"schoolRank": 34,
"score": 71
},
{
"classRank": 19,
"schoolRank": 36,
"score": 70
},
{
"classRank": 20,
"schoolRank": 40,
"score": 68
},
{
"classRank": 21,
"schoolRank": 42,
"score": 67
},
{
"classRank": 22,
"schoolRank": 43,
"score": 66.5
},
{
"classRank": 23,
"schoolRank": 44,
"score": 66
},
{
"classRank": 24,
"schoolRank": 44,
"score": 66
},
{
"classRank": 25,
"schoolRank": 51,
"score": 62.5
},
{
"classRank": 26,
"schoolRank": 53,
"score": 61.5
},
{
"classRank": 27,
"schoolRank": 53,
"score": 61.5
},
{
"classRank": 28,
"schoolRank": 56,
"score": 60
},
{
"classRank": 29,
"schoolRank": 56,
"score": 60
},
{
"classRank": 30,
"schoolRank": 58,
"score": 59
},
{
"classRank": 31,
"schoolRank": 59,
"score": 58.5
},
{
"classRank": 32,
"schoolRank": 60,
"score": 58
},
{
"classRank": 33,
"schoolRank": 61,
"score": 57.5
},
{
"classRank": 34,
"schoolRank": 62,
"score": 57
},
{
"classRank": 35,
"schoolRank": 69,
"score": 53.5
},
{
"classRank": 36,
"schoolRank": 69,
"score": 53.5
},
{
"classRank": 37,
"schoolRank": 73,
"score": 51.5
},
{
"classRank": 38,
"schoolRank": 75,
"score": 50.5
},
{
"classRank": 39,
"schoolRank": 76,
"score": 50
},
{
"classRank": 40,
"schoolRank": 76,
"score": 50
},
{
"classRank": 41,
"schoolRank": 78,
"score": 49
},
{
"classRank": 42,
"schoolRank": 80,
"score": 48
},
{
"classRank": 43,
"schoolRank": 80,
"score": 48
},
{
"classRank": 44,
"schoolRank": 87,
"score": 44.5
}
],
"高三10班": [
{
"classRank": 1,
"schoolRank": 11,
"score": 82.5
},
{
"classRank": 2,
"schoolRank": 17,
"score": 79.5
},
{
"classRank": 3,
"schoolRank": 20,
"score": 78
},
{
"classRank": 4,
"schoolRank": 21,
"score": 77.5
},
{
"classRank": 5,
"schoolRank": 22,
"score": 77
},
{
"classRank": 6,
"schoolRank": 26,
"score": 75
},
{
"classRank": 7,
"schoolRank": 31,
"score": 72.5
},
{
"classRank": 8,
"schoolRank": 31,
"score": 72.5
},
{
"classRank": 9,
"schoolRank": 34,
"score": 71
},
{
"classRank": 10,
"schoolRank": 35,
"score": 70.5
},
{
"classRank": 11,
"schoolRank": 36,
"score": 70
},
{
"classRank": 12,
"schoolRank": 38,
"score": 69
},
{
"classRank": 13,
"schoolRank": 43,
"score": 66.5
},
{
"classRank": 14,
"schoolRank": 43,
"score": 66.5
},
{
"classRank": 15,
"schoolRank": 44,
"score": 66
},
{
"classRank": 16,
"schoolRank": 48,
"score": 64
},
{
"classRank": 17,
"schoolRank": 53,
"score": 61.5
},
{
"classRank": 18,
"schoolRank": 53,
"score": 61.5
},
{
"classRank": 19,
"schoolRank": 54,
"score": 61
},
{
"classRank": 20,
"schoolRank": 56,
"score": 60
},
{
"classRank": 21,
"schoolRank": 56,
"score": 60
},
{
"classRank": 22,
"schoolRank": 57,
"score": 59.5
},
{
"classRank": 23,
"schoolRank": 58,
"score": 59
},
{
"classRank": 24,
"schoolRank": 61,
"score": 57.5
},
{
"classRank": 25,
"schoolRank": 65,
"score": 55.5
},
{
"classRank": 26,
"schoolRank": 65,
"score": 55.5
},
{
"classRank": 27,
"schoolRank": 66,
"score": 55
},
{
"classRank": 28,
"schoolRank": 69,
"score": 53.5
},
{
"classRank": 29,
"schoolRank": 69,
"score": 53.5
},
{
"classRank": 30,
"schoolRank": 69,
"score": 53.5
},
{
"classRank": 31,
"schoolRank": 74,
"score": 51
},
{
"classRank": 32,
"schoolRank": 75,
"score": 50.5
},
{
"classRank": 33,
"schoolRank": 79,
"score": 48.5
},
{
"classRank": 34,
"schoolRank": 80,
"score": 48
},
{
"classRank": 35,
"schoolRank": 82,
"score": 47
},
{
"classRank": 36,
"schoolRank": 84,
"score": 46
},
{
"classRank": 37,
"schoolRank": 87,
"score": 44.5
},
{
"classRank": 38,
"schoolRank": 91,
"score": 42.5
},
{
"classRank": 39,
"schoolRank": 97,
"score": 39.5
},
{
"classRank": 40,
"schoolRank": 97,
"score": 39.5
},
{
"classRank": 41,
"schoolRank": 99,
"score": 38.5
},
{
"classRank": 42,
"schoolRank": 100,
"score": 37.5
},
{
"classRank": 43,
"schoolRank": 102,
"score": 36.5
},
{
"classRank": 44,
"schoolRank": 103,
"score": 36
}
],
"高三11班": [
{
"classRank": 1,
"schoolRank": 18,
"score": 79
},
{
"classRank": 2,
"schoolRank": 20,
"score": 78
},
{
"classRank": 3,
"schoolRank": 26,
"score": 75
},
{
"classRank": 4,
"schoolRank": 28,
"score": 74
},
{
"classRank": 5,
"schoolRank": 29,
"score": 73.5
},
{
"classRank": 6,
"schoolRank": 30,
"score": 73
},
{
"classRank": 7,
"schoolRank": 31,
"score": 72.5
},
{
"classRank": 8,
"schoolRank": 34,
"score": 71
},
{
"classRank": 9,
"schoolRank": 35,
"score": 70.5
},
{
"classRank": 10,
"schoolRank": 38,
"score": 69
},
{
"classRank": 11,
"schoolRank": 39,
"score": 68.5
},
{
"classRank": 12,
"schoolRank": 39,
"score": 68.5
},
{
"classRank": 13,
"schoolRank": 42,
"score": 67
},
{
"classRank": 14,
"schoolRank": 43,
"score": 66.5
},
{
"classRank": 15,
"schoolRank": 45,
"score": 65.5
},
{
"classRank": 16,
"schoolRank": 49,
"score": 63.5
},
{
"classRank": 17,
"schoolRank": 52,
"score": 62
},
{
"classRank": 18,
"schoolRank": 52,
"score": 62
},
{
"classRank": 19,
"schoolRank": 59,
"score": 58.5
},
{
"classRank": 20,
"schoolRank": 60,
"score": 58
},
{
"classRank": 21,
"schoolRank": 60,
"score": 58
},
{
"classRank": 22,
"schoolRank": 63,
"score": 56.5
},
{
"classRank": 23,
"schoolRank": 63,
"score": 56.5
},
{
"classRank": 24,
"schoolRank": 64,
"score": 56
},
{
"classRank": 25,
"schoolRank": 67,
"score": 54.5
},
{
"classRank": 26,
"schoolRank": 72,
"score": 52
},
{
"classRank": 27,
"schoolRank": 74,
"score": 51
},
{
"classRank": 28,
"schoolRank": 76,
"score": 50
},
{
"classRank": 29,
"schoolRank": 77,
"score": 49.5
},
{
"classRank": 30,
"schoolRank": 78,
"score": 49
},
{
"classRank": 31,
"schoolRank": 78,
"score": 49
},
{
"classRank": 32,
"schoolRank": 79,
"score": 48.5
},
{
"classRank": 33,
"schoolRank": 81,
"score": 47.5
},
{
"classRank": 34,
"schoolRank": 81,
"score": 47.5
},
{
"classRank": 35,
"schoolRank": 81,
"score": 47.5
},
{
"classRank": 36,
"schoolRank": 86,
"score": 45
},
{
"classRank": 37,
"schoolRank": 87,
"score": 44.5
},
{
"classRank": 38,
"schoolRank": 89,
"score": 43.5
},
{
"classRank": 39,
"schoolRank": 91,
"score": 42.5
},
{
"classRank": 40,
"schoolRank": 95,
"score": 40.5
},
{
"classRank": 41,
"schoolRank": 99,
"score": 38.5
},
{
"classRank": 42,
"schoolRank": 101,
"score": 37
},
{
"classRank": 43,
"schoolRank": 103,
"score": 36
},
{
"classRank": 44,
"schoolRank": 104,
"score": 35.5
}
]
};
var gs4 = [];
getyk(data, gs4);
setMapS3(gs4, '物理', 'm3-4');
data={
"高三09班": [
{
"classRank": 1,
"schoolRank": 23,
"score": 78.5
},
{
"classRank": 2,
"schoolRank": 27,
"score": 76.5
},
{
"classRank": 3,
"schoolRank": 27,
"score": 76.5
},
{
"classRank": 4,
"schoolRank": 28,
"score": 76
},
{
"classRank": 5,
"schoolRank": 29,
"score": 75.5
},
{
"classRank": 6,
"schoolRank": 30,
"score": 75
},
{
"classRank": 7,
"schoolRank": 30,
"score": 75
},
{
"classRank": 8,
"schoolRank": 31,
"score": 74.5
},
{
"classRank": 9,
"schoolRank": 32,
"score": 74
},
{
"classRank": 10,
"schoolRank": 35,
"score": 72.5
},
{
"classRank": 11,
"schoolRank": 39,
"score": 70.5
},
{
"classRank": 12,
"schoolRank": 40,
"score": 70
},
{
"classRank": 13,
"schoolRank": 43,
"score": 68.5
},
{
"classRank": 14,
"schoolRank": 50,
"score": 65
},
{
"classRank": 15,
"schoolRank": 51,
"score": 64.5
},
{
"classRank": 16,
"schoolRank": 52,
"score": 64
},
{
"classRank": 17,
"schoolRank": 54,
"score": 63
},
{
"classRank": 18,
"schoolRank": 55,
"score": 62.5
},
{
"classRank": 19,
"schoolRank": 55,
"score": 62.5
},
{
"classRank": 20,
"schoolRank": 56,
"score": 62
},
{
"classRank": 21,
"schoolRank": 57,
"score": 61.5
},
{
"classRank": 22,
"schoolRank": 59,
"score": 60.5
},
{
"classRank": 23,
"schoolRank": 64,
"score": 58
},
{
"classRank": 24,
"schoolRank": 68,
"score": 56
},
{
"classRank": 25,
"schoolRank": 68,
"score": 56
},
{
"classRank": 26,
"schoolRank": 70,
"score": 55
},
{
"classRank": 27,
"schoolRank": 73,
"score": 53.5
},
{
"classRank": 28,
"schoolRank": 74,
"score": 53
},
{
"classRank": 29,
"schoolRank": 75,
"score": 52.5
},
{
"classRank": 30,
"schoolRank": 79,
"score": 50.5
},
{
"classRank": 31,
"schoolRank": 81,
"score": 49.5
},
{
"classRank": 32,
"schoolRank": 82,
"score": 49
},
{
"classRank": 33,
"schoolRank": 83,
"score": 48.5
},
{
"classRank": 34,
"schoolRank": 85,
"score": 47.5
},
{
"classRank": 35,
"schoolRank": 87,
"score": 46.5
},
{
"classRank": 36,
"schoolRank": 88,
"score": 46
},
{
"classRank": 37,
"schoolRank": 89,
"score": 45.5
},
{
"classRank": 38,
"schoolRank": 93,
"score": 43.5
},
{
"classRank": 39,
"schoolRank": 97,
"score": 41.5
},
{
"classRank": 40,
"schoolRank": 98,
"score": 41
},
{
"classRank": 41,
"schoolRank": 98,
"score": 41
},
{
"classRank": 42,
"schoolRank": 98,
"score": 41
}
],
"高三07班": [
{
"classRank": 1,
"schoolRank": 12,
"score": 84
},
{
"classRank": 2,
"schoolRank": 17,
"score": 81.5
},
{
"classRank": 3,
"schoolRank": 18,
"score": 81
},
{
"classRank": 4,
"schoolRank": 25,
"score": 77.5
},
{
"classRank": 5,
"schoolRank": 26,
"score": 77
},
{
"classRank": 6,
"schoolRank": 29,
"score": 75.5
},
{
"classRank": 7,
"schoolRank": 31,
"score": 74.5
},
{
"classRank": 8,
"schoolRank": 31,
"score": 74.5
},
{
"classRank": 9,
"schoolRank": 32,
"score": 74
},
{
"classRank": 10,
"schoolRank": 33,
"score": 73.5
},
{
"classRank": 11,
"schoolRank": 33,
"score": 73.5
},
{
"classRank": 12,
"schoolRank": 34,
"score": 73
},
{
"classRank": 13,
"schoolRank": 36,
"score": 72
},
{
"classRank": 14,
"schoolRank": 38,
"score": 71
},
{
"classRank": 15,
"schoolRank": 43,
"score": 68.5
},
{
"classRank": 16,
"schoolRank": 43,
"score": 68.5
},
{
"classRank": 17,
"schoolRank": 45,
"score": 67.5
},
{
"classRank": 18,
"schoolRank": 46,
"score": 67
},
{
"classRank": 19,
"schoolRank": 47,
"score": 66.5
},
{
"classRank": 20,
"schoolRank": 48,
"score": 66
},
{
"classRank": 21,
"schoolRank": 48,
"score": 66
},
{
"classRank": 22,
"schoolRank": 49,
"score": 65.5
},
{
"classRank": 23,
"schoolRank": 57,
"score": 61.5
},
{
"classRank": 24,
"schoolRank": 61,
"score": 59.5
},
{
"classRank": 25,
"schoolRank": 68,
"score": 56
},
{
"classRank": 26,
"schoolRank": 68,
"score": 56
},
{
"classRank": 27,
"schoolRank": 69,
"score": 55.5
},
{
"classRank": 28,
"schoolRank": 70,
"score": 55
},
{
"classRank": 29,
"schoolRank": 76,
"score": 52
},
{
"classRank": 30,
"schoolRank": 77,
"score": 51.5
},
{
"classRank": 31,
"schoolRank": 80,
"score": 50
},
{
"classRank": 32,
"schoolRank": 80,
"score": 50
},
{
"classRank": 33,
"schoolRank": 81,
"score": 49.5
},
{
"classRank": 34,
"schoolRank": 81,
"score": 49.5
},
{
"classRank": 35,
"schoolRank": 82,
"score": 49
},
{
"classRank": 36,
"schoolRank": 85,
"score": 47.5
},
{
"classRank": 37,
"schoolRank": 86,
"score": 47
},
{
"classRank": 38,
"schoolRank": 90,
"score": 45
},
{
"classRank": 39,
"schoolRank": 90,
"score": 45
},
{
"classRank": 40,
"schoolRank": 91,
"score": 44.5
},
{
"classRank": 41,
"schoolRank": 92,
"score": 44
},
{
"classRank": 42,
"schoolRank": 95,
"score": 42.5
},
{
"classRank": 43,
"schoolRank": 98,
"score": 41
},
{
"classRank": 44,
"schoolRank": 99,
"score": 40.5
},
{
"classRank": 45,
"schoolRank": 100,
"score": 40
},
{
"classRank": 46,
"schoolRank": 103,
"score": 38.5
},
{
"classRank": 47,
"schoolRank": 106,
"score": 34.5
}
],
"高三08班": [
{
"classRank": 1,
"schoolRank": 10,
"score": 85
},
{
"classRank": 2,
"schoolRank": 18,
"score": 81
},
{
"classRank": 3,
"schoolRank": 21,
"score": 79.5
},
{
"classRank": 4,
"schoolRank": 22,
"score": 79
},
{
"classRank": 5,
"schoolRank": 23,
"score": 78.5
},
{
"classRank": 6,
"schoolRank": 24,
"score": 78
},
{
"classRank": 7,
"schoolRank": 27,
"score": 76.5
},
{
"classRank": 8,
"schoolRank": 30,
"score": 75
},
{
"classRank": 9,
"schoolRank": 30,
"score": 75
},
{
"classRank": 10,
"schoolRank": 34,
"score": 73
},
{
"classRank": 11,
"schoolRank": 34,
"score": 73
},
{
"classRank": 12,
"schoolRank": 35,
"score": 72.5
},
{
"classRank": 13,
"schoolRank": 37,
"score": 71.5
},
{
"classRank": 14,
"schoolRank": 39,
"score": 70.5
},
{
"classRank": 15,
"schoolRank": 42,
"score": 69
},
{
"classRank": 16,
"schoolRank": 47,
"score": 66.5
},
{
"classRank": 17,
"schoolRank": 49,
"score": 65.5
},
{
"classRank": 18,
"schoolRank": 49,
"score": 65.5
},
{
"classRank": 19,
"schoolRank": 51,
"score": 64.5
},
{
"classRank": 20,
"schoolRank": 53,
"score": 63.5
},
{
"classRank": 21,
"schoolRank": 55,
"score": 62.5
},
{
"classRank": 22,
"schoolRank": 58,
"score": 61
},
{
"classRank": 23,
"schoolRank": 59,
"score": 60.5
},
{
"classRank": 24,
"schoolRank": 63,
"score": 58.5
},
{
"classRank": 25,
"schoolRank": 64,
"score": 58
},
{
"classRank": 26,
"schoolRank": 65,
"score": 57.5
},
{
"classRank": 27,
"schoolRank": 66,
"score": 57
},
{
"classRank": 28,
"schoolRank": 70,
"score": 55
},
{
"classRank": 29,
"schoolRank": 70,
"score": 55
},
{
"classRank": 30,
"schoolRank": 72,
"score": 54
},
{
"classRank": 31,
"schoolRank": 75,
"score": 52.5
},
{
"classRank": 32,
"schoolRank": 78,
"score": 51
},
{
"classRank": 33,
"schoolRank": 79,
"score": 50.5
},
{
"classRank": 34,
"schoolRank": 80,
"score": 50
},
{
"classRank": 35,
"schoolRank": 80,
"score": 50
},
{
"classRank": 36,
"schoolRank": 83,
"score": 48.5
},
{
"classRank": 37,
"schoolRank": 88,
"score": 46
},
{
"classRank": 38,
"schoolRank": 92,
"score": 44
},
{
"classRank": 39,
"schoolRank": 94,
"score": 43
},
{
"classRank": 40,
"schoolRank": 96,
"score": 42
},
{
"classRank": 41,
"schoolRank": 101,
"score": 39.5
},
{
"classRank": 42,
"schoolRank": 101,
"score": 39.5
}
],
"高三05班": [
{
"classRank": 1,
"schoolRank": 4,
"score": 88
},
{
"classRank": 2,
"schoolRank": 9,
"score": 85.5
},
{
"classRank": 3,
"schoolRank": 10,
"score": 85
},
{
"classRank": 4,
"schoolRank": 12,
"score": 84
},
{
"classRank": 5,
"schoolRank": 14,
"score": 83
},
{
"classRank": 6,
"schoolRank": 19,
"score": 80.5
},
{
"classRank": 7,
"schoolRank": 20,
"score": 80
},
{
"classRank": 8,
"schoolRank": 24,
"score": 78
},
{
"classRank": 9,
"schoolRank": 27,
"score": 76.5
},
{
"classRank": 10,
"schoolRank": 32,
"score": 74
},
{
"classRank": 11,
"schoolRank": 32,
"score": 74
},
{
"classRank": 12,
"schoolRank": 33,
"score": 73.5
},
{
"classRank": 13,
"schoolRank": 39,
"score": 70.5
},
{
"classRank": 14,
"schoolRank": 41,
"score": 69.5
},
{
"classRank": 15,
"schoolRank": 41,
"score": 69.5
},
{
"classRank": 16,
"schoolRank": 44,
"score": 68
},
{
"classRank": 17,
"schoolRank": 44,
"score": 68
},
{
"classRank": 18,
"schoolRank": 46,
"score": 67
},
{
"classRank": 19,
"schoolRank": 48,
"score": 66
},
{
"classRank": 20,
"schoolRank": 50,
"score": 65
},
{
"classRank": 21,
"schoolRank": 51,
"score": 64.5
},
{
"classRank": 22,
"schoolRank": 51,
"score": 64.5
},
{
"classRank": 23,
"schoolRank": 53,
"score": 63.5
},
{
"classRank": 24,
"schoolRank": 55,
"score": 62.5
},
{
"classRank": 25,
"schoolRank": 55,
"score": 62.5
},
{
"classRank": 26,
"schoolRank": 60,
"score": 60
},
{
"classRank": 27,
"schoolRank": 60,
"score": 60
},
{
"classRank": 28,
"schoolRank": 69,
"score": 55.5
},
{
"classRank": 29,
"schoolRank": 70,
"score": 55
},
{
"classRank": 30,
"schoolRank": 71,
"score": 54.5
},
{
"classRank": 31,
"schoolRank": 71,
"score": 54.5
},
{
"classRank": 32,
"schoolRank": 72,
"score": 54
},
{
"classRank": 33,
"schoolRank": 76,
"score": 52
},
{
"classRank": 34,
"schoolRank": 76,
"score": 52
},
{
"classRank": 35,
"schoolRank": 79,
"score": 50.5
},
{
"classRank": 36,
"schoolRank": 84,
"score": 48
},
{
"classRank": 37,
"schoolRank": 84,
"score": 48
},
{
"classRank": 38,
"schoolRank": 85,
"score": 47.5
},
{
"classRank": 39,
"schoolRank": 90,
"score": 45
},
{
"classRank": 40,
"schoolRank": 91,
"score": 44.5
},
{
"classRank": 41,
"schoolRank": 100,
"score": 40
}
],
"高三06班": [
{
"classRank": 1,
"schoolRank": 11,
"score": 84.5
},
{
"classRank": 2,
"schoolRank": 12,
"score": 84
},
{
"classRank": 3,
"schoolRank": 17,
"score": 81.5
},
{
"classRank": 4,
"schoolRank": 19,
"score": 80.5
},
{
"classRank": 5,
"schoolRank": 20,
"score": 80
},
{
"classRank": 6,
"schoolRank": 24,
"score": 78
},
{
"classRank": 7,
"schoolRank": 26,
"score": 77
},
{
"classRank": 8,
"schoolRank": 28,
"score": 76
},
{
"classRank": 9,
"schoolRank": 31,
"score": 74.5
},
{
"classRank": 10,
"schoolRank": 32,
"score": 74
},
{
"classRank": 11,
"schoolRank": 34,
"score": 73
},
{
"classRank": 12,
"schoolRank": 35,
"score": 72.5
},
{
"classRank": 13,
"schoolRank": 38,
"score": 71
},
{
"classRank": 14,
"schoolRank": 39,
"score": 70.5
},
{
"classRank": 15,
"schoolRank": 40,
"score": 70
},
{
"classRank": 16,
"schoolRank": 43,
"score": 68.5
},
{
"classRank": 17,
"schoolRank": 45,
"score": 67.5
},
{
"classRank": 18,
"schoolRank": 46,
"score": 67
},
{
"classRank": 19,
"schoolRank": 50,
"score": 65
},
{
"classRank": 20,
"schoolRank": 51,
"score": 64.5
},
{
"classRank": 21,
"schoolRank": 52,
"score": 64
},
{
"classRank": 22,
"schoolRank": 53,
"score": 63.5
},
{
"classRank": 23,
"schoolRank": 56,
"score": 62
},
{
"classRank": 24,
"schoolRank": 57,
"score": 61.5
},
{
"classRank": 25,
"schoolRank": 58,
"score": 61
},
{
"classRank": 26,
"schoolRank": 59,
"score": 60.5
},
{
"classRank": 27,
"schoolRank": 59,
"score": 60.5
},
{
"classRank": 28,
"schoolRank": 61,
"score": 59.5
},
{
"classRank": 29,
"schoolRank": 66,
"score": 57
},
{
"classRank": 30,
"schoolRank": 68,
"score": 56
},
{
"classRank": 31,
"schoolRank": 75,
"score": 52.5
},
{
"classRank": 32,
"schoolRank": 77,
"score": 51.5
},
{
"classRank": 33,
"schoolRank": 79,
"score": 50.5
},
{
"classRank": 34,
"schoolRank": 79,
"score": 50.5
},
{
"classRank": 35,
"schoolRank": 83,
"score": 48.5
},
{
"classRank": 36,
"schoolRank": 85,
"score": 47.5
},
{
"classRank": 37,
"schoolRank": 86,
"score": 47
},
{
"classRank": 38,
"schoolRank": 87,
"score": 46.5
},
{
"classRank": 39,
"schoolRank": 87,
"score": 46.5
},
{
"classRank": 40,
"schoolRank": 87,
"score": 46.5
},
{
"classRank": 41,
"schoolRank": 88,
"score": 46
},
{
"classRank": 42,
"schoolRank": 89,
"score": 45.5
},
{
"classRank": 43,
"schoolRank": 92,
"score": 44
},
{
"classRank": 44,
"schoolRank": 92,
"score": 44
},
{
"classRank": 45,
"schoolRank": 92,
"score": 44
},
{
"classRank": 46,
"schoolRank": 104,
"score": 38
}
],
"高三03班": [
{
"classRank": 1,
"schoolRank": 6,
"score": 87
},
{
"classRank": 2,
"schoolRank": 7,
"score": 86.5
},
{
"classRank": 3,
"schoolRank": 13,
"score": 83.5
},
{
"classRank": 4,
"schoolRank": 15,
"score": 82.5
},
{
"classRank": 5,
"schoolRank": 16,
"score": 82
},
{
"classRank": 6,
"schoolRank": 16,
"score": 82
},
{
"classRank": 7,
"schoolRank": 16,
"score": 82
},
{
"classRank": 8,
"schoolRank": 18,
"score": 81
},
{
"classRank": 9,
"schoolRank": 19,
"score": 80.5
},
{
"classRank": 10,
"schoolRank": 21,
"score": 79.5
},
{
"classRank": 11,
"schoolRank": 22,
"score": 79
},
{
"classRank": 12,
"schoolRank": 24,
"score": 78
},
{
"classRank": 13,
"schoolRank": 32,
"score": 74
},
{
"classRank": 14,
"schoolRank": 32,
"score": 74
},
{
"classRank": 15,
"schoolRank": 35,
"score": 72.5
},
{
"classRank": 16,
"schoolRank": 37,
"score": 71.5
},
{
"classRank": 17,
"schoolRank": 38,
"score": 71
},
{
"classRank": 18,
"schoolRank": 40,
"score": 70
},
{
"classRank": 19,
"schoolRank": 43,
"score": 68.5
},
{
"classRank": 20,
"schoolRank": 44,
"score": 68
},
{
"classRank": 21,
"schoolRank": 49,
"score": 65.5
},
{
"classRank": 22,
"schoolRank": 51,
"score": 64.5
},
{
"classRank": 23,
"schoolRank": 54,
"score": 63
},
{
"classRank": 24,
"schoolRank": 55,
"score": 62.5
},
{
"classRank": 25,
"schoolRank": 55,
"score": 62.5
},
{
"classRank": 26,
"schoolRank": 56,
"score": 62
},
{
"classRank": 27,
"schoolRank": 57,
"score": 61.5
},
{
"classRank": 28,
"schoolRank": 57,
"score": 61.5
},
{
"classRank": 29,
"schoolRank": 57,
"score": 61.5
},
{
"classRank": 30,
"schoolRank": 61,
"score": 59.5
},
{
"classRank": 31,
"schoolRank": 62,
"score": 59
},
{
"classRank": 32,
"schoolRank": 72,
"score": 54
},
{
"classRank": 33,
"schoolRank": 76,
"score": 52
},
{
"classRank": 34,
"schoolRank": 76,
"score": 52
},
{
"classRank": 35,
"schoolRank": 76,
"score": 52
},
{
"classRank": 36,
"schoolRank": 78,
"score": 51
},
{
"classRank": 37,
"schoolRank": 79,
"score": 50.5
},
{
"classRank": 38,
"schoolRank": 82,
"score": 49
},
{
"classRank": 39,
"schoolRank": 83,
"score": 48.5
},
{
"classRank": 40,
"schoolRank": 83,
"score": 48.5
},
{
"classRank": 41,
"schoolRank": 85,
"score": 47.5
},
{
"classRank": 42,
"schoolRank": 87,
"score": 46.5
},
{
"classRank": 43,
"schoolRank": 91,
"score": 44.5
},
{
"classRank": 44,
"schoolRank": 96,
"score": 42
},
{
"classRank": 45,
"schoolRank": 97,
"score": 41.5
},
{
"classRank": 46,
"schoolRank": 97,
"score": 41.5
},
{
"classRank": 47,
"schoolRank": 99,
"score": 40.5
},
{
"classRank": 48,
"schoolRank": 104,
"score": 38
},
{
"classRank": 49,
"schoolRank": 107,
"score": 33.5
}
],
"高三04班": [
{
"classRank": 1,
"schoolRank": 8,
"score": 86
},
{
"classRank": 2,
"schoolRank": 12,
"score": 84
},
{
"classRank": 3,
"schoolRank": 14,
"score": 83
},
{
"classRank": 4,
"schoolRank": 14,
"score": 83
},
{
"classRank": 5,
"schoolRank": 20,
"score": 80
},
{
"classRank": 6,
"schoolRank": 20,
"score": 80
},
{
"classRank": 7,
"schoolRank": 20,
"score": 80
},
{
"classRank": 8,
"schoolRank": 21,
"score": 79.5
},
{
"classRank": 9,
"schoolRank": 23,
"score": 78.5
},
{
"classRank": 10,
"schoolRank": 24,
"score": 78
},
{
"classRank": 11,
"schoolRank": 26,
"score": 77
},
{
"classRank": 12,
"schoolRank": 30,
"score": 75
},
{
"classRank": 13,
"schoolRank": 31,
"score": 74.5
},
{
"classRank": 14,
"schoolRank": 34,
"score": 73
},
{
"classRank": 15,
"schoolRank": 34,
"score": 73
},
{
"classRank": 16,
"schoolRank": 38,
"score": 71
},
{
"classRank": 17,
"schoolRank": 39,
"score": 70.5
},
{
"classRank": 18,
"schoolRank": 41,
"score": 69.5
},
{
"classRank": 19,
"schoolRank": 42,
"score": 69
},
{
"classRank": 20,
"schoolRank": 44,
"score": 68
},
{
"classRank": 21,
"schoolRank": 46,
"score": 67
},
{
"classRank": 22,
"schoolRank": 47,
"score": 66.5
},
{
"classRank": 23,
"schoolRank": 57,
"score": 61.5
},
{
"classRank": 24,
"schoolRank": 58,
"score": 61
},
{
"classRank": 25,
"schoolRank": 58,
"score": 61
},
{
"classRank": 26,
"schoolRank": 59,
"score": 60.5
},
{
"classRank": 27,
"schoolRank": 60,
"score": 60
},
{
"classRank": 28,
"schoolRank": 64,
"score": 58
},
{
"classRank": 29,
"schoolRank": 67,
"score": 56.5
},
{
"classRank": 30,
"schoolRank": 68,
"score": 56
},
{
"classRank": 31,
"schoolRank": 68,
"score": 56
},
{
"classRank": 32,
"schoolRank": 70,
"score": 55
},
{
"classRank": 33,
"schoolRank": 73,
"score": 53.5
},
{
"classRank": 34,
"schoolRank": 77,
"score": 51.5
},
{
"classRank": 35,
"schoolRank": 77,
"score": 51.5
},
{
"classRank": 36,
"schoolRank": 77,
"score": 51.5
},
{
"classRank": 37,
"schoolRank": 78,
"score": 51
},
{
"classRank": 38,
"schoolRank": 79,
"score": 50.5
},
{
"classRank": 39,
"schoolRank": 87,
"score": 46.5
},
{
"classRank": 40,
"schoolRank": 89,
"score": 45.5
},
{
"classRank": 41,
"schoolRank": 91,
"score": 44.5
}
],
"高三01班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 94.5
},
{
"classRank": 2,
"schoolRank": 3,
"score": 89.5
},
{
"classRank": 3,
"schoolRank": 5,
"score": 87.5
},
{
"classRank": 4,
"schoolRank": 7,
"score": 86.5
},
{
"classRank": 5,
"schoolRank": 7,
"score": 86.5
},
{
"classRank": 6,
"schoolRank": 8,
"score": 86
},
{
"classRank": 7,
"schoolRank": 9,
"score": 85.5
},
{
"classRank": 8,
"schoolRank": 13,
"score": 83.5
},
{
"classRank": 9,
"schoolRank": 18,
"score": 81
},
{
"classRank": 10,
"schoolRank": 21,
"score": 79.5
},
{
"classRank": 11,
"schoolRank": 22,
"score": 79
},
{
"classRank": 12,
"schoolRank": 24,
"score": 78
},
{
"classRank": 13,
"schoolRank": 27,
"score": 76.5
},
{
"classRank": 14,
"schoolRank": 29,
"score": 75.5
},
{
"classRank": 15,
"schoolRank": 31,
"score": 74.5
},
{
"classRank": 16,
"schoolRank": 34,
"score": 73
},
{
"classRank": 17,
"schoolRank": 34,
"score": 73
},
{
"classRank": 18,
"schoolRank": 36,
"score": 72
},
{
"classRank": 19,
"schoolRank": 38,
"score": 71
},
{
"classRank": 20,
"schoolRank": 40,
"score": 70
},
{
"classRank": 21,
"schoolRank": 44,
"score": 68
},
{
"classRank": 22,
"schoolRank": 44,
"score": 68
},
{
"classRank": 23,
"schoolRank": 45,
"score": 67.5
},
{
"classRank": 24,
"schoolRank": 48,
"score": 66
},
{
"classRank": 25,
"schoolRank": 48,
"score": 66
},
{
"classRank": 26,
"schoolRank": 53,
"score": 63.5
},
{
"classRank": 27,
"schoolRank": 54,
"score": 63
},
{
"classRank": 28,
"schoolRank": 58,
"score": 61
},
{
"classRank": 29,
"schoolRank": 62,
"score": 59
},
{
"classRank": 30,
"schoolRank": 63,
"score": 58.5
},
{
"classRank": 31,
"schoolRank": 66,
"score": 57
},
{
"classRank": 32,
"schoolRank": 66,
"score": 57
},
{
"classRank": 33,
"schoolRank": 68,
"score": 56
},
{
"classRank": 34,
"schoolRank": 71,
"score": 54.5
},
{
"classRank": 35,
"schoolRank": 72,
"score": 54
}
],
"高三02班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 92
},
{
"classRank": 2,
"schoolRank": 6,
"score": 87
},
{
"classRank": 3,
"schoolRank": 9,
"score": 85.5
},
{
"classRank": 4,
"schoolRank": 12,
"score": 84
},
{
"classRank": 5,
"schoolRank": 13,
"score": 83.5
},
{
"classRank": 6,
"schoolRank": 16,
"score": 82
},
{
"classRank": 7,
"schoolRank": 18,
"score": 81
},
{
"classRank": 8,
"schoolRank": 21,
"score": 79.5
},
{
"classRank": 9,
"schoolRank": 21,
"score": 79.5
},
{
"classRank": 10,
"schoolRank": 26,
"score": 77
},
{
"classRank": 11,
"schoolRank": 27,
"score": 76.5
},
{
"classRank": 12,
"schoolRank": 27,
"score": 76.5
},
{
"classRank": 13,
"schoolRank": 30,
"score": 75
},
{
"classRank": 14,
"schoolRank": 31,
"score": 74.5
},
{
"classRank": 15,
"schoolRank": 34,
"score": 73
},
{
"classRank": 16,
"schoolRank": 37,
"score": 71.5
},
{
"classRank": 17,
"schoolRank": 41,
"score": 69.5
},
{
"classRank": 18,
"schoolRank": 42,
"score": 69
},
{
"classRank": 19,
"schoolRank": 43,
"score": 68.5
},
{
"classRank": 20,
"schoolRank": 43,
"score": 68.5
},
{
"classRank": 21,
"schoolRank": 44,
"score": 68
},
{
"classRank": 22,
"schoolRank": 47,
"score": 66.5
},
{
"classRank": 23,
"schoolRank": 48,
"score": 66
},
{
"classRank": 24,
"schoolRank": 51,
"score": 64.5
},
{
"classRank": 25,
"schoolRank": 54,
"score": 63
},
{
"classRank": 26,
"schoolRank": 56,
"score": 62
},
{
"classRank": 27,
"schoolRank": 56,
"score": 62
},
{
"classRank": 28,
"schoolRank": 59,
"score": 60.5
},
{
"classRank": 29,
"schoolRank": 60,
"score": 60
},
{
"classRank": 30,
"schoolRank": 65,
"score": 57.5
},
{
"classRank": 31,
"schoolRank": 66,
"score": 57
},
{
"classRank": 32,
"schoolRank": 69,
"score": 55.5
},
{
"classRank": 33,
"schoolRank": 70,
"score": 55
},
{
"classRank": 34,
"schoolRank": 71,
"score": 54.5
},
{
"classRank": 35,
"schoolRank": 72,
"score": 54
},
{
"classRank": 36,
"schoolRank": 73,
"score": 53.5
},
{
"classRank": 37,
"schoolRank": 74,
"score": 53
},
{
"classRank": 38,
"schoolRank": 76,
"score": 52
},
{
"classRank": 39,
"schoolRank": 81,
"score": 49.5
},
{
"classRank": 40,
"schoolRank": 83,
"score": 48.5
},
{
"classRank": 41,
"schoolRank": 90,
"score": 45
},
{
"classRank": 42,
"schoolRank": 90,
"score": 45
},
{
"classRank": 43,
"schoolRank": 92,
"score": 44
},
{
"classRank": 44,
"schoolRank": 95,
"score": 42.5
}
],
"高三10班": [
{
"classRank": 1,
"schoolRank": 19,
"score": 80.5
},
{
"classRank": 2,
"schoolRank": 20,
"score": 80
},
{
"classRank": 3,
"schoolRank": 21,
"score": 79.5
},
{
"classRank": 4,
"schoolRank": 21,
"score": 79.5
},
{
"classRank": 5,
"schoolRank": 30,
"score": 75
},
{
"classRank": 6,
"schoolRank": 31,
"score": 74.5
},
{
"classRank": 7,
"schoolRank": 31,
"score": 74.5
},
{
"classRank": 8,
"schoolRank": 32,
"score": 74
},
{
"classRank": 9,
"schoolRank": 36,
"score": 72
},
{
"classRank": 10,
"schoolRank": 39,
"score": 70.5
},
{
"classRank": 11,
"schoolRank": 39,
"score": 70.5
},
{
"classRank": 12,
"schoolRank": 40,
"score": 70
},
{
"classRank": 13,
"schoolRank": 44,
"score": 68
},
{
"classRank": 14,
"schoolRank": 46,
"score": 67
},
{
"classRank": 15,
"schoolRank": 50,
"score": 65
},
{
"classRank": 16,
"schoolRank": 51,
"score": 64.5
},
{
"classRank": 17,
"schoolRank": 57,
"score": 61.5
},
{
"classRank": 18,
"schoolRank": 57,
"score": 61.5
},
{
"classRank": 19,
"schoolRank": 59,
"score": 60.5
},
{
"classRank": 20,
"schoolRank": 59,
"score": 60.5
},
{
"classRank": 21,
"schoolRank": 59,
"score": 60.5
},
{
"classRank": 22,
"schoolRank": 61,
"score": 59.5
},
{
"classRank": 23,
"schoolRank": 61,
"score": 59.5
},
{
"classRank": 24,
"schoolRank": 65,
"score": 57.5
},
{
"classRank": 25,
"schoolRank": 69,
"score": 55.5
},
{
"classRank": 26,
"schoolRank": 69,
"score": 55.5
},
{
"classRank": 27,
"schoolRank": 70,
"score": 55
},
{
"classRank": 28,
"schoolRank": 71,
"score": 54.5
},
{
"classRank": 29,
"schoolRank": 75,
"score": 52.5
},
{
"classRank": 30,
"schoolRank": 81,
"score": 49.5
},
{
"classRank": 31,
"schoolRank": 85,
"score": 47.5
},
{
"classRank": 32,
"schoolRank": 87,
"score": 46.5
},
{
"classRank": 33,
"schoolRank": 88,
"score": 46
},
{
"classRank": 34,
"schoolRank": 89,
"score": 45.5
},
{
"classRank": 35,
"schoolRank": 89,
"score": 45.5
},
{
"classRank": 36,
"schoolRank": 90,
"score": 45
},
{
"classRank": 37,
"schoolRank": 93,
"score": 43.5
},
{
"classRank": 38,
"schoolRank": 94,
"score": 43
},
{
"classRank": 39,
"schoolRank": 94,
"score": 43
},
{
"classRank": 40,
"schoolRank": 97,
"score": 41.5
},
{
"classRank": 41,
"schoolRank": 101,
"score": 39.5
},
{
"classRank": 42,
"schoolRank": 103,
"score": 38.5
},
{
"classRank": 43,
"schoolRank": 105,
"score": 37.5
},
{
"classRank": 44,
"schoolRank": 107,
"score": 33.5
}
],
"高三11班": [
{
"classRank": 1,
"schoolRank": 19,
"score": 80.5
},
{
"classRank": 2,
"schoolRank": 21,
"score": 79.5
},
{
"classRank": 3,
"schoolRank": 28,
"score": 76
},
{
"classRank": 4,
"schoolRank": 29,
"score": 75.5
},
{
"classRank": 5,
"schoolRank": 31,
"score": 74.5
},
{
"classRank": 6,
"schoolRank": 32,
"score": 74
},
{
"classRank": 7,
"schoolRank": 33,
"score": 73.5
},
{
"classRank": 8,
"schoolRank": 34,
"score": 73
},
{
"classRank": 9,
"schoolRank": 35,
"score": 72.5
},
{
"classRank": 10,
"schoolRank": 36,
"score": 72
},
{
"classRank": 11,
"schoolRank": 39,
"score": 70.5
},
{
"classRank": 12,
"schoolRank": 42,
"score": 69
},
{
"classRank": 13,
"schoolRank": 47,
"score": 66.5
},
{
"classRank": 14,
"schoolRank": 47,
"score": 66.5
},
{
"classRank": 15,
"schoolRank": 52,
"score": 64
},
{
"classRank": 16,
"schoolRank": 54,
"score": 63
},
{
"classRank": 17,
"schoolRank": 54,
"score": 63
},
{
"classRank": 18,
"schoolRank": 56,
"score": 62
},
{
"classRank": 19,
"schoolRank": 57,
"score": 61.5
},
{
"classRank": 20,
"schoolRank": 57,
"score": 61.5
},
{
"classRank": 21,
"schoolRank": 67,
"score": 56.5
},
{
"classRank": 22,
"schoolRank": 68,
"score": 56
},
{
"classRank": 23,
"schoolRank": 68,
"score": 56
},
{
"classRank": 24,
"schoolRank": 69,
"score": 55.5
},
{
"classRank": 25,
"schoolRank": 69,
"score": 55.5
},
{
"classRank": 26,
"schoolRank": 75,
"score": 52.5
},
{
"classRank": 27,
"schoolRank": 75,
"score": 52.5
},
{
"classRank": 28,
"schoolRank": 76,
"score": 52
},
{
"classRank": 29,
"schoolRank": 77,
"score": 51.5
},
{
"classRank": 30,
"schoolRank": 81,
"score": 49.5
},
{
"classRank": 31,
"schoolRank": 87,
"score": 46.5
},
{
"classRank": 32,
"schoolRank": 88,
"score": 46
},
{
"classRank": 33,
"schoolRank": 89,
"score": 45.5
},
{
"classRank": 34,
"schoolRank": 95,
"score": 42.5
},
{
"classRank": 35,
"schoolRank": 96,
"score": 42
},
{
"classRank": 36,
"schoolRank": 96,
"score": 42
},
{
"classRank": 37,
"schoolRank": 97,
"score": 41.5
},
{
"classRank": 38,
"schoolRank": 97,
"score": 41.5
},
{
"classRank": 39,
"schoolRank": 100,
"score": 40
},
{
"classRank": 40,
"schoolRank": 101,
"score": 39.5
},
{
"classRank": 41,
"schoolRank": 102,
"score": 39
},
{
"classRank": 42,
"schoolRank": 102,
"score": 39
},
{
"classRank": 43,
"schoolRank": 103,
"score": 38.5
},
{
"classRank": 44,
"schoolRank": 104,
"score": 38
}
]
};
var gs5 = [];
getyk(data, gs5);
setMapS3(gs5, '化学', 'm3-5');
data={
"高三09班": [
{
"classRank": 1,
"schoolRank": 8,
"score": 86.5
},
{
"classRank": 2,
"schoolRank": 19,
"score": 81
},
{
"classRank": 3,
"schoolRank": 20,
"score": 80.5
},
{
"classRank": 4,
"schoolRank": 25,
"score": 78
},
{
"classRank": 5,
"schoolRank": 28,
"score": 76.5
},
{
"classRank": 6,
"schoolRank": 28,
"score": 76.5
},
{
"classRank": 7,
"schoolRank": 35,
"score": 73
},
{
"classRank": 8,
"schoolRank": 40,
"score": 70.5
},
{
"classRank": 9,
"schoolRank": 41,
"score": 70
},
{
"classRank": 10,
"schoolRank": 42,
"score": 69.5
},
{
"classRank": 11,
"schoolRank": 43,
"score": 69
},
{
"classRank": 12,
"schoolRank": 43,
"score": 69
},
{
"classRank": 13,
"schoolRank": 43,
"score": 69
},
{
"classRank": 14,
"schoolRank": 49,
"score": 66
},
{
"classRank": 15,
"schoolRank": 49,
"score": 66
},
{
"classRank": 16,
"schoolRank": 52,
"score": 64.5
},
{
"classRank": 17,
"schoolRank": 57,
"score": 62
},
{
"classRank": 18,
"schoolRank": 58,
"score": 61.5
},
{
"classRank": 19,
"schoolRank": 58,
"score": 61.5
},
{
"classRank": 20,
"schoolRank": 60,
"score": 60.5
},
{
"classRank": 21,
"schoolRank": 64,
"score": 58.5
},
{
"classRank": 22,
"schoolRank": 64,
"score": 58.5
},
{
"classRank": 23,
"schoolRank": 65,
"score": 58
},
{
"classRank": 24,
"schoolRank": 66,
"score": 57.5
},
{
"classRank": 25,
"schoolRank": 66,
"score": 57.5
},
{
"classRank": 26,
"schoolRank": 75,
"score": 53
},
{
"classRank": 27,
"schoolRank": 76,
"score": 52.5
},
{
"classRank": 28,
"schoolRank": 76,
"score": 52.5
},
{
"classRank": 29,
"schoolRank": 77,
"score": 52
},
{
"classRank": 30,
"schoolRank": 79,
"score": 51
},
{
"classRank": 31,
"schoolRank": 83,
"score": 49
},
{
"classRank": 32,
"schoolRank": 85,
"score": 48
},
{
"classRank": 33,
"schoolRank": 85,
"score": 48
},
{
"classRank": 34,
"schoolRank": 87,
"score": 47
},
{
"classRank": 35,
"schoolRank": 89,
"score": 46
},
{
"classRank": 36,
"schoolRank": 91,
"score": 45
},
{
"classRank": 37,
"schoolRank": 95,
"score": 43
},
{
"classRank": 38,
"schoolRank": 100,
"score": 40.5
},
{
"classRank": 39,
"schoolRank": 104,
"score": 38
},
{
"classRank": 40,
"schoolRank": 104,
"score": 38
},
{
"classRank": 41,
"schoolRank": 108,
"score": 36
},
{
"classRank": 42,
"schoolRank": 109,
"score": 35.5
}
],
"高三07班": [
{
"classRank": 1,
"schoolRank": 10,
"score": 85.5
},
{
"classRank": 2,
"schoolRank": 10,
"score": 85.5
},
{
"classRank": 3,
"schoolRank": 13,
"score": 84
},
{
"classRank": 4,
"schoolRank": 14,
"score": 83.5
},
{
"classRank": 5,
"schoolRank": 22,
"score": 79.5
},
{
"classRank": 6,
"schoolRank": 23,
"score": 79
},
{
"classRank": 7,
"schoolRank": 24,
"score": 78.5
},
{
"classRank": 8,
"schoolRank": 24,
"score": 78.5
},
{
"classRank": 9,
"schoolRank": 26,
"score": 77.5
},
{
"classRank": 10,
"schoolRank": 31,
"score": 75
},
{
"classRank": 11,
"schoolRank": 32,
"score": 74.5
},
{
"classRank": 12,
"schoolRank": 35,
"score": 73
},
{
"classRank": 13,
"schoolRank": 39,
"score": 71
},
{
"classRank": 14,
"schoolRank": 42,
"score": 69.5
},
{
"classRank": 15,
"schoolRank": 43,
"score": 69
},
{
"classRank": 16,
"schoolRank": 44,
"score": 68.5
},
{
"classRank": 17,
"schoolRank": 48,
"score": 66.5
},
{
"classRank": 18,
"schoolRank": 48,
"score": 66.5
},
{
"classRank": 19,
"schoolRank": 51,
"score": 65
},
{
"classRank": 20,
"schoolRank": 52,
"score": 64.5
},
{
"classRank": 21,
"schoolRank": 53,
"score": 64
},
{
"classRank": 22,
"schoolRank": 55,
"score": 63
},
{
"classRank": 23,
"schoolRank": 57,
"score": 62
},
{
"classRank": 24,
"schoolRank": 61,
"score": 60
},
{
"classRank": 25,
"schoolRank": 61,
"score": 60
},
{
"classRank": 26,
"schoolRank": 63,
"score": 59
},
{
"classRank": 27,
"schoolRank": 67,
"score": 57
},
{
"classRank": 28,
"schoolRank": 72,
"score": 54.5
},
{
"classRank": 29,
"schoolRank": 74,
"score": 53.5
},
{
"classRank": 30,
"schoolRank": 74,
"score": 53.5
},
{
"classRank": 31,
"schoolRank": 76,
"score": 52.5
},
{
"classRank": 32,
"schoolRank": 78,
"score": 51.5
},
{
"classRank": 33,
"schoolRank": 83,
"score": 49
},
{
"classRank": 34,
"schoolRank": 85,
"score": 48
},
{
"classRank": 35,
"schoolRank": 86,
"score": 47.5
},
{
"classRank": 36,
"schoolRank": 87,
"score": 47
},
{
"classRank": 37,
"schoolRank": 90,
"score": 45.5
},
{
"classRank": 38,
"schoolRank": 91,
"score": 45
},
{
"classRank": 39,
"schoolRank": 93,
"score": 44
},
{
"classRank": 40,
"schoolRank": 95,
"score": 43
},
{
"classRank": 41,
"schoolRank": 98,
"score": 41.5
},
{
"classRank": 42,
"schoolRank": 98,
"score": 41.5
},
{
"classRank": 43,
"schoolRank": 101,
"score": 40
},
{
"classRank": 44,
"schoolRank": 103,
"score": 38.5
},
{
"classRank": 45,
"schoolRank": 107,
"score": 36.5
},
{
"classRank": 46,
"schoolRank": 109,
"score": 35.5
},
{
"classRank": 47,
"schoolRank": 113,
"score": 33
}
],
"高三08班": [
{
"classRank": 1,
"schoolRank": 20,
"score": 80.5
},
{
"classRank": 2,
"schoolRank": 22,
"score": 79.5
},
{
"classRank": 3,
"schoolRank": 25,
"score": 78
},
{
"classRank": 4,
"schoolRank": 26,
"score": 77.5
},
{
"classRank": 5,
"schoolRank": 27,
"score": 77
},
{
"classRank": 6,
"schoolRank": 28,
"score": 76.5
},
{
"classRank": 7,
"schoolRank": 30,
"score": 75.5
},
{
"classRank": 8,
"schoolRank": 30,
"score": 75.5
},
{
"classRank": 9,
"schoolRank": 36,
"score": 72.5
},
{
"classRank": 10,
"schoolRank": 38,
"score": 71.5
},
{
"classRank": 11,
"schoolRank": 40,
"score": 70.5
},
{
"classRank": 12,
"schoolRank": 40,
"score": 70.5
},
{
"classRank": 13,
"schoolRank": 41,
"score": 70
},
{
"classRank": 14,
"schoolRank": 45,
"score": 68
},
{
"classRank": 15,
"schoolRank": 46,
"score": 67.5
},
{
"classRank": 16,
"schoolRank": 46,
"score": 67.5
},
{
"classRank": 17,
"schoolRank": 49,
"score": 66
},
{
"classRank": 18,
"schoolRank": 52,
"score": 64.5
},
{
"classRank": 19,
"schoolRank": 54,
"score": 63.5
},
{
"classRank": 20,
"schoolRank": 56,
"score": 62.5
},
{
"classRank": 21,
"schoolRank": 56,
"score": 62.5
},
{
"classRank": 22,
"schoolRank": 57,
"score": 62
},
{
"classRank": 23,
"schoolRank": 65,
"score": 58
},
{
"classRank": 24,
"schoolRank": 66,
"score": 57.5
},
{
"classRank": 25,
"schoolRank": 66,
"score": 57.5
},
{
"classRank": 26,
"schoolRank": 68,
"score": 56.5
},
{
"classRank": 27,
"schoolRank": 69,
"score": 56
},
{
"classRank": 28,
"schoolRank": 71,
"score": 55
},
{
"classRank": 29,
"schoolRank": 72,
"score": 54.5
},
{
"classRank": 30,
"schoolRank": 74,
"score": 53.5
},
{
"classRank": 31,
"schoolRank": 77,
"score": 52
},
{
"classRank": 32,
"schoolRank": 80,
"score": 50.5
},
{
"classRank": 33,
"schoolRank": 81,
"score": 50
},
{
"classRank": 34,
"schoolRank": 87,
"score": 47
},
{
"classRank": 35,
"schoolRank": 88,
"score": 46.5
},
{
"classRank": 36,
"schoolRank": 96,
"score": 42.5
},
{
"classRank": 37,
"schoolRank": 96,
"score": 42.5
},
{
"classRank": 38,
"schoolRank": 97,
"score": 42
},
{
"classRank": 39,
"schoolRank": 97,
"score": 42
},
{
"classRank": 40,
"schoolRank": 97,
"score": 42
},
{
"classRank": 41,
"schoolRank": 97,
"score": 42
},
{
"classRank": 42,
"schoolRank": 99,
"score": 41
}
],
"高三05班": [
{
"classRank": 1,
"schoolRank": 9,
"score": 86
},
{
"classRank": 2,
"schoolRank": 9,
"score": 86
},
{
"classRank": 3,
"schoolRank": 10,
"score": 85.5
},
{
"classRank": 4,
"schoolRank": 12,
"score": 84.5
},
{
"classRank": 5,
"schoolRank": 15,
"score": 83
},
{
"classRank": 6,
"schoolRank": 17,
"score": 82
},
{
"classRank": 7,
"schoolRank": 19,
"score": 81
},
{
"classRank": 8,
"schoolRank": 26,
"score": 77.5
},
{
"classRank": 9,
"schoolRank": 27,
"score": 77
},
{
"classRank": 10,
"schoolRank": 30,
"score": 75.5
},
{
"classRank": 11,
"schoolRank": 31,
"score": 75
},
{
"classRank": 12,
"schoolRank": 34,
"score": 73.5
},
{
"classRank": 13,
"schoolRank": 35,
"score": 73
},
{
"classRank": 14,
"schoolRank": 35,
"score": 73
},
{
"classRank": 15,
"schoolRank": 36,
"score": 72.5
},
{
"classRank": 16,
"schoolRank": 43,
"score": 69
},
{
"classRank": 17,
"schoolRank": 44,
"score": 68.5
},
{
"classRank": 18,
"schoolRank": 46,
"score": 67.5
},
{
"classRank": 19,
"schoolRank": 48,
"score": 66.5
},
{
"classRank": 20,
"schoolRank": 48,
"score": 66.5
},
{
"classRank": 21,
"schoolRank": 49,
"score": 66
},
{
"classRank": 22,
"schoolRank": 50,
"score": 65.5
},
{
"classRank": 23,
"schoolRank": 56,
"score": 62.5
},
{
"classRank": 24,
"schoolRank": 57,
"score": 62
},
{
"classRank": 25,
"schoolRank": 57,
"score": 62
},
{
"classRank": 26,
"schoolRank": 57,
"score": 62
},
{
"classRank": 27,
"schoolRank": 67,
"score": 57
},
{
"classRank": 28,
"schoolRank": 69,
"score": 56
},
{
"classRank": 29,
"schoolRank": 71,
"score": 55
},
{
"classRank": 30,
"schoolRank": 74,
"score": 53.5
},
{
"classRank": 31,
"schoolRank": 75,
"score": 53
},
{
"classRank": 32,
"schoolRank": 75,
"score": 53
},
{
"classRank": 33,
"schoolRank": 75,
"score": 53
},
{
"classRank": 34,
"schoolRank": 78,
"score": 51.5
},
{
"classRank": 35,
"schoolRank": 83,
"score": 49
},
{
"classRank": 36,
"schoolRank": 84,
"score": 48.5
},
{
"classRank": 37,
"schoolRank": 84,
"score": 48.5
},
{
"classRank": 38,
"schoolRank": 85,
"score": 48
},
{
"classRank": 39,
"schoolRank": 87,
"score": 47
},
{
"classRank": 40,
"schoolRank": 92,
"score": 44.5
},
{
"classRank": 41,
"schoolRank": 92,
"score": 44.5
}
],
"高三06班": [
{
"classRank": 1,
"schoolRank": 6,
"score": 88
},
{
"classRank": 2,
"schoolRank": 13,
"score": 84
},
{
"classRank": 3,
"schoolRank": 17,
"score": 82
},
{
"classRank": 4,
"schoolRank": 24,
"score": 78.5
},
{
"classRank": 5,
"schoolRank": 27,
"score": 77
},
{
"classRank": 6,
"schoolRank": 27,
"score": 77
},
{
"classRank": 7,
"schoolRank": 30,
"score": 75.5
},
{
"classRank": 8,
"schoolRank": 31,
"score": 75
},
{
"classRank": 9,
"schoolRank": 31,
"score": 75
},
{
"classRank": 10,
"schoolRank": 38,
"score": 71.5
},
{
"classRank": 11,
"schoolRank": 39,
"score": 71
},
{
"classRank": 12,
"schoolRank": 40,
"score": 70.5
},
{
"classRank": 13,
"schoolRank": 42,
"score": 69.5
},
{
"classRank": 14,
"schoolRank": 43,
"score": 69
},
{
"classRank": 15,
"schoolRank": 44,
"score": 68.5
},
{
"classRank": 16,
"schoolRank": 44,
"score": 68.5
},
{
"classRank": 17,
"schoolRank": 46,
"score": 67.5
},
{
"classRank": 18,
"schoolRank": 49,
"score": 66
},
{
"classRank": 19,
"schoolRank": 49,
"score": 66
},
{
"classRank": 20,
"schoolRank": 50,
"score": 65.5
},
{
"classRank": 21,
"schoolRank": 50,
"score": 65.5
},
{
"classRank": 22,
"schoolRank": 51,
"score": 65
},
{
"classRank": 23,
"schoolRank": 52,
"score": 64.5
},
{
"classRank": 24,
"schoolRank": 55,
"score": 63
},
{
"classRank": 25,
"schoolRank": 55,
"score": 63
},
{
"classRank": 26,
"schoolRank": 64,
"score": 58.5
},
{
"classRank": 27,
"schoolRank": 65,
"score": 58
},
{
"classRank": 28,
"schoolRank": 67,
"score": 57
},
{
"classRank": 29,
"schoolRank": 71,
"score": 55
},
{
"classRank": 30,
"schoolRank": 74,
"score": 53.5
},
{
"classRank": 31,
"schoolRank": 75,
"score": 53
},
{
"classRank": 32,
"schoolRank": 81,
"score": 50
},
{
"classRank": 33,
"schoolRank": 81,
"score": 50
},
{
"classRank": 34,
"schoolRank": 83,
"score": 49
},
{
"classRank": 35,
"schoolRank": 83,
"score": 49
},
{
"classRank": 36,
"schoolRank": 84,
"score": 48.5
},
{
"classRank": 37,
"schoolRank": 84,
"score": 48.5
},
{
"classRank": 38,
"schoolRank": 84,
"score": 48.5
},
{
"classRank": 39,
"schoolRank": 88,
"score": 46.5
},
{
"classRank": 40,
"schoolRank": 95,
"score": 43
},
{
"classRank": 41,
"schoolRank": 95,
"score": 43
},
{
"classRank": 42,
"schoolRank": 97,
"score": 42
},
{
"classRank": 43,
"schoolRank": 99,
"score": 41
},
{
"classRank": 44,
"schoolRank": 99,
"score": 41
},
{
"classRank": 45,
"schoolRank": 101,
"score": 40
},
{
"classRank": 46,
"schoolRank": 104,
"score": 38
}
],
"高三03班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 90.5
},
{
"classRank": 2,
"schoolRank": 5,
"score": 88.5
},
{
"classRank": 3,
"schoolRank": 7,
"score": 87
},
{
"classRank": 4,
"schoolRank": 14,
"score": 83.5
},
{
"classRank": 5,
"schoolRank": 15,
"score": 83
},
{
"classRank": 6,
"schoolRank": 18,
"score": 81.5
},
{
"classRank": 7,
"schoolRank": 19,
"score": 81
},
{
"classRank": 8,
"schoolRank": 22,
"score": 79.5
},
{
"classRank": 9,
"schoolRank": 22,
"score": 79.5
},
{
"classRank": 10,
"schoolRank": 24,
"score": 78.5
},
{
"classRank": 11,
"schoolRank": 26,
"score": 77.5
},
{
"classRank": 12,
"schoolRank": 29,
"score": 76
},
{
"classRank": 13,
"schoolRank": 37,
"score": 72
},
{
"classRank": 14,
"schoolRank": 39,
"score": 71
},
{
"classRank": 15,
"schoolRank": 40,
"score": 70.5
},
{
"classRank": 16,
"schoolRank": 41,
"score": 70
},
{
"classRank": 17,
"schoolRank": 42,
"score": 69.5
},
{
"classRank": 18,
"schoolRank": 42,
"score": 69.5
},
{
"classRank": 19,
"schoolRank": 42,
"score": 69.5
},
{
"classRank": 20,
"schoolRank": 46,
"score": 67.5
},
{
"classRank": 21,
"schoolRank": 49,
"score": 66
},
{
"classRank": 22,
"schoolRank": 50,
"score": 65.5
},
{
"classRank": 23,
"schoolRank": 51,
"score": 65
},
{
"classRank": 24,
"schoolRank": 52,
"score": 64.5
},
{
"classRank": 25,
"schoolRank": 52,
"score": 64.5
},
{
"classRank": 26,
"schoolRank": 55,
"score": 63
},
{
"classRank": 27,
"schoolRank": 58,
"score": 61.5
},
{
"classRank": 28,
"schoolRank": 62,
"score": 59.5
},
{
"classRank": 29,
"schoolRank": 64,
"score": 58.5
},
{
"classRank": 30,
"schoolRank": 65,
"score": 58
},
{
"classRank": 31,
"schoolRank": 65,
"score": 58
},
{
"classRank": 32,
"schoolRank": 73,
"score": 54
},
{
"classRank": 33,
"schoolRank": 75,
"score": 53
},
{
"classRank": 34,
"schoolRank": 75,
"score": 53
},
{
"classRank": 35,
"schoolRank": 75,
"score": 53
},
{
"classRank": 36,
"schoolRank": 76,
"score": 52.5
},
{
"classRank": 37,
"schoolRank": 85,
"score": 48
},
{
"classRank": 38,
"schoolRank": 85,
"score": 48
},
{
"classRank": 39,
"schoolRank": 86,
"score": 47.5
},
{
"classRank": 40,
"schoolRank": 88,
"score": 46.5
},
{
"classRank": 41,
"schoolRank": 89,
"score": 46
},
{
"classRank": 42,
"schoolRank": 90,
"score": 45.5
},
{
"classRank": 43,
"schoolRank": 91,
"score": 45
},
{
"classRank": 44,
"schoolRank": 91,
"score": 45
},
{
"classRank": 45,
"schoolRank": 95,
"score": 43
},
{
"classRank": 46,
"schoolRank": 95,
"score": 43
},
{
"classRank": 47,
"schoolRank": 95,
"score": 43
},
{
"classRank": 48,
"schoolRank": 107,
"score": 36.5
},
{
"classRank": 49,
"schoolRank": 113,
"score": 33
}
],
"高三04班": [
{
"classRank": 1,
"schoolRank": 9,
"score": 86
},
{
"classRank": 2,
"schoolRank": 13,
"score": 84
},
{
"classRank": 3,
"schoolRank": 16,
"score": 82.5
},
{
"classRank": 4,
"schoolRank": 17,
"score": 82
},
{
"classRank": 5,
"schoolRank": 21,
"score": 80
},
{
"classRank": 6,
"schoolRank": 22,
"score": 79.5
},
{
"classRank": 7,
"schoolRank": 22,
"score": 79.5
},
{
"classRank": 8,
"schoolRank": 24,
"score": 78.5
},
{
"classRank": 9,
"schoolRank": 25,
"score": 78
},
{
"classRank": 10,
"schoolRank": 27,
"score": 77
},
{
"classRank": 11,
"schoolRank": 27,
"score": 77
},
{
"classRank": 12,
"schoolRank": 27,
"score": 77
},
{
"classRank": 13,
"schoolRank": 28,
"score": 76.5
},
{
"classRank": 14,
"schoolRank": 29,
"score": 76
},
{
"classRank": 15,
"schoolRank": 32,
"score": 74.5
},
{
"classRank": 16,
"schoolRank": 32,
"score": 74.5
},
{
"classRank": 17,
"schoolRank": 38,
"score": 71.5
},
{
"classRank": 18,
"schoolRank": 44,
"score": 68.5
},
{
"classRank": 19,
"schoolRank": 44,
"score": 68.5
},
{
"classRank": 20,
"schoolRank": 45,
"score": 68
},
{
"classRank": 21,
"schoolRank": 50,
"score": 65.5
},
{
"classRank": 22,
"schoolRank": 53,
"score": 64
},
{
"classRank": 23,
"schoolRank": 55,
"score": 63
},
{
"classRank": 24,
"schoolRank": 55,
"score": 63
},
{
"classRank": 25,
"schoolRank": 60,
"score": 60.5
},
{
"classRank": 26,
"schoolRank": 62,
"score": 59.5
},
{
"classRank": 27,
"schoolRank": 64,
"score": 58.5
},
{
"classRank": 28,
"schoolRank": 64,
"score": 58.5
},
{
"classRank": 29,
"schoolRank": 67,
"score": 57
},
{
"classRank": 30,
"schoolRank": 68,
"score": 56.5
},
{
"classRank": 31,
"schoolRank": 70,
"score": 55.5
},
{
"classRank": 32,
"schoolRank": 72,
"score": 54.5
},
{
"classRank": 33,
"schoolRank": 74,
"score": 53.5
},
{
"classRank": 34,
"schoolRank": 75,
"score": 53
},
{
"classRank": 35,
"schoolRank": 76,
"score": 52.5
},
{
"classRank": 36,
"schoolRank": 77,
"score": 52
},
{
"classRank": 37,
"schoolRank": 77,
"score": 52
},
{
"classRank": 38,
"schoolRank": 80,
"score": 50.5
},
{
"classRank": 39,
"schoolRank": 82,
"score": 49.5
},
{
"classRank": 40,
"schoolRank": 85,
"score": 48
},
{
"classRank": 41,
"schoolRank": 85,
"score": 48
}
],
"高三01班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 95
},
{
"classRank": 2,
"schoolRank": 2,
"score": 90.5
},
{
"classRank": 3,
"schoolRank": 3,
"score": 89.5
},
{
"classRank": 4,
"schoolRank": 9,
"score": 86
},
{
"classRank": 5,
"schoolRank": 11,
"score": 85
},
{
"classRank": 6,
"schoolRank": 14,
"score": 83.5
},
{
"classRank": 7,
"schoolRank": 17,
"score": 82
},
{
"classRank": 8,
"schoolRank": 19,
"score": 81
},
{
"classRank": 9,
"schoolRank": 20,
"score": 80.5
},
{
"classRank": 10,
"schoolRank": 20,
"score": 80.5
},
{
"classRank": 11,
"schoolRank": 24,
"score": 78.5
},
{
"classRank": 12,
"schoolRank": 25,
"score": 78
},
{
"classRank": 13,
"schoolRank": 29,
"score": 76
},
{
"classRank": 14,
"schoolRank": 29,
"score": 76
},
{
"classRank": 15,
"schoolRank": 31,
"score": 75
},
{
"classRank": 16,
"schoolRank": 33,
"score": 74
},
{
"classRank": 17,
"schoolRank": 36,
"score": 72.5
},
{
"classRank": 18,
"schoolRank": 39,
"score": 71
},
{
"classRank": 19,
"schoolRank": 42,
"score": 69.5
},
{
"classRank": 20,
"schoolRank": 43,
"score": 69
},
{
"classRank": 21,
"schoolRank": 44,
"score": 68.5
},
{
"classRank": 22,
"schoolRank": 47,
"score": 67
},
{
"classRank": 23,
"schoolRank": 48,
"score": 66.5
},
{
"classRank": 24,
"schoolRank": 50,
"score": 65.5
},
{
"classRank": 25,
"schoolRank": 50,
"score": 65.5
},
{
"classRank": 26,
"schoolRank": 53,
"score": 64
},
{
"classRank": 27,
"schoolRank": 53,
"score": 64
},
{
"classRank": 28,
"schoolRank": 56,
"score": 62.5
},
{
"classRank": 29,
"schoolRank": 60,
"score": 60.5
},
{
"classRank": 30,
"schoolRank": 65,
"score": 58
},
{
"classRank": 31,
"schoolRank": 68,
"score": 56.5
},
{
"classRank": 32,
"schoolRank": 70,
"score": 55.5
},
{
"classRank": 33,
"schoolRank": 71,
"score": 55
},
{
"classRank": 34,
"schoolRank": 72,
"score": 54.5
},
{
"classRank": 35,
"schoolRank": 75,
"score": 53
}
],
"高三02班": [
{
"classRank": 1,
"schoolRank": 3,
"score": 89.5
},
{
"classRank": 2,
"schoolRank": 4,
"score": 89
},
{
"classRank": 3,
"schoolRank": 7,
"score": 87
},
{
"classRank": 4,
"schoolRank": 10,
"score": 85.5
},
{
"classRank": 5,
"schoolRank": 13,
"score": 84
},
{
"classRank": 6,
"schoolRank": 15,
"score": 83
},
{
"classRank": 7,
"schoolRank": 16,
"score": 82.5
},
{
"classRank": 8,
"schoolRank": 18,
"score": 81.5
},
{
"classRank": 9,
"schoolRank": 18,
"score": 81.5
},
{
"classRank": 10,
"schoolRank": 24,
"score": 78.5
},
{
"classRank": 11,
"schoolRank": 25,
"score": 78
},
{
"classRank": 12,
"schoolRank": 26,
"score": 77.5
},
{
"classRank": 13,
"schoolRank": 27,
"score": 77
},
{
"classRank": 14,
"schoolRank": 28,
"score": 76.5
},
{
"classRank": 15,
"schoolRank": 30,
"score": 75.5
},
{
"classRank": 16,
"schoolRank": 32,
"score": 74.5
},
{
"classRank": 17,
"schoolRank": 35,
"score": 73
},
{
"classRank": 18,
"schoolRank": 35,
"score": 73
},
{
"classRank": 19,
"schoolRank": 38,
"score": 71.5
},
{
"classRank": 20,
"schoolRank": 39,
"score": 71
},
{
"classRank": 21,
"schoolRank": 46,
"score": 67.5
},
{
"classRank": 22,
"schoolRank": 46,
"score": 67.5
},
{
"classRank": 23,
"schoolRank": 51,
"score": 65
},
{
"classRank": 24,
"schoolRank": 53,
"score": 64
},
{
"classRank": 25,
"schoolRank": 54,
"score": 63.5
},
{
"classRank": 26,
"schoolRank": 56,
"score": 62.5
},
{
"classRank": 27,
"schoolRank": 58,
"score": 61.5
},
{
"classRank": 28,
"schoolRank": 60,
"score": 60.5
},
{
"classRank": 29,
"schoolRank": 64,
"score": 58.5
},
{
"classRank": 30,
"schoolRank": 65,
"score": 58
},
{
"classRank": 31,
"schoolRank": 65,
"score": 58
},
{
"classRank": 32,
"schoolRank": 66,
"score": 57.5
},
{
"classRank": 33,
"schoolRank": 68,
"score": 56.5
},
{
"classRank": 34,
"schoolRank": 68,
"score": 56.5
},
{
"classRank": 35,
"schoolRank": 70,
"score": 55.5
},
{
"classRank": 36,
"schoolRank": 71,
"score": 55
},
{
"classRank": 37,
"schoolRank": 76,
"score": 52.5
},
{
"classRank": 38,
"schoolRank": 76,
"score": 52.5
},
{
"classRank": 39,
"schoolRank": 82,
"score": 49.5
},
{
"classRank": 40,
"schoolRank": 82,
"score": 49.5
},
{
"classRank": 41,
"schoolRank": 83,
"score": 49
},
{
"classRank": 42,
"schoolRank": 86,
"score": 47.5
},
{
"classRank": 43,
"schoolRank": 95,
"score": 43
},
{
"classRank": 44,
"schoolRank": 100,
"score": 40.5
}
],
"高三10班": [
{
"classRank": 1,
"schoolRank": 22,
"score": 79.5
},
{
"classRank": 2,
"schoolRank": 22,
"score": 79.5
},
{
"classRank": 3,
"schoolRank": 27,
"score": 77
},
{
"classRank": 4,
"schoolRank": 28,
"score": 76.5
},
{
"classRank": 5,
"schoolRank": 28,
"score": 76.5
},
{
"classRank": 6,
"schoolRank": 28,
"score": 76.5
},
{
"classRank": 7,
"schoolRank": 31,
"score": 75
},
{
"classRank": 8,
"schoolRank": 36,
"score": 72.5
},
{
"classRank": 9,
"schoolRank": 38,
"score": 71.5
},
{
"classRank": 10,
"schoolRank": 38,
"score": 71.5
},
{
"classRank": 11,
"schoolRank": 42,
"score": 69.5
},
{
"classRank": 12,
"schoolRank": 45,
"score": 68
},
{
"classRank": 13,
"schoolRank": 48,
"score": 66.5
},
{
"classRank": 14,
"schoolRank": 50,
"score": 65.5
},
{
"classRank": 15,
"schoolRank": 51,
"score": 65
},
{
"classRank": 16,
"schoolRank": 51,
"score": 65
},
{
"classRank": 17,
"schoolRank": 54,
"score": 63.5
},
{
"classRank": 18,
"schoolRank": 54,
"score": 63.5
},
{
"classRank": 19,
"schoolRank": 57,
"score": 62
},
{
"classRank": 20,
"schoolRank": 58,
"score": 61.5
},
{
"classRank": 21,
"schoolRank": 63,
"score": 59
},
{
"classRank": 22,
"schoolRank": 63,
"score": 59
},
{
"classRank": 23,
"schoolRank": 64,
"score": 58.5
},
{
"classRank": 24,
"schoolRank": 65,
"score": 58
},
{
"classRank": 25,
"schoolRank": 70,
"score": 55.5
},
{
"classRank": 26,
"schoolRank": 71,
"score": 55
},
{
"classRank": 27,
"schoolRank": 74,
"score": 53.5
},
{
"classRank": 28,
"schoolRank": 75,
"score": 53
},
{
"classRank": 29,
"schoolRank": 75,
"score": 53
},
{
"classRank": 30,
"schoolRank": 77,
"score": 52
},
{
"classRank": 31,
"schoolRank": 79,
"score": 51
},
{
"classRank": 32,
"schoolRank": 80,
"score": 50.5
},
{
"classRank": 33,
"schoolRank": 82,
"score": 49.5
},
{
"classRank": 34,
"schoolRank": 84,
"score": 48.5
},
{
"classRank": 35,
"schoolRank": 84,
"score": 48.5
},
{
"classRank": 36,
"schoolRank": 87,
"score": 47
},
{
"classRank": 37,
"schoolRank": 92,
"score": 44.5
},
{
"classRank": 38,
"schoolRank": 94,
"score": 43.5
},
{
"classRank": 39,
"schoolRank": 97,
"score": 42
},
{
"classRank": 40,
"schoolRank": 100,
"score": 40.5
},
{
"classRank": 41,
"schoolRank": 102,
"score": 39
},
{
"classRank": 42,
"schoolRank": 109,
"score": 35.5
},
{
"classRank": 43,
"schoolRank": 110,
"score": 35
},
{
"classRank": 44,
"schoolRank": 112,
"score": 34
}
],
"高三11班": [
{
"classRank": 1,
"schoolRank": 22,
"score": 79.5
},
{
"classRank": 2,
"schoolRank": 29,
"score": 76
},
{
"classRank": 3,
"schoolRank": 29,
"score": 76
},
{
"classRank": 4,
"schoolRank": 35,
"score": 73
},
{
"classRank": 5,
"schoolRank": 37,
"score": 72
},
{
"classRank": 6,
"schoolRank": 41,
"score": 70
},
{
"classRank": 7,
"schoolRank": 42,
"score": 69.5
},
{
"classRank": 8,
"schoolRank": 42,
"score": 69.5
},
{
"classRank": 9,
"schoolRank": 43,
"score": 69
},
{
"classRank": 10,
"schoolRank": 45,
"score": 68
},
{
"classRank": 11,
"schoolRank": 45,
"score": 68
},
{
"classRank": 12,
"schoolRank": 50,
"score": 65.5
},
{
"classRank": 13,
"schoolRank": 51,
"score": 65
},
{
"classRank": 14,
"schoolRank": 54,
"score": 63.5
},
{
"classRank": 15,
"schoolRank": 55,
"score": 63
},
{
"classRank": 16,
"schoolRank": 55,
"score": 63
},
{
"classRank": 17,
"schoolRank": 56,
"score": 62.5
},
{
"classRank": 18,
"schoolRank": 59,
"score": 61
},
{
"classRank": 19,
"schoolRank": 59,
"score": 61
},
{
"classRank": 20,
"schoolRank": 60,
"score": 60.5
},
{
"classRank": 21,
"schoolRank": 64,
"score": 58.5
},
{
"classRank": 22,
"schoolRank": 67,
"score": 57
},
{
"classRank": 23,
"schoolRank": 68,
"score": 56.5
},
{
"classRank": 24,
"schoolRank": 70,
"score": 55.5
},
{
"classRank": 25,
"schoolRank": 73,
"score": 54
},
{
"classRank": 26,
"schoolRank": 74,
"score": 53.5
},
{
"classRank": 27,
"schoolRank": 76,
"score": 52.5
},
{
"classRank": 28,
"schoolRank": 76,
"score": 52.5
},
{
"classRank": 29,
"schoolRank": 80,
"score": 50.5
},
{
"classRank": 30,
"schoolRank": 84,
"score": 48.5
},
{
"classRank": 31,
"schoolRank": 86,
"score": 47.5
},
{
"classRank": 32,
"schoolRank": 88,
"score": 46.5
},
{
"classRank": 33,
"schoolRank": 89,
"score": 46
},
{
"classRank": 34,
"schoolRank": 91,
"score": 45
},
{
"classRank": 35,
"schoolRank": 93,
"score": 44
},
{
"classRank": 36,
"schoolRank": 93,
"score": 44
},
{
"classRank": 37,
"schoolRank": 94,
"score": 43.5
},
{
"classRank": 38,
"schoolRank": 96,
"score": 42.5
},
{
"classRank": 39,
"schoolRank": 96,
"score": 42.5
},
{
"classRank": 40,
"schoolRank": 102,
"score": 39
},
{
"classRank": 41,
"schoolRank": 105,
"score": 37.5
},
{
"classRank": 42,
"schoolRank": 106,
"score": 37
},
{
"classRank": 43,
"schoolRank": 111,
"score": 34.5
},
{
"classRank": 44,
"schoolRank": 114,
"score": 30
}
]
};
var gs6 = [];
getyk(data, gs6);
setMapS3(gs6, '生物', 'm3-6');
data={
"高三09班": [
{
"classRank": 1,
"schoolRank": 16,
"score": 82.5
},
{
"classRank": 2,
"schoolRank": 23,
"score": 79
},
{
"classRank": 3,
"schoolRank": 24,
"score": 78.5
},
{
"classRank": 4,
"schoolRank": 26,
"score": 77.5
},
{
"classRank": 5,
"schoolRank": 26,
"score": 77.5
},
{
"classRank": 6,
"schoolRank": 32,
"score": 74.5
},
{
"classRank": 7,
"schoolRank": 32,
"score": 74.5
},
{
"classRank": 8,
"schoolRank": 35,
"score": 73
},
{
"classRank": 9,
"schoolRank": 37,
"score": 72
},
{
"classRank": 10,
"schoolRank": 38,
"score": 71.5
},
{
"classRank": 11,
"schoolRank": 38,
"score": 71.5
},
{
"classRank": 12,
"schoolRank": 41,
"score": 70
},
{
"classRank": 13,
"schoolRank": 42,
"score": 69.5
},
{
"classRank": 14,
"schoolRank": 45,
"score": 68
},
{
"classRank": 15,
"schoolRank": 47,
"score": 67
},
{
"classRank": 16,
"schoolRank": 48,
"score": 66.5
},
{
"classRank": 17,
"schoolRank": 54,
"score": 63.5
},
{
"classRank": 18,
"schoolRank": 57,
"score": 62
},
{
"classRank": 19,
"schoolRank": 61,
"score": 60
},
{
"classRank": 20,
"schoolRank": 61,
"score": 60
},
{
"classRank": 21,
"schoolRank": 62,
"score": 59.5
},
{
"classRank": 22,
"schoolRank": 62,
"score": 59.5
},
{
"classRank": 23,
"schoolRank": 64,
"score": 58.5
},
{
"classRank": 24,
"schoolRank": 65,
"score": 58
},
{
"classRank": 25,
"schoolRank": 66,
"score": 57.5
},
{
"classRank": 26,
"schoolRank": 66,
"score": 57.5
},
{
"classRank": 27,
"schoolRank": 67,
"score": 57
},
{
"classRank": 28,
"schoolRank": 71,
"score": 55
},
{
"classRank": 29,
"schoolRank": 74,
"score": 53.5
},
{
"classRank": 30,
"schoolRank": 75,
"score": 53
},
{
"classRank": 31,
"schoolRank": 77,
"score": 52
},
{
"classRank": 32,
"schoolRank": 82,
"score": 49.5
},
{
"classRank": 33,
"schoolRank": 82,
"score": 49.5
},
{
"classRank": 34,
"schoolRank": 82,
"score": 49.5
},
{
"classRank": 35,
"schoolRank": 85,
"score": 48
},
{
"classRank": 36,
"schoolRank": 89,
"score": 46
},
{
"classRank": 37,
"schoolRank": 90,
"score": 45.5
},
{
"classRank": 38,
"schoolRank": 90,
"score": 45.5
},
{
"classRank": 39,
"schoolRank": 94,
"score": 43.5
},
{
"classRank": 40,
"schoolRank": 98,
"score": 41.5
},
{
"classRank": 41,
"schoolRank": 103,
"score": 38.5
},
{
"classRank": 42,
"schoolRank": 106,
"score": 37
}
],
"高三07班": [
{
"classRank": 1,
"schoolRank": 18,
"score": 81.5
},
{
"classRank": 2,
"schoolRank": 21,
"score": 80
},
{
"classRank": 3,
"schoolRank": 25,
"score": 78
},
{
"classRank": 4,
"schoolRank": 25,
"score": 78
},
{
"classRank": 5,
"schoolRank": 25,
"score": 78
},
{
"classRank": 6,
"schoolRank": 26,
"score": 77.5
},
{
"classRank": 7,
"schoolRank": 26,
"score": 77.5
},
{
"classRank": 8,
"schoolRank": 28,
"score": 76.5
},
{
"classRank": 9,
"schoolRank": 29,
"score": 76
},
{
"classRank": 10,
"schoolRank": 31,
"score": 75
},
{
"classRank": 11,
"schoolRank": 34,
"score": 73.5
},
{
"classRank": 12,
"schoolRank": 35,
"score": 73
},
{
"classRank": 13,
"schoolRank": 41,
"score": 70
},
{
"classRank": 14,
"schoolRank": 44,
"score": 68.5
},
{
"classRank": 15,
"schoolRank": 45,
"score": 68
},
{
"classRank": 16,
"schoolRank": 48,
"score": 66.5
},
{
"classRank": 17,
"schoolRank": 49,
"score": 66
},
{
"classRank": 18,
"schoolRank": 52,
"score": 64.5
},
{
"classRank": 19,
"schoolRank": 53,
"score": 64
},
{
"classRank": 20,
"schoolRank": 54,
"score": 63.5
},
{
"classRank": 21,
"schoolRank": 55,
"score": 63
},
{
"classRank": 22,
"schoolRank": 55,
"score": 63
},
{
"classRank": 23,
"schoolRank": 55,
"score": 63
},
{
"classRank": 24,
"schoolRank": 58,
"score": 61.5
},
{
"classRank": 25,
"schoolRank": 60,
"score": 60.5
},
{
"classRank": 26,
"schoolRank": 63,
"score": 59
},
{
"classRank": 27,
"schoolRank": 69,
"score": 56
},
{
"classRank": 28,
"schoolRank": 70,
"score": 55.5
},
{
"classRank": 29,
"schoolRank": 74,
"score": 53.5
},
{
"classRank": 30,
"schoolRank": 74,
"score": 53.5
},
{
"classRank": 31,
"schoolRank": 77,
"score": 52
},
{
"classRank": 32,
"schoolRank": 79,
"score": 51
},
{
"classRank": 33,
"schoolRank": 79,
"score": 51
},
{
"classRank": 34,
"schoolRank": 80,
"score": 50.5
},
{
"classRank": 35,
"schoolRank": 82,
"score": 49.5
},
{
"classRank": 36,
"schoolRank": 83,
"score": 49
},
{
"classRank": 37,
"schoolRank": 83,
"score": 49
},
{
"classRank": 38,
"schoolRank": 85,
"score": 48
},
{
"classRank": 39,
"schoolRank": 90,
"score": 45.5
},
{
"classRank": 40,
"schoolRank": 91,
"score": 45
},
{
"classRank": 41,
"schoolRank": 96,
"score": 42.5
},
{
"classRank": 42,
"schoolRank": 96,
"score": 42.5
},
{
"classRank": 43,
"schoolRank": 99,
"score": 41
},
{
"classRank": 44,
"schoolRank": 100,
"score": 40.5
},
{
"classRank": 45,
"schoolRank": 102,
"score": 39
},
{
"classRank": 46,
"schoolRank": 105,
"score": 37.5
},
{
"classRank": 47,
"schoolRank": 107,
"score": 36.5
}
],
"高三08班": [
{
"classRank": 1,
"schoolRank": 15,
"score": 83
},
{
"classRank": 2,
"schoolRank": 16,
"score": 82.5
},
{
"classRank": 3,
"schoolRank": 23,
"score": 79
},
{
"classRank": 4,
"schoolRank": 26,
"score": 77.5
},
{
"classRank": 5,
"schoolRank": 30,
"score": 75.5
},
{
"classRank": 6,
"schoolRank": 31,
"score": 75
},
{
"classRank": 7,
"schoolRank": 31,
"score": 75
},
{
"classRank": 8,
"schoolRank": 34,
"score": 73.5
},
{
"classRank": 9,
"schoolRank": 34,
"score": 73.5
},
{
"classRank": 10,
"schoolRank": 34,
"score": 73.5
},
{
"classRank": 11,
"schoolRank": 35,
"score": 73
},
{
"classRank": 12,
"schoolRank": 35,
"score": 73
},
{
"classRank": 13,
"schoolRank": 43,
"score": 69
},
{
"classRank": 14,
"schoolRank": 43,
"score": 69
},
{
"classRank": 15,
"schoolRank": 45,
"score": 68
},
{
"classRank": 16,
"schoolRank": 46,
"score": 67.5
},
{
"classRank": 17,
"schoolRank": 48,
"score": 66.5
},
{
"classRank": 18,
"schoolRank": 51,
"score": 65
},
{
"classRank": 19,
"schoolRank": 54,
"score": 63.5
},
{
"classRank": 20,
"schoolRank": 57,
"score": 62
},
{
"classRank": 21,
"schoolRank": 57,
"score": 62
},
{
"classRank": 22,
"schoolRank": 59,
"score": 61
},
{
"classRank": 23,
"schoolRank": 62,
"score": 59.5
},
{
"classRank": 24,
"schoolRank": 63,
"score": 59
},
{
"classRank": 25,
"schoolRank": 64,
"score": 58.5
},
{
"classRank": 26,
"schoolRank": 69,
"score": 56
},
{
"classRank": 27,
"schoolRank": 71,
"score": 55
},
{
"classRank": 28,
"schoolRank": 74,
"score": 53.5
},
{
"classRank": 29,
"schoolRank": 78,
"score": 51.5
},
{
"classRank": 30,
"schoolRank": 78,
"score": 51.5
},
{
"classRank": 31,
"schoolRank": 80,
"score": 50.5
},
{
"classRank": 32,
"schoolRank": 81,
"score": 50
},
{
"classRank": 33,
"schoolRank": 84,
"score": 48.5
},
{
"classRank": 34,
"schoolRank": 86,
"score": 47.5
},
{
"classRank": 35,
"schoolRank": 88,
"score": 46.5
},
{
"classRank": 36,
"schoolRank": 89,
"score": 46
},
{
"classRank": 37,
"schoolRank": 91,
"score": 45
},
{
"classRank": 38,
"schoolRank": 92,
"score": 44.5
},
{
"classRank": 39,
"schoolRank": 93,
"score": 44
},
{
"classRank": 40,
"schoolRank": 97,
"score": 42
},
{
"classRank": 41,
"schoolRank": 98,
"score": 41.5
},
{
"classRank": 42,
"schoolRank": 99,
"score": 41
}
],
"高三05班": [
{
"classRank": 1,
"schoolRank": 9,
"score": 86.5
},
{
"classRank": 2,
"schoolRank": 12,
"score": 84.5
},
{
"classRank": 3,
"schoolRank": 14,
"score": 83.5
},
{
"classRank": 4,
"schoolRank": 17,
"score": 82
},
{
"classRank": 5,
"schoolRank": 17,
"score": 82
},
{
"classRank": 6,
"schoolRank": 21,
"score": 80
},
{
"classRank": 7,
"schoolRank": 24,
"score": 78.5
},
{
"classRank": 8,
"schoolRank": 25,
"score": 78
},
{
"classRank": 9,
"schoolRank": 29,
"score": 76
},
{
"classRank": 10,
"schoolRank": 30,
"score": 75.5
},
{
"classRank": 11,
"schoolRank": 32,
"score": 74.5
},
{
"classRank": 12,
"schoolRank": 35,
"score": 73
},
{
"classRank": 13,
"schoolRank": 35,
"score": 73
},
{
"classRank": 14,
"schoolRank": 36,
"score": 72.5
},
{
"classRank": 15,
"schoolRank": 36,
"score": 72.5
},
{
"classRank": 16,
"schoolRank": 37,
"score": 72
},
{
"classRank": 17,
"schoolRank": 45,
"score": 68
},
{
"classRank": 18,
"schoolRank": 50,
"score": 65.5
},
{
"classRank": 19,
"schoolRank": 50,
"score": 65.5
},
{
"classRank": 20,
"schoolRank": 50,
"score": 65.5
},
{
"classRank": 21,
"schoolRank": 51,
"score": 65
},
{
"classRank": 22,
"schoolRank": 52,
"score": 64.5
},
{
"classRank": 23,
"schoolRank": 55,
"score": 63
},
{
"classRank": 24,
"schoolRank": 55,
"score": 63
},
{
"classRank": 25,
"schoolRank": 56,
"score": 62.5
},
{
"classRank": 26,
"schoolRank": 57,
"score": 62
},
{
"classRank": 27,
"schoolRank": 58,
"score": 61.5
},
{
"classRank": 28,
"schoolRank": 61,
"score": 60
},
{
"classRank": 29,
"schoolRank": 64,
"score": 58.5
},
{
"classRank": 30,
"schoolRank": 68,
"score": 56.5
},
{
"classRank": 31,
"schoolRank": 69,
"score": 56
},
{
"classRank": 32,
"schoolRank": 71,
"score": 55
},
{
"classRank": 33,
"schoolRank": 77,
"score": 52
},
{
"classRank": 34,
"schoolRank": 77,
"score": 52
},
{
"classRank": 35,
"schoolRank": 78,
"score": 51.5
},
{
"classRank": 36,
"schoolRank": 80,
"score": 50.5
},
{
"classRank": 37,
"schoolRank": 85,
"score": 48
},
{
"classRank": 38,
"schoolRank": 86,
"score": 47.5
},
{
"classRank": 39,
"schoolRank": 91,
"score": 45
},
{
"classRank": 40,
"schoolRank": 96,
"score": 42.5
},
{
"classRank": 41,
"schoolRank": 98,
"score": 41.5
}
],
"高三06班": [
{
"classRank": 1,
"schoolRank": 13,
"score": 84
},
{
"classRank": 2,
"schoolRank": 14,
"score": 83.5
},
{
"classRank": 3,
"schoolRank": 14,
"score": 83.5
},
{
"classRank": 4,
"schoolRank": 15,
"score": 83
},
{
"classRank": 5,
"schoolRank": 19,
"score": 81
},
{
"classRank": 6,
"schoolRank": 23,
"score": 79
},
{
"classRank": 7,
"schoolRank": 26,
"score": 77.5
},
{
"classRank": 8,
"schoolRank": 27,
"score": 77
},
{
"classRank": 9,
"schoolRank": 29,
"score": 76
},
{
"classRank": 10,
"schoolRank": 29,
"score": 76
},
{
"classRank": 11,
"schoolRank": 33,
"score": 74
},
{
"classRank": 12,
"schoolRank": 38,
"score": 71.5
},
{
"classRank": 13,
"schoolRank": 41,
"score": 70
},
{
"classRank": 14,
"schoolRank": 42,
"score": 69.5
},
{
"classRank": 15,
"schoolRank": 42,
"score": 69.5
},
{
"classRank": 16,
"schoolRank": 45,
"score": 68
},
{
"classRank": 17,
"schoolRank": 48,
"score": 66.5
},
{
"classRank": 18,
"schoolRank": 49,
"score": 66
},
{
"classRank": 19,
"schoolRank": 51,
"score": 65
},
{
"classRank": 20,
"schoolRank": 53,
"score": 64
},
{
"classRank": 21,
"schoolRank": 54,
"score": 63.5
},
{
"classRank": 22,
"schoolRank": 55,
"score": 63
},
{
"classRank": 23,
"schoolRank": 55,
"score": 63
},
{
"classRank": 24,
"schoolRank": 55,
"score": 63
},
{
"classRank": 25,
"schoolRank": 58,
"score": 61.5
},
{
"classRank": 26,
"schoolRank": 59,
"score": 61
},
{
"classRank": 27,
"schoolRank": 64,
"score": 58.5
},
{
"classRank": 28,
"schoolRank": 68,
"score": 56.5
},
{
"classRank": 29,
"schoolRank": 72,
"score": 54.5
},
{
"classRank": 30,
"schoolRank": 72,
"score": 54.5
},
{
"classRank": 31,
"schoolRank": 73,
"score": 54
},
{
"classRank": 32,
"schoolRank": 74,
"score": 53.5
},
{
"classRank": 33,
"schoolRank": 78,
"score": 51.5
},
{
"classRank": 34,
"schoolRank": 78,
"score": 51.5
},
{
"classRank": 35,
"schoolRank": 82,
"score": 49.5
},
{
"classRank": 36,
"schoolRank": 86,
"score": 47.5
},
{
"classRank": 37,
"schoolRank": 86,
"score": 47.5
},
{
"classRank": 38,
"schoolRank": 92,
"score": 44.5
},
{
"classRank": 39,
"schoolRank": 93,
"score": 44
},
{
"classRank": 40,
"schoolRank": 95,
"score": 43
},
{
"classRank": 41,
"schoolRank": 95,
"score": 43
},
{
"classRank": 42,
"schoolRank": 98,
"score": 41.5
},
{
"classRank": 43,
"schoolRank": 98,
"score": 41.5
},
{
"classRank": 44,
"schoolRank": 99,
"score": 41
},
{
"classRank": 45,
"schoolRank": 101,
"score": 40
},
{
"classRank": 46,
"schoolRank": 103,
"score": 38.5
}
],
"高三03班": [
{
"classRank": 1,
"schoolRank": 4,
"score": 90.5
},
{
"classRank": 2,
"schoolRank": 9,
"score": 86.5
},
{
"classRank": 3,
"schoolRank": 13,
"score": 84
},
{
"classRank": 4,
"schoolRank": 14,
"score": 83.5
},
{
"classRank": 5,
"schoolRank": 14,
"score": 83.5
},
{
"classRank": 6,
"schoolRank": 17,
"score": 82
},
{
"classRank": 7,
"schoolRank": 19,
"score": 81
},
{
"classRank": 8,
"schoolRank": 20,
"score": 80.5
},
{
"classRank": 9,
"schoolRank": 22,
"score": 79.5
},
{
"classRank": 10,
"schoolRank": 24,
"score": 78.5
},
{
"classRank": 11,
"schoolRank": 25,
"score": 78
},
{
"classRank": 12,
"schoolRank": 26,
"score": 77.5
},
{
"classRank": 13,
"schoolRank": 26,
"score": 77.5
},
{
"classRank": 14,
"schoolRank": 27,
"score": 77
},
{
"classRank": 15,
"schoolRank": 30,
"score": 75.5
},
{
"classRank": 16,
"schoolRank": 34,
"score": 73.5
},
{
"classRank": 17,
"schoolRank": 38,
"score": 71.5
},
{
"classRank": 18,
"schoolRank": 39,
"score": 71
},
{
"classRank": 19,
"schoolRank": 43,
"score": 69
},
{
"classRank": 20,
"schoolRank": 46,
"score": 67.5
},
{
"classRank": 21,
"schoolRank": 47,
"score": 67
},
{
"classRank": 22,
"schoolRank": 51,
"score": 65
},
{
"classRank": 23,
"schoolRank": 51,
"score": 65
},
{
"classRank": 24,
"schoolRank": 51,
"score": 65
},
{
"classRank": 25,
"schoolRank": 58,
"score": 61.5
},
{
"classRank": 26,
"schoolRank": 59,
"score": 61
},
{
"classRank": 27,
"schoolRank": 60,
"score": 60.5
},
{
"classRank": 28,
"schoolRank": 60,
"score": 60.5
},
{
"classRank": 29,
"schoolRank": 62,
"score": 59.5
},
{
"classRank": 30,
"schoolRank": 64,
"score": 58.5
},
{
"classRank": 31,
"schoolRank": 65,
"score": 58
},
{
"classRank": 32,
"schoolRank": 66,
"score": 57.5
},
{
"classRank": 33,
"schoolRank": 68,
"score": 56.5
},
{
"classRank": 34,
"schoolRank": 71,
"score": 55
},
{
"classRank": 35,
"schoolRank": 72,
"score": 54.5
},
{
"classRank": 36,
"schoolRank": 80,
"score": 50.5
},
{
"classRank": 37,
"schoolRank": 83,
"score": 49
},
{
"classRank": 38,
"schoolRank": 83,
"score": 49
},
{
"classRank": 39,
"schoolRank": 88,
"score": 46.5
},
{
"classRank": 40,
"schoolRank": 89,
"score": 46
},
{
"classRank": 41,
"schoolRank": 90,
"score": 45.5
},
{
"classRank": 42,
"schoolRank": 93,
"score": 44
},
{
"classRank": 43,
"schoolRank": 94,
"score": 43.5
},
{
"classRank": 44,
"schoolRank": 95,
"score": 43
},
{
"classRank": 45,
"schoolRank": 100,
"score": 40.5
},
{
"classRank": 46,
"schoolRank": 101,
"score": 40
},
{
"classRank": 47,
"schoolRank": 102,
"score": 39
},
{
"classRank": 48,
"schoolRank": 103,
"score": 38.5
},
{
"classRank": 49,
"schoolRank": 103,
"score": 38.5
}
],
"高三04班": [
{
"classRank": 1,
"schoolRank": 6,
"score": 89.5
},
{
"classRank": 2,
"schoolRank": 11,
"score": 85.5
},
{
"classRank": 3,
"schoolRank": 19,
"score": 81
},
{
"classRank": 4,
"schoolRank": 21,
"score": 80
},
{
"classRank": 5,
"schoolRank": 21,
"score": 80
},
{
"classRank": 6,
"schoolRank": 24,
"score": 78.5
},
{
"classRank": 7,
"schoolRank": 25,
"score": 78
},
{
"classRank": 8,
"schoolRank": 25,
"score": 78
},
{
"classRank": 9,
"schoolRank": 28,
"score": 76.5
},
{
"classRank": 10,
"schoolRank": 28,
"score": 76.5
},
{
"classRank": 11,
"schoolRank": 29,
"score": 76
},
{
"classRank": 12,
"schoolRank": 29,
"score": 76
},
{
"classRank": 13,
"schoolRank": 31,
"score": 75
},
{
"classRank": 14,
"schoolRank": 37,
"score": 72
},
{
"classRank": 15,
"schoolRank": 37,
"score": 72
},
{
"classRank": 16,
"schoolRank": 38,
"score": 71.5
},
{
"classRank": 17,
"schoolRank": 40,
"score": 70.5
},
{
"classRank": 18,
"schoolRank": 42,
"score": 69.5
},
{
"classRank": 19,
"schoolRank": 46,
"score": 67.5
},
{
"classRank": 20,
"schoolRank": 48,
"score": 66.5
},
{
"classRank": 21,
"schoolRank": 48,
"score": 66.5
},
{
"classRank": 22,
"schoolRank": 52,
"score": 64.5
},
{
"classRank": 23,
"schoolRank": 53,
"score": 64
},
{
"classRank": 24,
"schoolRank": 56,
"score": 62.5
},
{
"classRank": 25,
"schoolRank": 56,
"score": 62.5
},
{
"classRank": 26,
"schoolRank": 57,
"score": 62
},
{
"classRank": 27,
"schoolRank": 58,
"score": 61.5
},
{
"classRank": 28,
"schoolRank": 61,
"score": 60
},
{
"classRank": 29,
"schoolRank": 63,
"score": 59
},
{
"classRank": 30,
"schoolRank": 67,
"score": 57
},
{
"classRank": 31,
"schoolRank": 68,
"score": 56.5
},
{
"classRank": 32,
"schoolRank": 74,
"score": 53.5
},
{
"classRank": 33,
"schoolRank": 74,
"score": 53.5
},
{
"classRank": 34,
"schoolRank": 78,
"score": 51.5
},
{
"classRank": 35,
"schoolRank": 80,
"score": 50.5
},
{
"classRank": 36,
"schoolRank": 81,
"score": 50
},
{
"classRank": 37,
"schoolRank": 81,
"score": 50
},
{
"classRank": 38,
"schoolRank": 85,
"score": 48
},
{
"classRank": 39,
"schoolRank": 85,
"score": 48
},
{
"classRank": 40,
"schoolRank": 89,
"score": 46
},
{
"classRank": 41,
"schoolRank": 93,
"score": 44
}
],
"高三01班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 93.5
},
{
"classRank": 2,
"schoolRank": 3,
"score": 91
},
{
"classRank": 3,
"schoolRank": 7,
"score": 87.5
},
{
"classRank": 4,
"schoolRank": 8,
"score": 87
},
{
"classRank": 5,
"schoolRank": 8,
"score": 87
},
{
"classRank": 6,
"schoolRank": 15,
"score": 83
},
{
"classRank": 7,
"schoolRank": 15,
"score": 83
},
{
"classRank": 8,
"schoolRank": 16,
"score": 82.5
},
{
"classRank": 9,
"schoolRank": 17,
"score": 82
},
{
"classRank": 10,
"schoolRank": 20,
"score": 80.5
},
{
"classRank": 11,
"schoolRank": 21,
"score": 80
},
{
"classRank": 12,
"schoolRank": 22,
"score": 79.5
},
{
"classRank": 13,
"schoolRank": 23,
"score": 79
},
{
"classRank": 14,
"schoolRank": 26,
"score": 77.5
},
{
"classRank": 15,
"schoolRank": 27,
"score": 77
},
{
"classRank": 16,
"schoolRank": 36,
"score": 72.5
},
{
"classRank": 17,
"schoolRank": 36,
"score": 72.5
},
{
"classRank": 18,
"schoolRank": 41,
"score": 70
},
{
"classRank": 19,
"schoolRank": 41,
"score": 70
},
{
"classRank": 20,
"schoolRank": 42,
"score": 69.5
},
{
"classRank": 21,
"schoolRank": 45,
"score": 68
},
{
"classRank": 22,
"schoolRank": 47,
"score": 67
},
{
"classRank": 23,
"schoolRank": 49,
"score": 66
},
{
"classRank": 24,
"schoolRank": 51,
"score": 65
},
{
"classRank": 25,
"schoolRank": 52,
"score": 64.5
},
{
"classRank": 26,
"schoolRank": 53,
"score": 64
},
{
"classRank": 27,
"schoolRank": 53,
"score": 64
},
{
"classRank": 28,
"schoolRank": 55,
"score": 63
},
{
"classRank": 29,
"schoolRank": 56,
"score": 62.5
},
{
"classRank": 30,
"schoolRank": 59,
"score": 61
},
{
"classRank": 31,
"schoolRank": 61,
"score": 60
},
{
"classRank": 32,
"schoolRank": 62,
"score": 59.5
},
{
"classRank": 33,
"schoolRank": 64,
"score": 58.5
},
{
"classRank": 34,
"schoolRank": 76,
"score": 52.5
},
{
"classRank": 35,
"schoolRank": 90,
"score": 45.5
}
],
"高三02班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 91.5
},
{
"classRank": 2,
"schoolRank": 5,
"score": 90
},
{
"classRank": 3,
"schoolRank": 10,
"score": 86
},
{
"classRank": 4,
"schoolRank": 11,
"score": 85.5
},
{
"classRank": 5,
"schoolRank": 14,
"score": 83.5
},
{
"classRank": 6,
"schoolRank": 16,
"score": 82.5
},
{
"classRank": 7,
"schoolRank": 18,
"score": 81.5
},
{
"classRank": 8,
"schoolRank": 18,
"score": 81.5
},
{
"classRank": 9,
"schoolRank": 19,
"score": 81
},
{
"classRank": 10,
"schoolRank": 20,
"score": 80.5
},
{
"classRank": 11,
"schoolRank": 24,
"score": 78.5
},
{
"classRank": 12,
"schoolRank": 24,
"score": 78.5
},
{
"classRank": 13,
"schoolRank": 29,
"score": 76
},
{
"classRank": 14,
"schoolRank": 32,
"score": 74.5
},
{
"classRank": 15,
"schoolRank": 35,
"score": 73
},
{
"classRank": 16,
"schoolRank": 38,
"score": 71.5
},
{
"classRank": 17,
"schoolRank": 40,
"score": 70.5
},
{
"classRank": 18,
"schoolRank": 43,
"score": 69
},
{
"classRank": 19,
"schoolRank": 45,
"score": 68
},
{
"classRank": 20,
"schoolRank": 46,
"score": 67.5
},
{
"classRank": 21,
"schoolRank": 46,
"score": 67.5
},
{
"classRank": 22,
"schoolRank": 48,
"score": 66.5
},
{
"classRank": 23,
"schoolRank": 53,
"score": 64
},
{
"classRank": 24,
"schoolRank": 54,
"score": 63.5
},
{
"classRank": 25,
"schoolRank": 54,
"score": 63.5
},
{
"classRank": 26,
"schoolRank": 57,
"score": 62
},
{
"classRank": 27,
"schoolRank": 60,
"score": 60.5
},
{
"classRank": 28,
"schoolRank": 63,
"score": 59
},
{
"classRank": 29,
"schoolRank": 65,
"score": 58
},
{
"classRank": 30,
"schoolRank": 68,
"score": 56.5
},
{
"classRank": 31,
"schoolRank": 68,
"score": 56.5
},
{
"classRank": 32,
"schoolRank": 68,
"score": 56.5
},
{
"classRank": 33,
"schoolRank": 71,
"score": 55
},
{
"classRank": 34,
"schoolRank": 75,
"score": 53
},
{
"classRank": 35,
"schoolRank": 77,
"score": 52
},
{
"classRank": 36,
"schoolRank": 78,
"score": 51.5
},
{
"classRank": 37,
"schoolRank": 79,
"score": 51
},
{
"classRank": 38,
"schoolRank": 80,
"score": 50.5
},
{
"classRank": 39,
"schoolRank": 80,
"score": 50.5
},
{
"classRank": 40,
"schoolRank": 83,
"score": 49
},
{
"classRank": 41,
"schoolRank": 87,
"score": 47
},
{
"classRank": 42,
"schoolRank": 91,
"score": 45
},
{
"classRank": 43,
"schoolRank": 92,
"score": 44.5
},
{
"classRank": 44,
"schoolRank": 100,
"score": 40.5
}
],
"高三10班": [
{
"classRank": 1,
"schoolRank": 22,
"score": 79.5
},
{
"classRank": 2,
"schoolRank": 27,
"score": 77
},
{
"classRank": 3,
"schoolRank": 30,
"score": 75.5
},
{
"classRank": 4,
"schoolRank": 31,
"score": 75
},
{
"classRank": 5,
"schoolRank": 32,
"score": 74.5
},
{
"classRank": 6,
"schoolRank": 32,
"score": 74.5
},
{
"classRank": 7,
"schoolRank": 37,
"score": 72
},
{
"classRank": 8,
"schoolRank": 38,
"score": 71.5
},
{
"classRank": 9,
"schoolRank": 40,
"score": 70.5
},
{
"classRank": 10,
"schoolRank": 41,
"score": 70
},
{
"classRank": 11,
"schoolRank": 41,
"score": 70
},
{
"classRank": 12,
"schoolRank": 44,
"score": 68.5
},
{
"classRank": 13,
"schoolRank": 45,
"score": 68
},
{
"classRank": 14,
"schoolRank": 49,
"score": 66
},
{
"classRank": 15,
"schoolRank": 49,
"score": 66
},
{
"classRank": 16,
"schoolRank": 49,
"score": 66
},
{
"classRank": 17,
"schoolRank": 50,
"score": 65.5
},
{
"classRank": 18,
"schoolRank": 52,
"score": 64.5
},
{
"classRank": 19,
"schoolRank": 55,
"score": 63
},
{
"classRank": 20,
"schoolRank": 56,
"score": 62.5
},
{
"classRank": 21,
"schoolRank": 63,
"score": 59
},
{
"classRank": 22,
"schoolRank": 64,
"score": 58.5
},
{
"classRank": 23,
"schoolRank": 65,
"score": 58
},
{
"classRank": 24,
"schoolRank": 65,
"score": 58
},
{
"classRank": 25,
"schoolRank": 66,
"score": 57.5
},
{
"classRank": 26,
"schoolRank": 68,
"score": 56.5
},
{
"classRank": 27,
"schoolRank": 68,
"score": 56.5
},
{
"classRank": 28,
"schoolRank": 75,
"score": 53
},
{
"classRank": 29,
"schoolRank": 77,
"score": 52
},
{
"classRank": 30,
"schoolRank": 80,
"score": 50.5
},
{
"classRank": 31,
"schoolRank": 85,
"score": 48
},
{
"classRank": 32,
"schoolRank": 87,
"score": 47
},
{
"classRank": 33,
"schoolRank": 88,
"score": 46.5
},
{
"classRank": 34,
"schoolRank": 90,
"score": 45.5
},
{
"classRank": 35,
"schoolRank": 92,
"score": 44.5
},
{
"classRank": 36,
"schoolRank": 94,
"score": 43.5
},
{
"classRank": 37,
"schoolRank": 95,
"score": 43
},
{
"classRank": 38,
"schoolRank": 96,
"score": 42.5
},
{
"classRank": 39,
"schoolRank": 98,
"score": 41.5
},
{
"classRank": 40,
"schoolRank": 99,
"score": 41
},
{
"classRank": 41,
"schoolRank": 99,
"score": 41
},
{
"classRank": 42,
"schoolRank": 108,
"score": 36
},
{
"classRank": 43,
"schoolRank": 108,
"score": 36
},
{
"classRank": 44,
"schoolRank": 109,
"score": 34
}
],
"高三11班": [
{
"classRank": 1,
"schoolRank": 17,
"score": 82
},
{
"classRank": 2,
"schoolRank": 17,
"score": 82
},
{
"classRank": 3,
"schoolRank": 23,
"score": 79
},
{
"classRank": 4,
"schoolRank": 26,
"score": 77.5
},
{
"classRank": 5,
"schoolRank": 29,
"score": 76
},
{
"classRank": 6,
"schoolRank": 31,
"score": 75
},
{
"classRank": 7,
"schoolRank": 38,
"score": 71.5
},
{
"classRank": 8,
"schoolRank": 38,
"score": 71.5
},
{
"classRank": 9,
"schoolRank": 38,
"score": 71.5
},
{
"classRank": 10,
"schoolRank": 43,
"score": 69
},
{
"classRank": 11,
"schoolRank": 43,
"score": 69
},
{
"classRank": 12,
"schoolRank": 43,
"score": 69
},
{
"classRank": 13,
"schoolRank": 45,
"score": 68
},
{
"classRank": 14,
"schoolRank": 46,
"score": 67.5
},
{
"classRank": 15,
"schoolRank": 51,
"score": 65
},
{
"classRank": 16,
"schoolRank": 54,
"score": 63.5
},
{
"classRank": 17,
"schoolRank": 56,
"score": 62.5
},
{
"classRank": 18,
"schoolRank": 57,
"score": 62
},
{
"classRank": 19,
"schoolRank": 58,
"score": 61.5
},
{
"classRank": 20,
"schoolRank": 63,
"score": 59
},
{
"classRank": 21,
"schoolRank": 64,
"score": 58.5
},
{
"classRank": 22,
"schoolRank": 67,
"score": 57
},
{
"classRank": 23,
"schoolRank": 67,
"score": 57
},
{
"classRank": 24,
"schoolRank": 68,
"score": 56.5
},
{
"classRank": 25,
"schoolRank": 70,
"score": 55.5
},
{
"classRank": 26,
"schoolRank": 74,
"score": 53.5
},
{
"classRank": 27,
"schoolRank": 75,
"score": 53
},
{
"classRank": 28,
"schoolRank": 76,
"score": 52.5
},
{
"classRank": 29,
"schoolRank": 82,
"score": 49.5
},
{
"classRank": 30,
"schoolRank": 82,
"score": 49.5
},
{
"classRank": 31,
"schoolRank": 84,
"score": 48.5
},
{
"classRank": 32,
"schoolRank": 85,
"score": 48
},
{
"classRank": 33,
"schoolRank": 89,
"score": 46
},
{
"classRank": 34,
"schoolRank": 90,
"score": 45.5
},
{
"classRank": 35,
"schoolRank": 92,
"score": 44.5
},
{
"classRank": 36,
"schoolRank": 92,
"score": 44.5
},
{
"classRank": 37,
"schoolRank": 95,
"score": 43
},
{
"classRank": 38,
"schoolRank": 97,
"score": 42
},
{
"classRank": 39,
"schoolRank": 100,
"score": 40.5
},
{
"classRank": 40,
"schoolRank": 104,
"score": 38
},
{
"classRank": 41,
"schoolRank": 106,
"score": 37
},
{
"classRank": 42,
"schoolRank": 108,
"score": 36
},
{
"classRank": 43,
"schoolRank": 110,
"score": 32
},
{
"classRank": 44,
"schoolRank": 110,
"score": 32
}
]
}
var gs7 = [];
getyk(data, gs7);
setMapS3(gs7, '政治', 'm3-7');
data={
"高三09班": [
{
"classRank": 1,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 2,
"schoolRank": 18,
"score": 80
},
{
"classRank": 3,
"schoolRank": 20,
"score": 79
},
{
"classRank": 4,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 5,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 6,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 7,
"schoolRank": 24,
"score": 77
},
{
"classRank": 8,
"schoolRank": 24,
"score": 77
},
{
"classRank": 9,
"schoolRank": 26,
"score": 76
},
{
"classRank": 10,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 11,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 12,
"schoolRank": 34,
"score": 72
},
{
"classRank": 13,
"schoolRank": 38,
"score": 70
},
{
"classRank": 14,
"schoolRank": 38,
"score": 70
},
{
"classRank": 15,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 16,
"schoolRank": 50,
"score": 64
},
{
"classRank": 17,
"schoolRank": 52,
"score": 63
},
{
"classRank": 18,
"schoolRank": 52,
"score": 63
},
{
"classRank": 19,
"schoolRank": 53,
"score": 62.5
},
{
"classRank": 20,
"schoolRank": 55,
"score": 61.5
},
{
"classRank": 21,
"schoolRank": 56,
"score": 61
},
{
"classRank": 22,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 23,
"schoolRank": 64,
"score": 57
},
{
"classRank": 24,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 25,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 26,
"schoolRank": 70,
"score": 54
},
{
"classRank": 27,
"schoolRank": 72,
"score": 53
},
{
"classRank": 28,
"schoolRank": 72,
"score": 53
},
{
"classRank": 29,
"schoolRank": 73,
"score": 52.5
},
{
"classRank": 30,
"schoolRank": 76,
"score": 51
},
{
"classRank": 31,
"schoolRank": 76,
"score": 51
},
{
"classRank": 32,
"schoolRank": 78,
"score": 50
},
{
"classRank": 33,
"schoolRank": 79,
"score": 49.5
},
{
"classRank": 34,
"schoolRank": 85,
"score": 46.5
},
{
"classRank": 35,
"schoolRank": 86,
"score": 46
},
{
"classRank": 36,
"schoolRank": 89,
"score": 44.5
},
{
"classRank": 37,
"schoolRank": 92,
"score": 43
},
{
"classRank": 38,
"schoolRank": 93,
"score": 42.5
},
{
"classRank": 39,
"schoolRank": 93,
"score": 42.5
},
{
"classRank": 40,
"schoolRank": 96,
"score": 41
},
{
"classRank": 41,
"schoolRank": 99,
"score": 39
},
{
"classRank": 42,
"schoolRank": 104,
"score": 36.5
}
],
"高三07班": [
{
"classRank": 1,
"schoolRank": 9,
"score": 85.5
},
{
"classRank": 2,
"schoolRank": 11,
"score": 84
},
{
"classRank": 3,
"schoolRank": 13,
"score": 82.5
},
{
"classRank": 4,
"schoolRank": 20,
"score": 79
},
{
"classRank": 5,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 6,
"schoolRank": 24,
"score": 77
},
{
"classRank": 7,
"schoolRank": 25,
"score": 76.5
},
{
"classRank": 8,
"schoolRank": 30,
"score": 74
},
{
"classRank": 9,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 10,
"schoolRank": 34,
"score": 72
},
{
"classRank": 11,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 12,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 13,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 14,
"schoolRank": 38,
"score": 70
},
{
"classRank": 15,
"schoolRank": 40,
"score": 69
},
{
"classRank": 16,
"schoolRank": 40,
"score": 69
},
{
"classRank": 17,
"schoolRank": 42,
"score": 68
},
{
"classRank": 18,
"schoolRank": 45,
"score": 66.5
},
{
"classRank": 19,
"schoolRank": 46,
"score": 66
},
{
"classRank": 20,
"schoolRank": 52,
"score": 63
},
{
"classRank": 21,
"schoolRank": 55,
"score": 61.5
},
{
"classRank": 22,
"schoolRank": 56,
"score": 61
},
{
"classRank": 23,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 24,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 25,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 26,
"schoolRank": 64,
"score": 57
},
{
"classRank": 27,
"schoolRank": 65,
"score": 56.5
},
{
"classRank": 28,
"schoolRank": 65,
"score": 56.5
},
{
"classRank": 29,
"schoolRank": 66,
"score": 56
},
{
"classRank": 30,
"schoolRank": 70,
"score": 54
},
{
"classRank": 31,
"schoolRank": 73,
"score": 52.5
},
{
"classRank": 32,
"schoolRank": 75,
"score": 51.5
},
{
"classRank": 33,
"schoolRank": 76,
"score": 51
},
{
"classRank": 34,
"schoolRank": 79,
"score": 49.5
},
{
"classRank": 35,
"schoolRank": 81,
"score": 48.5
},
{
"classRank": 36,
"schoolRank": 82,
"score": 48
},
{
"classRank": 37,
"schoolRank": 84,
"score": 47
},
{
"classRank": 38,
"schoolRank": 84,
"score": 47
},
{
"classRank": 39,
"schoolRank": 86,
"score": 46
},
{
"classRank": 40,
"schoolRank": 87,
"score": 45.5
},
{
"classRank": 41,
"schoolRank": 87,
"score": 45.5
},
{
"classRank": 42,
"schoolRank": 90,
"score": 44
},
{
"classRank": 43,
"schoolRank": 98,
"score": 40
},
{
"classRank": 44,
"schoolRank": 98,
"score": 40
},
{
"classRank": 45,
"schoolRank": 101,
"score": 38
},
{
"classRank": 46,
"schoolRank": 105,
"score": 36
},
{
"classRank": 47,
"schoolRank": 107,
"score": 35
}
],
"高三08班": [
{
"classRank": 1,
"schoolRank": 14,
"score": 82
},
{
"classRank": 2,
"schoolRank": 20,
"score": 79
},
{
"classRank": 3,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 4,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 5,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 6,
"schoolRank": 24,
"score": 77
},
{
"classRank": 7,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 8,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 9,
"schoolRank": 32,
"score": 73
},
{
"classRank": 10,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 11,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 12,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 13,
"schoolRank": 42,
"score": 68
},
{
"classRank": 14,
"schoolRank": 42,
"score": 68
},
{
"classRank": 15,
"schoolRank": 44,
"score": 67
},
{
"classRank": 16,
"schoolRank": 44,
"score": 67
},
{
"classRank": 17,
"schoolRank": 47,
"score": 65.5
},
{
"classRank": 18,
"schoolRank": 50,
"score": 64
},
{
"classRank": 19,
"schoolRank": 53,
"score": 62.5
},
{
"classRank": 20,
"schoolRank": 54,
"score": 62
},
{
"classRank": 21,
"schoolRank": 60,
"score": 59
},
{
"classRank": 22,
"schoolRank": 60,
"score": 59
},
{
"classRank": 23,
"schoolRank": 62,
"score": 58
},
{
"classRank": 24,
"schoolRank": 63,
"score": 57.5
},
{
"classRank": 25,
"schoolRank": 63,
"score": 57.5
},
{
"classRank": 26,
"schoolRank": 64,
"score": 57
},
{
"classRank": 27,
"schoolRank": 65,
"score": 56.5
},
{
"classRank": 28,
"schoolRank": 70,
"score": 54
},
{
"classRank": 29,
"schoolRank": 72,
"score": 53
},
{
"classRank": 30,
"schoolRank": 74,
"score": 52
},
{
"classRank": 31,
"schoolRank": 74,
"score": 52
},
{
"classRank": 32,
"schoolRank": 77,
"score": 50.5
},
{
"classRank": 33,
"schoolRank": 78,
"score": 50
},
{
"classRank": 34,
"schoolRank": 81,
"score": 48.5
},
{
"classRank": 35,
"schoolRank": 84,
"score": 47
},
{
"classRank": 36,
"schoolRank": 85,
"score": 46.5
},
{
"classRank": 37,
"schoolRank": 86,
"score": 46
},
{
"classRank": 38,
"schoolRank": 88,
"score": 45
},
{
"classRank": 39,
"schoolRank": 88,
"score": 45
},
{
"classRank": 40,
"schoolRank": 88,
"score": 45
},
{
"classRank": 41,
"schoolRank": 93,
"score": 42.5
},
{
"classRank": 42,
"schoolRank": 95,
"score": 41.5
}
],
"高三05班": [
{
"classRank": 1,
"schoolRank": 8,
"score": 86
},
{
"classRank": 2,
"schoolRank": 9,
"score": 85.5
},
{
"classRank": 3,
"schoolRank": 17,
"score": 80.5
},
{
"classRank": 4,
"schoolRank": 18,
"score": 80
},
{
"classRank": 5,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 6,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 7,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 8,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 9,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 10,
"schoolRank": 28,
"score": 75
},
{
"classRank": 11,
"schoolRank": 28,
"score": 75
},
{
"classRank": 12,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 13,
"schoolRank": 32,
"score": 73
},
{
"classRank": 14,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 15,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 16,
"schoolRank": 38,
"score": 70
},
{
"classRank": 17,
"schoolRank": 42,
"score": 68
},
{
"classRank": 18,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 19,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 20,
"schoolRank": 44,
"score": 67
},
{
"classRank": 21,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 22,
"schoolRank": 50,
"score": 64
},
{
"classRank": 23,
"schoolRank": 53,
"score": 62.5
},
{
"classRank": 24,
"schoolRank": 53,
"score": 62.5
},
{
"classRank": 25,
"schoolRank": 54,
"score": 62
},
{
"classRank": 26,
"schoolRank": 55,
"score": 61.5
},
{
"classRank": 27,
"schoolRank": 56,
"score": 61
},
{
"classRank": 28,
"schoolRank": 59,
"score": 59.5
},
{
"classRank": 29,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 30,
"schoolRank": 64,
"score": 57
},
{
"classRank": 31,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 32,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 33,
"schoolRank": 76,
"score": 51
},
{
"classRank": 34,
"schoolRank": 77,
"score": 50.5
},
{
"classRank": 35,
"schoolRank": 78,
"score": 50
},
{
"classRank": 36,
"schoolRank": 82,
"score": 48
},
{
"classRank": 37,
"schoolRank": 82,
"score": 48
},
{
"classRank": 38,
"schoolRank": 83,
"score": 47.5
},
{
"classRank": 39,
"schoolRank": 84,
"score": 47
},
{
"classRank": 40,
"schoolRank": 88,
"score": 45
},
{
"classRank": 41,
"schoolRank": 96,
"score": 41
}
],
"高三06班": [
{
"classRank": 1,
"schoolRank": 10,
"score": 85
},
{
"classRank": 2,
"schoolRank": 11,
"score": 84
},
{
"classRank": 3,
"schoolRank": 14,
"score": 82
},
{
"classRank": 4,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 5,
"schoolRank": 18,
"score": 80
},
{
"classRank": 6,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 7,
"schoolRank": 24,
"score": 77
},
{
"classRank": 8,
"schoolRank": 24,
"score": 77
},
{
"classRank": 9,
"schoolRank": 25,
"score": 76.5
},
{
"classRank": 10,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 11,
"schoolRank": 28,
"score": 75
},
{
"classRank": 12,
"schoolRank": 28,
"score": 75
},
{
"classRank": 13,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 14,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 15,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 16,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 17,
"schoolRank": 42,
"score": 68
},
{
"classRank": 18,
"schoolRank": 46,
"score": 66
},
{
"classRank": 19,
"schoolRank": 46,
"score": 66
},
{
"classRank": 20,
"schoolRank": 47,
"score": 65.5
},
{
"classRank": 21,
"schoolRank": 48,
"score": 65
},
{
"classRank": 22,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 23,
"schoolRank": 50,
"score": 64
},
{
"classRank": 24,
"schoolRank": 52,
"score": 63
},
{
"classRank": 25,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 26,
"schoolRank": 62,
"score": 58
},
{
"classRank": 27,
"schoolRank": 63,
"score": 57.5
},
{
"classRank": 28,
"schoolRank": 65,
"score": 56.5
},
{
"classRank": 29,
"schoolRank": 66,
"score": 56
},
{
"classRank": 30,
"schoolRank": 70,
"score": 54
},
{
"classRank": 31,
"schoolRank": 72,
"score": 53
},
{
"classRank": 32,
"schoolRank": 74,
"score": 52
},
{
"classRank": 33,
"schoolRank": 76,
"score": 51
},
{
"classRank": 34,
"schoolRank": 76,
"score": 51
},
{
"classRank": 35,
"schoolRank": 78,
"score": 50
},
{
"classRank": 36,
"schoolRank": 80,
"score": 49
},
{
"classRank": 37,
"schoolRank": 81,
"score": 48.5
},
{
"classRank": 38,
"schoolRank": 83,
"score": 47.5
},
{
"classRank": 39,
"schoolRank": 85,
"score": 46.5
},
{
"classRank": 40,
"schoolRank": 89,
"score": 44.5
},
{
"classRank": 41,
"schoolRank": 91,
"score": 43.5
},
{
"classRank": 42,
"schoolRank": 97,
"score": 40.5
},
{
"classRank": 43,
"schoolRank": 97,
"score": 40.5
},
{
"classRank": 44,
"schoolRank": 99,
"score": 39
},
{
"classRank": 45,
"schoolRank": 101,
"score": 38
},
{
"classRank": 46,
"schoolRank": 102,
"score": 37.5
}
],
"高三03班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 90.5
},
{
"classRank": 2,
"schoolRank": 4,
"score": 89
},
{
"classRank": 3,
"schoolRank": 7,
"score": 86.5
},
{
"classRank": 4,
"schoolRank": 9,
"score": 85.5
},
{
"classRank": 5,
"schoolRank": 12,
"score": 83.5
},
{
"classRank": 6,
"schoolRank": 12,
"score": 83.5
},
{
"classRank": 7,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 8,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 9,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 10,
"schoolRank": 22,
"score": 78
},
{
"classRank": 11,
"schoolRank": 22,
"score": 78
},
{
"classRank": 12,
"schoolRank": 22,
"score": 78
},
{
"classRank": 13,
"schoolRank": 24,
"score": 77
},
{
"classRank": 14,
"schoolRank": 28,
"score": 75
},
{
"classRank": 15,
"schoolRank": 29,
"score": 74.5
},
{
"classRank": 16,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 17,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 18,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 19,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 20,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 21,
"schoolRank": 48,
"score": 65
},
{
"classRank": 22,
"schoolRank": 48,
"score": 65
},
{
"classRank": 23,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 24,
"schoolRank": 52,
"score": 63
},
{
"classRank": 25,
"schoolRank": 55,
"score": 61.5
},
{
"classRank": 26,
"schoolRank": 55,
"score": 61.5
},
{
"classRank": 27,
"schoolRank": 59,
"score": 59.5
},
{
"classRank": 28,
"schoolRank": 60,
"score": 59
},
{
"classRank": 29,
"schoolRank": 62,
"score": 58
},
{
"classRank": 30,
"schoolRank": 62,
"score": 58
},
{
"classRank": 31,
"schoolRank": 64,
"score": 57
},
{
"classRank": 32,
"schoolRank": 64,
"score": 57
},
{
"classRank": 33,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 34,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 35,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 36,
"schoolRank": 70,
"score": 54
},
{
"classRank": 37,
"schoolRank": 77,
"score": 50.5
},
{
"classRank": 38,
"schoolRank": 78,
"score": 50
},
{
"classRank": 39,
"schoolRank": 78,
"score": 50
},
{
"classRank": 40,
"schoolRank": 80,
"score": 49
},
{
"classRank": 41,
"schoolRank": 83,
"score": 47.5
},
{
"classRank": 42,
"schoolRank": 84,
"score": 47
},
{
"classRank": 43,
"schoolRank": 87,
"score": 45.5
},
{
"classRank": 44,
"schoolRank": 90,
"score": 44
},
{
"classRank": 45,
"schoolRank": 95,
"score": 41.5
},
{
"classRank": 46,
"schoolRank": 95,
"score": 41.5
},
{
"classRank": 47,
"schoolRank": 97,
"score": 40.5
},
{
"classRank": 48,
"schoolRank": 98,
"score": 40
},
{
"classRank": 49,
"schoolRank": 103,
"score": 37
}
],
"高三04班": [
{
"classRank": 1,
"schoolRank": 5,
"score": 88.5
},
{
"classRank": 2,
"schoolRank": 11,
"score": 84
},
{
"classRank": 3,
"schoolRank": 13,
"score": 82.5
},
{
"classRank": 4,
"schoolRank": 14,
"score": 82
},
{
"classRank": 5,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 6,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 7,
"schoolRank": 16,
"score": 81
},
{
"classRank": 8,
"schoolRank": 17,
"score": 80.5
},
{
"classRank": 9,
"schoolRank": 18,
"score": 80
},
{
"classRank": 10,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 11,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 12,
"schoolRank": 28,
"score": 75
},
{
"classRank": 13,
"schoolRank": 31,
"score": 73.5
},
{
"classRank": 14,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 15,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 16,
"schoolRank": 36,
"score": 71
},
{
"classRank": 17,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 18,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 19,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 20,
"schoolRank": 44,
"score": 67
},
{
"classRank": 21,
"schoolRank": 47,
"score": 65.5
},
{
"classRank": 22,
"schoolRank": 47,
"score": 65.5
},
{
"classRank": 23,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 24,
"schoolRank": 50,
"score": 64
},
{
"classRank": 25,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 26,
"schoolRank": 52,
"score": 63
},
{
"classRank": 27,
"schoolRank": 54,
"score": 62
},
{
"classRank": 28,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 29,
"schoolRank": 63,
"score": 57.5
},
{
"classRank": 30,
"schoolRank": 65,
"score": 56.5
},
{
"classRank": 31,
"schoolRank": 66,
"score": 56
},
{
"classRank": 32,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 33,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 34,
"schoolRank": 71,
"score": 53.5
},
{
"classRank": 35,
"schoolRank": 73,
"score": 52.5
},
{
"classRank": 36,
"schoolRank": 74,
"score": 52
},
{
"classRank": 37,
"schoolRank": 77,
"score": 50.5
},
{
"classRank": 38,
"schoolRank": 78,
"score": 50
},
{
"classRank": 39,
"schoolRank": 84,
"score": 47
},
{
"classRank": 40,
"schoolRank": 84,
"score": 47
},
{
"classRank": 41,
"schoolRank": 92,
"score": 43
}
],
"高三01班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 90.5
},
{
"classRank": 2,
"schoolRank": 2,
"score": 90
},
{
"classRank": 3,
"schoolRank": 6,
"score": 87
},
{
"classRank": 4,
"schoolRank": 7,
"score": 86.5
},
{
"classRank": 5,
"schoolRank": 9,
"score": 85.5
},
{
"classRank": 6,
"schoolRank": 12,
"score": 83.5
},
{
"classRank": 7,
"schoolRank": 13,
"score": 82.5
},
{
"classRank": 8,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 9,
"schoolRank": 18,
"score": 80
},
{
"classRank": 10,
"schoolRank": 20,
"score": 79
},
{
"classRank": 11,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 12,
"schoolRank": 23,
"score": 77.5
},
{
"classRank": 13,
"schoolRank": 26,
"score": 76
},
{
"classRank": 14,
"schoolRank": 28,
"score": 75
},
{
"classRank": 15,
"schoolRank": 30,
"score": 74
},
{
"classRank": 16,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 17,
"schoolRank": 34,
"score": 72
},
{
"classRank": 18,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 19,
"schoolRank": 35,
"score": 71.5
},
{
"classRank": 20,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 21,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 22,
"schoolRank": 39,
"score": 69.5
},
{
"classRank": 23,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 24,
"schoolRank": 44,
"score": 67
},
{
"classRank": 25,
"schoolRank": 47,
"score": 65.5
},
{
"classRank": 26,
"schoolRank": 48,
"score": 65
},
{
"classRank": 27,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 28,
"schoolRank": 52,
"score": 63
},
{
"classRank": 29,
"schoolRank": 52,
"score": 63
},
{
"classRank": 30,
"schoolRank": 56,
"score": 61
},
{
"classRank": 31,
"schoolRank": 56,
"score": 61
},
{
"classRank": 32,
"schoolRank": 60,
"score": 59
},
{
"classRank": 33,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 34,
"schoolRank": 68,
"score": 55
},
{
"classRank": 35,
"schoolRank": 72,
"score": 53
}
],
"高三02班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 90
},
{
"classRank": 2,
"schoolRank": 3,
"score": 89.5
},
{
"classRank": 3,
"schoolRank": 5,
"score": 88.5
},
{
"classRank": 4,
"schoolRank": 7,
"score": 86.5
},
{
"classRank": 5,
"schoolRank": 9,
"score": 85.5
},
{
"classRank": 6,
"schoolRank": 13,
"score": 82.5
},
{
"classRank": 7,
"schoolRank": 14,
"score": 82
},
{
"classRank": 8,
"schoolRank": 15,
"score": 81.5
},
{
"classRank": 9,
"schoolRank": 19,
"score": 79.5
},
{
"classRank": 10,
"schoolRank": 20,
"score": 79
},
{
"classRank": 11,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 12,
"schoolRank": 21,
"score": 78.5
},
{
"classRank": 13,
"schoolRank": 28,
"score": 75
},
{
"classRank": 14,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 15,
"schoolRank": 36,
"score": 71
},
{
"classRank": 16,
"schoolRank": 36,
"score": 71
},
{
"classRank": 17,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 18,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 19,
"schoolRank": 38,
"score": 70
},
{
"classRank": 20,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 21,
"schoolRank": 44,
"score": 67
},
{
"classRank": 22,
"schoolRank": 48,
"score": 65
},
{
"classRank": 23,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 24,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 25,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 26,
"schoolRank": 52,
"score": 63
},
{
"classRank": 27,
"schoolRank": 53,
"score": 62.5
},
{
"classRank": 28,
"schoolRank": 54,
"score": 62
},
{
"classRank": 29,
"schoolRank": 54,
"score": 62
},
{
"classRank": 30,
"schoolRank": 55,
"score": 61.5
},
{
"classRank": 31,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 32,
"schoolRank": 65,
"score": 56.5
},
{
"classRank": 33,
"schoolRank": 68,
"score": 55
},
{
"classRank": 34,
"schoolRank": 73,
"score": 52.5
},
{
"classRank": 35,
"schoolRank": 73,
"score": 52.5
},
{
"classRank": 36,
"schoolRank": 73,
"score": 52.5
},
{
"classRank": 37,
"schoolRank": 76,
"score": 51
},
{
"classRank": 38,
"schoolRank": 76,
"score": 51
},
{
"classRank": 39,
"schoolRank": 76,
"score": 51
},
{
"classRank": 40,
"schoolRank": 82,
"score": 48
},
{
"classRank": 41,
"schoolRank": 83,
"score": 47.5
},
{
"classRank": 42,
"schoolRank": 84,
"score": 47
},
{
"classRank": 43,
"schoolRank": 91,
"score": 43.5
},
{
"classRank": 44,
"schoolRank": 94,
"score": 42
}
],
"高三10班": [
{
"classRank": 1,
"schoolRank": 18,
"score": 80
},
{
"classRank": 2,
"schoolRank": 24,
"score": 77
},
{
"classRank": 3,
"schoolRank": 25,
"score": 76.5
},
{
"classRank": 4,
"schoolRank": 30,
"score": 74
},
{
"classRank": 5,
"schoolRank": 30,
"score": 74
},
{
"classRank": 6,
"schoolRank": 38,
"score": 70
},
{
"classRank": 7,
"schoolRank": 38,
"score": 70
},
{
"classRank": 8,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 9,
"schoolRank": 42,
"score": 68
},
{
"classRank": 10,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 11,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 12,
"schoolRank": 44,
"score": 67
},
{
"classRank": 13,
"schoolRank": 46,
"score": 66
},
{
"classRank": 14,
"schoolRank": 46,
"score": 66
},
{
"classRank": 15,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 16,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 17,
"schoolRank": 52,
"score": 63
},
{
"classRank": 18,
"schoolRank": 54,
"score": 62
},
{
"classRank": 19,
"schoolRank": 56,
"score": 61
},
{
"classRank": 20,
"schoolRank": 57,
"score": 60.5
},
{
"classRank": 21,
"schoolRank": 59,
"score": 59.5
},
{
"classRank": 22,
"schoolRank": 60,
"score": 59
},
{
"classRank": 23,
"schoolRank": 61,
"score": 58.5
},
{
"classRank": 24,
"schoolRank": 63,
"score": 57.5
},
{
"classRank": 25,
"schoolRank": 67,
"score": 55.5
},
{
"classRank": 26,
"schoolRank": 69,
"score": 54.5
},
{
"classRank": 27,
"schoolRank": 73,
"score": 52.5
},
{
"classRank": 28,
"schoolRank": 74,
"score": 52
},
{
"classRank": 29,
"schoolRank": 79,
"score": 49.5
},
{
"classRank": 30,
"schoolRank": 80,
"score": 49
},
{
"classRank": 31,
"schoolRank": 81,
"score": 48.5
},
{
"classRank": 32,
"schoolRank": 81,
"score": 48.5
},
{
"classRank": 33,
"schoolRank": 83,
"score": 47.5
},
{
"classRank": 34,
"schoolRank": 85,
"score": 46.5
},
{
"classRank": 35,
"schoolRank": 86,
"score": 46
},
{
"classRank": 36,
"schoolRank": 90,
"score": 44
},
{
"classRank": 37,
"schoolRank": 91,
"score": 43.5
},
{
"classRank": 38,
"schoolRank": 92,
"score": 43
},
{
"classRank": 39,
"schoolRank": 93,
"score": 42.5
},
{
"classRank": 40,
"schoolRank": 95,
"score": 41.5
},
{
"classRank": 41,
"schoolRank": 96,
"score": 41
},
{
"classRank": 42,
"schoolRank": 105,
"score": 36
},
{
"classRank": 43,
"schoolRank": 106,
"score": 35.5
},
{
"classRank": 44,
"schoolRank": 108,
"score": 33.5
}
],
"高三11班": [
{
"classRank": 1,
"schoolRank": 22,
"score": 78
},
{
"classRank": 2,
"schoolRank": 24,
"score": 77
},
{
"classRank": 3,
"schoolRank": 24,
"score": 77
},
{
"classRank": 4,
"schoolRank": 26,
"score": 76
},
{
"classRank": 5,
"schoolRank": 27,
"score": 75.5
},
{
"classRank": 6,
"schoolRank": 28,
"score": 75
},
{
"classRank": 7,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 8,
"schoolRank": 33,
"score": 72.5
},
{
"classRank": 9,
"schoolRank": 37,
"score": 70.5
},
{
"classRank": 10,
"schoolRank": 38,
"score": 70
},
{
"classRank": 11,
"schoolRank": 40,
"score": 69
},
{
"classRank": 12,
"schoolRank": 40,
"score": 69
},
{
"classRank": 13,
"schoolRank": 41,
"score": 68.5
},
{
"classRank": 14,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 15,
"schoolRank": 43,
"score": 67.5
},
{
"classRank": 16,
"schoolRank": 48,
"score": 65
},
{
"classRank": 17,
"schoolRank": 49,
"score": 64.5
},
{
"classRank": 18,
"schoolRank": 51,
"score": 63.5
},
{
"classRank": 19,
"schoolRank": 52,
"score": 63
},
{
"classRank": 20,
"schoolRank": 58,
"score": 60
},
{
"classRank": 21,
"schoolRank": 62,
"score": 58
},
{
"classRank": 22,
"schoolRank": 65,
"score": 56.5
},
{
"classRank": 23,
"schoolRank": 68,
"score": 55
},
{
"classRank": 24,
"schoolRank": 70,
"score": 54
},
{
"classRank": 25,
"schoolRank": 73,
"score": 52.5
},
{
"classRank": 26,
"schoolRank": 74,
"score": 52
},
{
"classRank": 27,
"schoolRank": 74,
"score": 52
},
{
"classRank": 28,
"schoolRank": 75,
"score": 51.5
},
{
"classRank": 29,
"schoolRank": 81,
"score": 48.5
},
{
"classRank": 30,
"schoolRank": 81,
"score": 48.5
},
{
"classRank": 31,
"schoolRank": 83,
"score": 47.5
},
{
"classRank": 32,
"schoolRank": 83,
"score": 47.5
},
{
"classRank": 33,
"schoolRank": 85,
"score": 46.5
},
{
"classRank": 34,
"schoolRank": 86,
"score": 46
},
{
"classRank": 35,
"schoolRank": 89,
"score": 44.5
},
{
"classRank": 36,
"schoolRank": 92,
"score": 43
},
{
"classRank": 37,
"schoolRank": 93,
"score": 42.5
},
{
"classRank": 38,
"schoolRank": 93,
"score": 42.5
},
{
"classRank": 39,
"schoolRank": 95,
"score": 41.5
},
{
"classRank": 40,
"schoolRank": 98,
"score": 40
},
{
"classRank": 41,
"schoolRank": 100,
"score": 38.5
},
{
"classRank": 42,
"schoolRank": 106,
"score": 35.5
},
{
"classRank": 43,
"schoolRank": 106,
"score": 35.5
},
{
"classRank": 44,
"schoolRank": 109,
"score": 33
}
]
};
var gs8 = [];
getyk(data, gs8);
setMapS3(gs8, '历史', 'm3-8');
data={
"高三09班": [
{
"classRank": 1,
"schoolRank": 9,
"score": 85.5
},
{
"classRank": 2,
"schoolRank": 22,
"score": 78.5
},
{
"classRank": 3,
"schoolRank": 22,
"score": 78.5
},
{
"classRank": 4,
"schoolRank": 24,
"score": 77.5
},
{
"classRank": 5,
"schoolRank": 24,
"score": 77.5
},
{
"classRank": 6,
"schoolRank": 27,
"score": 76
},
{
"classRank": 7,
"schoolRank": 30,
"score": 74.5
},
{
"classRank": 8,
"schoolRank": 33,
"score": 73
},
{
"classRank": 9,
"schoolRank": 33,
"score": 73
},
{
"classRank": 10,
"schoolRank": 38,
"score": 70.5
},
{
"classRank": 11,
"schoolRank": 39,
"score": 70
},
{
"classRank": 12,
"schoolRank": 43,
"score": 68
},
{
"classRank": 13,
"schoolRank": 44,
"score": 67.5
},
{
"classRank": 14,
"schoolRank": 45,
"score": 67
},
{
"classRank": 15,
"schoolRank": 51,
"score": 64
},
{
"classRank": 16,
"schoolRank": 52,
"score": 63.5
},
{
"classRank": 17,
"schoolRank": 54,
"score": 62.5
},
{
"classRank": 18,
"schoolRank": 54,
"score": 62.5
},
{
"classRank": 19,
"schoolRank": 55,
"score": 62
},
{
"classRank": 20,
"schoolRank": 58,
"score": 60.5
},
{
"classRank": 21,
"schoolRank": 58,
"score": 60.5
},
{
"classRank": 22,
"schoolRank": 60,
"score": 59.5
},
{
"classRank": 23,
"schoolRank": 61,
"score": 59
},
{
"classRank": 24,
"schoolRank": 62,
"score": 58.5
},
{
"classRank": 25,
"schoolRank": 65,
"score": 57
},
{
"classRank": 26,
"schoolRank": 66,
"score": 56.5
},
{
"classRank": 27,
"schoolRank": 67,
"score": 56
},
{
"classRank": 28,
"schoolRank": 70,
"score": 54.5
},
{
"classRank": 29,
"schoolRank": 74,
"score": 52.5
},
{
"classRank": 30,
"schoolRank": 74,
"score": 52.5
},
{
"classRank": 31,
"schoolRank": 74,
"score": 52.5
},
{
"classRank": 32,
"schoolRank": 78,
"score": 50.5
},
{
"classRank": 33,
"schoolRank": 80,
"score": 49.5
},
{
"classRank": 34,
"schoolRank": 82,
"score": 48.5
},
{
"classRank": 35,
"schoolRank": 84,
"score": 47.5
},
{
"classRank": 36,
"schoolRank": 85,
"score": 47
},
{
"classRank": 37,
"schoolRank": 86,
"score": 46.5
},
{
"classRank": 38,
"schoolRank": 91,
"score": 44
},
{
"classRank": 39,
"schoolRank": 92,
"score": 43.5
},
{
"classRank": 40,
"schoolRank": 96,
"score": 41.5
},
{
"classRank": 41,
"schoolRank": 105,
"score": 37
},
{
"classRank": 42,
"schoolRank": 109,
"score": 33.5
}
],
"高三07班": [
{
"classRank": 1,
"schoolRank": 11,
"score": 84
},
{
"classRank": 2,
"schoolRank": 17,
"score": 81
},
{
"classRank": 3,
"schoolRank": 19,
"score": 80
},
{
"classRank": 4,
"schoolRank": 19,
"score": 80
},
{
"classRank": 5,
"schoolRank": 20,
"score": 79.5
},
{
"classRank": 6,
"schoolRank": 25,
"score": 77
},
{
"classRank": 7,
"schoolRank": 25,
"score": 77
},
{
"classRank": 8,
"schoolRank": 26,
"score": 76.5
},
{
"classRank": 9,
"schoolRank": 29,
"score": 75
},
{
"classRank": 10,
"schoolRank": 34,
"score": 72.5
},
{
"classRank": 11,
"schoolRank": 34,
"score": 72.5
},
{
"classRank": 12,
"schoolRank": 35,
"score": 72
},
{
"classRank": 13,
"schoolRank": 36,
"score": 71.5
},
{
"classRank": 14,
"schoolRank": 37,
"score": 71
},
{
"classRank": 15,
"schoolRank": 37,
"score": 71
},
{
"classRank": 16,
"schoolRank": 44,
"score": 67.5
},
{
"classRank": 17,
"schoolRank": 45,
"score": 67
},
{
"classRank": 18,
"schoolRank": 48,
"score": 65.5
},
{
"classRank": 19,
"schoolRank": 48,
"score": 65.5
},
{
"classRank": 20,
"schoolRank": 53,
"score": 63
},
{
"classRank": 21,
"schoolRank": 54,
"score": 62.5
},
{
"classRank": 22,
"schoolRank": 56,
"score": 61.5
},
{
"classRank": 23,
"schoolRank": 57,
"score": 61
},
{
"classRank": 24,
"schoolRank": 60,
"score": 59.5
},
{
"classRank": 25,
"schoolRank": 60,
"score": 59.5
},
{
"classRank": 26,
"schoolRank": 61,
"score": 59
},
{
"classRank": 27,
"schoolRank": 62,
"score": 58.5
},
{
"classRank": 28,
"schoolRank": 68,
"score": 55.5
},
{
"classRank": 29,
"schoolRank": 71,
"score": 54
},
{
"classRank": 30,
"schoolRank": 74,
"score": 52.5
},
{
"classRank": 31,
"schoolRank": 77,
"score": 51
},
{
"classRank": 32,
"schoolRank": 80,
"score": 49.5
},
{
"classRank": 33,
"schoolRank": 81,
"score": 49
},
{
"classRank": 34,
"schoolRank": 82,
"score": 48.5
},
{
"classRank": 35,
"schoolRank": 82,
"score": 48.5
},
{
"classRank": 36,
"schoolRank": 84,
"score": 47.5
},
{
"classRank": 37,
"schoolRank": 84,
"score": 47.5
},
{
"classRank": 38,
"schoolRank": 84,
"score": 47.5
},
{
"classRank": 39,
"schoolRank": 86,
"score": 46.5
},
{
"classRank": 40,
"schoolRank": 88,
"score": 45.5
},
{
"classRank": 41,
"schoolRank": 88,
"score": 45.5
},
{
"classRank": 42,
"schoolRank": 91,
"score": 44
},
{
"classRank": 43,
"schoolRank": 96,
"score": 41.5
},
{
"classRank": 44,
"schoolRank": 101,
"score": 39
},
{
"classRank": 45,
"schoolRank": 102,
"score": 38.5
},
{
"classRank": 46,
"schoolRank": 105,
"score": 37
},
{
"classRank": 47,
"schoolRank": 110,
"score": 32
}
],
"高三08班": [
{
"classRank": 1,
"schoolRank": 14,
"score": 82.5
},
{
"classRank": 2,
"schoolRank": 20,
"score": 79.5
},
{
"classRank": 3,
"schoolRank": 21,
"score": 79
},
{
"classRank": 4,
"schoolRank": 24,
"score": 77.5
},
{
"classRank": 5,
"schoolRank": 26,
"score": 76.5
},
{
"classRank": 6,
"schoolRank": 28,
"score": 75.5
},
{
"classRank": 7,
"schoolRank": 29,
"score": 75
},
{
"classRank": 8,
"schoolRank": 29,
"score": 75
},
{
"classRank": 9,
"schoolRank": 31,
"score": 74
},
{
"classRank": 10,
"schoolRank": 32,
"score": 73.5
},
{
"classRank": 11,
"schoolRank": 34,
"score": 72.5
},
{
"classRank": 12,
"schoolRank": 37,
"score": 71
},
{
"classRank": 13,
"schoolRank": 40,
"score": 69.5
},
{
"classRank": 14,
"schoolRank": 43,
"score": 68
},
{
"classRank": 15,
"schoolRank": 43,
"score": 68
},
{
"classRank": 16,
"schoolRank": 44,
"score": 67.5
},
{
"classRank": 17,
"schoolRank": 49,
"score": 65
},
{
"classRank": 18,
"schoolRank": 50,
"score": 64.5
},
{
"classRank": 19,
"schoolRank": 55,
"score": 62
},
{
"classRank": 20,
"schoolRank": 55,
"score": 62
},
{
"classRank": 21,
"schoolRank": 55,
"score": 62
},
{
"classRank": 22,
"schoolRank": 59,
"score": 60
},
{
"classRank": 23,
"schoolRank": 60,
"score": 59.5
},
{
"classRank": 24,
"schoolRank": 60,
"score": 59.5
},
{
"classRank": 25,
"schoolRank": 62,
"score": 58.5
},
{
"classRank": 26,
"schoolRank": 64,
"score": 57.5
},
{
"classRank": 27,
"schoolRank": 68,
"score": 55.5
},
{
"classRank": 28,
"schoolRank": 69,
"score": 55
},
{
"classRank": 29,
"schoolRank": 70,
"score": 54.5
},
{
"classRank": 30,
"schoolRank": 71,
"score": 54
},
{
"classRank": 31,
"schoolRank": 77,
"score": 51
},
{
"classRank": 32,
"schoolRank": 77,
"score": 51
},
{
"classRank": 33,
"schoolRank": 80,
"score": 49.5
},
{
"classRank": 34,
"schoolRank": 83,
"score": 48
},
{
"classRank": 35,
"schoolRank": 83,
"score": 48
},
{
"classRank": 36,
"schoolRank": 85,
"score": 47
},
{
"classRank": 37,
"schoolRank": 87,
"score": 46
},
{
"classRank": 38,
"schoolRank": 87,
"score": 46
},
{
"classRank": 39,
"schoolRank": 93,
"score": 43
},
{
"classRank": 40,
"schoolRank": 94,
"score": 42.5
},
{
"classRank": 41,
"schoolRank": 98,
"score": 40.5
},
{
"classRank": 42,
"schoolRank": 104,
"score": 37.5
}
],
"高三05班": [
{
"classRank": 1,
"schoolRank": 9,
"score": 85.5
},
{
"classRank": 2,
"schoolRank": 13,
"score": 83
},
{
"classRank": 3,
"schoolRank": 15,
"score": 82
},
{
"classRank": 4,
"schoolRank": 20,
"score": 79.5
},
{
"classRank": 5,
"schoolRank": 20,
"score": 79.5
},
{
"classRank": 6,
"schoolRank": 22,
"score": 78.5
},
{
"classRank": 7,
"schoolRank": 23,
"score": 78
},
{
"classRank": 8,
"schoolRank": 25,
"score": 77
},
{
"classRank": 9,
"schoolRank": 31,
"score": 74
},
{
"classRank": 10,
"schoolRank": 31,
"score": 74
},
{
"classRank": 11,
"schoolRank": 31,
"score": 74
},
{
"classRank": 12,
"schoolRank": 32,
"score": 73.5
},
{
"classRank": 13,
"schoolRank": 33,
"score": 73
},
{
"classRank": 14,
"schoolRank": 34,
"score": 72.5
},
{
"classRank": 15,
"schoolRank": 36,
"score": 71.5
},
{
"classRank": 16,
"schoolRank": 39,
"score": 70
},
{
"classRank": 17,
"schoolRank": 43,
"score": 68
},
{
"classRank": 18,
"schoolRank": 44,
"score": 67.5
},
{
"classRank": 19,
"schoolRank": 45,
"score": 67
},
{
"classRank": 20,
"schoolRank": 47,
"score": 66
},
{
"classRank": 21,
"schoolRank": 50,
"score": 64.5
},
{
"classRank": 22,
"schoolRank": 50,
"score": 64.5
},
{
"classRank": 23,
"schoolRank": 51,
"score": 64
},
{
"classRank": 24,
"schoolRank": 56,
"score": 61.5
},
{
"classRank": 25,
"schoolRank": 57,
"score": 61
},
{
"classRank": 26,
"schoolRank": 58,
"score": 60.5
},
{
"classRank": 27,
"schoolRank": 58,
"score": 60.5
},
{
"classRank": 28,
"schoolRank": 59,
"score": 60
},
{
"classRank": 29,
"schoolRank": 65,
"score": 57
},
{
"classRank": 30,
"schoolRank": 68,
"score": 55.5
},
{
"classRank": 31,
"schoolRank": 68,
"score": 55.5
},
{
"classRank": 32,
"schoolRank": 68,
"score": 55.5
},
{
"classRank": 33,
"schoolRank": 69,
"score": 55
},
{
"classRank": 34,
"schoolRank": 74,
"score": 52.5
},
{
"classRank": 35,
"schoolRank": 77,
"score": 51
},
{
"classRank": 36,
"schoolRank": 79,
"score": 50
},
{
"classRank": 37,
"schoolRank": 80,
"score": 49.5
},
{
"classRank": 38,
"schoolRank": 81,
"score": 49
},
{
"classRank": 39,
"schoolRank": 83,
"score": 48
},
{
"classRank": 40,
"schoolRank": 86,
"score": 46.5
},
{
"classRank": 41,
"schoolRank": 92,
"score": 43.5
}
],
"高三06班": [
{
"classRank": 1,
"schoolRank": 8,
"score": 86.5
},
{
"classRank": 2,
"schoolRank": 9,
"score": 85.5
},
{
"classRank": 3,
"schoolRank": 10,
"score": 84.5
},
{
"classRank": 4,
"schoolRank": 18,
"score": 80.5
},
{
"classRank": 5,
"schoolRank": 18,
"score": 80.5
},
{
"classRank": 6,
"schoolRank": 20,
"score": 79.5
},
{
"classRank": 7,
"schoolRank": 22,
"score": 78.5
},
{
"classRank": 8,
"schoolRank": 27,
"score": 76
},
{
"classRank": 9,
"schoolRank": 27,
"score": 76
},
{
"classRank": 10,
"schoolRank": 28,
"score": 75.5
},
{
"classRank": 11,
"schoolRank": 30,
"score": 74.5
},
{
"classRank": 12,
"schoolRank": 33,
"score": 73
},
{
"classRank": 13,
"schoolRank": 35,
"score": 72
},
{
"classRank": 14,
"schoolRank": 37,
"score": 71
},
{
"classRank": 15,
"schoolRank": 37,
"score": 71
},
{
"classRank": 16,
"schoolRank": 38,
"score": 70.5
},
{
"classRank": 17,
"schoolRank": 46,
"score": 66.5
},
{
"classRank": 18,
"schoolRank": 47,
"score": 66
},
{
"classRank": 19,
"schoolRank": 50,
"score": 64.5
},
{
"classRank": 20,
"schoolRank": 51,
"score": 64
},
{
"classRank": 21,
"schoolRank": 52,
"score": 63.5
},
{
"classRank": 22,
"schoolRank": 52,
"score": 63.5
},
{
"classRank": 23,
"schoolRank": 55,
"score": 62
},
{
"classRank": 24,
"schoolRank": 57,
"score": 61
},
{
"classRank": 25,
"schoolRank": 60,
"score": 59.5
},
{
"classRank": 26,
"schoolRank": 65,
"score": 57
},
{
"classRank": 27,
"schoolRank": 66,
"score": 56.5
},
{
"classRank": 28,
"schoolRank": 67,
"score": 56
},
{
"classRank": 29,
"schoolRank": 68,
"score": 55.5
},
{
"classRank": 30,
"schoolRank": 70,
"score": 54.5
},
{
"classRank": 31,
"schoolRank": 73,
"score": 53
},
{
"classRank": 32,
"schoolRank": 74,
"score": 52.5
},
{
"classRank": 33,
"schoolRank": 75,
"score": 52
},
{
"classRank": 34,
"schoolRank": 77,
"score": 51
},
{
"classRank": 35,
"schoolRank": 78,
"score": 50.5
},
{
"classRank": 36,
"schoolRank": 83,
"score": 48
},
{
"classRank": 37,
"schoolRank": 86,
"score": 46.5
},
{
"classRank": 38,
"schoolRank": 88,
"score": 45.5
},
{
"classRank": 39,
"schoolRank": 90,
"score": 44.5
},
{
"classRank": 40,
"schoolRank": 91,
"score": 44
},
{
"classRank": 41,
"schoolRank": 91,
"score": 44
},
{
"classRank": 42,
"schoolRank": 92,
"score": 43.5
},
{
"classRank": 43,
"schoolRank": 98,
"score": 40.5
},
{
"classRank": 44,
"schoolRank": 98,
"score": 40.5
},
{
"classRank": 45,
"schoolRank": 102,
"score": 38.5
},
{
"classRank": 46,
"schoolRank": 108,
"score": 35
}
],
"高三03班": [
{
"classRank": 1,
"schoolRank": 3,
"score": 90
},
{
"classRank": 2,
"schoolRank": 5,
"score": 88.5
},
{
"classRank": 3,
"schoolRank": 12,
"score": 83.5
},
{
"classRank": 4,
"schoolRank": 13,
"score": 83
},
{
"classRank": 5,
"schoolRank": 15,
"score": 82
},
{
"classRank": 6,
"schoolRank": 18,
"score": 80.5
},
{
"classRank": 7,
"schoolRank": 19,
"score": 80
},
{
"classRank": 8,
"schoolRank": 20,
"score": 79.5
},
{
"classRank": 9,
"schoolRank": 21,
"score": 79
},
{
"classRank": 10,
"schoolRank": 21,
"score": 79
},
{
"classRank": 11,
"schoolRank": 22,
"score": 78.5
},
{
"classRank": 12,
"schoolRank": 25,
"score": 77
},
{
"classRank": 13,
"schoolRank": 26,
"score": 76.5
},
{
"classRank": 14,
"schoolRank": 26,
"score": 76.5
},
{
"classRank": 15,
"schoolRank": 26,
"score": 76.5
},
{
"classRank": 16,
"schoolRank": 27,
"score": 76
},
{
"classRank": 17,
"schoolRank": 36,
"score": 71.5
},
{
"classRank": 18,
"schoolRank": 43,
"score": 68
},
{
"classRank": 19,
"schoolRank": 43,
"score": 68
},
{
"classRank": 20,
"schoolRank": 44,
"score": 67.5
},
{
"classRank": 21,
"schoolRank": 48,
"score": 65.5
},
{
"classRank": 22,
"schoolRank": 50,
"score": 64.5
},
{
"classRank": 23,
"schoolRank": 50,
"score": 64.5
},
{
"classRank": 24,
"schoolRank": 50,
"score": 64.5
},
{
"classRank": 25,
"schoolRank": 51,
"score": 64
},
{
"classRank": 26,
"schoolRank": 51,
"score": 64
},
{
"classRank": 27,
"schoolRank": 53,
"score": 63
},
{
"classRank": 28,
"schoolRank": 58,
"score": 60.5
},
{
"classRank": 29,
"schoolRank": 63,
"score": 58
},
{
"classRank": 30,
"schoolRank": 63,
"score": 58
},
{
"classRank": 31,
"schoolRank": 63,
"score": 58
},
{
"classRank": 32,
"schoolRank": 64,
"score": 57.5
},
{
"classRank": 33,
"schoolRank": 72,
"score": 53.5
},
{
"classRank": 34,
"schoolRank": 74,
"score": 52.5
},
{
"classRank": 35,
"schoolRank": 75,
"score": 52
},
{
"classRank": 36,
"schoolRank": 75,
"score": 52
},
{
"classRank": 37,
"schoolRank": 76,
"score": 51.5
},
{
"classRank": 38,
"schoolRank": 77,
"score": 51
},
{
"classRank": 39,
"schoolRank": 78,
"score": 50.5
},
{
"classRank": 40,
"schoolRank": 79,
"score": 50
},
{
"classRank": 41,
"schoolRank": 79,
"score": 50
},
{
"classRank": 42,
"schoolRank": 80,
"score": 49.5
},
{
"classRank": 43,
"schoolRank": 93,
"score": 43
},
{
"classRank": 44,
"schoolRank": 99,
"score": 40
},
{
"classRank": 45,
"schoolRank": 100,
"score": 39.5
},
{
"classRank": 46,
"schoolRank": 101,
"score": 39
},
{
"classRank": 47,
"schoolRank": 102,
"score": 38.5
},
{
"classRank": 48,
"schoolRank": 103,
"score": 38
},
{
"classRank": 49,
"schoolRank": 105,
"score": 37
}
],
"高三04班": [
{
"classRank": 1,
"schoolRank": 2,
"score": 94
},
{
"classRank": 2,
"schoolRank": 9,
"score": 85.5
},
{
"classRank": 3,
"schoolRank": 9,
"score": 85.5
},
{
"classRank": 4,
"schoolRank": 10,
"score": 84.5
},
{
"classRank": 5,
"schoolRank": 15,
"score": 82
},
{
"classRank": 6,
"schoolRank": 19,
"score": 80
},
{
"classRank": 7,
"schoolRank": 19,
"score": 80
},
{
"classRank": 8,
"schoolRank": 19,
"score": 80
},
{
"classRank": 9,
"schoolRank": 23,
"score": 78
},
{
"classRank": 10,
"schoolRank": 26,
"score": 76.5
},
{
"classRank": 11,
"schoolRank": 29,
"score": 75
},
{
"classRank": 12,
"schoolRank": 29,
"score": 75
},
{
"classRank": 13,
"schoolRank": 32,
"score": 73.5
},
{
"classRank": 14,
"schoolRank": 35,
"score": 72
},
{
"classRank": 15,
"schoolRank": 35,
"score": 72
},
{
"classRank": 16,
"schoolRank": 38,
"score": 70.5
},
{
"classRank": 17,
"schoolRank": 39,
"score": 70
},
{
"classRank": 18,
"schoolRank": 41,
"score": 69
},
{
"classRank": 19,
"schoolRank": 41,
"score": 69
},
{
"classRank": 20,
"schoolRank": 44,
"score": 67.5
},
{
"classRank": 21,
"schoolRank": 49,
"score": 65
},
{
"classRank": 22,
"schoolRank": 51,
"score": 64
},
{
"classRank": 23,
"schoolRank": 51,
"score": 64
},
{
"classRank": 24,
"schoolRank": 53,
"score": 63
},
{
"classRank": 25,
"schoolRank": 58,
"score": 60.5
},
{
"classRank": 26,
"schoolRank": 60,
"score": 59.5
},
{
"classRank": 27,
"schoolRank": 61,
"score": 59
},
{
"classRank": 28,
"schoolRank": 65,
"score": 57
},
{
"classRank": 29,
"schoolRank": 68,
"score": 55.5
},
{
"classRank": 30,
"schoolRank": 68,
"score": 55.5
},
{
"classRank": 31,
"schoolRank": 71,
"score": 54
},
{
"classRank": 32,
"schoolRank": 71,
"score": 54
},
{
"classRank": 33,
"schoolRank": 72,
"score": 53.5
},
{
"classRank": 34,
"schoolRank": 72,
"score": 53.5
},
{
"classRank": 35,
"schoolRank": 75,
"score": 52
},
{
"classRank": 36,
"schoolRank": 77,
"score": 51
},
{
"classRank": 37,
"schoolRank": 77,
"score": 51
},
{
"classRank": 38,
"schoolRank": 80,
"score": 49.5
},
{
"classRank": 39,
"schoolRank": 83,
"score": 48
},
{
"classRank": 40,
"schoolRank": 87,
"score": 46
},
{
"classRank": 41,
"schoolRank": 90,
"score": 44.5
}
],
"高三01班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 94.5
},
{
"classRank": 2,
"schoolRank": 3,
"score": 90
},
{
"classRank": 3,
"schoolRank": 6,
"score": 88
},
{
"classRank": 4,
"schoolRank": 7,
"score": 87
},
{
"classRank": 5,
"schoolRank": 8,
"score": 86.5
},
{
"classRank": 6,
"schoolRank": 13,
"score": 83
},
{
"classRank": 7,
"schoolRank": 16,
"score": 81.5
},
{
"classRank": 8,
"schoolRank": 17,
"score": 81
},
{
"classRank": 9,
"schoolRank": 18,
"score": 80.5
},
{
"classRank": 10,
"schoolRank": 18,
"score": 80.5
},
{
"classRank": 11,
"schoolRank": 18,
"score": 80.5
},
{
"classRank": 12,
"schoolRank": 20,
"score": 79.5
},
{
"classRank": 13,
"schoolRank": 25,
"score": 77
},
{
"classRank": 14,
"schoolRank": 30,
"score": 74.5
},
{
"classRank": 15,
"schoolRank": 31,
"score": 74
},
{
"classRank": 16,
"schoolRank": 35,
"score": 72
},
{
"classRank": 17,
"schoolRank": 37,
"score": 71
},
{
"classRank": 18,
"schoolRank": 37,
"score": 71
},
{
"classRank": 19,
"schoolRank": 41,
"score": 69
},
{
"classRank": 20,
"schoolRank": 41,
"score": 69
},
{
"classRank": 21,
"schoolRank": 43,
"score": 68
},
{
"classRank": 22,
"schoolRank": 44,
"score": 67.5
},
{
"classRank": 23,
"schoolRank": 45,
"score": 67
},
{
"classRank": 24,
"schoolRank": 45,
"score": 67
},
{
"classRank": 25,
"schoolRank": 46,
"score": 66.5
},
{
"classRank": 26,
"schoolRank": 51,
"score": 64
},
{
"classRank": 27,
"schoolRank": 55,
"score": 62
},
{
"classRank": 28,
"schoolRank": 58,
"score": 60.5
},
{
"classRank": 29,
"schoolRank": 58,
"score": 60.5
},
{
"classRank": 30,
"schoolRank": 59,
"score": 60
},
{
"classRank": 31,
"schoolRank": 60,
"score": 59.5
},
{
"classRank": 32,
"schoolRank": 61,
"score": 59
},
{
"classRank": 33,
"schoolRank": 63,
"score": 58
},
{
"classRank": 34,
"schoolRank": 67,
"score": 56
},
{
"classRank": 35,
"schoolRank": 70,
"score": 54.5
}
],
"高三02班": [
{
"classRank": 1,
"schoolRank": 4,
"score": 89
},
{
"classRank": 2,
"schoolRank": 4,
"score": 89
},
{
"classRank": 3,
"schoolRank": 11,
"score": 84
},
{
"classRank": 4,
"schoolRank": 11,
"score": 84
},
{
"classRank": 5,
"schoolRank": 11,
"score": 84
},
{
"classRank": 6,
"schoolRank": 14,
"score": 82.5
},
{
"classRank": 7,
"schoolRank": 15,
"score": 82
},
{
"classRank": 8,
"schoolRank": 20,
"score": 79.5
},
{
"classRank": 9,
"schoolRank": 21,
"score": 79
},
{
"classRank": 10,
"schoolRank": 22,
"score": 78.5
},
{
"classRank": 11,
"schoolRank": 23,
"score": 78
},
{
"classRank": 12,
"schoolRank": 25,
"score": 77
},
{
"classRank": 13,
"schoolRank": 30,
"score": 74.5
},
{
"classRank": 14,
"schoolRank": 30,
"score": 74.5
},
{
"classRank": 15,
"schoolRank": 31,
"score": 74
},
{
"classRank": 16,
"schoolRank": 32,
"score": 73.5
},
{
"classRank": 17,
"schoolRank": 34,
"score": 72.5
},
{
"classRank": 18,
"schoolRank": 39,
"score": 70
},
{
"classRank": 19,
"schoolRank": 41,
"score": 69
},
{
"classRank": 20,
"schoolRank": 42,
"score": 68.5
},
{
"classRank": 21,
"schoolRank": 42,
"score": 68.5
},
{
"classRank": 22,
"schoolRank": 44,
"score": 67.5
},
{
"classRank": 23,
"schoolRank": 44,
"score": 67.5
},
{
"classRank": 24,
"schoolRank": 45,
"score": 67
},
{
"classRank": 25,
"schoolRank": 50,
"score": 64.5
},
{
"classRank": 26,
"schoolRank": 52,
"score": 63.5
},
{
"classRank": 27,
"schoolRank": 57,
"score": 61
},
{
"classRank": 28,
"schoolRank": 61,
"score": 59
},
{
"classRank": 29,
"schoolRank": 64,
"score": 57.5
},
{
"classRank": 30,
"schoolRank": 65,
"score": 57
},
{
"classRank": 31,
"schoolRank": 69,
"score": 55
},
{
"classRank": 32,
"schoolRank": 70,
"score": 54.5
},
{
"classRank": 33,
"schoolRank": 70,
"score": 54.5
},
{
"classRank": 34,
"schoolRank": 72,
"score": 53.5
},
{
"classRank": 35,
"schoolRank": 74,
"score": 52.5
},
{
"classRank": 36,
"schoolRank": 75,
"score": 52
},
{
"classRank": 37,
"schoolRank": 76,
"score": 51.5
},
{
"classRank": 38,
"schoolRank": 77,
"score": 51
},
{
"classRank": 39,
"schoolRank": 77,
"score": 51
},
{
"classRank": 40,
"schoolRank": 79,
"score": 50
},
{
"classRank": 41,
"schoolRank": 90,
"score": 44.5
},
{
"classRank": 42,
"schoolRank": 93,
"score": 43
},
{
"classRank": 43,
"schoolRank": 93,
"score": 43
},
{
"classRank": 44,
"schoolRank": 94,
"score": 42.5
}
],
"高三10班": [
{
"classRank": 1,
"schoolRank": 18,
"score": 80.5
},
{
"classRank": 2,
"schoolRank": 20,
"score": 79.5
},
{
"classRank": 3,
"schoolRank": 24,
"score": 77.5
},
{
"classRank": 4,
"schoolRank": 28,
"score": 75.5
},
{
"classRank": 5,
"schoolRank": 29,
"score": 75
},
{
"classRank": 6,
"schoolRank": 30,
"score": 74.5
},
{
"classRank": 7,
"schoolRank": 30,
"score": 74.5
},
{
"classRank": 8,
"schoolRank": 33,
"score": 73
},
{
"classRank": 9,
"schoolRank": 35,
"score": 72
},
{
"classRank": 10,
"schoolRank": 36,
"score": 71.5
},
{
"classRank": 11,
"schoolRank": 40,
"score": 69.5
},
{
"classRank": 12,
"schoolRank": 41,
"score": 69
},
{
"classRank": 13,
"schoolRank": 42,
"score": 68.5
},
{
"classRank": 14,
"schoolRank": 48,
"score": 65.5
},
{
"classRank": 15,
"schoolRank": 50,
"score": 64.5
},
{
"classRank": 16,
"schoolRank": 55,
"score": 62
},
{
"classRank": 17,
"schoolRank": 55,
"score": 62
},
{
"classRank": 18,
"schoolRank": 56,
"score": 61.5
},
{
"classRank": 19,
"schoolRank": 57,
"score": 61
},
{
"classRank": 20,
"schoolRank": 62,
"score": 58.5
},
{
"classRank": 21,
"schoolRank": 64,
"score": 57.5
},
{
"classRank": 22,
"schoolRank": 67,
"score": 56
},
{
"classRank": 23,
"schoolRank": 68,
"score": 55.5
},
{
"classRank": 24,
"schoolRank": 69,
"score": 55
},
{
"classRank": 25,
"schoolRank": 70,
"score": 54.5
},
{
"classRank": 26,
"schoolRank": 75,
"score": 52
},
{
"classRank": 27,
"schoolRank": 77,
"score": 51
},
{
"classRank": 28,
"schoolRank": 79,
"score": 50
},
{
"classRank": 29,
"schoolRank": 80,
"score": 49.5
},
{
"classRank": 30,
"schoolRank": 80,
"score": 49.5
},
{
"classRank": 31,
"schoolRank": 81,
"score": 49
},
{
"classRank": 32,
"schoolRank": 82,
"score": 48.5
},
{
"classRank": 33,
"schoolRank": 84,
"score": 47.5
},
{
"classRank": 34,
"schoolRank": 85,
"score": 47
},
{
"classRank": 35,
"schoolRank": 88,
"score": 45.5
},
{
"classRank": 36,
"schoolRank": 89,
"score": 45
},
{
"classRank": 37,
"schoolRank": 90,
"score": 44.5
},
{
"classRank": 38,
"schoolRank": 92,
"score": 43.5
},
{
"classRank": 39,
"schoolRank": 94,
"score": 42.5
},
{
"classRank": 40,
"schoolRank": 97,
"score": 41
},
{
"classRank": 41,
"schoolRank": 99,
"score": 40
},
{
"classRank": 42,
"schoolRank": 100,
"score": 39.5
},
{
"classRank": 43,
"schoolRank": 105,
"score": 37
},
{
"classRank": 44,
"schoolRank": 107,
"score": 36
}
],
"高三11班": [
{
"classRank": 1,
"schoolRank": 22,
"score": 78.5
},
{
"classRank": 2,
"schoolRank": 22,
"score": 78.5
},
{
"classRank": 3,
"schoolRank": 22,
"score": 78.5
},
{
"classRank": 4,
"schoolRank": 26,
"score": 76.5
},
{
"classRank": 5,
"schoolRank": 27,
"score": 76
},
{
"classRank": 6,
"schoolRank": 31,
"score": 74
},
{
"classRank": 7,
"schoolRank": 33,
"score": 73
},
{
"classRank": 8,
"schoolRank": 34,
"score": 72.5
},
{
"classRank": 9,
"schoolRank": 37,
"score": 71
},
{
"classRank": 10,
"schoolRank": 41,
"score": 69
},
{
"classRank": 11,
"schoolRank": 45,
"score": 67
},
{
"classRank": 12,
"schoolRank": 46,
"score": 66.5
},
{
"classRank": 13,
"schoolRank": 49,
"score": 65
},
{
"classRank": 14,
"schoolRank": 50,
"score": 64.5
},
{
"classRank": 15,
"schoolRank": 54,
"score": 62.5
},
{
"classRank": 16,
"schoolRank": 54,
"score": 62.5
},
{
"classRank": 17,
"schoolRank": 55,
"score": 62
},
{
"classRank": 18,
"schoolRank": 58,
"score": 60.5
},
{
"classRank": 19,
"schoolRank": 60,
"score": 59.5
},
{
"classRank": 20,
"schoolRank": 61,
"score": 59
},
{
"classRank": 21,
"schoolRank": 62,
"score": 58.5
},
{
"classRank": 22,
"schoolRank": 64,
"score": 57.5
},
{
"classRank": 23,
"schoolRank": 65,
"score": 57
},
{
"classRank": 24,
"schoolRank": 65,
"score": 57
},
{
"classRank": 25,
"schoolRank": 66,
"score": 56.5
},
{
"classRank": 26,
"schoolRank": 73,
"score": 53
},
{
"classRank": 27,
"schoolRank": 74,
"score": 52.5
},
{
"classRank": 28,
"schoolRank": 77,
"score": 51
},
{
"classRank": 29,
"schoolRank": 80,
"score": 49.5
},
{
"classRank": 30,
"schoolRank": 83,
"score": 48
},
{
"classRank": 31,
"schoolRank": 85,
"score": 47
},
{
"classRank": 32,
"schoolRank": 87,
"score": 46
},
{
"classRank": 33,
"schoolRank": 87,
"score": 46
},
{
"classRank": 34,
"schoolRank": 90,
"score": 44.5
},
{
"classRank": 35,
"schoolRank": 90,
"score": 44.5
},
{
"classRank": 36,
"schoolRank": 93,
"score": 43
},
{
"classRank": 37,
"schoolRank": 94,
"score": 42.5
},
{
"classRank": 38,
"schoolRank": 94,
"score": 42.5
},
{
"classRank": 39,
"schoolRank": 95,
"score": 42
},
{
"classRank": 40,
"schoolRank": 95,
"score": 42
},
{
"classRank": 41,
"schoolRank": 100,
"score": 39.5
},
{
"classRank": 42,
"schoolRank": 102,
"score": 38.5
},
{
"classRank": 43,
"schoolRank": 106,
"score": 36.5
},
{
"classRank": 44,
"schoolRank": 106,
"score": 36.5
}
]
};
var gs9 = [];
getyk(data, gs9);
setMapS3(gs9, '地理', 'm3-9');
ddb(3);

//考试段人数分布
data={
"高一08班": [
{
"classRank": 1,
"schoolRank": 27,
"score": 869
},
{
"classRank": 2,
"schoolRank": 33,
"score": 859
},
{
"classRank": 3,
"schoolRank": 49,
"score": 836
},
{
"classRank": 4,
"schoolRank": 55,
"score": 827.5
},
{
"classRank": 5,
"schoolRank": 63,
"score": 818.5
},
{
"classRank": 6,
"schoolRank": 80,
"score": 798
},
{
"classRank": 7,
"schoolRank": 84,
"score": 794.5
},
{
"classRank": 8,
"schoolRank": 96,
"score": 782.5
},
{
"classRank": 9,
"schoolRank": 112,
"score": 763.5
},
{
"classRank": 10,
"schoolRank": 132,
"score": 743
},
{
"classRank": 11,
"schoolRank": 136,
"score": 739.5
},
{
"classRank": 12,
"schoolRank": 137,
"score": 739
},
{
"classRank": 13,
"schoolRank": 146,
"score": 730
},
{
"classRank": 14,
"schoolRank": 146,
"score": 730
},
{
"classRank": 15,
"schoolRank": 147,
"score": 729.5
},
{
"classRank": 16,
"schoolRank": 178,
"score": 694
},
{
"classRank": 17,
"schoolRank": 191,
"score": 683.5
},
{
"classRank": 18,
"schoolRank": 192,
"score": 683
},
{
"classRank": 19,
"schoolRank": 207,
"score": 667.5
},
{
"classRank": 20,
"schoolRank": 214,
"score": 660.5
},
{
"classRank": 21,
"schoolRank": 234,
"score": 633.5
},
{
"classRank": 22,
"schoolRank": 236,
"score": 632.5
},
{
"classRank": 23,
"schoolRank": 239,
"score": 629
},
{
"classRank": 24,
"schoolRank": 242,
"score": 627.5
},
{
"classRank": 25,
"schoolRank": 265,
"score": 606
},
{
"classRank": 26,
"schoolRank": 281,
"score": 590
},
{
"classRank": 27,
"schoolRank": 289,
"score": 581
},
{
"classRank": 28,
"schoolRank": 290,
"score": 577
},
{
"classRank": 29,
"schoolRank": 304,
"score": 558
},
{
"classRank": 30,
"schoolRank": 307,
"score": 555
},
{
"classRank": 31,
"schoolRank": 312,
"score": 550.5
},
{
"classRank": 32,
"schoolRank": 322,
"score": 540
},
{
"classRank": 33,
"schoolRank": 343,
"score": 514
},
{
"classRank": 34,
"schoolRank": 348,
"score": 509.5
},
{
"classRank": 35,
"schoolRank": 351,
"score": 503
},
{
"classRank": 36,
"schoolRank": 356,
"score": 497.5
},
{
"classRank": 37,
"schoolRank": 360,
"score": 484
}
],
"高一09班": [
{
"classRank": 1,
"schoolRank": 43,
"score": 844
},
{
"classRank": 2,
"schoolRank": 50,
"score": 834
},
{
"classRank": 3,
"schoolRank": 68,
"score": 810.5
},
{
"classRank": 4,
"schoolRank": 75,
"score": 803.5
},
{
"classRank": 5,
"schoolRank": 75,
"score": 803.5
},
{
"classRank": 6,
"schoolRank": 76,
"score": 802
},
{
"classRank": 7,
"schoolRank": 77,
"score": 801.5
},
{
"classRank": 8,
"schoolRank": 89,
"score": 787.5
},
{
"classRank": 9,
"schoolRank": 102,
"score": 778.5
},
{
"classRank": 10,
"schoolRank": 117,
"score": 760.5
},
{
"classRank": 11,
"schoolRank": 131,
"score": 743.5
},
{
"classRank": 12,
"schoolRank": 133,
"score": 742.5
},
{
"classRank": 13,
"schoolRank": 154,
"score": 718.5
},
{
"classRank": 14,
"schoolRank": 164,
"score": 709
},
{
"classRank": 15,
"schoolRank": 169,
"score": 705.5
},
{
"classRank": 16,
"schoolRank": 172,
"score": 702
},
{
"classRank": 17,
"schoolRank": 189,
"score": 685
},
{
"classRank": 18,
"schoolRank": 205,
"score": 668.5
},
{
"classRank": 19,
"schoolRank": 216,
"score": 659
},
{
"classRank": 20,
"schoolRank": 217,
"score": 657.5
},
{
"classRank": 21,
"schoolRank": 218,
"score": 654.5
},
{
"classRank": 22,
"schoolRank": 242,
"score": 627.5
},
{
"classRank": 23,
"schoolRank": 247,
"score": 624
},
{
"classRank": 24,
"schoolRank": 260,
"score": 610
},
{
"classRank": 25,
"schoolRank": 266,
"score": 604.5
},
{
"classRank": 26,
"schoolRank": 270,
"score": 602
},
{
"classRank": 27,
"schoolRank": 273,
"score": 597
},
{
"classRank": 28,
"schoolRank": 296,
"score": 571
},
{
"classRank": 29,
"schoolRank": 314,
"score": 549
},
{
"classRank": 30,
"schoolRank": 317,
"score": 546.5
},
{
"classRank": 31,
"schoolRank": 329,
"score": 533
},
{
"classRank": 32,
"schoolRank": 331,
"score": 532
},
{
"classRank": 33,
"schoolRank": 337,
"score": 522
},
{
"classRank": 34,
"schoolRank": 355,
"score": 499.5
},
{
"classRank": 35,
"schoolRank": 358,
"score": 492
},
{
"classRank": 36,
"schoolRank": 359,
"score": 486.5
},
{
"classRank": 37,
"schoolRank": 363,
"score": 478
},
{
"classRank": 38,
"schoolRank": 371,
"score": 464.5
},
{
"classRank": 39,
"schoolRank": 378,
"score": 447.5
},
{
"classRank": 40,
"schoolRank": 388,
"score": 419.5
},
{
"classRank": 41,
"schoolRank": 389,
"score": 416.5
}
],
"高一06班": [
{
"classRank": 1,
"schoolRank": 15,
"score": 887.5
},
{
"classRank": 2,
"schoolRank": 19,
"score": 876.5
},
{
"classRank": 3,
"schoolRank": 29,
"score": 864
},
{
"classRank": 4,
"schoolRank": 33,
"score": 859
},
{
"classRank": 5,
"schoolRank": 36,
"score": 848.5
},
{
"classRank": 6,
"schoolRank": 39,
"score": 846
},
{
"classRank": 7,
"schoolRank": 48,
"score": 838
},
{
"classRank": 8,
"schoolRank": 50,
"score": 834
},
{
"classRank": 9,
"schoolRank": 91,
"score": 786.5
},
{
"classRank": 10,
"schoolRank": 93,
"score": 785.5
},
{
"classRank": 11,
"schoolRank": 111,
"score": 766
},
{
"classRank": 12,
"schoolRank": 119,
"score": 759
},
{
"classRank": 13,
"schoolRank": 127,
"score": 748.5
},
{
"classRank": 14,
"schoolRank": 135,
"score": 741
},
{
"classRank": 15,
"schoolRank": 137,
"score": 739
},
{
"classRank": 16,
"schoolRank": 148,
"score": 728
},
{
"classRank": 17,
"schoolRank": 170,
"score": 704.5
},
{
"classRank": 18,
"schoolRank": 175,
"score": 696
},
{
"classRank": 19,
"schoolRank": 183,
"score": 689.5
},
{
"classRank": 20,
"schoolRank": 189,
"score": 685
},
{
"classRank": 21,
"schoolRank": 196,
"score": 679
},
{
"classRank": 22,
"schoolRank": 210,
"score": 664.5
},
{
"classRank": 23,
"schoolRank": 226,
"score": 646.5
},
{
"classRank": 24,
"schoolRank": 253,
"score": 617.5
},
{
"classRank": 25,
"schoolRank": 255,
"score": 616
},
{
"classRank": 26,
"schoolRank": 258,
"score": 612.5
},
{
"classRank": 27,
"schoolRank": 260,
"score": 610
},
{
"classRank": 28,
"schoolRank": 272,
"score": 598
},
{
"classRank": 29,
"schoolRank": 275,
"score": 594.5
},
{
"classRank": 30,
"schoolRank": 287,
"score": 582.5
},
{
"classRank": 31,
"schoolRank": 304,
"score": 558
},
{
"classRank": 32,
"schoolRank": 310,
"score": 551.5
},
{
"classRank": 33,
"schoolRank": 324,
"score": 538
},
{
"classRank": 34,
"schoolRank": 325,
"score": 537.5
},
{
"classRank": 35,
"schoolRank": 327,
"score": 534.5
},
{
"classRank": 36,
"schoolRank": 330,
"score": 532.5
}
],
"高一07班": [
{
"classRank": 1,
"schoolRank": 20,
"score": 876
},
{
"classRank": 2,
"schoolRank": 32,
"score": 859.5
},
{
"classRank": 3,
"schoolRank": 33,
"score": 859
},
{
"classRank": 4,
"schoolRank": 37,
"score": 847.5
},
{
"classRank": 5,
"schoolRank": 60,
"score": 821
},
{
"classRank": 6,
"schoolRank": 61,
"score": 820
},
{
"classRank": 7,
"schoolRank": 70,
"score": 809
},
{
"classRank": 8,
"schoolRank": 79,
"score": 799
},
{
"classRank": 9,
"schoolRank": 88,
"score": 788
},
{
"classRank": 10,
"schoolRank": 97,
"score": 782
},
{
"classRank": 11,
"schoolRank": 123,
"score": 754
},
{
"classRank": 12,
"schoolRank": 126,
"score": 750.5
},
{
"classRank": 13,
"schoolRank": 134,
"score": 741.5
},
{
"classRank": 14,
"schoolRank": 138,
"score": 738.5
},
{
"classRank": 15,
"schoolRank": 142,
"score": 736
},
{
"classRank": 16,
"schoolRank": 164,
"score": 709
},
{
"classRank": 17,
"schoolRank": 176,
"score": 695.5
},
{
"classRank": 18,
"schoolRank": 186,
"score": 687.5
},
{
"classRank": 19,
"schoolRank": 187,
"score": 687
},
{
"classRank": 20,
"schoolRank": 200,
"score": 674
},
{
"classRank": 21,
"schoolRank": 211,
"score": 663
},
{
"classRank": 22,
"schoolRank": 214,
"score": 660.5
},
{
"classRank": 23,
"schoolRank": 230,
"score": 638
},
{
"classRank": 24,
"schoolRank": 233,
"score": 634
},
{
"classRank": 25,
"schoolRank": 235,
"score": 633
},
{
"classRank": 26,
"schoolRank": 244,
"score": 626.5
},
{
"classRank": 27,
"schoolRank": 286,
"score": 583.5
},
{
"classRank": 28,
"schoolRank": 288,
"score": 582
},
{
"classRank": 29,
"schoolRank": 289,
"score": 581
},
{
"classRank": 30,
"schoolRank": 297,
"score": 569.5
},
{
"classRank": 31,
"schoolRank": 306,
"score": 555.5
},
{
"classRank": 32,
"schoolRank": 308,
"score": 553
},
{
"classRank": 33,
"schoolRank": 322,
"score": 540
},
{
"classRank": 34,
"schoolRank": 339,
"score": 520
},
{
"classRank": 35,
"schoolRank": 343,
"score": 514
},
{
"classRank": 36,
"schoolRank": 346,
"score": 510.5
},
{
"classRank": 37,
"schoolRank": 350,
"score": 506
},
{
"classRank": 38,
"schoolRank": 357,
"score": 493.5
},
{
"classRank": 39,
"schoolRank": 369,
"score": 468.5
},
{
"classRank": 40,
"schoolRank": 372,
"score": 463
},
{
"classRank": 41,
"schoolRank": 382,
"score": 436
},
{
"classRank": 42,
"schoolRank": 384,
"score": 428.5
},
{
"classRank": 43,
"schoolRank": 390,
"score": 416
},
{
"classRank": 44,
"schoolRank": 396,
"score": 405
},
{
"classRank": 45,
"schoolRank": 397,
"score": 404.5
}
],
"高一11班": [
{
"classRank": 1,
"schoolRank": 55,
"score": 827.5
},
{
"classRank": 2,
"schoolRank": 61,
"score": 820
},
{
"classRank": 3,
"schoolRank": 72,
"score": 806.5
},
{
"classRank": 4,
"schoolRank": 83,
"score": 795.5
},
{
"classRank": 5,
"schoolRank": 85,
"score": 794
},
{
"classRank": 6,
"schoolRank": 100,
"score": 780.5
},
{
"classRank": 7,
"schoolRank": 107,
"score": 772.5
},
{
"classRank": 8,
"schoolRank": 118,
"score": 759.5
},
{
"classRank": 9,
"schoolRank": 138,
"score": 738.5
},
{
"classRank": 10,
"schoolRank": 145,
"score": 730.5
},
{
"classRank": 11,
"schoolRank": 150,
"score": 725.5
},
{
"classRank": 12,
"schoolRank": 158,
"score": 715.5
},
{
"classRank": 13,
"schoolRank": 158,
"score": 715.5
},
{
"classRank": 14,
"schoolRank": 197,
"score": 678.5
},
{
"classRank": 15,
"schoolRank": 199,
"score": 675.5
},
{
"classRank": 16,
"schoolRank": 205,
"score": 668.5
},
{
"classRank": 17,
"schoolRank": 206,
"score": 668
},
{
"classRank": 18,
"schoolRank": 209,
"score": 665.5
},
{
"classRank": 19,
"schoolRank": 240,
"score": 628.5
},
{
"classRank": 20,
"schoolRank": 241,
"score": 628
},
{
"classRank": 21,
"schoolRank": 256,
"score": 615.5
},
{
"classRank": 22,
"schoolRank": 263,
"score": 608
},
{
"classRank": 23,
"schoolRank": 274,
"score": 595
},
{
"classRank": 24,
"schoolRank": 287,
"score": 582.5
},
{
"classRank": 25,
"schoolRank": 293,
"score": 575
},
{
"classRank": 26,
"schoolRank": 305,
"score": 556
},
{
"classRank": 27,
"schoolRank": 316,
"score": 547
},
{
"classRank": 28,
"schoolRank": 320,
"score": 541.5
},
{
"classRank": 29,
"schoolRank": 320,
"score": 541.5
},
{
"classRank": 30,
"schoolRank": 347,
"score": 510
},
{
"classRank": 31,
"schoolRank": 349,
"score": 508.5
},
{
"classRank": 32,
"schoolRank": 353,
"score": 500.5
},
{
"classRank": 33,
"schoolRank": 356,
"score": 497.5
},
{
"classRank": 34,
"schoolRank": 362,
"score": 481
},
{
"classRank": 35,
"schoolRank": 368,
"score": 471
},
{
"classRank": 36,
"schoolRank": 373,
"score": 459
},
{
"classRank": 37,
"schoolRank": 376,
"score": 453.5
},
{
"classRank": 38,
"schoolRank": 379,
"score": 439
},
{
"classRank": 39,
"schoolRank": 385,
"score": 426.5
},
{
"classRank": 40,
"schoolRank": 386,
"score": 426
},
{
"classRank": 41,
"schoolRank": 394,
"score": 406.5
},
{
"classRank": 42,
"schoolRank": 395,
"score": 405.5
},
{
"classRank": 43,
"schoolRank": 400,
"score": 391.5
},
{
"classRank": 44,
"schoolRank": 402,
"score": 373.5
}
],
"高一01班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 927
},
{
"classRank": 2,
"schoolRank": 2,
"score": 926.5
},
{
"classRank": 3,
"schoolRank": 3,
"score": 926
},
{
"classRank": 4,
"schoolRank": 6,
"score": 910.5
},
{
"classRank": 5,
"schoolRank": 16,
"score": 886
},
{
"classRank": 6,
"schoolRank": 17,
"score": 883
},
{
"classRank": 7,
"schoolRank": 23,
"score": 872
},
{
"classRank": 8,
"schoolRank": 30,
"score": 862.5
},
{
"classRank": 9,
"schoolRank": 38,
"score": 847
},
{
"classRank": 10,
"schoolRank": 41,
"score": 845
},
{
"classRank": 11,
"schoolRank": 59,
"score": 822.5
},
{
"classRank": 12,
"schoolRank": 65,
"score": 815.5
},
{
"classRank": 13,
"schoolRank": 76,
"score": 802
},
{
"classRank": 14,
"schoolRank": 89,
"score": 787.5
},
{
"classRank": 15,
"schoolRank": 104,
"score": 777
},
{
"classRank": 16,
"schoolRank": 106,
"score": 773
},
{
"classRank": 17,
"schoolRank": 108,
"score": 769.5
},
{
"classRank": 18,
"schoolRank": 136,
"score": 739.5
},
{
"classRank": 19,
"schoolRank": 137,
"score": 739
},
{
"classRank": 20,
"schoolRank": 139,
"score": 738
},
{
"classRank": 21,
"schoolRank": 151,
"score": 723.5
},
{
"classRank": 22,
"schoolRank": 156,
"score": 716.5
},
{
"classRank": 23,
"schoolRank": 157,
"score": 716
},
{
"classRank": 24,
"schoolRank": 195,
"score": 679.5
},
{
"classRank": 25,
"schoolRank": 198,
"score": 677
},
{
"classRank": 26,
"schoolRank": 201,
"score": 673
},
{
"classRank": 27,
"schoolRank": 202,
"score": 672.5
},
{
"classRank": 28,
"schoolRank": 221,
"score": 652.5
},
{
"classRank": 29,
"schoolRank": 234,
"score": 633.5
},
{
"classRank": 30,
"schoolRank": 238,
"score": 629.5
},
{
"classRank": 31,
"schoolRank": 241,
"score": 628
},
{
"classRank": 32,
"schoolRank": 274,
"score": 595
},
{
"classRank": 33,
"schoolRank": 275,
"score": 594.5
},
{
"classRank": 34,
"schoolRank": 279,
"score": 592
},
{
"classRank": 35,
"schoolRank": 284,
"score": 586.5
},
{
"classRank": 36,
"schoolRank": 292,
"score": 576
},
{
"classRank": 37,
"schoolRank": 298,
"score": 568.5
},
{
"classRank": 38,
"schoolRank": 300,
"score": 564
},
{
"classRank": 39,
"schoolRank": 320,
"score": 541.5
},
{
"classRank": 40,
"schoolRank": 345,
"score": 512
},
{
"classRank": 41,
"schoolRank": 353,
"score": 500.5
}
],
"高一12班": [
{
"classRank": 1,
"schoolRank": 56,
"score": 826
},
{
"classRank": 2,
"schoolRank": 68,
"score": 810.5
},
{
"classRank": 3,
"schoolRank": 73,
"score": 805
},
{
"classRank": 4,
"schoolRank": 92,
"score": 786
},
{
"classRank": 5,
"schoolRank": 93,
"score": 785.5
},
{
"classRank": 6,
"schoolRank": 98,
"score": 781.5
},
{
"classRank": 7,
"schoolRank": 114,
"score": 762.5
},
{
"classRank": 8,
"schoolRank": 116,
"score": 761
},
{
"classRank": 9,
"schoolRank": 127,
"score": 748.5
},
{
"classRank": 10,
"schoolRank": 165,
"score": 708.5
},
{
"classRank": 11,
"schoolRank": 167,
"score": 707
},
{
"classRank": 12,
"schoolRank": 180,
"score": 692.5
},
{
"classRank": 13,
"schoolRank": 185,
"score": 688.5
},
{
"classRank": 14,
"schoolRank": 193,
"score": 681.5
},
{
"classRank": 15,
"schoolRank": 199,
"score": 675.5
},
{
"classRank": 16,
"schoolRank": 215,
"score": 659.5
},
{
"classRank": 17,
"schoolRank": 228,
"score": 643.5
},
{
"classRank": 18,
"schoolRank": 237,
"score": 632
},
{
"classRank": 19,
"schoolRank": 255,
"score": 616
},
{
"classRank": 20,
"schoolRank": 259,
"score": 610.5
},
{
"classRank": 21,
"schoolRank": 262,
"score": 609
},
{
"classRank": 22,
"schoolRank": 271,
"score": 599.5
},
{
"classRank": 23,
"schoolRank": 283,
"score": 587
},
{
"classRank": 24,
"schoolRank": 291,
"score": 576.5
},
{
"classRank": 25,
"schoolRank": 300,
"score": 564
},
{
"classRank": 26,
"schoolRank": 309,
"score": 552.5
},
{
"classRank": 27,
"schoolRank": 315,
"score": 547.5
},
{
"classRank": 28,
"schoolRank": 335,
"score": 527.5
},
{
"classRank": 29,
"schoolRank": 336,
"score": 522.5
},
{
"classRank": 30,
"schoolRank": 340,
"score": 518.5
},
{
"classRank": 31,
"schoolRank": 351,
"score": 503
},
{
"classRank": 32,
"schoolRank": 363,
"score": 478
},
{
"classRank": 33,
"schoolRank": 364,
"score": 477.5
},
{
"classRank": 34,
"schoolRank": 374,
"score": 455.5
},
{
"classRank": 35,
"schoolRank": 375,
"score": 455
},
{
"classRank": 36,
"schoolRank": 377,
"score": 451.5
},
{
"classRank": 37,
"schoolRank": 383,
"score": 430.5
},
{
"classRank": 38,
"schoolRank": 387,
"score": 422
},
{
"classRank": 39,
"schoolRank": 392,
"score": 408.5
},
{
"classRank": 40,
"schoolRank": 393,
"score": 408
},
{
"classRank": 41,
"schoolRank": 399,
"score": 397.5
},
{
"classRank": 42,
"schoolRank": 403,
"score": 369
},
{
"classRank": 43,
"schoolRank": 404,
"score": 367
},
{
"classRank": 44,
"schoolRank": 405,
"score": 364
},
{
"classRank": 45,
"schoolRank": 406,
"score": 363
},
{
"classRank": 46,
"schoolRank": 407,
"score": 346.5
},
{
"classRank": 47,
"schoolRank": 408,
"score": 342
}
],
"高一10班": [
{
"classRank": 1,
"schoolRank": 34,
"score": 856
},
{
"classRank": 2,
"schoolRank": 46,
"score": 840
},
{
"classRank": 3,
"schoolRank": 53,
"score": 831.5
},
{
"classRank": 4,
"schoolRank": 69,
"score": 809.5
},
{
"classRank": 5,
"schoolRank": 91,
"score": 786.5
},
{
"classRank": 6,
"schoolRank": 99,
"score": 781
},
{
"classRank": 7,
"schoolRank": 105,
"score": 774.5
},
{
"classRank": 8,
"schoolRank": 120,
"score": 756
},
{
"classRank": 9,
"schoolRank": 121,
"score": 755.5
},
{
"classRank": 10,
"schoolRank": 141,
"score": 736.5
},
{
"classRank": 11,
"schoolRank": 150,
"score": 725.5
},
{
"classRank": 12,
"schoolRank": 155,
"score": 717
},
{
"classRank": 13,
"schoolRank": 161,
"score": 712
},
{
"classRank": 14,
"schoolRank": 166,
"score": 707.5
},
{
"classRank": 15,
"schoolRank": 182,
"score": 691
},
{
"classRank": 16,
"schoolRank": 184,
"score": 689
},
{
"classRank": 17,
"schoolRank": 216,
"score": 659
},
{
"classRank": 18,
"schoolRank": 224,
"score": 648.5
},
{
"classRank": 19,
"schoolRank": 225,
"score": 647.5
},
{
"classRank": 20,
"schoolRank": 229,
"score": 638.5
},
{
"classRank": 21,
"schoolRank": 246,
"score": 625
},
{
"classRank": 22,
"schoolRank": 252,
"score": 618
},
{
"classRank": 23,
"schoolRank": 258,
"score": 612.5
},
{
"classRank": 24,
"schoolRank": 282,
"score": 589
},
{
"classRank": 25,
"schoolRank": 285,
"score": 585
},
{
"classRank": 26,
"schoolRank": 293,
"score": 575
},
{
"classRank": 27,
"schoolRank": 295,
"score": 572
},
{
"classRank": 28,
"schoolRank": 318,
"score": 542.5
},
{
"classRank": 29,
"schoolRank": 321,
"score": 540.5
},
{
"classRank": 30,
"schoolRank": 327,
"score": 534.5
},
{
"classRank": 31,
"schoolRank": 334,
"score": 528.5
},
{
"classRank": 32,
"schoolRank": 338,
"score": 521.5
},
{
"classRank": 33,
"schoolRank": 361,
"score": 483.5
},
{
"classRank": 34,
"schoolRank": 365,
"score": 476
},
{
"classRank": 35,
"schoolRank": 366,
"score": 475
}
],
"高一04班": [
{
"classRank": 1,
"schoolRank": 9,
"score": 900
},
{
"classRank": 2,
"schoolRank": 13,
"score": 889
},
{
"classRank": 3,
"schoolRank": 21,
"score": 874.5
},
{
"classRank": 4,
"schoolRank": 25,
"score": 870.5
},
{
"classRank": 5,
"schoolRank": 26,
"score": 869.5
},
{
"classRank": 6,
"schoolRank": 47,
"score": 838.5
},
{
"classRank": 7,
"schoolRank": 57,
"score": 825.5
},
{
"classRank": 8,
"schoolRank": 63,
"score": 818.5
},
{
"classRank": 9,
"schoolRank": 64,
"score": 817.5
},
{
"classRank": 10,
"schoolRank": 67,
"score": 813.5
},
{
"classRank": 11,
"schoolRank": 86,
"score": 793
},
{
"classRank": 12,
"schoolRank": 94,
"score": 785
},
{
"classRank": 13,
"schoolRank": 109,
"score": 768
},
{
"classRank": 14,
"schoolRank": 112,
"score": 763.5
},
{
"classRank": 15,
"schoolRank": 117,
"score": 760.5
},
{
"classRank": 16,
"schoolRank": 130,
"score": 745
},
{
"classRank": 17,
"schoolRank": 144,
"score": 731
},
{
"classRank": 18,
"schoolRank": 160,
"score": 714.5
},
{
"classRank": 19,
"schoolRank": 168,
"score": 706
},
{
"classRank": 20,
"schoolRank": 177,
"score": 694.5
},
{
"classRank": 21,
"schoolRank": 183,
"score": 689.5
},
{
"classRank": 22,
"schoolRank": 189,
"score": 685
},
{
"classRank": 23,
"schoolRank": 204,
"score": 669.5
},
{
"classRank": 24,
"schoolRank": 219,
"score": 654
},
{
"classRank": 25,
"schoolRank": 227,
"score": 644.5
},
{
"classRank": 26,
"schoolRank": 231,
"score": 635
},
{
"classRank": 27,
"schoolRank": 248,
"score": 622
},
{
"classRank": 28,
"schoolRank": 249,
"score": 621.5
},
{
"classRank": 29,
"schoolRank": 257,
"score": 614
},
{
"classRank": 30,
"schoolRank": 268,
"score": 603
},
{
"classRank": 31,
"schoolRank": 269,
"score": 602.5
},
{
"classRank": 32,
"schoolRank": 303,
"score": 560
},
{
"classRank": 33,
"schoolRank": 305,
"score": 556
},
{
"classRank": 34,
"schoolRank": 319,
"score": 542
},
{
"classRank": 35,
"schoolRank": 326,
"score": 535
}
],
"高一05班": [
{
"classRank": 1,
"schoolRank": 10,
"score": 893.5
},
{
"classRank": 2,
"schoolRank": 14,
"score": 888
},
{
"classRank": 3,
"schoolRank": 18,
"score": 878
},
{
"classRank": 4,
"schoolRank": 23,
"score": 872
},
{
"classRank": 5,
"schoolRank": 24,
"score": 871.5
},
{
"classRank": 6,
"schoolRank": 35,
"score": 850.5
},
{
"classRank": 7,
"schoolRank": 44,
"score": 842
},
{
"classRank": 8,
"schoolRank": 52,
"score": 832
},
{
"classRank": 9,
"schoolRank": 87,
"score": 792.5
},
{
"classRank": 10,
"schoolRank": 88,
"score": 788
},
{
"classRank": 11,
"schoolRank": 89,
"score": 787.5
},
{
"classRank": 12,
"schoolRank": 90,
"score": 787
},
{
"classRank": 13,
"schoolRank": 113,
"score": 763
},
{
"classRank": 14,
"schoolRank": 125,
"score": 751.5
},
{
"classRank": 15,
"schoolRank": 135,
"score": 741
},
{
"classRank": 16,
"schoolRank": 141,
"score": 736.5
},
{
"classRank": 17,
"schoolRank": 152,
"score": 722.5
},
{
"classRank": 18,
"schoolRank": 174,
"score": 699
},
{
"classRank": 19,
"schoolRank": 176,
"score": 695.5
},
{
"classRank": 20,
"schoolRank": 179,
"score": 693.5
},
{
"classRank": 21,
"schoolRank": 188,
"score": 686
},
{
"classRank": 22,
"schoolRank": 208,
"score": 666.5
},
{
"classRank": 23,
"schoolRank": 217,
"score": 657.5
},
{
"classRank": 24,
"schoolRank": 230,
"score": 638
},
{
"classRank": 25,
"schoolRank": 232,
"score": 634.5
},
{
"classRank": 26,
"schoolRank": 243,
"score": 627
},
{
"classRank": 27,
"schoolRank": 247,
"score": 624
},
{
"classRank": 28,
"schoolRank": 276,
"score": 594
},
{
"classRank": 29,
"schoolRank": 277,
"score": 593.5
},
{
"classRank": 30,
"schoolRank": 282,
"score": 589
},
{
"classRank": 31,
"schoolRank": 284,
"score": 586.5
},
{
"classRank": 32,
"schoolRank": 301,
"score": 561
},
{
"classRank": 33,
"schoolRank": 302,
"score": 560.5
},
{
"classRank": 34,
"schoolRank": 331,
"score": 532
},
{
"classRank": 35,
"schoolRank": 333,
"score": 529
},
{
"classRank": 36,
"schoolRank": 337,
"score": 522
},
{
"classRank": 37,
"schoolRank": 341,
"score": 516.5
},
{
"classRank": 38,
"schoolRank": 352,
"score": 502
}
],
"高一02班": [
{
"classRank": 1,
"schoolRank": 4,
"score": 915.5
},
{
"classRank": 2,
"schoolRank": 7,
"score": 902
},
{
"classRank": 3,
"schoolRank": 8,
"score": 901.5
},
{
"classRank": 4,
"schoolRank": 12,
"score": 890.5
},
{
"classRank": 5,
"schoolRank": 13,
"score": 889
},
{
"classRank": 6,
"schoolRank": 18,
"score": 878
},
{
"classRank": 7,
"schoolRank": 31,
"score": 861
},
{
"classRank": 8,
"schoolRank": 42,
"score": 844.5
},
{
"classRank": 9,
"schoolRank": 51,
"score": 833.5
},
{
"classRank": 10,
"schoolRank": 58,
"score": 824.5
},
{
"classRank": 11,
"schoolRank": 66,
"score": 814.5
},
{
"classRank": 12,
"schoolRank": 81,
"score": 797.5
},
{
"classRank": 13,
"schoolRank": 82,
"score": 796.5
},
{
"classRank": 14,
"schoolRank": 97,
"score": 782
},
{
"classRank": 15,
"schoolRank": 101,
"score": 780
},
{
"classRank": 16,
"schoolRank": 103,
"score": 778
},
{
"classRank": 17,
"schoolRank": 124,
"score": 753
},
{
"classRank": 18,
"schoolRank": 137,
"score": 739
},
{
"classRank": 19,
"schoolRank": 143,
"score": 731.5
},
{
"classRank": 20,
"schoolRank": 148,
"score": 728
},
{
"classRank": 21,
"schoolRank": 162,
"score": 711.5
},
{
"classRank": 22,
"schoolRank": 163,
"score": 710.5
},
{
"classRank": 23,
"schoolRank": 174,
"score": 699
},
{
"classRank": 24,
"schoolRank": 203,
"score": 672
},
{
"classRank": 25,
"schoolRank": 212,
"score": 662.5
},
{
"classRank": 26,
"schoolRank": 218,
"score": 654.5
},
{
"classRank": 27,
"schoolRank": 223,
"score": 649.5
},
{
"classRank": 28,
"schoolRank": 229,
"score": 638.5
},
{
"classRank": 29,
"schoolRank": 245,
"score": 626
},
{
"classRank": 30,
"schoolRank": 251,
"score": 620.5
},
{
"classRank": 31,
"schoolRank": 271,
"score": 599.5
},
{
"classRank": 32,
"schoolRank": 275,
"score": 594.5
},
{
"classRank": 33,
"schoolRank": 285,
"score": 585
},
{
"classRank": 34,
"schoolRank": 290,
"score": 577
},
{
"classRank": 35,
"schoolRank": 295,
"score": 572
},
{
"classRank": 36,
"schoolRank": 324,
"score": 538
}
],
"高一13班": [
{
"classRank": 1,
"schoolRank": 69,
"score": 809.5
},
{
"classRank": 2,
"schoolRank": 76,
"score": 802
},
{
"classRank": 3,
"schoolRank": 95,
"score": 784.5
},
{
"classRank": 4,
"schoolRank": 110,
"score": 767
},
{
"classRank": 5,
"schoolRank": 122,
"score": 754.5
},
{
"classRank": 6,
"schoolRank": 125,
"score": 751.5
},
{
"classRank": 7,
"schoolRank": 129,
"score": 746.5
},
{
"classRank": 8,
"schoolRank": 140,
"score": 737.5
},
{
"classRank": 9,
"schoolRank": 147,
"score": 729.5
},
{
"classRank": 10,
"schoolRank": 153,
"score": 721.5
},
{
"classRank": 11,
"schoolRank": 162,
"score": 711.5
},
{
"classRank": 12,
"schoolRank": 181,
"score": 692
},
{
"classRank": 13,
"schoolRank": 194,
"score": 680.5
},
{
"classRank": 14,
"schoolRank": 212,
"score": 662.5
},
{
"classRank": 15,
"schoolRank": 220,
"score": 653.5
},
{
"classRank": 16,
"schoolRank": 222,
"score": 652
},
{
"classRank": 17,
"schoolRank": 231,
"score": 635
},
{
"classRank": 18,
"schoolRank": 250,
"score": 621
},
{
"classRank": 19,
"schoolRank": 255,
"score": 616
},
{
"classRank": 20,
"schoolRank": 261,
"score": 609.5
},
{
"classRank": 21,
"schoolRank": 264,
"score": 607
},
{
"classRank": 22,
"schoolRank": 294,
"score": 573.5
},
{
"classRank": 23,
"schoolRank": 294,
"score": 573.5
},
{
"classRank": 24,
"schoolRank": 299,
"score": 564.5
},
{
"classRank": 25,
"schoolRank": 313,
"score": 549.5
},
{
"classRank": 26,
"schoolRank": 323,
"score": 539.5
},
{
"classRank": 27,
"schoolRank": 333,
"score": 529
},
{
"classRank": 28,
"schoolRank": 334,
"score": 528.5
},
{
"classRank": 29,
"schoolRank": 342,
"score": 515.5
},
{
"classRank": 30,
"schoolRank": 344,
"score": 513
},
{
"classRank": 31,
"schoolRank": 354,
"score": 500
},
{
"classRank": 32,
"schoolRank": 362,
"score": 481
},
{
"classRank": 33,
"schoolRank": 367,
"score": 472
},
{
"classRank": 34,
"schoolRank": 370,
"score": 468
},
{
"classRank": 35,
"schoolRank": 377,
"score": 451.5
},
{
"classRank": 36,
"schoolRank": 380,
"score": 437.5
},
{
"classRank": 37,
"schoolRank": 380,
"score": 437.5
},
{
"classRank": 38,
"schoolRank": 381,
"score": 436.5
},
{
"classRank": 39,
"schoolRank": 391,
"score": 410
},
{
"classRank": 40,
"schoolRank": 398,
"score": 401.5
},
{
"classRank": 41,
"schoolRank": 401,
"score": 380.5
},
{
"classRank": 42,
"schoolRank": 402,
"score": 373.5
}
],
"高一03班": [
{
"classRank": 1,
"schoolRank": 5,
"score": 913.5
},
{
"classRank": 2,
"schoolRank": 9,
"score": 900
},
{
"classRank": 3,
"schoolRank": 11,
"score": 891.5
},
{
"classRank": 4,
"schoolRank": 22,
"score": 873
},
{
"classRank": 5,
"schoolRank": 28,
"score": 868.5
},
{
"classRank": 6,
"schoolRank": 40,
"score": 845.5
},
{
"classRank": 7,
"schoolRank": 45,
"score": 841
},
{
"classRank": 8,
"schoolRank": 54,
"score": 828.5
},
{
"classRank": 9,
"schoolRank": 62,
"score": 819
},
{
"classRank": 10,
"schoolRank": 71,
"score": 808
},
{
"classRank": 11,
"schoolRank": 74,
"score": 804
},
{
"classRank": 12,
"schoolRank": 78,
"score": 801
},
{
"classRank": 13,
"schoolRank": 96,
"score": 782.5
},
{
"classRank": 14,
"schoolRank": 103,
"score": 778
},
{
"classRank": 15,
"schoolRank": 115,
"score": 761.5
},
{
"classRank": 16,
"schoolRank": 124,
"score": 753
},
{
"classRank": 17,
"schoolRank": 128,
"score": 748
},
{
"classRank": 18,
"schoolRank": 149,
"score": 727.5
},
{
"classRank": 19,
"schoolRank": 157,
"score": 716
},
{
"classRank": 20,
"schoolRank": 159,
"score": 715
},
{
"classRank": 21,
"schoolRank": 171,
"score": 704
},
{
"classRank": 22,
"schoolRank": 173,
"score": 699.5
},
{
"classRank": 23,
"schoolRank": 190,
"score": 684
},
{
"classRank": 24,
"schoolRank": 205,
"score": 668.5
},
{
"classRank": 25,
"schoolRank": 213,
"score": 662
},
{
"classRank": 26,
"schoolRank": 220,
"score": 653.5
},
{
"classRank": 27,
"schoolRank": 228,
"score": 643.5
},
{
"classRank": 28,
"schoolRank": 254,
"score": 617
},
{
"classRank": 29,
"schoolRank": 267,
"score": 604
},
{
"classRank": 30,
"schoolRank": 268,
"score": 603
},
{
"classRank": 31,
"schoolRank": 278,
"score": 592.5
},
{
"classRank": 32,
"schoolRank": 280,
"score": 590.5
},
{
"classRank": 33,
"schoolRank": 299,
"score": 564.5
},
{
"classRank": 34,
"schoolRank": 300,
"score": 564
},
{
"classRank": 35,
"schoolRank": 311,
"score": 551
},
{
"classRank": 36,
"schoolRank": 328,
"score": 533.5
},
{
"classRank": 37,
"schoolRank": 332,
"score": 529.5
}
]
}
var cname1 = []; //记录班级名称
var score1 = []; //记录班级考试分数分布人数，每个元素是一个数组
getAllScore(data, cname1, score1);
console.log(cname1);
//console.log(score1)
setMapAllScore(cname1, score1, 'm4-1', '高一第一次月考');

data={
"高二01班": [
{
"classRank": 1,
"schoolRank": 1,
"score": 931.5
},
{
"classRank": 2,
"schoolRank": 3,
"score": 912
},
{
"classRank": 3,
"schoolRank": 4,
"score": 906.5
},
{
"classRank": 4,
"schoolRank": 8,
"score": 894
},
{
"classRank": 5,
"schoolRank": 19,
"score": 876.5
},
{
"classRank": 6,
"schoolRank": 22,
"score": 874
},
{
"classRank": 7,
"schoolRank": 25,
"score": 865
},
{
"classRank": 8,
"schoolRank": 34,
"score": 848
},
{
"classRank": 9,
"schoolRank": 40,
"score": 844
},
{
"classRank": 10,
"schoolRank": 50,
"score": 831.5
},
{
"classRank": 11,
"schoolRank": 59,
"score": 816
},
{
"classRank": 12,
"schoolRank": 63,
"score": 811.5
},
{
"classRank": 13,
"schoolRank": 69,
"score": 800.5
},
{
"classRank": 14,
"schoolRank": 77,
"score": 790.5
},
{
"classRank": 15,
"schoolRank": 78,
"score": 789
},
{
"classRank": 16,
"schoolRank": 95,
"score": 765
},
{
"classRank": 17,
"schoolRank": 100,
"score": 759.5
},
{
"classRank": 18,
"schoolRank": 104,
"score": 752.5
},
{
"classRank": 19,
"schoolRank": 110,
"score": 745.5
},
{
"classRank": 20,
},