export type BannerType = {
    id: number,
    title: string,
    subtitle: string
}

export const bannerData: BannerType = {
    id: 0,
    title: 'Danh mục giải bài tập và soạn bài',
    subtitle: 'Nội dung hot nhất',
}

export const contentData: string[] = [
    'Đầy đủ lời giải SGK - SBT - VBT từ lớp 1 - lớp 12',
    'Kho bài tập trắc nghiệm bám sát theo dạng bài',
    'Hệ thống đề thi phong phú, chất lượng'
]

export const gradeHeader: string = 'LỰA CHỌN LỚP ĐỂ XEM BÀI SOẠN VÀ LỜI GIẢI'

export type SubjectsType = {
    subjectName: string,
    subjectList?: string[]
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
                subjectName: 'Môn ngữ văn',
                subjectList: [
                    'Soạn văn 12 siêu ngắn',
                    'Soạn văn 12 chi tiết',
                    'Tác giả - Tác phẩm lớp 12',
                    'Văn mẫu 12',
                    'Luyện dạng đọc hiểu',
                    'Trắc nghiệm Ngữ Văn 12',
                    'Đề thi, đề kiểm tra Ngữ Văn 12 mới'
                ]
            },
            {
                subjectName: 'Môn toán học',
            },
            {
                subjectName: 'Môn tiếng anh',
            },
            {
                subjectName: 'Môn vật lý',
            },
            {
                subjectName: 'Môn hóa học',
            },
            {
                subjectName: 'Môn sinh học',
            },
            {
                subjectName: 'Môn lịch sử',
            },
            {
                subjectName: 'Môn địa lý',
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
