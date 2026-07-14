# kkl07090.github.io

> 전공지식 정리 & 포트폴리오 사이트 — **머신러닝/딥러닝 · 시계열 · 수리통계 · 금융**

🔗 **사이트:** https://kkl07090.github.io

[MkDocs Material](https://squidfunk.github.io/mkdocs-material/)로 만든 정적 사이트입니다. `docs/` 안의 마크다운을 편집하면, `main` 브랜치에 push할 때 GitHub Actions가 자동으로 빌드·배포합니다.

## 구조

```
.
├── docs/                  # 사이트 콘텐츠 (여기만 편집하면 됨)
│   ├── index.md           # 홈페이지 (소개 + 스펙 하이라이트)
│   ├── about/resume.md     # 상세 이력/스펙
│   ├── ml-dl/             # 머신러닝·딥러닝
│   ├── time-series/       # 시계열
│   ├── statistics/        # 수리통계
│   ├── finance/           # 금융
│   ├── blog/              # 블로그 리뷰 (posts/ 에 글 추가)
│   └── projects/          # 프로젝트 (코드·발표자료·설명)
├── mkdocs.yml             # 사이트 설정 (메뉴/테마)
├── requirements.txt       # 파이썬 의존성
└── .github/workflows/     # 자동 배포 설정
```

## 로컬에서 미리보기

```bash
# 처음 한 번: 가상환경 + 의존성 설치
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# 실시간 미리보기 (저장하면 브라우저 자동 새로고침)
mkdocs serve
# → http://127.0.0.1:8000 접속
```

## 새 글 추가하는 법

1. 해당 분야 폴더(예: `docs/ml-dl/`)에 `제목.md` 파일 생성
2. `mkdocs.yml` 의 `nav:` 에 메뉴 한 줄 추가
3. `git add . && git commit && git push` → 자동 배포

## 블로그 글 작성

`docs/blog/posts/` 에 아래 형식으로 파일을 만드세요:

```markdown
---
date: 2026-07-14
categories:
  - 논문리뷰
---

# 글 제목

내용...
```
