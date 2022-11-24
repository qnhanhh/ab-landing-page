export type BannerType = {
    id: number,
    title: string,
    subtitle: string
}

export const bannerData: BannerType = {
    id: 1,
    title: '100.000+ Video bài giảng',
    subtitle: 'Dành cho học chính lớp 1 - 12',
}

export type ContentType = {
    id?: number,
    title: string,
    subtitle?: string,
    videoId?: string,
    tags?: string[]
}

export const contentData: ContentType = {
    title: 'Mở đoạn NLXH tạo ấn tượng khó phai',
    videoId: 'oFJNQjnZkvY',
    tags: ['Lớp 12', 'Ngữ Văn']
}

export const gradeHeader: string = 'Tại đây, có ĐẦY ĐỦ: 100.000+ Video bài giảng'

export type SubjectsType = {
    subjectName: string,
    subjectList?: ContentType[]
}

export type GradeType = {
    grade: string,
    subjects?: SubjectsType[]
}

export const gradeData: GradeType[] = [
    {
        grade: 'Lớp 12',
        subjects: [
            {
                subjectName: 'Môn toán học',
                subjectList: [
                    {
                        id: 1,
                        title: 'Sự đồng biến, nghịch biến của hàm số',
                        subtitle: 'Bài 1. Sự đồng biến, nghịch biến của hàm số',
                        tags: ['Lớp 12', 'TOÁN HỌC'],
                    },
                    {
                        id: 2,
                        title: 'Giá trị lớn nhất và giá trị nhỏ nhất của hàm số ',
                        subtitle: 'Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
                        tags: ['Lớp 12', 'TOÁN HỌC'],
                    },
                ]
            },
        ]
    },
    {
        grade: 'Lớp 11'
    },
    {
        grade: 'Lớp 10'
    },
    {
        grade: 'Lớp 9'
    },
    {
        grade: 'Lớp 8'
    },
    {
        grade: 'Lớp 7'
    },
    {
        grade: 'Lớp 6'
    },
    {
        grade: 'Lớp 5'
    },
    {
        grade: 'Lớp 4'
    },
    {
        grade: 'Lớp 3'
    },
    {
        grade: 'Lớp 2'
    },
    {
        grade: 'Lớp 1'
    },
]
