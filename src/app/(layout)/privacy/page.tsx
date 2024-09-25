import { Anchor, Box, List, ListItem, Text, Title } from "@mantine/core";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | ytakada.dev",
};

const PrivacyPage: NextPage = () => {
  return (
    <Box component="article">
      <Title order={1}>プライバシーポリシー</Title>
      <Text component="p">
        ytakada.dev（以下、「当サイト」）のプライバシーポリシー・免責事項を次の通り記載します。
      </Text>
      <Box component="section" mt="2rem">
        <Title order={2}>個人情報の利用目的</Title>
        <Text component="p">
          当サイトでは、お問い合わせ時にメールアドレス等の個人情報をいただく場合があります。取得した個人情報は、必要な連絡のみに利用し、これらの目的以外では利用いたしません。
        </Text>
      </Box>
      <Box component="section" mt="2rem">
        <Title order={2}>Cookieの使用</Title>
        <Text component="p">
          当サイトでは、アクセス解析のためにCookieを使用します。Cookieによりブラウザを識別していますが、特定の個人の識別はできない状態で匿名性が保たれています。Cookieの使用を望まない場合、ブラウザからCookieを無効に設定できます。
        </Text>
      </Box>
      <Box component="section" mt="2rem">
        <Title order={2}>個人情報の第三者開示</Title>
        <Text component="p">
          取得した個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
        </Text>
        <List>
          <ListItem>本人の同意が得られた場合</ListItem>
          <ListItem>法令により開示が求められた場合</ListItem>
        </List>
      </Box>
      <Box component="section" mt="2rem">
        <Title order={2}>アクセス解析ツール</Title>
        <Text component="p">
          当サイトでは、Googleアナリティクスによりアクセス情報を解析しています。アクセス情報の解析にはCookieを使用します。アクセス情報の収集はCookieを無効にすることで拒否できます。Google社のデータ収集・処理の仕組みについては、
          <Anchor
            href="https://policies.google.com/technologies/partner-sites?hl=ja"
            target="_blank"
            rel="noopener noreferrer"
          >
            こちら
          </Anchor>
          をご覧ください。
        </Text>
      </Box>
      <Box component="section" mt="2rem">
        <Title order={2}>免責事項</Title>
        <Text component="p">
          当サイトは、掲載内容によって生じた損害に対する一切の責任を負いません。各コンテンツでは、できる限り正確な情報提供を心がけておりますが、正確性や安全性を保証するものではありません。また、リンク先の他サイトで提供される情報・サービスについても責任を負いかねます。ご了承ください。
        </Text>
      </Box>
      <Box component="section" mt="2rem">
        <Title order={2}>著作権</Title>
        <Text component="p">
          当サイトに掲載されている文章・画像等の著作権は、運営者に帰属します。法的に認められている引用の範囲を超えて、無断で転載することを禁止します。
        </Text>
      </Box>
      <Box component="section" mt="2rem">
        <Title order={2}>プライバシーポリシーの変更</Title>
        <Text component="p">
          当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本プライバシーポリシーの内容を適宜見直して改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。
        </Text>
      </Box>
      <Text component="p" mt="3rem">
        2022年9月13日 制定
      </Text>
    </Box>
  );
};

export default PrivacyPage;
