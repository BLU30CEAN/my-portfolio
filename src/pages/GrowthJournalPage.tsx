import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, ImageOff } from "lucide-react";
import {
  ML_JOURNAL_HERO_MEDIA_ENABLED,
  ML_JOURNAL_POSTS,
  type MlJournalPost,
} from "../data/mlJournalPosts";

const PageWrap = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: 2rem 1.25rem 4rem;
`;

const Inner = styled.div`
  max-width: 740px;
  margin: 0 auto;
`;

const BackBar = styled.div`
  margin-bottom: 2rem;
`;

const BackBtn = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 1rem;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.text};
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }
`;

const PageTitle = styled.h1`
  font-size: clamp(1.85rem, 4.5vw, 2.35rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 0.65rem;
  background: ${(props) => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const PageLead = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1.02rem;
  line-height: 1.7;
  margin-bottom: 2.75rem;
  max-width: 62ch;
`;

const Article = styled(motion.article)`
  padding-bottom: 3.5rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const ArticleMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1rem;
  margin-bottom: 0.85rem;
  font-size: 0.88rem;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const Tag = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.55rem;
  border-radius: 7px;
  background: ${(props) => props.theme.colors.primary}16;
  color: ${(props) => props.theme.colors.primary};
`;

const ArticleTitle = styled.h2`
  font-size: clamp(1.35rem, 3.2vw, 1.65rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 1.35rem;
  color: ${(props) => props.theme.colors.text};
`;

const Figure = styled.figure`
  margin: 0 0 1.75rem;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.surface};
`;

const FigImg = styled.img`
  display: block;
  width: 100%;
  max-height: 420px;
  object-fit: cover;
`;

const PlaceholderFig = styled.div`
  aspect-ratio: 16 / 9;
  max-height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.92rem;
  text-align: center;
  padding: 1.75rem;

  svg {
    opacity: 0.55;
  }
`;

const FigCaption = styled.figcaption`
  padding: 0.75rem 1rem;
  font-size: 0.82rem;
  color: ${(props) => props.theme.colors.textSecondary};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  line-height: 1.5;
`;

const SectionBlock = styled.section`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`;

const SectionBody = styled.p`
  font-size: 0.975rem;
  line-height: 1.74;
  color: ${(props) => props.theme.colors.textSecondary};
  white-space: pre-line;
`;

function HeroMedia({ post }: { post: MlJournalPost }) {
  const [ok, setOk] = useState(true);

  if (!ML_JOURNAL_HERO_MEDIA_ENABLED) {
    return null;
  }

  if (!post.heroImage || !ok) {
    return (
      <Figure>
        <PlaceholderFig>
          <ImageOff size={44} strokeWidth={1.25} />
          <span>
            이미지 삽입: <code>{post.heroImage ?? "/learning/*.png"}</code>
            <br />
            `public/learning/`에 파일을 두면 자동 표시됩니다.
          </span>
        </PlaceholderFig>
        {post.heroCaption ? (
          <FigCaption>{post.heroCaption}</FigCaption>
        ) : null}
      </Figure>
    );
  }

  return (
    <Figure>
      <FigImg
        src={post.heroImage}
        alt=""
        onError={() => setOk(false)}
        loading="lazy"
      />
      {post.heroCaption ? (
        <FigCaption>{post.heroCaption}</FigCaption>
      ) : null}
    </Figure>
  );
}

function GrowthJournalPage() {
  const navigate = useNavigate();

  return (
    <PageWrap>
      <Inner>
        <BackBar>
          <BackBtn
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={18} aria-hidden /> 홈으로
          </BackBtn>
        </BackBar>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <PageTitle>연구 노트 · 자기 학습</PageTitle>
          <PageLead>
            <BookOpen
              size={18}
              style={{
                verticalAlign: "-0.2em",
                marginRight: "0.35rem",
                opacity: 0.85,
              }}
              aria-hidden
            />
            pandas·scikit-learn 등 ML 입문 레인은 <strong>실무 과제 외에 자기 학습 노트로
            근거를 남기는 영역</strong>으로 두었습니다. 아래 카드 구조에 맞춰 본문·캡처만
            갈아 끼우면 블로그와 같은 위치에서 이력이 됩니다.
          </PageLead>

          {ML_JOURNAL_POSTS.map((post, index) => (
            <Article
              key={post.id}
              id={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <ArticleMeta>
                <span>{post.period}</span>
                <TagRow>
                  {post.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </TagRow>
              </ArticleMeta>
              <ArticleTitle>{post.title}</ArticleTitle>

              <HeroMedia post={post} />

              {post.sections.map((s) => (
                <SectionBlock key={s.heading}>
                  <SectionTitle>{s.heading}</SectionTitle>
                  <SectionBody>{s.body}</SectionBody>
                </SectionBlock>
              ))}
            </Article>
          ))}
        </motion.div>
      </Inner>
    </PageWrap>
  );
}

export default GrowthJournalPage;
